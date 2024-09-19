"use client";

import Header from "@/app/components/Header";
import { Button } from "@/components/ui/button";
// import { useEffect, useState } from 'react';
// import TaskForm from '../components/TaskForm';
// import { Card } from '@/components/ui/card';
// import { Checkbox } from '@/components/ui/checkbox';
// interface Task {
//   id: number;
//   task: string;
//   status: boolean;
//   created_at: string;
// }

// const HomePage: React.FC = () => {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   const fetchTasks = async () => {
//     const response = await fetch('/api/tasks');
//     const data = await response.json();
//     setTasks(data);
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   return (
//     <div>
//       <TaskForm onAddTask={fetchTasks} />
//       <div>
//         {tasks && tasks.map((task) => (
//           <Card key={task.id}>
//             <h4>{task.task}</h4>
//             <Checkbox checked={task.status} disabled /> {/* Display status */}
//             <p>{new Date(task.created_at).toLocaleString()}</p>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";

const Home = () => {
  return (
    <>
      <main className="flex flex-col">
        <Header>
          <div className="text-center">
            <p>Privacy based ToDo Application.</p>
          </div>
        </Header>

          <div className="p-4">
            <p>This is the main content of the page.</p>
          </div>
      </main>
    </>
  );
};

export default Home;
