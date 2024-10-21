import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

import * as Breadcrumb from "@/components/ui/breadcrumb";

import { AppSidebar } from "@/components/home/app-sidebar"

export const metadata: Metadata = {
    title: "RSDK-Library",
    description: "RSDK-Library website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <SidebarProvider>
                        <AppSidebar />
                        <main>
                            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                                <div className="flex items-center gap-2 px-4">
                                    <SidebarTrigger />

                                    <Separator orientation="vertical" className="mr-2 h-4" />

                                    {/* This doesn't work - this is for aesthetics currently */}
                                    <Breadcrumb.Breadcrumb>
                                        <Breadcrumb.BreadcrumbList>

                                            <Breadcrumb.BreadcrumbItem>
                                                <Breadcrumb.BreadcrumbLink href="/components">RSDK-Library</Breadcrumb.BreadcrumbLink>
                                            </Breadcrumb.BreadcrumbItem>

                                            <Breadcrumb.BreadcrumbSeparator />

                                            <Breadcrumb.BreadcrumbItem>
                                                <Breadcrumb.BreadcrumbLink>Engines</Breadcrumb.BreadcrumbLink>
                                            </Breadcrumb.BreadcrumbItem>

                                            <Breadcrumb.BreadcrumbSeparator />

                                            <Breadcrumb.BreadcrumbItem>
                                                <Breadcrumb.BreadcrumbPage>Engine Name</Breadcrumb.BreadcrumbPage>
                                            </Breadcrumb.BreadcrumbItem>
                                        </Breadcrumb.BreadcrumbList>
                                    </Breadcrumb.Breadcrumb>
                                </div>
                            </header>
                            {children}
                        </main>
                    </SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}