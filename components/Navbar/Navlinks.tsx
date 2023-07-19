"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const Navlinks = () => {
  const params = useParams();
  const pathname = usePathname();

  const routes = [{ href: `/${params.storeId}/settings`, label: "Settings" }];

  return (
    <div>
      {routes.map((route, i) => (
        <Link
          href={route.href}
          key={i}
          className={cn(
            "text-gray-900 hover:text-primary transition-colors duration-75 ease-linear",
            route.href === pathname
              ? "text-muted-foreground"
              : "text-black dark:text-white"
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
