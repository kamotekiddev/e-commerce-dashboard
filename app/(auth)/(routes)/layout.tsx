import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return <div className="min-h-screen grid place-items-center">{children}</div>;
};

export default AuthLayout;
