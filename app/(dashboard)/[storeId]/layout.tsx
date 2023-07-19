import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

interface Props {
  children: ReactNode;
  params: { storeId: string };
}
const Layout = async ({ children, params: { storeId } }: Props) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const store = await prismadb.store.findFirst({
    where: { id: storeId, userId },
  });

  if (!store) redirect("/sign-in");

  return <div>{children}</div>;
};

export default Layout;
