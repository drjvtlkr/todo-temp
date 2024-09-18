import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import dribbleLogo from "@/images/dribbble.png";
import { Button } from "@/components/ui/button";
import { IoAdd } from "react-icons/io5";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <div className="flex justify-center items-center w-full">
        <Link href="/" className="flex-1">
          <Image
            src={dribbleLogo}
            alt="Logo with name"
            width={120}
            height={32}
            className="hidden md:block"
          />
        </Link>

        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl flex-1 text-center">
          Your go-to todo Application
        </h1>

        <Button className="bg-blue-600 text-white text-xl dark:text-white flex-1 text-right">
          <IoAdd className="text-xl" />
          Add Task
        </Button>
      </div>

      {children}
    </div>
  );
};

export default Header;
