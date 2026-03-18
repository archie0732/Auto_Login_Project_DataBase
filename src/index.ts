import { createClient } from '@supabase/supabase-js'

const supabase = createClient(Bun.env.SUPABASE_URL, Bun.env.SUPABASE_ANON_KEY);

console.log(supabase.storage)
