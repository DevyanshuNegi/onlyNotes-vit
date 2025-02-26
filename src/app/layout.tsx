import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import SessionWrapper from "@/components/SessionWrapper"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "University Note Sharing Platform",
  description: "Share and discover university notes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster />
          {/* </ThemeProvider> */}
        </SessionWrapper>
      </body>
    </html>
  )
}

