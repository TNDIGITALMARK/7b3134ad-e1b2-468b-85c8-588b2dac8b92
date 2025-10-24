'use client'

export const dynamic = 'force-dynamic'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Header } from '@/components/freedomainhub/Header'
import { Footer } from '@/components/freedomainhub/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Search,
  CheckCircle,
  XCircle,
  Loader2,
  Mail,
  Lock,
  User
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Mock available domains
const mockAvailableDomains = [
  { name: 'example-startup-2025.com', available: true, price: 'FREE' },
  { name: 'creative-portfolio.net', available: true, price: 'FREE' },
  { name: 'my-awesome-project.org', available: true, price: 'FREE' },
  { name: 'tech-blog-2025.com', available: true, price: 'FREE' }
]

function RegistrationContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null)
  const [step, setStep] = useState<'search' | 'account' | 'confirm'>('search')

  // Form states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    const domain = searchParams.get('domain')
    if (domain) {
      setSearchQuery(domain)
      handleSearch(domain)
    }
  }, [searchParams])

  const handleSearch = async (query?: string) => {
    const searchTerm = query || searchQuery
    if (!searchTerm) return

    setSearching(true)
    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockAvailableDomains.filter(d =>
        d.name.toLowerCase().includes(searchTerm.toLowerCase())
      ))
      setSearching(false)
    }, 1000)
  }

  const handleSelectDomain = (domainName: string) => {
    setSelectedDomain(domainName)
    setStep('account')
  }

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('confirm')
  }

  const handleCompleteRegistration = () => {
    // Simulate registration completion
    setTimeout(() => {
      router.push('/dashboard')
    }, 1500)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              <div className={`flex items-center ${step === 'search' ? 'text-primary' : 'text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step === 'search' ? 'bg-primary' : 'bg-white/20'
                }`}>
                  <Search className="w-5 h-5" />
                </div>
                <span className="ml-2 font-medium hidden sm:inline">Search</span>
              </div>
              <div className="flex-1 h-0.5 bg-white/20 mx-4" />
              <div className={`flex items-center ${step === 'account' ? 'text-primary' : 'text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step === 'account' ? 'bg-primary' : 'bg-white/20'
                }`}>
                  <User className="w-5 h-5" />
                </div>
                <span className="ml-2 font-medium hidden sm:inline">Account</span>
              </div>
              <div className="flex-1 h-0.5 bg-white/20 mx-4" />
              <div className={`flex items-center ${step === 'confirm' ? 'text-primary' : 'text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step === 'confirm' ? 'bg-primary' : 'bg-white/20'
                }`}>
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="ml-2 font-medium hidden sm:inline">Confirm</span>
              </div>
            </div>
          </div>

          {/* Step 1: Domain Search */}
          {step === 'search' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Find Your Perfect Domain</CardTitle>
                <CardDescription>
                  Search for available domains and register instantly for free
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search Bar */}
                <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="space-y-4">
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Enter domain name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-white"
                      disabled={searching}
                    >
                      {searching ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Searching...
                        </>
                      ) : (
                        'Search'
                      )}
                    </Button>
                  </div>
                </form>

                {/* Search Results */}
                {searchResults.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Available Domains</h3>
                    {searchResults.map((domain, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {domain.available ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                          <div>
                            <p className="font-medium">{domain.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {domain.available ? 'Available' : 'Not available'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-xl font-bold text-primary">{domain.price}</span>
                          <Button
                            onClick={() => handleSelectDomain(domain.name)}
                            disabled={!domain.available}
                            className="bg-primary hover:bg-primary/90 text-white"
                          >
                            Register
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {searchResults.length === 0 && !searching && searchQuery && (
                  <div className="text-center py-8 text-muted-foreground">
                    No results found. Try a different search term.
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 2: Create Account */}
          {step === 'account' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Create Your Account</CardTitle>
                <CardDescription>
                  Registering: <span className="font-semibold text-primary">{selectedDomain}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="email" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="google">Google</TabsTrigger>
                  </TabsList>

                  <TabsContent value="email">
                    <form onSubmit={handleCreateAccount} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="username"
                            type="text"
                            placeholder="Choose a username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="password"
                            type="password"
                            placeholder="Create a secure password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                      >
                        Create Account & Register Domain
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="google">
                    <div className="space-y-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={handleCreateAccount}
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        Continue with Google
                      </Button>
                      <p className="text-sm text-muted-foreground text-center">
                        Quick and secure sign-in with your Google account
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button
                    variant="ghost"
                    onClick={() => setStep('search')}
                  >
                    ← Back to Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Confirmation */}
          {step === 'confirm' && (
            <Card>
              <CardHeader>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Registration Complete!</CardTitle>
                  <CardDescription>
                    Your domain <span className="font-semibold text-primary">{selectedDomain}</span> has been registered successfully
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-lg">What's Next?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Domain Activated</p>
                        <p className="text-sm text-muted-foreground">Your domain is now live and ready to use</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Configure DNS</p>
                        <p className="text-sm text-muted-foreground">Set up your DNS records in the dashboard</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Manage Settings</p>
                        <p className="text-sm text-muted-foreground">Access all domain management tools</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={handleCompleteRegistration}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                >
                  Go to Dashboard
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    }>
      <RegistrationContent />
    </Suspense>
  )
}
