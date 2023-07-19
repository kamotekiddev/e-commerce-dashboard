import { auth } from "@clerk/nextjs";
import React, { ReactNode } from "react";

import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

interface Props {
  children: ReactNode;
}

const Layout = async ({ children }: Props) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const store = await prismadb.store.findFirst({ where: { userId } });
  if (store) redirect(`/${store.id}`);

  return <>{children}</>;
};

export default Layout;
