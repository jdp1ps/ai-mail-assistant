"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NAV_TABS = [
  { label: "Mail", href: "/mail" },
  { label: "Memory", href: "/memory" },
  { label: "Settings", href: "/settings" },
] as const;

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavBar() {
  // usePathname() is null when rendered outside the Next.js app router (e.g. in the kit bundle).
  const pathname = usePathname() ?? "";
  const activeIndex = NAV_TABS.findIndex((tab) => isActive(pathname, tab.href));

  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar sx={{ gap: 4, flexWrap: "wrap" }}>
        <Typography variant="h6" component="h1" sx={{ fontWeight: 600, whiteSpace: "nowrap" }}>
          AI Mail Assistant
        </Typography>
        <Box component="nav" aria-label="Main" sx={{ alignSelf: "stretch", display: "flex" }}>
          <Tabs
            value={activeIndex === -1 ? false : activeIndex}
            textColor="inherit"
            aria-label="Sections"
            sx={{ minHeight: 64 }}
            slotProps={{ indicator: { sx: { bgcolor: "common.white", height: 3 } } }}
          >
            {NAV_TABS.map((tab, index) => (
              <Tab
                key={tab.href}
                component={Link}
                href={tab.href}
                label={tab.label}
                aria-current={index === activeIndex ? "page" : undefined}
                sx={{ minHeight: 64 }}
              />
            ))}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
