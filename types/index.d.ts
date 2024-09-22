/* eslint-disable no-unused-vars */

declare type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

declare type Task={
  id: number;
  task: string;
  status: boolean;
  created_at:  Date;
}
