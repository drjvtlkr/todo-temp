'use client'

import { supabase } from '@/supabase/client';

export default async function Notes() {
  const { data, error } = await supabase.from("tasks").select();
  console.log(data);
  
  return <pre>{JSON.stringify(data)}</pre>
}