"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import axios from "axios";

const CreateTasksForm = () => {
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
        status: false, 
      });

      console.log("Response Status:", response.status);
      console.log("Response Data:", response.data);

      if (response.status >= 200 && response.status < 300) {
        setTask("");
        setStatus(false);
        console.log("Task added successfully:", response.data);
      }
    } catch (error) {
      console.error("Error adding task:", error);
      alert("This was not added!")
    }
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-blue-600 text-white hover:bg-blue-500 hover:text-gray-200">
              Continue creating task
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle>Add Task</DialogTitle>
              <DialogDescription className="text-gray-600">Add the name of the task that you wish to complete</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Task Title</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Task Name"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="status" disabled />
                  <label
                    htmlFor="status"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    When adding a task you can not mark it Completed !
                  </label>
                </div>
              </div>
              <DialogFooter className="py-2">
                <Button className="bg-blue-700 hover:bg-blue-500" type="submit">
                  Create Task
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default CreateTasksForm;
