import React, { useEffect, useState } from "react";
import { supabase } from "@/supabase/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";

export default function DemoPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [updatedTask, setUpdatedTask] = useState({ task: "", status: false });

  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase.from("tasks").select("*");
      if (error) {
        setError(error);
      } else {
        setTasks(data);
      }
      setLoading(false);
    };

    fetchTasks();
  }, []);

  const handleEdit = (task) => {
    setEditingTaskId(task.id);
    setUpdatedTask({ task: task.task, status: task.status });
  };

  const handleSave = async (taskId) => {
    const { data, error } = await supabase
      .from("tasks")
      .update({
        task: updatedTask.task,
        status: updatedTask.status,
      })
      .eq("id", taskId)
      .select();

    if (error) {
      console.error("Error updating task:", error);
    } else {
      setTasks((prevTasks) =>prevTasks.map((t) => (t.id === taskId ? { ...t, ...data[0] } : t))
      );
      setEditingTaskId(null);
    }
  };

  const handleStatusChange = (e) => {
    setUpdatedTask((prev) => ({ ...prev, status: e.target.checked }));
  };

  const handleDelete = async (taskId) => {
    const { error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", taskId);

    if (error) {
      console.error("Error deleting task:", error);
    } else {
      setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskId));
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Task Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell className="font-medium">{task.id || "N/A"}</TableCell>
            <TableCell>
              {editingTaskId === task.id ? (
                <input
                  type="text"
                  value={updatedTask.task}
                  onChange={(e) => setUpdatedTask((prev) => ({ ...prev, task: e.target.value }))}
                />
              ) : (
                task.task || "N/A"
              )}
            </TableCell>
            <TableCell>
              {editingTaskId === task.id ? (
                <Checkbox
                  checked={updatedTask.status}
                  onChange={handleStatusChange}
                />
              ) : (
                <Checkbox
                  checked={task.status}
                />
              )}
            </TableCell>
            <TableCell>
              {task.created_at ? new Date(task.created_at).toLocaleString() : "N/A"}
            </TableCell>
            <TableCell className="text-center">
              {editingTaskId === task.id ? (
                <Button onClick={() => handleSave(task.id)}>Save</Button>
              ) : (
                <Button onClick={() => handleEdit(task)}> <FiEdit2 /> </Button>
              )}
              <Button className="pr-4" onClick={() => handleDelete(task.id)} variant="destructive">
                <MdOutlineDelete />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
