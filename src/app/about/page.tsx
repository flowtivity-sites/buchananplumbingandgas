import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us | Buchanan Plumbing & Gas | Family Owned Since 2010',
  description: 'Learn about Buchanan Plumbing & Gas, a family-owned business serving Murwillumbah and Tweed Valley since 2010. Quality plumbing and gas fitting services.',
}

const values = [
  {
    title: 'Prompt Service',
    description: 'We understand that plumbing issues need quick attention. We respond promptly to get your problems sorted.',
  },
  {
    title: 'Modern Solutions',
    description: 'We stay up-to-date with the latest plumbing technology and products to give you the best solutions.',
  },
  {
    title: 'Quality Workmanship',
    description: 'Every job is done right the first time. We take pride in delivering quality work that lasts.',
  },
  {
    title: 'Local Knowledge',
    description: 'We know the Tweed Valley region inside and out, understanding local plumbing challenges.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/banner-1_orig.png" alt="About Buchanan Plumbing" fill className="object-cover opacity-20" />
        </div>
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

      {/* Story Section with Luke's Image */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
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

            <div className="order-1 lg:order-2 reveal reveal-delay-3">
              <div className="relative">
                <div className="offset-border">
                  <Image
                    src="/images/luke_orig.png"
                    alt="Luke Buchanan - Owner of Buchanan Plumbing & Gas"
                    width={600}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-accent text-white p-4 font-display text-lg">
                  LUKE BUCHANAN<br />
                  <span className="text-sm opacity-80">Owner & Operator</span>
                </div>
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
              <div key={index} className="bg-white p-6 border-l-4 border-accent card-hover reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="font-display text-xl text-primary mb-3">{value.title}</h3>
                <p className="text-text-muted text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Gallery */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 font-display text-sm tracking-widest mb-4 reveal">
              OUR WORK
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4 reveal reveal-delay-1">
              QUALITY <span className="text-accent">CRAFTSMANSHIP</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/images/hws2_orig.png',
              '/images/toilet1_orig.png',
              '/images/stovetop_orig.png',
              '/images/water-filtration_orig.png',
              '/images/pump_orig.png',
              '/images/shower-rose_orig.png',
              '/images/gashws_orig.jpg',
              '/images/bath_orig.png',
            ].map((img, index) => (
              <div key={index} className="relative h-48 md:h-64 img-zoom rounded-lg overflow-hidden reveal" style={{ animationDelay: `${index * 0.05}s` }}>
                <Image src={img} alt="Our Work" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white grain-overlay">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6 reveal">
            READY TO GET STARTED?
          </h2>
          <p className="text-white/80 text-lg mb-8 reveal reveal-delay-1">
            Contact us today for a free quote on any plumbing or gas fitting service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal reveal-delay-2">
            <a href="tel:0407119910" className="btn-primary">Call 0407 119 910</a>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-display text-lg tracking-wider uppercase border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
