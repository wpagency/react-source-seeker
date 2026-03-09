import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { PerformanceProvider } from "@/components/layout/PerformanceProvider";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { InstallPrompt, OfflineIndicator, AppShell, AppUpdate, AppStatusBar } from "@/components/ui/pwa";
import { isInstalledPWA } from "./pwa";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./components/blog/BlogPost"));
const BlogCategory = lazy(() => import("./pages/BlogCategory"));
const ReadingLists = lazy(() => import("./pages/ReadingLists"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const WebDesign = lazy(() => import("./pages/services/WebDesign"));
const UXDesign = lazy(() => import("./pages/services/UXDesign"));
const Ecommerce = lazy(() => import("./pages/services/Ecommerce"));
const SEO = lazy(() => import("./pages/services/SEO"));
const AppSolutions = lazy(() => import("./pages/services/AppSolutions"));
const Consulting = lazy(() => import("./pages/services/Consulting"));
const FAQ = lazy(() => import("./pages/FAQ"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiesPolicy = lazy(() => import("./pages/CookiesPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DesignSystem = lazy(() => import("./pages/DesignSystem"));

function App() {
  // Check if running as installed PWA
  const isPWA = isInstalledPWA();

  // Add PWA-specific body class
  useEffect(() => {
    if (isPWA) {
      document.body.classList.add('pwa-mode');
    }
  }, [isPWA]);

  // Main app content
  const appContent = (
    <ErrorBoundary>
      <ThemeProvider>
        <PerformanceProvider>
          <TooltipProvider>
            <Router>
              <div className="min-h-screen bg-background text-foreground">
                {/* PWA Status Bar */}
                <AppStatusBar />
                
                <Suspense fallback={<LoadingScreen />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/blog/category/:categoryId" element={<BlogCategory />} />
                    <Route path="/reading-lists" element={<ReadingLists />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/services/web-design" element={<WebDesign />} />
                    <Route path="/services/ux-design" element={<UXDesign />} />
                    <Route path="/services/ecommerce" element={<Ecommerce />} />
                    <Route path="/services/seo" element={<SEO />} />
                    <Route path="/services/app-solutions" element={<AppSolutions />} />
                    <Route path="/services/consulting" element={<Consulting />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/cookies-policy" element={<CookiesPolicy />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/cookies" element={<CookiesPolicy />} />
                    <Route path="/design-system" element={<DesignSystem />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
                <Toaster />
                
                {/* PWA Components */}
                <InstallPrompt />
                <OfflineIndicator />
                <AppUpdate />
              </div>
            </Router>
          </TooltipProvider>
        </PerformanceProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );

  // Wrap with AppShell if running as PWA
  return isPWA ? <AppShell>{appContent}</AppShell> : appContent;
}

export default App;

