import "@/styles/globals.css"
import { Metadata } from "next"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "TravelCo - Explore The World",
  description: "TravelCo offers the best travel destinations, guided tours, and adventure packages.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={cn("min-h-screen font-sans antialiased", fontSans.variable)}>
        <main>{children}</main>
      </body>
    </html>
  )
}
