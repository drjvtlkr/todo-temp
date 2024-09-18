/* eslint-disable no-unused-vars */
declare type User = {
    id: string;
    name: string;
    email: string;
    avatar: string;
    color: string;
    userType?: UserType;
  };
  
  declare type HeaderProps = {
    children: React.ReactNode;
    className?: string;
  };
  