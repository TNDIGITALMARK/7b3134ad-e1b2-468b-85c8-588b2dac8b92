'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

export function HeroSection() {
  const [domain, setDomain] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (domain.trim()) {
      router.push(`/register?domain=${encodeURIComponent(domain)}`)
    }
  }

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          {/* Hero Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Get Your Free Domain —<br />
              No Payments, No Limits
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Register your own domain name for free, manage DNS records,<br className="hidden sm:block" />
              and change nameservers anytime.
            </p>
          </div>

          {/* Domain Search Bar */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-xl shadow-lg p-2">
              <div className="flex-1 flex items-center px-4">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <Input
                  type="text"
                  placeholder="Search for your new domain..."
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="border-0 focus-visible:ring-0 text-gray-900 placeholder:text-gray-400 text-lg"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 glow-orange"
              >
                Search Now
              </Button>
            </div>
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg glow-orange"
              onClick={() => router.push('/register')}
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg"
            >
              Sign In
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 text-white/80 text-sm">
            <p>Join thousands who trust FreeDomainHub</p>
          </div>
        </div>
      </div>
    </section>
  )
}
