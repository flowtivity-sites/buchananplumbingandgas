import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* CTA Section */}
      <div className="bg-accent py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-4">NEED A PLUMBER?</h2>
          <p className="text-lg mb-6 opacity-90">Prompt service with modern plumbing solutions</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0407119910" className="bg-primary text-white px-8 py-4 font-display text-lg tracking-wider uppercase hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 0407 119 910
            </a>
            <Link href="/contact" className="bg-white text-primary px-8 py-4 font-display text-lg tracking-wider uppercase hover:bg-surface transition-colors">
              Request Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <span className="font-display text-xl">BUCHANAN</span>
                <span className="block text-xs text-accent uppercase tracking-widest">Plumbing & Gas</span>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Family-owned plumbing and gas fitting services serving the Tweed Valley since 2010.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl mb-4 text-accent">SERVICES</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="/services" className="hover:text-accent transition-colors">General Plumbing</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Gas Fitting</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Hot Water Systems</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Water Filters</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Gas Repairs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl mb-4 text-accent">CONTACT</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Stokers Siding, NSW
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0407119910" className="hover:text-accent transition-colors">0407 119 910</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:buchananplumbingandgas@gmail.com" className="hover:text-accent transition-colors break-all">buchananplumbingandgas@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display text-xl mb-4 text-accent">SERVICE AREAS</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Murwillumbah</li>
              <li>Tweed Valley</li>
              <li>Tweed Heads</li>
              <li>Stokers Siding</li>
              <li>& Surrounding Areas</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Buchanan Plumbing & Gas. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
