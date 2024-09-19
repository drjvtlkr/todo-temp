'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import dribbleLogo from "@/images/dribbble.png";
import { Button } from "@/components/ui/button";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";
import CreateTasksForm from "./CreateTasksForm";

const Header = ({ children, className }: HeaderProps) => {
  const [showCreateTaskForm, setShowCreateTaskForm] = useState(false);

  const handleButtonClick = () => {
    setShowCreateTaskForm((prevState) => !prevState);
  };
  
  return (
    <div className={cn("header", className)}>
      <div className="flex justify-between items-center w-full">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={dribbleLogo}
              alt="Logo with name"
              width={120}
              height={32}
              className="hidden md:block"
            />
          </Link>
        </div>

        <div className="flex-grow text-center">
          <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl">
            Your go-to todo Application
          </h1>
        </div>

        <div className="flex-shrink-0 pr-8">
          <Button
            className="bg-blue-600 text-white hover:bg-blue-500 text-xl dark:text-white"
            onClick={handleButtonClick}>
            <IoAdd className="text-xl mr-2" />
            Add Task
          </Button>
        </div>
      </div>

      {children && <div className="mt-4">{children}</div>}
      {showCreateTaskForm && (
        <div className="mt-4">
          <CreateTasksForm />
        </div>
      )}
    </div>
  );
};

export default Header;
