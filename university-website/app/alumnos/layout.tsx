import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function AlumnosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <Sidebar className="hidden md:block" />
        <main className="flex w-full flex-col overflow-hidden py-6">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
