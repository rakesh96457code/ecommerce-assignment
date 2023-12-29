"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathName === `/`,
    },
    {
      href: `/contact`,
      label: "Contact",
      active: pathName === `/contact`,
    },
    {
      href: `/about`,
      label: "About",
      active: pathName === `/about`,
    },
    
  ];
  return (
    <nav className={cn("flex itmes-center space-x-4 lg:space-x-6 px-6")}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
