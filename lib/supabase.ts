import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xlisxcifeyvdcqwpowa.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsaXN4Y2lmZXl2ZGNxd3Bvd2EiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTczOTMTE0MTMsImV4cCI6MjA1NDY4NzQxM30.-PIDJRQr-cxnt4bekHP9P_Lg-VoCjwsRABCdooQYN6E';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);