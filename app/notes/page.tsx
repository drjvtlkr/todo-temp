'use client'

import { createClient } from '@/supabase/client';

export default async function Notes() {
  const supabase = createClient();
  const { data, error } = await supabase.from("tasks").select();
  console.log(data);
  
  return <pre>{JSON.stringify(data)}</pre>
}