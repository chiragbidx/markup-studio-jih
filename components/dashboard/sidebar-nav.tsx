"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Home,
  Users,
  Briefcase,
  Handshake,
  LayoutGrid,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
};

const crmSections: NavItem[] = [
  { label: "Overview", href: "/dashboard/overview", icon: LayoutGrid },
  { label: "Contacts", href: "/dashboard/contacts", icon: Users },
  { label: "Companies", href: "/dashboard/companies", icon: Briefcase },
  { label: "Deals", href: "/dashboard/deals", icon: Handshake },
];

const platformSection: { title: string; items: NavItem[] } = {
  title: "CRM",
  items: crmSections,
};

function NavLink({
  href,
  label,
  icon: Icon,
  isActive,
  disabled,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isActive: boolean;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <span className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground/40 cursor-not-allowed select-none">
        <Icon className="size-4" />
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
        isActive
          ? "bg-primary/10 text-primary font-medium"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      }`}
    >
      <Icon className="size-4" />
      {label}
    </Link>
  );
}

function NavSection({
  title,
  items,
  pathname,
  defaultOpen,
}: {
  title: string;
  items: NavItem[];
  pathname: string;
  defaultOpen: boolean;
}) {
  function checkActive(href: string) {
    if (href === "/dashboard" || href === "/dashboard/overview") return pathname === "/dashboard" || pathname === "/dashboard/overview";
    if (href === "#") return false;
    return pathname.startsWith(href);
  }

  return (
    <Collapsible defaultOpen={defaultOpen}>
      <CollapsibleTrigger className="group flex w-full items-center justify-between px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 hover:text-muted-foreground transition-colors">
        {title}
        <ChevronDown className="size-3.5 transition-transform group-data-[state=closed]:-rotate-90" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-1 space-y-0.5">
          {items.map((item) => (
            <NavLink
              key={item.label}
              {...item}
              isActive={checkActive(item.href)}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-1 flex-col">
      <nav className="flex-1 space-y-4">
        <NavSection
          key={platformSection.title}
          title={platformSection.title}
          items={platformSection.items}
          pathname={pathname}
          defaultOpen={true}
        />
      </nav>
    </div>
  );
}