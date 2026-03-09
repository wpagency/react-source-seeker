
import React from 'react';

interface DocumentHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  canonicalUrl?: string;
  structuredData?: object;
  preloadResources?: string[];
  preconnectDomains?: string[];
}

export const DocumentHead: React.FC<DocumentHeadProps> = ({ 
  title, 
  description, 
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterSite,
  canonicalUrl,
  structuredData,
  preloadResources = [],
  preconnectDomains = []
}) => {
  React.useEffect(() => {
    // Ensure we're in a browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      console.log('DocumentHead: Not in browser environment, skipping DOM manipulation');
      return;
    }
    
    console.log('DocumentHead: Setting up head tags');
    const originalTitle = document.title;
    
    // Set title with improved formatting
    if (title) {
      document.title = `${title} | Source Seeker.space - Digital Excellence Delivered`;
    }

    // Enhanced meta tag management
    const setMetaTag = (name: string, content: string, property = false) => {
      if (!content) return;
      
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Core meta tags
    if (description) {
      setMetaTag('description', description);
    }

    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Enhanced OpenGraph tags
    if (ogTitle || title) {
      setMetaTag('og:title', ogTitle || `${title} | Source Seeker.space`, true);
    }

    if (ogDescription || description) {
      setMetaTag('og:description', ogDescription || description || '', true);
    }

    if (ogImage) {
      setMetaTag('og:image', ogImage, true);
      setMetaTag('og:image:alt', title || 'Source Seeker.space Service', true);
    }

    setMetaTag('og:type', ogType, true);
    setMetaTag('og:site_name', 'Source Seeker.space', true);

    // Enhanced Twitter Card tags
    setMetaTag('twitter:card', twitterCard);
    if (title) {
      setMetaTag('twitter:title', `${title} | Source Seeker.space`);
    }
    if (description) {
      setMetaTag('twitter:description', description);
    }
    if (ogImage) {
      setMetaTag('twitter:image', ogImage);
    }
    if (twitterSite) {
      setMetaTag('twitter:site', twitterSite);
    }

    // Performance and SEO enhancements
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover');
    setMetaTag('theme-color', '#0f172a');

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }

    // Preconnect to important domains
    preconnectDomains.forEach(domain => {
      let preconnect = document.querySelector(`link[rel="preconnect"][href="${domain}"]`);
      if (!preconnect) {
        preconnect = document.createElement('link');
        preconnect.setAttribute('rel', 'preconnect');
        preconnect.setAttribute('href', domain);
        document.head.appendChild(preconnect);
      }
    });

    // Preload critical resources
    preloadResources.forEach(resource => {
      let preload = document.querySelector(`link[rel="preload"][href="${resource}"]`);
      if (!preload) {
        preload = document.createElement('link');
        preload.setAttribute('rel', 'preload');
        preload.setAttribute('href', resource);
        preload.setAttribute('as', resource.includes('.css') ? 'style' : 'script');
        document.head.appendChild(preload);
      }
    });

    // Enhanced Structured Data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      
      // Enhanced structured data with organization info
      const enhancedStructuredData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://example.com.space/#organization",
            "name": "Source Seeker.space",
            "url": "https://example.com.space",
            "logo": {
              "@type": "ImageObject",
              "url": "https://example.com.space/logo.png"
            },
            "sameAs": []
          },
          structuredData
        ]
      };
      
      structuredDataScript.textContent = JSON.stringify(enhancedStructuredData);
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.title = originalTitle;
      }
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, twitterCard, twitterSite, canonicalUrl, structuredData, preloadResources, preconnectDomains]);

  // Component always returns null as it's only for side effects
  return null;
};


