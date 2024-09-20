'use server'

import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/supabase/client";

interface Tasks {
  task: string;
  status?: boolean;
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("tasks").select("*");

    if (error) return res.status(400).json({ error: error.message });

    return res.status(200).json(data);
  } else if (req.method === 'POST') {
    const { task, status }: { task: string; status?: boolean } = req.body;

    if (!task || task.length <= 3) {
      return res.status(400).json({ error: 'Task must be longer than 3 characters' });
    }

    const { data, error } = await supabase
      .from('tasks')
      .insert([{ task, status }]);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(201).json(data);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
