import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://ycbcskdtggwnkrmbthbf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljYmNza2R0Z2d3bmtybWJ0aGJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwMTIyNzAsImV4cCI6MjAyNTU4ODI3MH0.iLiQjUaasZBel2lmXgEBKh4RCddq_9F7alFYngFOUtA')