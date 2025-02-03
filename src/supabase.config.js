import { createClient } from "@supabase/supabase-js";

const sb_url = import.meta.env.VITE_SUPABASE_URL;
const sb_key = import.meta.env.VITE_SUPABASE_KEY;

export const supabase=createClient(sb_url,sb_key)