import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/collapse",
    },
    // {
    //   title: "Examples",
    //   href: "/examples",
    // },
    {
      title: "GitHub",
      href: "https://github.com/shadcn/ui",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/whosmatu",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "components.json",
          href: "/docs/components-json",
          items: [],
        },
        {
          title: "Colors",
          href: "/docs/colors",
          items: [],
        },
        {
          title: "Dark mode",
          href: "/docs/dark-mode",
          items: [],
        },
        {
          title: "CLI",
          href: "/docs/cli",
          items: [],
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        // {
        //   title: "Aspect Ratio",
        //   href: "/docs/components/aspect-ratio",
        //   items: [],
        // },
        // {
        //   title: "Avatar",
        //   href: "/docs/components/avatar",
        //   items: [],
        // },
        {
          title: "Badge",
          href: "/docs/components/badge",
          items: [],
        },
        {
          title: "Button",
          href: "/docs/components/button",
          items: [],
        },
        // {
        //   title: "Calendar",
        //   href: "/docs/components/calendar",
        //   items: [],
        // },
        // {
        //   title: "Card",
        //   href: "/docs/components/card",
        //   items: [],
        // },
        // {
        //   title: "Checkbox",
        //   href: "/docs/components/checkbox",
        //   items: [],
        // },
        {
          title: "Collapse",
          href: "/docs/components/collapse",
          items: [],
        },
        // {
        //   title: "Collapsible",
        //   href: "/docs/components/collapsible",
        //   items: [],
        // },
        // {
        //   title: "Combobox",
        //   href: "/docs/components/combobox",
        //   items: [],
        // },
        // {
        //   title: "Command",
        //   href: "/docs/components/command",
        //   items: [],
        // },
        {
          title: "Context Menu",
          href: "/docs/components/context-menu",
          items: [],
        },
        // {
        //   title: "Date Picker",
        //   href: "/docs/components/date-picker",
        //   items: [],
        // },
        // {
        //   title: "Dialog",
        //   href: "/docs/components/dialog",
        //   items: [],
        // },
        // {
        //   title: "Drawer",
        //   href: "/docs/components/drawer",
        //   items: [],
        // },
        // {
        //   title: "Form",
        //   href: "/docs/components/form",
        //   items: [],
        // },
        {
          title: "Gauge",
          href: "/docs/components/gauge",
          items: [],
        },
        // {
        //   title: "Grid",
        //   href: "/docs/components/grid",
        //   items: [],
        // },
        // {
        //   title: "Hover Card",
        //   href: "/docs/components/hover-card",
        //   items: [],
        // },
        {
          title: "Input",
          href: "/docs/components/input",
          items: [],
        },
        {
          title: "Keyboard Input",
          href: "/docs/components/kbd",
          items: [],
        },
        {
          title: "Loading dots",
          href: "/docs/components/loading-dots",
          items: [],
        },
        // {
        //   title: "Label",
        //   href: "/docs/components/label",
        //   items: [],
        // },
        {
          title: "Menu",
          href: "/docs/components/menu",
          items: [],
        },
        // {
        //   title: "Menubar",
        //   href: "/docs/components/menubar",
        //   items: [],
        // },
        {
          title: "Modal",
          href: "/docs/components/modal",
          items: [],
        },
        // {
        //   title: "Navigation Menu",
        //   href: "/docs/components/navigation-menu",
        //   items: [],
        // },
        {
          title: "Note",
          href: "/docs/components/note",
          items: [],
        },
        // {
        //   title: "Pagination",
        //   href: "/docs/components/pagination",
        //   items: [],
        // },
        // {
        //   title: "Popover",
        //   href: "/docs/components/popover",
        //   items: [],
        // },
        // {
        //   title: "Progress",
        //   href: "/docs/components/progress",
        //   items: [],
        // },
        // {
        //   title: "Radio Group",
        //   href: "/docs/components/radio-group",
        //   items: [],
        // },
        // {
        //   title: "Resizable",
        //   href: "/docs/components/resizable",
        //   items: [],
        // },
        // {
        //   title: "Scroll Area",
        //   href: "/docs/components/scroll-area",
        //   items: [],
        // },
        // {
        //   title: "Select",
        //   href: "/docs/components/select",
        //   items: [],
        // },
        // {
        //   title: "Sheet",
        //   href: "/docs/components/sheet",
        //   items: [],
        // },
        {
          title: "Show more",
          href: "/docs/components/show-more",
          items: [],
        },
        // {
        //   title: "Skeleton",
        //   href: "/docs/components/skeleton",
        //   items: [],
        // },
        {
          title: "Snippet",
          href: "/docs/components/snippet",
          items: [],
        },
        // {
        //   title: "Sonner",
        //   href: "/docs/components/sonner",
        //   items: [],
        // },
        {
          title: "Spinner",
          href: "/docs/components/spinner",
          items: [],
        },
        {
          title: "Stack",
          href: "/docs/components/stack",
          items: [],
        },
        {
          title: "Status dot",
          href: "/docs/components/status-dot",
          items: [],
        },
        {
          title: "Switch",
          href: "/docs/components/switch",
          items: [],
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
          items: [],
        },
        {
          title: "Text",
          href: "/docs/components/text",
          items: [],
        },
        // {
        //   title: "Textarea",
        //   href: "/docs/components/textarea",
        //   items: [],
        // },
        {
          title: "Theme Switcher",
          href: "/docs/components/theme-switcher",
          items: [],
        },
        // {
        //   title: "Toast",
        //   href: "/docs/components/toast",
        //   items: [],
        // },
        {
          title: "Toggle",
          href: "/docs/components/toggle",
          items: [],
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
          items: [],
        },
      ],
    },
  ],
}
