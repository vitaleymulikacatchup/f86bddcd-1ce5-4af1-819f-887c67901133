import Link from 'next/link'
import { Search } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8" />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/models" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                Models
              </Link>
              <Link href="/github" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                GitHub
              </Link>
              <Link href="/discord" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                Discord
              </Link>
              <Link href="/docs" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                Docs
              </Link>
              <Link href="/cloud" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                Cloud
              </Link>
            </nav>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-md mx-8 hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search models"
                className="w-full pl-10 pr-4 py-2 bg-muted rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              />
            </div>
          </div>

          {/* Right side - Sign in and Download */}
          <div className="flex items-center space-x-4">
            <Link href="/signin" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
              Sign in
            </Link>
            <Link href="/download" className="btn-primary">
              Download
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}