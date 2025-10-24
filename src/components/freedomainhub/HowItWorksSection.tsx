import { UserPlus, Search, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    step: 'Step 1',
    title: 'Create a Free Account',
    description: 'Sign up with your email or Google account. Takes just 30 seconds.',
    time: '30 seconds'
  },
  {
    icon: Search,
    step: 'Step 2',
    title: 'Search for Your Domain',
    description: 'Use our powerful search to find the perfect domain name for your project.',
    time: 'Instant'
  },
  {
    icon: CheckCircle,
    step: 'Step 3',
    title: 'Register & Manage',
    description: 'Register instantly and start managing your DNS settings right away.',
    time: 'Under 2 minutes'
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            How It Works
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Get your free domain in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-primary/30 -z-10" />
              )}

              {/* Step Card */}
              <div className="bg-card rounded-xl p-8 shadow-lg text-center relative">
                {/* Icon Circle */}
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full shadow-lg">
                  <item.icon className="w-10 h-10 text-white" />
                </div>

                {/* Step Label */}
                <div className="mb-3">
                  <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>

                {/* Time Badge */}
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                  {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-lg text-lg transition-all glow-orange">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}
