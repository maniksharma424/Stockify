
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient('https://tqjnbdxfwtkvzmnwvpdu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxam5iZHhmd3Rrdnptbnd2cGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1NTE1NzQsImV4cCI6MTk5NTEyNzU3NH0.ncAXGQ6zM5h0iVnF-zD0B1qWbE-O1aeemEq45QsyQew')
export default supabase