import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ITSOEH - Instituto Tecnológico Superior del Occidente del Estado de Hidalgo",
  description: "Portal oficial del Instituto Tecnológico Superior del Occidente del Estado de Hidalgo",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Mi Aplicación</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
