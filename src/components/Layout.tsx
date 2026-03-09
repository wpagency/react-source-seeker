import React from "react";
import { useEnhancedAnimation } from "./layout/EnhancedAnimationProvider";
import { PerformanceMonitor } from "./ui/PerformanceMonitor";
import EnhancedFooter from "./layout/footer/EnhancedFooter";
import UnifiedNavbar from "./layout/navbar/UnifiedNavbar";
import { Toaster } from "./ui/toaster";
import ScrollToTopButton from "./ui/scroll-to-top-button";
import { InteractiveStory } from "@/components/ui/interactive-story";

interface LayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
  showNavbar?: boolean;
  className?: string;
  useStoryWrapper?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showFooter = true, 
  showNavbar = true,
  className = "",
  useStoryWrapper = true
}) => {
  const { settings } = useEnhancedAnimation();

  const content = useStoryWrapper ? (
    <InteractiveStory>
      {children}
    </InteractiveStory>
  ) : children;

  return (
    <div className={`min-h-screen bg-slate-950 text-white flex flex-col ${className}`}>
      {settings.performanceMode && <PerformanceMonitor />}
      
      {showNavbar && (
        <header role="banner">
          <UnifiedNavbar />
        </header>
      )}
      
      <main className="flex-grow" role="main">
        {content}
      </main>
      
      {showFooter && (
        <footer role="contentinfo">
          <EnhancedFooter />
        </footer>
      )}
      
      <ScrollToTopButton threshold={400} />
      <Toaster />
    </div>
  );
};

export default Layout;

