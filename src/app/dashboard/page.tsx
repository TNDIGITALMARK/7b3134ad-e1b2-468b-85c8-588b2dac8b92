'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { Header } from '@/components/freedomainhub/Header'
import { Footer } from '@/components/freedomainhub/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Globe,
  Plus,
  Settings,
  ExternalLink,
  Calendar,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

// Mock data for user domains
const mockDomains = [
  {
    id: 1,
    name: 'personal-blog.com',
    status: 'active',
    registeredDate: 'January 15, 2025',
    dnsRecords: 8
  },
  {
    id: 2,
    name: 'startup-demo.net',
    status: 'active',
    registeredDate: 'January 20, 2025',
    dnsRecords: 12
  },
  {
    id: 3,
    name: 'creative-works.org',
    status: 'active',
    registeredDate: 'January 22, 2025',
    dnsRecords: 5
  }
]

// Mock DNS records
const mockDNSRecords = [
  { type: 'A', name: '@', value: '192.168.1.100', ttl: 3600 },
  { type: 'CNAME', name: 'www', value: 'personal-blog.com', ttl: 3600 },
  { type: 'MX', name: '@', value: 'mail.google.com', priority: 10, ttl: 3600 },
  { type: 'TXT', name: '@', value: 'v=spf1 include:_spf.google.com ~all', ttl: 3600 }
]

export default function DashboardPage() {
  const [selectedDomain, setSelectedDomain] = useState(mockDomains[0])
  const [activeTab, setActiveTab] = useState('domains')

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              My Dashboard
            </h1>
            <p className="text-white/80">
              Manage your domains and DNS settings
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Domains
                </CardTitle>
                <Globe className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-card-foreground">{mockDomains.length}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  All active and managed
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  DNS Records
                </CardTitle>
                <Settings className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-card-foreground">
                  {mockDomains.reduce((sum, d) => sum + d.dnsRecords, 0)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Across all domains
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Account Status
                </CardTitle>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-card-foreground">Active</div>
                <p className="text-xs text-muted-foreground mt-1">
                  All systems operational
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-card">
              <TabsTrigger value="domains">My Domains</TabsTrigger>
              <TabsTrigger value="dns">DNS Management</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Domains Tab */}
            <TabsContent value="domains" className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-white">Your Domains</h2>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Register New Domain
                </Button>
              </div>

              <div className="grid gap-4">
                {mockDomains.map((domain) => (
                  <Card key={domain.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-xl flex items-center gap-2">
                            <Globe className="w-5 h-5 text-primary" />
                            {domain.name}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              Registered {domain.registeredDate}
                            </span>
                            <span className="flex items-center gap-1">
                              <Settings className="w-3 h-3" />
                              {domain.dnsRecords} DNS records
                            </span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                            <CheckCircle className="w-3 h-3" />
                            {domain.status}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedDomain(domain)
                            setActiveTab('dns')
                          }}
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          Manage DNS
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* DNS Management Tab */}
            <TabsContent value="dns" className="space-y-4">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  DNS Management - {selectedDomain.name}
                </h2>
                <p className="text-white/80">
                  Manage DNS records for your domain
                </p>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>DNS Records</CardTitle>
                      <CardDescription>
                        Configure A, AAAA, CNAME, MX, TXT, NS, and SRV records
                      </CardDescription>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Record
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockDNSRecords.map((record, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border"
                      >
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div>
                            <span className="text-xs text-muted-foreground block mb-1">Type</span>
                            <span className="font-mono font-semibold text-sm">{record.type}</span>
                          </div>
                          <div>
                            <span className="text-xs text-muted-foreground block mb-1">Name</span>
                            <span className="font-mono text-sm">{record.name}</span>
                          </div>
                          <div className="md:col-span-2">
                            <span className="text-xs text-muted-foreground block mb-1">Value</span>
                            <span className="font-mono text-sm break-all">{record.value}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Nameservers Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Nameservers</CardTitle>
                  <CardDescription>
                    Change nameservers to point your domain elsewhere
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Primary Nameserver</Label>
                    <Input
                      placeholder="ns1.freedomainhub.com"
                      defaultValue="ns1.freedomainhub.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Secondary Nameserver</Label>
                    <Input
                      placeholder="ns2.freedomainhub.com"
                      defaultValue="ns2.freedomainhub.com"
                    />
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Update Nameservers
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">Account Settings</h2>

              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Manage your account details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Username</Label>
                    <Input placeholder="username" defaultValue="john_developer" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" placeholder="email@example.com" defaultValue="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Account Created</Label>
                    <Input disabled value="January 2025" />
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>
                    Configure your notification preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email notifications</p>
                      <p className="text-sm text-muted-foreground">Receive updates about your domains</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Security alerts</p>
                      <p className="text-sm text-muted-foreground">Get notified about security issues</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
