import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  compact?: boolean;
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title = "Never Miss an Insight",
  description = "Get our latest articles and exclusive tips delivered directly to your inbox. No spam, just value.",
  compact = false,
  className = ""
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendWelcomeEmail = async (email: string, source: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('send-welcome-email', {
        body: { email, source }
      });
      
      if (error) {
        console.error('Error sending welcome email:', error);
        // Don't throw here - subscription should still be considered successful
      } else {
        console.log('Welcome email sent successfully');
      }
    } catch (error) {
      console.error('Welcome email function error:', error);
      // Don't throw here - subscription should still be considered successful
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Email address is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const source = compact ? 'footer' : 'main_signup';
      const { data, error: supabaseError } = await supabase
        .from('newsletter_subscribers')
        .insert([
          {
            email: email.trim().toLowerCase(),
            source
          }
        ])
        .onConflict('email')
        .ignore()
        .select();

      if (supabaseError) {
        throw supabaseError;
      }

      // Check if data is empty (indicates duplicate email was ignored)
      if (!data || data.length === 0) {
        toast({
          title: "Already subscribed!",
          description: "This email is already subscribed to our newsletter.",
        });
      } else {
        // Send welcome email after successful subscription
        await sendWelcomeEmail(email.trim().toLowerCase(), source);
        
        setIsSubscribed(true);
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for subscribing! Check your email for a welcome message.",
        });

        // Reset form after success
        setTimeout(() => {
          setEmail('');
          setIsSubscribed(false);
        }, 3000);
      }
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to our newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (compact) {
    return (
      <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 ${className}`}>
        <div className="flex items-center space-x-2 mb-4">
          <Mail className="w-5 h-5 text-green-400" />
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-green-400"
              disabled={isLoading || isSubscribed}
            />
            {error && (
              <div className="flex items-center space-x-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}
          </div>
          
          <Button
            type="submit"
            disabled={isLoading || isSubscribed}
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:shadow-lg disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Subscribing...</span>
              </div>
            ) : isSubscribed ? (
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span>Subscribed!</span>
              </div>
            ) : (
              'Subscribe'
            )}
          </Button>
        </form>
        
        <p className="text-xs text-white/50 mt-3 text-center">
          No spam, unsubscribe at any time.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`text-center ${className}`}
    >
      <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-md border border-white/10 rounded-3xl p-12">
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-green-400 text-center"
                disabled={isLoading || isSubscribed}
              />
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center space-x-2 text-red-400 text-sm"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </motion.div>
              )}
            </div>
            
            <Button
              type="submit"
              size="lg"
              disabled={isLoading || isSubscribed}
              className="w-full h-12 bg-gradient-to-r from-green-500 to-blue-600 hover:shadow-lg disabled:opacity-50 text-lg font-semibold"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Subscribing...</span>
                </div>
              ) : isSubscribed ? (
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5" />
                  <span>Successfully Subscribed!</span>
                </div>
              ) : (
                'Subscribe Now'
              )}
            </Button>
          </div>
        </form>
        
        <p className="text-sm text-white/50 mt-4">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </motion.div>
  );
};

export default NewsletterSignup;

