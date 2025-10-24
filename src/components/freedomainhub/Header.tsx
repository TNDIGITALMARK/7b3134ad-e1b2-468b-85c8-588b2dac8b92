'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/freedomainhub/ThemeToggle'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-secondary/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-foreground">FreeDomainHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Support
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/10"
            >
              Sign In
            </Button>
            <Button
              className="bg-primary text-white hover:bg-primary/90 glow-orange"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:bg-foreground/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-secondary/80 bg-secondary">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full border-foreground/20 text-foreground hover:bg-foreground/10"
              >
                Sign In
              </Button>
              <Button
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
