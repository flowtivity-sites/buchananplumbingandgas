import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Buchanan Plumbing & Gas | Family Owned Since 2010',
  description: 'Learn about Buchanan Plumbing & Gas, a family-owned business serving Murwillumbah and Tweed Valley since 2010. Quality plumbing and gas fitting services.',
}

const values = [
  {
    title: 'Prompt Service',
    description: 'We understand that plumbing issues need quick attention. We respond promptly to get your problems sorted.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Modern Solutions',
    description: 'We stay up-to-date with the latest plumbing technology and products to give you the best solutions.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Quality Workmanship',
    description: 'Every job is done right the first time. We take pride in delivering quality work that lasts.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Local Knowledge',
    description: 'We know the Tweed Valley region inside and out, understanding local plumbing challenges and requirements.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

const clients = [
  'Domestic Homes',
  'Commercial Properties',
  'Rural Properties',
  'Real Estate Agents',
  'Retail Shops',
  'Sporting Venues',
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden grain-overlay">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 transform rotate-45 translate-x-48 -translate-y-24"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <span className="inline-block bg-accent text-white px-4 py-2 font-display text-sm tracking-widest mb-6 reveal">
            OUR STORY
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-none mb-6 reveal reveal-delay-1">
            ABOUT <span className="text-accent">US</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl reveal reveal-delay-2">
            Family-owned and operated, proudly serving the Tweed Valley community since 2010.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 font-display text-sm tracking-widest mb-4 reveal">
                ESTABLISHED 2010
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-6 reveal reveal-delay-1">
                A FAMILY<br /><span className="text-accent">TRADITION</span>
              </h2>
              <div className="space-y-4 text-text-muted reveal reveal-delay-2">
                <p>
                  Buchanan Plumbing and Gas is a family run business operating since 2010, providing quality plumbing and gasfitting services to the Murwillumbah and Tweed Valley Region.
                </p>
                <p>
                  We specialize in general plumbing and gas maintenance repairs and appliance installations for a diverse range of clients, from homeowners to commercial businesses.
                </p>
                <p>
                  Our commitment to prompt service and modern plumbing solutions has made us a trusted name in the local community. We pride ourselves on delivering quality workmanship and reliable service every time.
                </p>
              </div>
            </div>

            <div className="relative reveal reveal-delay-3">
              <div className="bg-surface p-8 offset-border">
                <div className="font-display text-8xl text-accent/20 absolute top-4 right-8">&ldquo;</div>
                <blockquote className="relative z-10">
                  <p className="text-xl text-primary mb-6 italic">
                    We pride ourselves on providing a prompt service with modern plumbing solutions & products
                  </p>
                  <footer className="text-text-muted">
                    <strong className="text-primary">— Buchanan Plumbing & Gas</strong>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 font-display text-sm tracking-widest mb-4 reveal">
              OUR VALUES
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4 reveal reveal-delay-1">
              WHY CHOOSE US
            </h2>
            <div className="decorative-line mx-auto reveal reveal-delay-2"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 card-hover reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary text-accent rounded-lg flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl text-primary mb-3">{value.title}</h3>
                <p className="text-text-muted text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-primary text-white grain-overlay relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 transform rotate-45 translate-x-40"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent text-white px-4 py-2 font-display text-sm tracking-widest mb-4 reveal">
              WHO WE SERVE
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-4 reveal reveal-delay-1">
              OUR <span className="text-accent">CLIENTS</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 text-center hover:bg-accent/20 transition-colors reveal"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="font-display text-lg">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6 reveal">
            READY TO GET STARTED?
          </h2>
          <p className="text-text-muted text-lg mb-8 reveal reveal-delay-1">
            Contact us today for a free quote on any plumbing or gas fitting service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal reveal-delay-2">
            <a href="tel:0407119910" className="btn-primary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 0407 119 910
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-display text-lg tracking-wider uppercase border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
