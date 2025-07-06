"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import {
  //IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  //IconFileAi,
  //IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations()

  const data = {
    user: {
      name: t("user.name"),
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: t("navMain.dashboard"),
        url: "#",
        icon: IconDashboard,
      },
      {
        title: t("navMain.lifecycle"),
        url: "#",
        icon: IconListDetails,
      },
      {
        title: t("navMain.analytics"),
        url: "#",
        icon: IconChartBar,
      },
      {
        title: t("navMain.projects"),
        url: "#",
        icon: IconFolder,
      },
      {
        title: t("navMain.team"),
        url: "#",
        icon: IconUsers,
      },
    ],
    navSecondary: [
      {
        title: t("navSecondary.settings"),
        url: "#",
        icon: IconSettings,
      },
      {
        title: t("navSecondary.getHelp"),
        url: "#",
        icon: IconHelp,
      },
      {
        title: t("navSecondary.search"),
        url: "#",
        icon: IconSearch,
      },
    ],
    documents: [
      {
        name: t("documents.dataLibrary"),
        url: "#",
        icon: IconDatabase,
      },
      {
        name: t("documents.reports"),
        url: "#",
        icon: IconReport,
      },
      {
        name: t("documents.wordAssistant"),
        url: "#",
        icon: IconFileWord,
      },
    ],
  }

  return (
    <Sidebar id="app-sidebar" collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">{t("companyName")}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
        
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}