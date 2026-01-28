import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Buchanan Plumbing & Gas | Murwillumbah Plumber',
  description: 'Contact Buchanan Plumbing & Gas for plumbing and gas fitting services in Murwillumbah and Tweed Valley. Call 0407 119910 or email us for a free quote.',
}

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden grain-overlay">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 transform rotate-45 translate-x-48 -translate-y-24"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <span className="inline-block bg-accent text-white px-4 py-2 font-display text-sm tracking-widest mb-6 reveal">
            GET IN TOUCH
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-none mb-6 reveal reveal-delay-1">
            CONTACT <span className="text-accent">US</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl reveal reveal-delay-2">
            Ready to discuss your plumbing or gas fitting needs? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 font-display text-sm tracking-widest mb-4 reveal">
                REACH OUT
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-6 reveal reveal-delay-1">
                LET&apos;S <span className="text-accent">TALK</span>
              </h2>
              <p className="text-text-muted mb-8 reveal reveal-delay-2">
                Contact us for a free quote or to discuss your plumbing and gas fitting requirements. We service Murwillumbah, Tweed Valley, and all surrounding areas.
              </p>

              <div className="space-y-6 reveal reveal-delay-3">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-1">Phone</h3>
                    <a href="tel:0407119910" className="text-accent text-lg hover:underline">0407 119 910</a>
                    <p className="text-text-muted text-sm mt-1">Call us for prompt service</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-1">Email</h3>
                    <a href="mailto:buchananplumbingandgas@gmail.com" className="text-accent hover:underline break-all">buchananplumbingandgas@gmail.com</a>
                    <p className="text-text-muted text-sm mt-1">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-1">Location</h3>
                    <p className="text-text-main">Stokers Siding, NSW</p>
                    <p className="text-text-muted text-sm mt-1">Servicing Murwillumbah & Tweed Valley</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-1">Hours</h3>
                    <p className="text-text-main">Monday - Friday: 7am - 5pm</p>
                    <p className="text-text-muted text-sm mt-1">Emergency calls available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-surface p-8 md:p-10 reveal reveal-delay-4">
              <h3 className="font-display text-2xl text-primary mb-6">REQUEST A QUOTE</h3>
              <form
                action="https://formspree.io/f/buchananplumbingandgas@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-main mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-primary/20 focus:border-accent focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-main mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-primary/20 focus:border-accent focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-main mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-primary/20 focus:border-accent focus:outline-none transition-colors"
                    placeholder="0400 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-main mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border-2 border-primary/20 focus:border-accent focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="General Plumbing">General Plumbing</option>
                    <option value="Gas Fitting">Gas Fitting</option>
                    <option value="Hot Water Systems">Hot Water Systems</option>
                    <option value="Water Filters">Water Filters</option>
                    <option value="Renovations">Renovations</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-main mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-primary/20 focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your plumbing or gas fitting needs..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-surface">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27914.676547775654!2d153.39066!3d-28.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9068c7a9e7a5e3%3A0x40609b4904432e0!2sStokers%20Siding%20NSW%202484!5e0!3m2!1sen!2sau!4v1706000000000!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Buchanan Plumbing & Gas Location"
        ></iframe>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-primary text-white grain-overlay">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-8 reveal">
            AREAS WE <span className="text-accent">SERVICE</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 reveal reveal-delay-1">
            {['Murwillumbah', 'Tweed Valley', 'Tweed Heads', 'Stokers Siding', 'Uki', 'Tyalgum', 'Burringbar', 'Kingscliff', 'Pottsville', 'Cabarita Beach'].map((area, index) => (
              <span key={index} className="bg-white/10 px-6 py-3 font-display">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
