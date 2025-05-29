"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Especialidad", href: "/especialidad" },
    { name: "Recursos para Estudiantes", href: "/recursos-estudiantes" },
    { name: "Plan de Estudios", href: "/plan-estudios" },
    { name: "Necesitas Ayuda", href: "/necesitas-ayuda" },
    { name: "Calendario", href: "/calendario" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-pink-500">ITSOEH</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                asChild
                variant="ghost"
                className="text-gray-600 hover:text-pink-600 hover:bg-pink-50"
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" className="text-gray-600" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("md:hidden bg-white border-t", isMenuOpen ? "block" : "hidden")}>
        <div className="container mx-auto px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              asChild
              variant="ghost"
              className="w-full justify-start text-gray-600 hover:text-pink-600 hover:bg-pink-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </div>
      </div>
    </header>
  )
}
