"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Note Taking", href: "/note-taking" },
  { name: "Question Generation", href: "/question-generation" },
  { name: "Performance Tracking", href: "/performance-tracking" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-200/20 dark:border-gray-800/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">P</span>
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              PerformEd
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full p-2 border border-gray-200/50 dark:border-gray-700/50">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105",
                  pathname === item.href
                    ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-lg shadow-blue-500/20"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-white/50 dark:hover:bg-gray-800/50",
                )}
              >
                {pathname === item.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full" />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200/20 dark:border-gray-800/20">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300",
                    pathname === item.href
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-100",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
