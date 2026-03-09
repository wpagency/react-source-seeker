// Supabase client configuration
// Replace these with your own Supabase project credentials
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Get these from your Supabase project settings > API
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://your-project.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "your-anon-key";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

