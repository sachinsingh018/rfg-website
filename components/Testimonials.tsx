"use client"

import { motion } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote:
      "Rhomboid Finguru provided exceptional service throughout our loan application process. Their expertise and personalized approach helped us secure funding for our manufacturing unit expansion.",
    name: "Rajesh Kumar",
    role: "Director, Kumar Industries Pvt Ltd",
  },
  {
    id: 2,
    quote:
      "I was impressed by the professionalism and transparency. They helped us secure the best rates and terms for our property loan. The entire process was smooth and efficient.",
    name: "Priya Sharma",
    role: "Founder, Sharma Enterprises",
  },
  {
    id: 3,
    quote:
      "The team at Rhomboid Finguru made the entire loan process smooth and stress-free. Their understanding of MSME financing needs and connections with multiple banks made all the difference.",
    name: "Amit Patel",
    role: "CEO, Patel Trading Company",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="py-12 md:py-16 bg-muted/30 relative overflow-hidden">
      {/* Subtle brand color background patches */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-blue/3 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-brand-red/3 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Trusted by individuals and businesses across the country
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="flex-shrink-0 w-full px-2">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-shadow relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Quote className="h-6 w-6 text-accent mb-3 relative z-10" />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3 relative z-10">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center relative z-10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue/20 via-brand-red/20 to-brand-white/10 flex items-center justify-center mr-3">
                        <span className="text-base font-semibold text-primary">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
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
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentIndex(Math.min(testimonials.length - 1, currentIndex + 1))}
              disabled={currentIndex >= testimonials.length - 1}
              className="rounded-full h-10 w-10 border-2"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <Quote className="h-8 w-8 text-accent mb-4 relative z-10" />
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue/20 via-brand-red/20 to-brand-white/10 flex items-center justify-center mr-4">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

