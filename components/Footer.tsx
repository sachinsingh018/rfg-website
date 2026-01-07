"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle brand color accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red/30 via-brand-blue/30 to-brand-white/20" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-brand-blue/3 rounded-full blur-3xl" />
      <div className="absolute top-20 left-0 w-96 h-96 bg-brand-red/3 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 lg:gap-10">
          {/* Get in Touch */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-brand-red/10 to-brand-blue/10 group-hover:from-brand-red/20 group-hover:to-brand-blue/20 transition-all mr-4">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <p className="text-primary-foreground/90 text-sm leading-relaxed pt-1">
                  510, AT By AGM Vijaylaxmi Venture, Plot 6/7,
                  Mahal Industrial Estate, Mahakali Caves Road, Andheri East,
                  Mumbai 400093.
                </p>
              </div>
              <div className="flex items-start group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-red/10 group-hover:from-brand-blue/20 group-hover:to-brand-red/20 transition-all mr-4">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div className="text-primary-foreground/90 text-sm pt-1">
                  <a
                    href="tel:+918291642739"
                    className="block hover:text-accent transition-colors mb-1"
                  >
                    +91 82916 42739
                  </a>
                  <a
                    href="tel:+917400139877"
                    className="block hover:text-accent transition-colors"
                  >
                    +91 74001 39877
                  </a>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-brand-red/10 to-brand-blue/10 group-hover:from-brand-red/20 group-hover:to-brand-blue/20 transition-all mr-4">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div className="text-primary-foreground/90 text-sm pt-1 space-y-1">
                  <a
                    href="mailto:rhomboidfinguru@gmail.com"
                    className="block hover:text-accent transition-colors"
                  >
                    rhomboidfinguru@gmail.com
                  </a>
                  <a
                    href="mailto:info@rhomboidfinguru.com"
                    className="block hover:text-accent transition-colors"
                  >
                    info@rhomboidfinguru.com
                  </a>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-red/10 group-hover:from-brand-blue/20 group-hover:to-brand-red/20 transition-all mr-4">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <a
                  href="https://www.rhomboidfinguru.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/90 hover:text-accent transition-colors text-sm pt-1"
                >
                  www.rhomboidfinguru.com
                </a>
              </div>
            </div>
          </div>

          {/* About Company */}
          <div className="flex-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">About Rhomboid Finguru</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                Your trusted partner for comprehensive financial solutions. We specialize in providing
                end-to-end loan consultancy and syndication services, connecting you with leading
                banks and financial institutions across India.
              </p>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                With expertise in secured and unsecured loans, we ensure fast deal conversions,
                competitive interest rates, and personalized financial guidance tailored to your needs.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium text-primary-foreground/90 border border-white/10">
                Home Loans
              </span>
              <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium text-primary-foreground/90 border border-white/10">
                Business Loans
              </span>
              <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium text-primary-foreground/90 border border-white/10">
                Personal Loans
              </span>
              <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium text-primary-foreground/90 border border-white/10">
                MSME Finance
              </span>
              <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium text-primary-foreground/90 border border-white/10">
                Loan Against Property
              </span>
            </div>
          </div>

          {/* Regional Services - Subtle Links for SEO */}
          <div className="flex-1 hidden lg:block">
            <h3 className="text-2xl font-bold mb-4">Regional Services</h3>
            <div className="space-y-2 text-sm">
              <Link
                href="/seo/locations/maharashtra"
                className="block text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Financial Services in Maharashtra
              </Link>
              <Link
                href="/seo/locations/mumbai"
                className="block text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Financial Services in Mumbai
              </Link>
              <Link
                href="/seo/locations/gujarat"
                className="block text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Financial Services in Gujarat
              </Link>
              <Link
                href="/seo/locations/karnataka"
                className="block text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Financial Services in Karnataka
              </Link>
              <Link
                href="/seo/locations/tamil-nadu"
                className="block text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Financial Services in Tamil Nadu
              </Link>
              <Link
                href="/seo/locations/telangana"
                className="block text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Financial Services in Telangana
              </Link>
              <Link
                href="/seo/locations/andhra-pradesh"
                className="block text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Financial Services in Andhra Pradesh
              </Link>
              <Link
                href="/seo/locations/madhya-pradesh"
                className="block text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Financial Services in Madhya Pradesh
              </Link>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center mt-10 mb-6">
          <div className="relative w-72 md:w-80 lg:w-96 h-20 md:h-24 lg:h-28">
            <Image
              src="/rfg.png"
              alt="Rhomboid Finguru"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Rhomboid Finguru Private Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

