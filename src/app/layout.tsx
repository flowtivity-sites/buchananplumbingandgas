import type { Metadata } from 'next'
import { Bebas_Neue, Work_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Buchanan Plumbing & Gas | Murwillumbah Plumber & Gas Fitter',
  description: 'Family-owned plumbing and gas fitting services in Murwillumbah and Tweed Valley since 2010. Prompt service with modern solutions. Call 0407 119910 for a free quote.',
  keywords: 'plumber murwillumbah, gas fitter tweed valley, hot water systems, gas repairs, plumbing services stokers siding',
  openGraph: {
    title: 'Buchanan Plumbing & Gas | Murwillumbah Plumber & Gas Fitter',
    description: 'Family-owned plumbing and gas fitting services in Murwillumbah and Tweed Valley since 2010.',
    type: 'website',
    locale: 'en_AU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${workSans.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://buchananplumbingandgas.sites.flowtivity.com.au",
              "name": "Buchanan Plumbing & Gas",
              "description": "Family-owned plumbing and gas fitting services in Murwillumbah and Tweed Valley since 2010.",
              "url": "https://buchananplumbingandgas.sites.flowtivity.com.au",
              "telephone": "0407 119910",
              "email": "buchananplumbingandgas@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Stokers Siding",
                "addressRegion": "NSW",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -28.3833,
                "longitude": 153.4167
              },
              "areaServed": [
                "Murwillumbah",
                "Tweed Valley",
                "Stokers Siding",
                "Tweed Heads"
              ],
              "serviceType": [
                "Plumbing",
                "Gas Fitting",
                "Hot Water Systems",
                "Gas Appliance Repairs"
              ],
              "foundingDate": "2010",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "07:00",
                "closes": "17:00"
              }
            })
          }}
        />
      </body>
    </html>
  )
}
