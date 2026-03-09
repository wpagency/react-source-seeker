
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, MessageCircle } from 'lucide-react';
import { PremiumButton } from './premium-button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Report to analytics in production
    if (process.env.NODE_ENV === 'production') {
      console.error('Error caught by boundary:', error, errorInfo);
      // Here you would send to your error reporting service
    }
  }

  handleRefresh = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleContact = () => {
    window.location.href = '/contact?issue=technical';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full"
          >
            <div className="text-center space-y-6">
              {/* Agency Logo */}
              <div className="flex justify-center">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-white">WP</span>
                  <span className="text-2xl font-light text-white/90">Agency</span>
                  <span className="text-xl font-bold text-primary">.xyz</span>
                </div>
              </div>

              {/* Error Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex justify-center"
              >
                <div className="bg-destructive/10 p-6 rounded-full">
                  <AlertTriangle className="w-12 h-12 text-destructive" />
                </div>
              </motion.div>

              {/* Error Message */}
              <div className="space-y-3">
                <h1 className="text-2xl font-bold text-white">
                  Technical Difficulties
                </h1>
                <p className="text-muted-foreground">
                  We're experiencing a temporary issue. Our team has been notified and is working to resolve this quickly.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <PremiumButton
                  onClick={this.handleRefresh}
                  variant="primary"
                  className="w-full"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </PremiumButton>

                <div className="flex space-x-3">
                  <PremiumButton
                    onClick={this.handleGoHome}
                    variant="outlined"
                    className="flex-1"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </PremiumButton>
                  
                  <PremiumButton
                    onClick={this.handleContact}
                    variant="outlined"
                    className="flex-1"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact
                  </PremiumButton>
                </div>
              </div>

              {/* Professional Contact Info */}
              <div className="bg-card/50 rounded-lg p-4 border border-white/10">
                <p className="text-xs text-muted-foreground mb-2">
                  Need immediate assistance?
                </p>
                <a 
                  href="mailto:hello@example.com.space"
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  hello@example.com.space
                </a>
              </div>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-destructive/5 p-4 rounded border border-destructive/20">
                  <summary className="text-sm font-medium text-destructive cursor-pointer">
                    Technical Details
                  </summary>
                  <pre className="text-xs mt-2 text-muted-foreground overflow-auto">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for easier usage
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
  
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
};


