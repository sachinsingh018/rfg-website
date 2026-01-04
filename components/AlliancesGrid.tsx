"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AlliancesGrid() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const partnersPerView = 2 // Show 2 partners at a time on mobile
  
  const partners = [
    { id: 1, name: "SBI", image: "/SBI.png" },
    { id: 2, name: "Tata", image: "/tat.jpg" },
    { id: 3, name: "TransUnion", image: "/trans.jpg" },
    { id: 4, name: "IndusInd", image: "/indus.jpg" },
    { id: 5, name: "Kotak", image: "/kotak.jpg" },
    { id: 6, name: "Axis", image: "/axis.png" },
    { id: 7, name: "PNB", image: "/pnb.jpg" },
    { id: 8, name: "Standard Chartered", image: "/stanc.png" },
    { id: 9, name: "Phoenix", image: "/phoniexxxxx.jpg" },
    { id: 10, name: "YES Bank", image: "/yes.png" },
    { id: 11, name: "LIC", image: "/lic.png" },
    { id: 12, name: "HDFC", image: "/hdfc.png" },
  ]

  return (
    <section id="alliances" className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Subtle brand color background patches */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-red/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-brand-blue/3 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Our Alliances
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            We partner with leading financial institutions to bring you the best
            solutions
          </p>
        </motion.div>

        {/* Partner Images Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-border/50 overflow-hidden"
        >
          {/* Decorative gradient accent bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
          
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            {/* Mobile Carousel */}
            <div className="md:hidden relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * (100 / partnersPerView)}%)` }}
                >
                  {partners.map((partner, index) => (
                    <div key={partner.id} className="flex-shrink-0 w-1/2 px-2">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="relative aspect-[4/3] bg-gradient-to-br from-white via-background to-primary/5 rounded-2xl border-2 border-border/50 flex items-center justify-center p-2 transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:scale-110 overflow-hidden group/card">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white opacity-30 group-hover/card:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-brand-blue/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                          <div className="relative w-full h-full rounded-xl flex items-center justify-center grayscale-[30%] group-hover:grayscale-0 transition-all duration-300 bg-white/50 group-hover/card:bg-white">
                            <Image
                              src={partner.image}
                              alt={partner.name}
                              fill
                              className="object-contain p-1"
                              sizes="50vw"
                              priority={index < 3}
                            />
                          </div>
                          <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-brand-red to-brand-blue rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                  disabled={currentIndex === 0}
                  className="rounded-full h-10 w-10 border-2"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex gap-2">
                  {Array.from({ length: Math.ceil(partners.length / partnersPerView) }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentIndex(Math.min(Math.ceil(partners.length / partnersPerView) - 1, currentIndex + 1))}
                  disabled={currentIndex >= Math.ceil(partners.length / partnersPerView) - 1}
                  className="rounded-full h-10 w-10 border-2"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8 lg:gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-white via-background to-primary/5 rounded-2xl border-2 border-border/50 flex items-center justify-center p-2 md:p-3 transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:scale-110 overflow-hidden group/card">
                {/* Gradient accent bar - always visible but more prominent on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white opacity-30 group-hover/card:opacity-100 transition-opacity duration-300" />
                
                {/* Subtle background gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-brand-blue/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                
                {/* Image container */}
                <div className="relative w-full h-full rounded-xl flex items-center justify-center grayscale-[30%] group-hover:grayscale-0 transition-all duration-300 bg-white/50 group-hover/card:bg-white">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain p-1 md:p-2"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    priority={index < 3}
                  />
                </div>
                
                {/* Corner accent on hover */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-brand-red to-brand-blue rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

