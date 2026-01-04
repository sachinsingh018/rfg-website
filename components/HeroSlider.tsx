"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSlider() {
  return (
    <section className="relative min-h-[500px] md:h-[700px] flex items-center justify-start overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 z-10" />
        {/* Subtle brand color patches */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl z-5" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl z-5" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80')",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-24 pb-16 md:pt-40">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 xl:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 leading-tight"
            >
              Your Trusted Financial Partner
              <br />
              <span className="text-brand-red">Rhomboid Finguru</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-xl text-white/90 mb-5 md:mb-8 leading-relaxed"
            >
              Empowering your financial dreams with expert loan solutions. Connecting you with India&apos;s leading banks for seamless secured and unsecured financing.
            </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
          >
            <Button
              size="lg"
              className="relative bg-white text-primary hover:bg-white/95 font-semibold text-sm md:text-base px-5 md:px-10 py-3.5 md:py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group w-full sm:w-auto"
              asChild
            >
              <Link href="/contact-us" className="flex items-center justify-center relative z-10">
                Get Consultation
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="relative bg-transparent text-white hover:bg-white/10 font-semibold text-sm md:text-base px-5 md:px-10 py-3.5 md:py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/40 hover:border-white/60 overflow-hidden backdrop-blur-sm w-full sm:w-auto"
              asChild
            >
              <Link href="/about-us" className="relative z-10">
                About Us
              </Link>
            </Button>
          </motion.div>
          </motion.div>

          {/* Professional Financial Metrics Card */}
          <motion.div
            className="hidden lg:block flex-shrink-0 -mt-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative bg-white/12 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border-2 border-white/25 shadow-2xl w-[420px] xl:w-[450px]">
              {/* Decorative accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white rounded-t-3xl" />
              
              {/* SVG Animation */}
              <motion.div
                className="relative w-44 h-44 mx-auto mb-8"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/animation.svg"
                  alt="Financial Growth"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Professional Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 lg:gap-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-center"
                >
                  <p className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    500+
                  </p>
                  <p className="text-xs lg:text-sm text-white/85 font-medium">
                    Clients
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="text-center"
                >
                  <p className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    7+
                  </p>
                  <p className="text-xs lg:text-sm text-white/85 font-medium">
                    Years in Business
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="text-center"
                >
                  <p className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    30+
                  </p>
                  <p className="text-xs lg:text-sm text-white/85 font-medium">
                    Years Experience
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="text-center"
                >
                  <p className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    ✓
                  </p>
                  <p className="text-xs lg:text-sm text-white/85 font-medium">
                    Professional Team
                  </p>
                </motion.div>
              </div>

              {/* Industry Connections */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="mt-6 pt-6 border-t border-white/25 text-center"
              >
                <p className="text-sm lg:text-base font-semibold text-white mb-1">
                  Widespread Connections
                </p>
                <p className="text-xs lg:text-sm text-white/75">
                  Leading Banks & Financial Institutions
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

