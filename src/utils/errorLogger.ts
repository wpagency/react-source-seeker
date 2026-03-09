
interface ErrorLogEntry {
  timestamp: string;
  error: Error | string;
  context?: string;
  userAgent?: string;
  url?: string;
  stack?: string;
}

class ErrorLogger {
  private errors: ErrorLogEntry[] = [];
  private maxEntries = 100;

  log(error: Error | string, context?: string) {
    const entry: ErrorLogEntry = {
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      context,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'Unknown'
    };

    this.errors.unshift(entry);
    
    // Keep only the most recent entries
    if (this.errors.length > this.maxEntries) {
      this.errors = this.errors.slice(0, this.maxEntries);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error(`[${entry.timestamp}] ${context || 'Error'}:`, error);
    }

    // In production, you might want to send to an error reporting service
    // this.sendToErrorService(entry);
  }

  getErrors(): ErrorLogEntry[] {
    return [...this.errors];
  }

  clear() {
    this.errors = [];
  }

  // Get recent errors as a formatted string
  getRecentErrorsReport(limit = 10): string {
    return this.errors
      .slice(0, limit)
      .map(entry => `[${entry.timestamp}] ${entry.context || 'Error'}: ${entry.error}`)
      .join('\n');
  }

  // Private method for sending errors to external service (placeholder)
  private sendToErrorService(entry: ErrorLogEntry) {
    // In production, implement error reporting service integration
    // e.g., Sentry, Bugsnag, etc.
  }
}

export const errorLogger = new ErrorLogger();

// Global error handler with safety checks
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    errorLogger.log(event.error || event.message, 'Global Error Handler');
  });

  // Unhandled promise rejection handler
  window.addEventListener('unhandledrejection', (event) => {
    errorLogger.log(event.reason, 'Unhandled Promise Rejection');
  });
}

export default errorLogger;


