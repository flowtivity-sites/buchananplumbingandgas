'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-accent py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span className="font-medium">Family owned since 2010</span>
          <a href="tel:0407119910" className="font-bold hover:underline flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0407 119 910
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <span className="font-display text-2xl md:text-3xl tracking-wide">BUCHANAN</span>
              <span className="block text-xs text-accent uppercase tracking-widest">Plumbing & Gas</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-medium hover:text-accent transition-colors">Home</Link>
            <Link href="/services" className="font-medium hover:text-accent transition-colors">Services</Link>
            <Link href="/about" className="font-medium hover:text-accent transition-colors">About</Link>
            <Link href="/contact" className="font-medium hover:text-accent transition-colors">Contact</Link>
            <a href="tel:0407119910" className="btn-primary">
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4 flex flex-col gap-4">
            <Link href="/" className="font-medium hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/services" className="font-medium hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/about" className="font-medium hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" className="font-medium hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <a href="tel:0407119910" className="btn-primary text-center">
              Get a Quote
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
