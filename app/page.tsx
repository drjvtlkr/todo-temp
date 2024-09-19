"use client";

import Header from "@/app/components/Header";
import React from "react";
import DemoPage from "./components/TasksTable";

const Home =async () => {
  return (
    <>
      <main className="flex flex-col">
        <Header>
          <div className="text-center">
            <p className="text-gray-500 text-2xl">Privacy based ToDo Application.</p>
          </div>
        </Header>

          <div className="p-4">
            <p>This is the main content of the page.</p>
            <DemoPage/>
          </div>
      </main>
    </>
  );
};

export default Home;
