"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import { Search } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"

export function Header() {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">NoteShare</span>
        </Link>
        <div className="flex flex-1 items-center space-x-2">
          <form className="flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search notes..." className="pl-8 sm:w-[300px] md:w-[400px] lg:w-[500px]" />
            </div>
          </form>
        </div>
        <nav className="flex items-center space-x-2">
          {session ? (
            <>
              <Button variant="ghost" asChild>
                <Link href="/upload">Upload</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/profile">Profile</Link>
              </Button>
              <Button variant="ghost" onClick={() => signOut()}>
                Logout
              </Button>
            </>
          ) : (
            <Button variant="ghost" onClick={() => signIn("google")}>
              Login
            </Button>
          )}
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

