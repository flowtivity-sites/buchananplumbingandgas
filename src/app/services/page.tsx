import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Buchanan Plumbing & Gas | Murwillumbah Plumber',
  description: 'Professional plumbing and gas fitting services in Murwillumbah and Tweed Valley. Hot water systems, gas repairs, water filters, renovations, and more. Call 0407 119910.',
}

const serviceCategories = [
  {
    title: 'Plumbing Services',
    services: [
      { name: 'General Plumbing', description: 'Professional plumbing repairs and maintenance for all your needs' },
      { name: 'Water Leak Detection & Repair', description: 'Fast identification and repair of water leaks to prevent damage' },
      { name: 'Toilet Replacement', description: 'Quality toilet installation and replacement services' },
      { name: 'Septic Tank Repairs', description: 'Expert septic tank repair and maintenance for rural properties' },
      { name: 'Renovations', description: 'Complete plumbing services for bathroom and kitchen renovations' },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Gas Fitting',
    services: [
      { name: 'Gas Fitting', description: 'Professional gas fitting for residential and commercial properties' },
      { name: 'Gas Appliance Repairs', description: 'Expert repair services for all gas appliances' },
      { name: 'Gas Stove Installations', description: 'Safe and professional gas stove installation' },
      { name: 'Gas Cook Top Installations', description: 'Quality gas cook top installation services' },
      { name: 'Gas Heater Servicing', description: 'Regular servicing and maintenance of gas heaters' },
      { name: 'Gas Leak Detection & Repairs', description: 'Critical gas leak detection and repair for safety' },
      { name: 'General Gas Repairs', description: 'All types of gas repair and maintenance work' },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    title: 'Hot Water Systems',
    services: [
      { name: 'Hot Water Installations', description: 'New hot water system installation for any property' },
      { name: 'Hot Water Repairs', description: 'Fast repairs to get your hot water running again' },
      { name: 'Electric Hot Water Systems', description: 'Installation and repair of electric hot water units' },
      { name: 'Gas Hot Water Installation', description: 'Energy-efficient gas hot water system installation' },
      { name: 'Instant Gas Hot Water', description: 'Modern instant gas hot water system solutions' },
      { name: 'Heat Pumps', description: 'Eco-friendly heat pump hot water systems' },
      { name: 'Hydro Therm Heat Pump', description: 'Specialist Hydro Therm heat pump installation' },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Water Filters',
    services: [
      { name: 'Water Filter Systems', description: 'Complete water filtration solutions for clean, pure water' },
      { name: 'Pure Tec Water Filters', description: 'Authorised Pure Tec water filter installation and service' },
      { name: 'Filter Maintenance', description: 'Regular filter replacement and system maintenance' },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden grain-overlay">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 transform rotate-45 translate-x-48 -translate-y-24"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <span className="inline-block bg-accent text-white px-4 py-2 font-display text-sm tracking-widest mb-6 reveal">
            WHAT WE DO
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-none mb-6 reveal reveal-delay-1">
            OUR <span className="text-accent">SERVICES</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl reveal reveal-delay-2">
            Comprehensive plumbing and gas fitting services for residential, commercial, and rural properties throughout the Tweed Valley.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {serviceCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-8 reveal">
                <div className="w-16 h-16 bg-primary text-accent rounded-lg flex items-center justify-center">
                  {category.icon}
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-primary">{category.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, servIndex) => (
                  <div
                    key={servIndex}
                    className="bg-surface p-6 border-l-4 border-accent card-hover reveal"
                    style={{ animationDelay: `${servIndex * 0.05}s` }}
                  >
                    <h3 className="font-display text-xl text-primary mb-2">{service.name}</h3>
                    <p className="text-text-muted text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 font-display text-sm tracking-widest mb-4 reveal">
                SERVICE AREAS
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-6 reveal reveal-delay-1">
                PROUDLY SERVING THE<br /><span className="text-accent">TWEED VALLEY</span>
              </h2>
              <p className="text-text-muted mb-8 reveal reveal-delay-2">
                From Murwillumbah to Tweed Heads, we provide prompt and reliable plumbing and gas services to all areas of the Tweed Valley region.
              </p>
              <div className="flex flex-wrap gap-3 reveal reveal-delay-3">
                {['Murwillumbah', 'Tweed Valley', 'Tweed Heads', 'Stokers Siding', 'Uki', 'Tyalgum', 'Burringbar', 'Kingscliff'].map((area) => (
                  <span key={area} className="bg-white px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-primary p-8 text-white reveal reveal-delay-4">
              <h3 className="font-display text-3xl mb-6 text-accent">GET A FREE QUOTE</h3>
              <p className="text-white/80 mb-6">
                Contact us today for a free, no-obligation quote on any of our plumbing or gas fitting services.
              </p>
              <div className="space-y-4">
                <a href="tel:0407119910" className="flex items-center gap-3 text-lg hover:text-accent transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0407 119 910
                </a>
                <a href="mailto:buchananplumbingandgas@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  buchananplumbingandgas@gmail.com
                </a>
              </div>
              <Link href="/contact" className="btn-primary mt-8 w-full">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
