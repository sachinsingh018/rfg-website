"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Check } from "lucide-react"

export default function ProductsTabs() {
  const securedFeatures = [
    "Competitive interest rates",
    "Flexible repayment terms",
    "Asset-backed security",
    "Quick approval process",
    "Personalized service",
  ]

  const unsecuredFeatures = [
    "No collateral required",
    "Fast application process",
    "Flexible credit options",
    "Competitive rates",
    "Expert guidance",
  ]

  const advisoryServices = [
    {
      name: "IPO Advisory & Pre-IPO Support",
      description: "Financial readiness for IPO, structuring and documentation support, coordination with bankers and intermediaries.",
    },
    {
      name: "TransUnion CIBIL Reconciliation & Credit Profile Advisory",
      description: "Identification and resolution of CIBIL discrepancies, coordination with lenders for corrections, credit profile strengthening.",
    },
    {
      name: "Recovery & Resolution Advisory for PSU Banks",
      description: "Consulting support for stressed assets and NPAs, recovery strategy planning and execution assistance.",
    },
    {
      name: "CGTMSE & MSME Credit Advisory",
      description: "Advisory for CGTMSE-backed loans, eligibility assessment and proposal structuring, coordination with banks.",
    },
  ]

  return (
    <section id="products" className="py-12 md:py-16 bg-muted/30 relative overflow-hidden">
      {/* Subtle brand color background patches */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-red/4 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-blue/4 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of financial solutions designed to
            meet your unique needs
          </p>
        </motion.div>

        <Tabs defaultValue="secured" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="secured">Secured Loans</TabsTrigger>
            <TabsTrigger value="unsecured">Unsecured Loans</TabsTrigger>
            <TabsTrigger value="advisory">Advisory Services</TabsTrigger>
          </TabsList>

          <TabsContent value="secured">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                  Secured Loans
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                  Our secured loan products offer competitive rates and flexible
                  terms, backed by your valuable assets. Whether you&apos;re looking
                  to finance a property, vehicle, or business expansion, we
                  provide tailored solutions.
                </p>
                <ul className="space-y-3">
                  {securedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-brand-blue/15 to-brand-red/15 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:from-brand-blue/25 group-hover:to-brand-red/25 transition-all">
                        <Check className="h-4 w-4 text-brand-blue" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="aspect-[4/3] relative bg-gradient-to-br from-brand-blue/10 via-primary/20 to-brand-red/10">
                  <Image
                    src="/secured.png"
                    alt="Secured Loans - Home and Property Financing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-red/5" />
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="unsecured">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                  Unsecured Loans
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                  Need financing without putting up collateral? Our unsecured
                  loan options provide quick access to funds with a streamlined
                  application process and competitive terms.
                </p>
                <ul className="space-y-3">
                  {unsecuredFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-brand-red/15 to-brand-blue/15 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:from-brand-red/25 group-hover:to-brand-blue/25 transition-all">
                        <Check className="h-4 w-4 text-brand-red" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="aspect-[4/3] relative bg-gradient-to-br from-brand-red/10 via-accent/20 to-brand-blue/10">
                  <Image
                    src="/unsec.png"
                    alt="Unsecured Loans - Business and Personal Financing"
                    fill
                    className="object-cover relative z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-brand-blue/5 pointer-events-none z-20" />
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="advisory">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                  Advisory Services
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                  Our specialized advisory services provide expert guidance for complex financial scenarios, regulatory compliance, and strategic financial planning. We offer comprehensive support for IPO readiness, credit profile management, recovery strategies, and MSME financing solutions.
                </p>
                <div className="space-y-4">
                  {advisoryServices.map((service, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-accent/15 to-primary/15 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:from-accent/25 group-hover:to-primary/25 transition-all">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <span className="text-foreground font-semibold block mb-1">{service.name}</span>
                        <span className="text-muted-foreground text-sm">{service.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="aspect-[4/3] relative bg-gradient-to-br from-accent/10 via-primary/20 to-brand-blue/10">
                  {/* Blurred background image */}
                  <Image
                    src="/advise.png"
                    alt=""
                    fill
                    className="object-cover blur-2xl scale-110 opacity-40"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    aria-hidden="true"
                  />
                  {/* Main image overlay - centered and fitted, only horizontal padding */}
                  <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8 z-10">
                    <div className="relative w-full h-full">
                      <Image
                        src="/advise.png"
                        alt="Advisory Services - Financial Consulting and Strategic Guidance"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-brand-blue/5 z-20 pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

