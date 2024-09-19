import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import axios from 'axios';

interface TaskFormProps {
  onAddTask: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = async () => {
    if (task.length <= 3) {
      alert("Task must be longer than 3 characters");
      return;
    }

    try {
      const response = await axios.post("/api/tasks", {
        task,
        status: false, // Setting status as false by default
      });

      // Log the response data for debugging
      console.log("Response Status:", response.status);
      console.log("Response Data:", response.data);

      // Check if the response is successful (status code 2xx)
      if (response.status >= 200 && response.status < 300) {
        setTask("");
        setStatus(false);
        onAddTask();  // Call the function to refresh task list or perform other actions
        console.log("Task added successfully:", response.data);
      }
    } catch (error) {
      // Error handling: log and show alert
      console.error("Error adding task:", error);
    }
  };

  const handleCheckboxChange = (value: boolean) => {
    setStatus(value);
  };

  console.log(task, status);

  return (
    <Card>
      <h3 className="text-2xl font-bold">Add New Task</h3>
      <Input
        type="text"
        placeholder="Task title"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex justify-center items-start"
      />
      <div>
        <Checkbox
          checked={status}
          onChange={(e) => handleCheckboxChange(e.target.checked)}
        />
        <label>Status</label>
      </div>
      <Button onClick={handleSubmit}>Add Task</Button>
    </Card>
  );
};

export default TaskForm;
