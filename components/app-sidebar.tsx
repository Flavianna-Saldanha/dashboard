"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
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

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Vida útil",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Análise",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Projetos",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Equipe",
      url: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capturar",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Propostas Ativas",
          url: "#",
        },
        {
          title: "Arquivado",
          url: "#",
        },
      ],
    },
    {
      title: "Propostas",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Propostas Ativas",
          url: "#",
        },
        {
          title: "Arquivado",
          url: "#",
        },
      ],
    },
    {
      title: "Solicitações",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Propostas Ativas",
          url: "#",
        },
        {
          title: "Arquivado",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Configurações",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Ajuda",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Pesquisar",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Biblioteca de dados",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Relatórios",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Assistente de palavras",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <IconInnerShadowTop className="size-5!" />
                <span className="text-base font-semibold">Acme Inc.</span>
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
