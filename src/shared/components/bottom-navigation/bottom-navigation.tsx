"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import { IconType } from "@/shared/components";

import { NavItem } from "./nav-item";

type Navigation = { icon: IconType; label: string; href: string };

export function BottomNavigation() {
  const pathname = usePathname();
  const t = useTranslations("Globals");
  const navigation: Navigation[] = [
    {
      icon: "square-grid-rounded",
      label: t("categories"),
      href: "/categories",
    },
    { icon: "coupon", label: t("discount"), href: "/discounts" },
    { icon: "person", label: t("profile"), href: "/profile" },
  ];
  return (
    <footer className="sticky bottom-0 left-0 z-50 mt-6 w-full border-t border-border-primary bg-content-inverse">
      <nav className="h-[93px]">
        <ol
          aria-label="main"
          className="mx-auto grid h-full grid-cols-4 items-center"
        >
          <NavItem
            icon="magnifier-fill"
            href="/"
            active={pathname.startsWith("/")}
            label={t("search")}
            size="medium"
          />
          {navigation.map(({ icon, label, href }) => (
            <NavItem
              key={label}
              icon={icon}
              href={href}
              active={pathname.startsWith(href)}
              label={label}
              size="medium"
            />
          ))}
        </ol>
      </nav>
    </footer>
  );
}
