import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { createClient } from '@supabase/supabase-js'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const supabase = createClient(
  'https://uglsibgosiemiyzwqqdt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnbHNpYmdvc2llbWl5endxcWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNzYxMjgsImV4cCI6MjA2NTg1MjEyOH0.cci9LOCvvQJ1ELiCsca8ZnhFJnREdCkO1OFw-O-jisM'
)
