-- WARNING: The SELECT policy below allows anyone to read subscriber emails.
-- Restrict this policy before deploying to production.
-- See: https://supabase.com/docs/guides/auth/row-level-security


-- Create a table for newsletter subscribers
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true,
  source TEXT DEFAULT 'footer',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add an index on email for faster lookups
CREATE INDEX idx_newsletter_subscribers_email ON public.newsletter_subscribers(email);

-- Add an index on subscribed_at for analytics
CREATE INDEX idx_newsletter_subscribers_subscribed_at ON public.newsletter_subscribers(subscribed_at);

-- Enable Row Level Security (RLS) - making it public for newsletter signups
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (subscribe)
CREATE POLICY "Anyone can subscribe to newsletter" 
  ON public.newsletter_subscribers 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading for potential admin features later
CREATE POLICY "Public read access for newsletter subscribers" 
  ON public.newsletter_subscribers 
  FOR SELECT 
  USING (true);
