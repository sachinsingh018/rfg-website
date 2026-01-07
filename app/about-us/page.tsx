"use client"

import Image from "next/image"
import { Mail, Phone, MapPin, Globe, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import PageHero from "@/components/PageHero"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function AboutUsPage() {
  const [imageIndex, setImageIndex] = useState(0)
  const images = [
    { src: "/atagm.png", alt: "Company Image" },
    { src: "/abcd.jpg", alt: "Company Image" },
    { src: "/415.jpg", alt: "Company Image" },
  ]

  return (
    <div className="min-h-screen">
      <PageHero title="About Us" />
      <div className="pt-6 md:pt-12">
      <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* About the Company */}
          <section className="mb-4 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              About the Company
            </h2>
            <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
              <p>
                The Company was Incorporated on 6th June 2017, and is engaged –
                in providing consultancy and syndication services for various
                types of loans/ advances or financial needs ensuring setting up
                the desired financial partnerships with leading Indian Public &
                Private Sector Banks and Financial Institutions. The company
                is a one stop shop for all financial needs, including
                construction finance, NPA/Stressed asset resolutions, Finance
                for SMEs including working capital, Project Loans, Loan Against
                Property, LRDs, Loans covered under CGTMSE etc. The Company has
                established tie ups with leading Banks and financial institutions
                in Maharashtra, Gujarat, Tamil Nadu, Karnataka Madhya Pradesh
                etc. The company is ambitious to grow further and intends to
                expand its operation in other metros and tier one cities.
              </p>
              <p>
                We are a group of bankers, experts in structuring deals as per
                the financial needs of our clients, coupled and substantiated
                with cash flows of the client. We are competent in taking
                immediate decision on the do-ability of the proposals at the
                initial stage itself and are providing end to end solution with
                fast deal conversions. We also provide financial advisory for
                Stressed Assets and for High Risk Business segments. We cater to
                mid segment clients who are in need of financial assistance for
                growth and expansion of their business. We have special expertise
                in financing specific industries such as Hotels / Hospitality &
                Resorts, Educational Institutions, Real Estate, Agro Processing,
                Agri traders and Adatiyas, Agri export import, Pharmaceutical
                Industries, Logistics (incl. transportation and warehousing),
                infrastructure (EPC Segment) etc. We have specialized team to take
                care of stress/ NPA accounts which envisages providing end to end
                services incl. defending Litigations in Court of Law. enabling
                borrowers to come out of financial crisis and revival of
                businesses.
              </p>
              <p>
                We deliver services on a client based approach model wherein we
                begin with understanding the client&apos;s requirement. We, then advise
                the most suitable loan product in the market at the best rates.
                We also offer customized lending solutions catering to client&apos;s
                specific requirements. The company with its expert loan
                counselors and a structured customer relationship management team
                ensures end-to-end services to the clients. We manage the entire
                borrowing process on behalf of the client that includes choosing
                the right product from the appropriate lending organization,
                managing documentation, advising on professional issues and
                assisting the client till the entire loan is disbursed.
              </p>
              <p>
                As an equal service opportunity provider the company has the
                required professionals to cater to the needs of the customer.
                With the positive growth mindset outlook, Rhomboid has already
                started to strengthen its managerial level with more quality
                conscious people and widen the executive rung with more talented
                professionals.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Company Images Gallery - Full Width */}
      <section className="mb-4 md:mb-8 bg-muted/20 py-6 md:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Mobile: Carousel, Desktop: Grid */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${imageIndex * 100}%)` }}
              >
                {images.map((img, index) => (
                  <div key={index} className="flex-shrink-0 w-full px-2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] hover:scale-105 transition-transform duration-300">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-4 md:mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setImageIndex(Math.max(0, imageIndex - 1))}
                disabled={imageIndex === 0}
                className="rounded-full h-10 w-10 border-2"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImageIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === imageIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setImageIndex(Math.min(images.length - 1, imageIndex + 1))}
                disabled={imageIndex >= images.length - 1}
                className="rounded-full h-10 w-10 border-2"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {images.map((img, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] hover:scale-105 transition-transform duration-300">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <section className="mb-4 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Contact Us
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@rhomboidfinguru.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@rhomboidfinguru.com
                </a>
              </div>
            </div>
          </section>

          {/* Locations Covered */}
          <section className="mb-4 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Locations Covered
            </h2>
            <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
              Mumbai, Ahmedabad, Rajkot, Surat, Baroda, Pune, Nashik, Chennai,
              Bangalore and Hyderabad
            </p>
          </section>

          {/* Unique Features */}
          <section className="mb-4 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Unique Features and Core Competencies of Rhomboid Finguru Pvt. Ltd
            </h2>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-base text-muted-foreground">Conference Call Decision Making</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-base text-muted-foreground">CIBIL Generation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-base text-muted-foreground">CIBIL Data Rectification</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-base text-muted-foreground">Experienced Staff</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                  PAN India connectivity with Banks, FIs and Referral Points
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                  One stop for all Financial Guidance and Debt Structuring
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                  End to End solutions for Stressed Accounts
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* Get in Touch - Full Width */}
      <div className="container mx-auto px-4 lg:px-8 py-6 md:py-8">
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-6 md:p-10 lg:p-12 shadow-xl border border-border/50 overflow-hidden group max-w-7xl mx-auto">
            {/* Decorative gradient accent bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
            
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-4 md:mb-8">
                <div className="w-1.5 h-10 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-4" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  Get in Touch
                </h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                  {/* Address */}
                  <div className="flex items-start group/item">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-brand-red/10 to-brand-blue/10 group-hover/item:from-brand-red/20 group-hover/item:to-brand-blue/20 transition-all mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-semibold mb-2 text-base">Address</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        510, AT By AGM Vijaylaxmi Venture, Plot 6/7,
                        Mahal Industrial Estate, Mahakali Caves Road, Andheri East,
                        Mumbai 400093.
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start group/item">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-red/10 group-hover/item:from-brand-blue/20 group-hover/item:to-brand-red/20 transition-all mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-semibold mb-2 text-base">Phone</p>
                      <div className="space-y-1">
                        <a
                          href="tel:+918291642739"
                          className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          +91 82916 42739
                        </a>
                        <a
                          href="tel:+917400139877"
                          className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          +91 74001 39877
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start group/item">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-brand-red/10 to-brand-blue/10 group-hover/item:from-brand-red/20 group-hover/item:to-brand-blue/20 transition-all mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-semibold mb-2 text-base">Email</p>
                      <div className="space-y-1">
                        <a
                          href="mailto:rhomboidfinguru@gmail.com"
                          className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          rhomboidfinguru@gmail.com
                        </a>
                        <a
                          href="mailto:shambhu.singh@rediffmail.com"
                          className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          shambhu.singh@rediffmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start group/item">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-red/10 group-hover/item:from-brand-blue/20 group-hover/item:to-brand-red/20 transition-all mr-4 flex-shrink-0">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-semibold mb-2 text-base">Website</p>
                      <a
                        href="https://www.rhomboidfinguru.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        www.rhomboidfinguru.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-border/50 h-[350px] md:h-[400px] lg:h-full min-h-[350px]">
                  <iframe
                    src="https://www.google.com/maps?q=19.120569,72.863679&hl=en&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                  {/* Custom Marker Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
                    <div className="flex flex-col items-center">
                      {/* Marker Pin */}
                      <div className="relative">
                        <div className="w-12 h-12 bg-white rounded-full shadow-xl border-4 border-primary flex items-center justify-center mb-2 animate-bounce">
                          <Image
                            src="/rhomboid.jpg"
                            alt="Rhomboid Finguru"
                            width={32}
                            height={32}
                            className="rounded-full object-cover"
                          />
                        </div>
                        {/* Pin Tail */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-primary" />
                      </div>
                      {/* Label Card */}
                      <div className="bg-white rounded-lg shadow-2xl px-4 py-2 border-2 border-primary/20 mt-2 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">🏢</span>
                          <div className="text-left">
                            <p className="font-bold text-primary text-sm leading-tight">
                              Rhomboid Finguru
                            </p>
                            <p className="text-xs text-muted-foreground leading-tight">
                              Pvt Ltd
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
      </div>
    </div>
  )
}

