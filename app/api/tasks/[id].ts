import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';

// import supabase = useClient

interface Task {
  task: string;
  status?: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  if (req.method === 'PUT') {
    const { task, status }: Task = req.body;

    if (!task || task.length <= 3) {
      return res.status(400).json({ error: 'Task must be longer than 3 characters' });
    }

    const { data, error } = await supabase
      .from('tasks')
      .update({ task, status })
      .eq('id', id);

    if (error) return res.status(400).json({ error: error.message });

    return res.status(200).json(data);
  } else if (req.method === 'DELETE') {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id);

    if (error) return res.status(400).json({ error: error.message });

    return res.status(204).end();
  } else {
    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
