import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services | Buchanan Plumbing & Gas | Murwillumbah Plumber',
  description: 'Professional plumbing and gas fitting services in Murwillumbah and Tweed Valley. Hot water systems, gas repairs, water filters, renovations, and more. Call 0407 119910.',
}

const serviceCategories = [
  {
    title: 'Plumbing Services',
    image: '/images/plumbing_orig.jpg',
    services: [
      { name: 'General Plumbing', description: 'Professional plumbing repairs and maintenance for all your needs', image: '/images/faucet.png' },
      { name: 'Water Leak Detection & Repair', description: 'Fast identification and repair of water leaks to prevent damage', image: '/images/mixer_orig.jpg' },
      { name: 'Toilet Replacement', description: 'Quality toilet installation and replacement services', image: '/images/toilet1_orig.png' },
      { name: 'Bathroom Renovations', description: 'Complete plumbing for bathroom and kitchen renovations', image: '/images/bath_orig.png' },
      { name: 'Septic Tank Repairs', description: 'Expert septic tank repair and maintenance for rural properties', image: '/images/maintenance_orig.png' },
    ],
  },
  {
    title: 'Gas Fitting',
    image: '/images/gas_orig.jpg',
    services: [
      { name: 'Gas Fitting', description: 'Professional gas fitting for residential and commercial properties', image: '/images/gas_orig.jpg' },
      { name: 'Gas Stove Installations', description: 'Safe and professional gas stove installation', image: '/images/stove_orig.jpg' },
      { name: 'Gas Cook Top Installations', description: 'Quality gas cook top installation services', image: '/images/stovetop_orig.png' },
      { name: 'Gas Heater Servicing', description: 'Regular servicing and maintenance of gas heaters', image: '/images/gas_orig.jpg' },
      { name: 'Gas Leak Detection & Repairs', description: 'Critical gas leak detection and repair for safety', image: '/images/maintenance_orig.png' },
    ],
  },
  {
    title: 'Hot Water Systems',
    image: '/images/hws2_orig.png',
    services: [
      { name: 'Hot Water Installations', description: 'New hot water system installation for any property', image: '/images/hws1_orig.png' },
      { name: 'Hot Water Repairs', description: 'Fast repairs to get your hot water running again', image: '/images/hws2_orig.png' },
      { name: 'Gas Hot Water Systems', description: 'Energy-efficient gas hot water system installation', image: '/images/gashws_orig.jpg' },
      { name: 'Heat Pumps', description: 'Eco-friendly heat pump hot water systems', image: '/images/pump_orig.png' },
      { name: 'Electric Hot Water Systems', description: 'Electric hot water system installation and repairs', image: '/images/hws1_orig.png' },
    ],
  },
  {
    title: 'Water Filters',
    image: '/images/water-filtration_orig.png',
    services: [
      { name: 'Water Filter Systems', description: 'Complete water filtration solutions for clean, pure water', image: '/images/water-filtration_orig.png' },
      { name: 'Pure Tec Water Filters', description: 'Authorised Pure Tec water filter installation and service', image: '/images/waterfilter.png' },
      { name: 'Filter Maintenance', description: 'Regular filter replacement and system maintenance', image: '/images/waterfilter.png' },
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/maintenance_orig.png" alt="Plumbing Services" fill className="object-cover opacity-20" />
        </div>
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
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <div className="relative h-64 mb-4 img-zoom rounded-lg overflow-hidden reveal">
                      <Image src={category.image} alt={category.title} fill className="object-cover" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-primary reveal reveal-delay-1">{category.title}</h2>
                  </div>
                </div>

                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                  {category.services.map((service, servIndex) => (
                    <div
                      key={servIndex}
                      className="bg-surface border-l-4 border-accent card-hover reveal overflow-hidden"
                      style={{ animationDelay: `${servIndex * 0.05}s` }}
                    >
                      <div className="h-40 relative img-zoom">
                        <Image src={service.image} alt={service.name} fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-display text-lg text-primary mb-1">{service.name}</h3>
                        <p className="text-text-muted text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white grain-overlay">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6 reveal">
            NEED A <span className="text-accent">FREE QUOTE?</span>
          </h2>
          <p className="text-white/80 text-lg mb-8 reveal reveal-delay-1">
            Contact us today for a free, no-obligation quote on any plumbing or gas fitting service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal reveal-delay-2">
            <a href="tel:0407119910" className="btn-primary">
              Call 0407 119 910
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-display text-lg tracking-wider uppercase border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
