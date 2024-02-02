"use client";

import { usePathname } from "next/navigation";
import { Link } from "@chakra-ui/react";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            mx={2}
            color={isActive ? "grey" : "white"}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
