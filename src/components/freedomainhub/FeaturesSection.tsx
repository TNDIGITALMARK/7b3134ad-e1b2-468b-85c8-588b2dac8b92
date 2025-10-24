import {
  Globe,
  Mail,
  Settings,
  Server,
  Search,
  Zap,
  LayoutDashboard,
  Moon
} from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Free Registration',
    description: 'Register your domain name completely free - no hidden fees, no premium tiers, no catches.'
  },
  {
    icon: Mail,
    title: 'Easy Sign-up',
    description: 'Create your account instantly with email or Google sign-in. Start managing domains in seconds.'
  },
  {
    icon: Settings,
    title: 'Full DNS Control',
    description: 'Manage A, AAAA, CNAME, MX, TXT, NS, and SRV records with our intuitive interface.'
  },
  {
    icon: Server,
    title: 'Custom Nameservers',
    description: 'Change nameservers anytime to point your domain wherever you need it.'
  },
  {
    icon: Search,
    title: 'WHOIS Lookup',
    description: 'Instant domain information and availability checking with our WHOIS integration.'
  },
  {
    icon: Zap,
    title: 'Instant Activation',
    description: 'Your domain is activated immediately after registration - no waiting periods.'
  },
  {
    icon: LayoutDashboard,
    title: 'Modern Dashboard',
    description: 'Easy-to-use control panel with all the tools you need to manage your domains.'
  },
  {
    icon: Moon,
    title: 'Dark & Light Mode',
    description: 'Choose your preferred theme with seamless dark and light mode support.'
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Everything You Need
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Professional domain management tools, completely free forever
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
