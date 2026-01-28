import Link from 'next/link'

const services = [
  {
    name: 'General Plumbing',
    description: 'Water leaks, toilet replacement, renovations, and all general plumbing repairs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: 'Gas Fitting',
    description: 'Gas appliance installation, repairs, leak detection, and safety inspections.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    name: 'Hot Water Systems',
    description: 'Electric, gas, and heat pump hot water installation and repairs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    name: 'Water Filters',
    description: 'Pure Tec and other quality water filter system installation and maintenance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: 'Septic Tanks',
    description: 'Septic tank repairs and maintenance for rural properties.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    name: 'Renovations',
    description: 'Complete bathroom and kitchen plumbing for your renovation project.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

const trustSignals = [
  { value: '14+', label: 'Years Experience' },
  { value: '2010', label: 'Established' },
  { value: '100%', label: 'Family Owned' },
  { value: '24/7', label: 'Available' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden grain-overlay">
        {/* Geometric decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 transform rotate-45 translate-x-48 -translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 transform rotate-45 -translate-x-32 translate-y-32"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="reveal">
              <span className="inline-block bg-accent text-white px-4 py-2 font-display text-sm tracking-widest mb-6">
                MURWILLUMBAH & TWEED VALLEY
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6 reveal reveal-delay-1">
              PLUMBING &<br />
              <span className="text-accent">GAS FITTING</span><br />
              EXPERTS
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-xl reveal reveal-delay-2">
              We pride ourselves on providing a prompt service with modern plumbing solutions & products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-3">
              <a href="tel:0407119910" className="btn-primary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 0407 119 910
              </a>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 font-display text-lg tracking-wider uppercase border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Diagonal bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-surface" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </section>

      {/* Trust Signals */}
      <section className="bg-surface py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="font-display text-4xl md:text-5xl text-accent mb-2">{signal.value}</div>
                <div className="text-text-muted uppercase tracking-wider text-sm">{signal.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 font-display text-sm tracking-widest mb-4 reveal">
              WHAT WE DO
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-4 reveal reveal-delay-1">
              OUR SERVICES
            </h2>
            <div className="decorative-line mx-auto reveal reveal-delay-2"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-surface p-8 border-l-4 border-accent card-hover reveal"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary text-accent rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl text-primary mb-3">{service.name}</h3>
                <p className="text-text-muted">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal" style={{ animationDelay: '0.9s' }}>
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary text-white grain-overlay relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 transform rotate-45 translate-x-40"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent text-white px-4 py-2 font-display text-sm tracking-widest mb-6 reveal">
                WHY CHOOSE US
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 reveal reveal-delay-1">
                FAMILY OWNED<br />
                <span className="text-accent">SINCE 2010</span>
              </h2>
              <p className="text-white/80 text-lg mb-8 reveal reveal-delay-2">
                Buchanan Plumbing and Gas is a family run business operating since 2010, providing plumbing and gasfitting services to the Murwillumbah and Tweed Valley Region. We specialize in general plumbing and gas maintenance repairs and appliance installations.
              </p>
              <ul className="space-y-4 reveal reveal-delay-3">
                {['Domestic & Commercial', 'Rural Properties', 'Real Estate Agents', 'Shops & Sporting Venues'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative reveal reveal-delay-4">
              <div className="bg-accent/20 p-8 md:p-12 offset-border">
                <div className="bg-white/10 p-6 mb-6">
                  <p className="text-2xl font-display text-accent mb-2">&ldquo;NO ONE LIKES A COLD SHOWER&rdquo;</p>
                  <p className="text-white/70">Let us take care of your hot water needs</p>
                </div>
                <div className="bg-white/10 p-6 mb-6">
                  <p className="text-2xl font-display text-accent mb-2">TIME FOR A NEW TOILET?</p>
                  <p className="text-white/70">Professional toilet replacement services</p>
                </div>
                <div className="bg-white/10 p-6">
                  <p className="text-2xl font-display text-accent mb-2">NEED A WATER FILTER?</p>
                  <p className="text-white/70">Pure Tec and quality water filter systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 font-display text-sm tracking-widest mb-4 reveal">
              FAQ
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4 reveal reveal-delay-1">
              COMMON QUESTIONS
            </h2>
            <div className="decorative-line mx-auto reveal reveal-delay-2"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What areas do you service?',
                answer: 'We service Murwillumbah, Tweed Valley, Tweed Heads, Stokers Siding, and all surrounding districts in the Northern NSW region.',
              },
              {
                question: 'Do you offer emergency plumbing services?',
                answer: 'Yes, we understand that plumbing emergencies can happen at any time. Contact us on 0407 119 910 and we\'ll do our best to assist you promptly.',
              },
              {
                question: 'Are you licensed gas fitters?',
                answer: 'Yes, we are fully licensed and insured gas fitters. We handle all gas appliance installations, repairs, and safety inspections.',
              },
              {
                question: 'How much does a plumber cost in Murwillumbah?',
                answer: 'Costs vary depending on the job. Contact us for a free quote and we\'ll provide transparent pricing for your specific plumbing needs.',
              },
              {
                question: 'Do you work with commercial properties?',
                answer: 'Yes, we work with domestic, commercial, rural properties, real estate agents, shops, and sporting venues throughout the Tweed Valley region.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-surface p-6 border-l-4 border-accent reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="font-display text-xl text-primary mb-2">{faq.question}</h3>
                <p className="text-text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 font-display text-sm tracking-widest mb-4 reveal">
            PROUDLY SERVING
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-8 reveal reveal-delay-1">
            THE TWEED VALLEY REGION
          </h2>
          <div className="flex flex-wrap justify-center gap-4 reveal reveal-delay-2">
            {['Murwillumbah', 'Tweed Valley', 'Tweed Heads', 'Stokers Siding', 'Uki', 'Tyalgum', 'Burringbar'].map((area, index) => (
              <span key={index} className="bg-white px-6 py-3 font-display text-primary border-2 border-primary/20">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
