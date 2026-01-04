"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 bg-background relative overflow-hidden">
      {/* Subtle brand color background patches */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-brand-blue/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-brand-red/3 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] relative bg-gradient-to-br from-brand-blue/10 via-primary/20 to-brand-red/10">
                <Image
                  src="/about.png"
                  alt="About Us - Financial Advisory Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-red/5" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wide mb-4 block relative">
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-brand-red to-brand-blue rounded-full" />
              <span className="pl-4">About Us</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              About Us
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4">
              We are a leading financial advisory firm specializing in providing
              comprehensive loan solutions and expert financial guidance. With
              years of industry experience, we help individuals and businesses
              navigate the complexities of secured and unsecured financing.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              Our team of dedicated professionals is committed to delivering
              personalized service, ensuring that each client receives tailored
              solutions that meet their unique financial needs and goals.
            </p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link href="/about-us" className="flex items-center">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

