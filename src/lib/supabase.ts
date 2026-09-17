import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const isConfigured = Boolean(supabaseUrl && supabaseKey && supabaseUrl.startsWith('https://'))

/** Supabase client for lead capture, or `null` when the env vars are not set. */
export const supabase: SupabaseClient | null = isConfigured
  ? createClient(supabaseUrl as string, supabaseKey as string)
  : null
