// // src/supabaseClient.js
// import { createClient } from "@supabase/supabase-js";

// // Replace these with your Supabase project credentials
// const SUPABASE_URL = "https://hjcllqwiqqlfyluhqyvc.supabase.co";
// const SUPABASE_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqY2xscXdpcXFsZnlsdWhxeXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MDk0NTcsImV4cCI6MjA3MjM4NTQ1N30.kJlnmXfI5l2vTqegEuVLYKrx3H6eV6ZcCK_bWy1sAJY";

// export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
