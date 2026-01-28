import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    name: 'General Plumbing',
    description: 'Water leaks, toilet replacement, renovations, and all general plumbing repairs.',
    image: '/images/faucet.png',
  },
  {
    name: 'Gas Fitting',
    description: 'Gas appliance installation, repairs, leak detection, and safety inspections.',
    image: '/images/gas_orig.jpg',
  },
  {
    name: 'Hot Water Systems',
    description: 'Electric, gas, and heat pump hot water installation and repairs.',
    image: '/images/hws2_orig.png',
  },
  {
    name: 'Water Filters',
    description: 'Pure Tec and other quality water filter system installation and maintenance.',
    image: '/images/waterfilter.png',
  },
  {
    name: 'Toilet Replacement',
    description: 'Professional toilet replacement and installation services.',
    image: '/images/toilet1_orig.png',
  },
  {
    name: 'Gas Appliances',
    description: 'Gas stove, cooktop, and heater installation and servicing.',
    image: '/images/stovetop_orig.png',
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
      <section className="relative bg-primary text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/banner-1_orig.png"
            alt="Buchanan Plumbing & Gas"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70"></div>
        </div>

        {/* Geometric decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 transform rotate-45 translate-x-48 -translate-y-24"></div>

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
                className="bg-surface border-l-4 border-accent card-hover reveal overflow-hidden"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="h-48 relative img-zoom">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-primary mb-3">{service.name}</h3>
                  <p className="text-text-muted">{service.description}</p>
                </div>
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

      {/* Why Choose Us with Luke's Image */}
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
                Buchanan Plumbing and Gas is a family run business operating since 2010, providing quality plumbing and gasfitting services to the Murwillumbah and Tweed Valley Region. We specialize in general plumbing and gas maintenance repairs and appliance installations.
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
              <div className="offset-border">
                <Image
                  src="/images/luke_orig.png"
                  alt="Luke Buchanan - Owner"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services with Images */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center reveal">
              <div className="relative h-64 mb-6 img-zoom rounded-lg overflow-hidden">
                <Image src="/images/toilet1_orig.png" alt="Toilet Replacement" fill className="object-cover" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-2">TIME FOR A NEW TOILET?</h3>
              <p className="text-text-muted">Professional toilet replacement services</p>
            </div>
            <div className="text-center reveal reveal-delay-1">
              <div className="relative h-64 mb-6 img-zoom rounded-lg overflow-hidden">
                <Image src="/images/shower-rose_orig.png" alt="Hot Water" fill className="object-cover" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-2">&ldquo;NO ONE LIKES A COLD SHOWER&rdquo;</h3>
              <p className="text-text-muted">Let us take care of your hot water needs</p>
            </div>
            <div className="text-center reveal reveal-delay-2">
              <div className="relative h-64 mb-6 img-zoom rounded-lg overflow-hidden">
                <Image src="/images/water-filtration_orig.png" alt="Water Filters" fill className="object-cover" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-2">NEED A WATER FILTER?</h3>
              <p className="text-text-muted">Pure Tec and quality water filter systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-surface">
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
              <div key={index} className="bg-white p-6 border-l-4 border-accent reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="font-display text-xl text-primary mb-2">{faq.question}</h3>
                <p className="text-text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 font-display text-sm tracking-widest mb-4 reveal">
            PROUDLY SERVING
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-8 reveal reveal-delay-1">
            THE TWEED VALLEY REGION
          </h2>
          <div className="flex flex-wrap justify-center gap-4 reveal reveal-delay-2">
            {['Murwillumbah', 'Tweed Valley', 'Tweed Heads', 'Stokers Siding', 'Uki', 'Tyalgum', 'Burringbar'].map((area, index) => (
              <span key={index} className="bg-surface px-6 py-3 font-display text-primary border-2 border-primary/20">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
