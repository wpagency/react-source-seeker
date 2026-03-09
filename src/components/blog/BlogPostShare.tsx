import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Facebook, Twitter, Linkedin, Link, Check, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { downloadRSSFeed } from '@/utils/rssGenerator';

interface BlogPostShareProps {
  title: string;
  url: string;
  excerpt: string;
}

const BlogPostShare: React.FC<BlogPostShareProps> = ({ title, url, excerpt }) => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : url;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(excerpt);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy link to clipboard.",
        variant: "destructive",
      });
    }
  };

  const handleDownloadRSS = () => {
    downloadRSSFeed();
    toast({
      title: "RSS feed downloaded",
      description: "The blog RSS feed has been downloaded.",
    });
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="border-white/20 text-white hover:bg-white/5"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </Button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="absolute top-full right-0 mt-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 z-50 min-w-[200px]"
        >
          <h4 className="text-sm font-medium text-white mb-3">Share this article</h4>
          
          <div className="space-y-2">
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white"
            >
              <Facebook className="w-4 h-4" />
              <span className="text-sm">Facebook</span>
            </a>
            
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white"
            >
              <Twitter className="w-4 h-4" />
              <span className="text-sm">Twitter</span>
            </a>
            
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
            
            <button
              onClick={copyToClipboard}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white w-full text-left"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Link className="w-4 h-4" />}
              <span className="text-sm">{copied ? 'Copied!' : 'Copy link'}</span>
            </button>

            <div className="border-t border-white/10 pt-2 mt-2">
              <button
                onClick={handleDownloadRSS}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white w-full text-left"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Download RSS</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BlogPostShare;


