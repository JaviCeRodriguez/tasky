import { createClient } from '@supabase/supabase-js';

// Create a new Supabase client with environment variables
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL!,
  process.env.REACT_APP_SUPABASE_PUBLIC_KEY!,
);

export default supabase;
