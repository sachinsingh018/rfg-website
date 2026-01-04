"use client"

import { Mail, Phone, MapPin, Globe, Bold, Italic, List, Type } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import PageHero from "@/components/PageHero"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isMessageFocused, setIsMessageFocused] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Form name can NOT be empty!"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      console.log("Form submitted:", formData)
      alert("Thank you for contacting us! We will get back to you soon.")
      setFormData({ name: "", email: "", phone: "", message: "" })
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const insertText = (before: string, after: string = "") => {
    if (!textareaRef.current) return
    
    const textarea = textareaRef.current
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = formData.message.substring(start, end)
    const beforeText = formData.message.substring(0, start)
    const afterText = formData.message.substring(end)
    
    const newText = beforeText + before + selectedText + after + afterText
    setFormData((prev) => ({ ...prev, message: newText }))
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus()
      const newCursorPos = start + before.length + selectedText.length + after.length
      textarea.setSelectionRange(newCursorPos, newCursorPos)
    }, 0)
  }

  const insertAtNewLine = (text: string) => {
    if (!textareaRef.current) return
    
    const textarea = textareaRef.current
    const start = textarea.selectionStart
    const beforeText = formData.message.substring(0, start)
    const afterText = formData.message.substring(start)
    const isAtStart = beforeText.trim() === ""
    const needsNewline = !isAtStart && !beforeText.endsWith("\n")
    
    const newText = beforeText + (needsNewline ? "\n" : "") + text + afterText
    setFormData((prev) => ({ ...prev, message: newText }))
    
    setTimeout(() => {
      textarea.focus()
      const newCursorPos = start + (needsNewline ? 1 : 0) + text.length
      textarea.setSelectionRange(newCursorPos, newCursorPos)
    }, 0)
  }

  return (
    <div className="min-h-screen">
      <PageHero title="Contact Us" />
      <div className="pt-6 md:pt-12">
      <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
              <div className="relative z-10">
                <div className="flex items-center mb-4 md:mb-6 lg:mb-8">
                  <div className="w-1 h-6 md:h-8 lg:h-10 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    Get in Touch
                  </h2>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start group/item">
                    <div className="p-2 md:p-3 lg:p-4 rounded-xl bg-gradient-to-br from-brand-red/10 to-brand-blue/10 group-hover/item:from-brand-red/20 group-hover/item:to-brand-blue/20 transition-all mr-3 md:mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-semibold mb-1 text-base sm:text-lg md:text-xl">Address</p>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                        Shambhu Singh, 510, AT By AGM Vijaylaxmi Venture, Plot 6/7,
                        Mahal Industrial Estate, Mahakali Caves Road, Andheri East,
                        Mumbai 400093.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="p-2 md:p-3 lg:p-4 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-red/10 group-hover/item:from-brand-blue/20 group-hover/item:to-brand-red/20 transition-all mr-3 md:mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-semibold mb-2 text-base sm:text-lg md:text-xl">Phone</p>
                      <div className="space-y-1">
                        <a
                          href="tel:+918291642739"
                          className="block text-sm sm:text-base md:text-lg text-muted-foreground hover:text-primary transition-colors"
                        >
                          +91 82916 42739
                        </a>
                        <a
                          href="tel:+917400139877"
                          className="block text-sm sm:text-base md:text-lg text-muted-foreground hover:text-primary transition-colors"
                        >
                          +91 74001 39877
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="p-2 md:p-3 lg:p-4 rounded-xl bg-gradient-to-br from-brand-red/10 to-brand-blue/10 group-hover/item:from-brand-red/20 group-hover/item:to-brand-blue/20 transition-all mr-3 md:mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-semibold mb-2 text-base sm:text-lg md:text-xl">Email</p>
                      <div className="space-y-1">
                        <a
                          href="mailto:rhomboidfinguru@gmail.com"
                          className="block text-sm sm:text-base md:text-lg text-muted-foreground hover:text-primary transition-colors"
                        >
                          rhomboidfinguru@gmail.com
                        </a>
                        <a
                          href="mailto:info@rhomboidfinguru.com"
                          className="block text-sm sm:text-base md:text-lg text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@rhomboidfinguru.com
                        </a>
                        <a
                          href="mailto:shambhu.singh@rediffmail.com"
                          className="block text-sm sm:text-base md:text-lg text-muted-foreground hover:text-primary transition-colors"
                        >
                          shambhu.singh@rediffmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="p-2 md:p-3 lg:p-4 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-red/10 group-hover/item:from-brand-blue/20 group-hover/item:to-brand-red/20 transition-all mr-3 md:mr-4 flex-shrink-0">
                      <Globe className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-semibold mb-2 text-base sm:text-lg md:text-xl">Website</p>
                      <a
                        href="https://www.rhomboidfinguru.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm sm:text-base md:text-lg text-muted-foreground hover:text-primary transition-colors"
                      >
                        www.rhomboidfinguru.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
              <div className="relative z-10">
                <div className="flex items-center mb-4 md:mb-6 lg:mb-8">
                  <div className="w-1 h-6 md:h-8 lg:h-10 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    Send us a Message
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  {/* Formatting Toolbar */}
                  {isMessageFocused && (
                    <div className="mb-2 p-2 bg-muted/50 rounded-lg border border-border/50 flex items-center gap-2 flex-wrap">
                      <button
                        type="button"
                        onClick={() => insertText("**", "**")}
                        className="p-2 rounded-lg hover:bg-background transition-colors"
                        title="Bold"
                      >
                        <Bold className="h-4 w-4 text-foreground" />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertText("*", "*")}
                        className="p-2 rounded-lg hover:bg-background transition-colors"
                        title="Italic"
                      >
                        <Italic className="h-4 w-4 text-foreground" />
                      </button>
                      <div className="h-5 w-px bg-border" />
                      <button
                        type="button"
                        onClick={() => insertAtNewLine("- ")}
                        className="p-2 rounded-lg hover:bg-background transition-colors"
                        title="Bullet List"
                      >
                        <List className="h-4 w-4 text-foreground" />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertAtNewLine("1. ")}
                        className="p-2 rounded-lg hover:bg-background transition-colors"
                        title="Numbered List"
                      >
                        <Type className="h-4 w-4 text-foreground" />
                      </button>
                    </div>
                  )}
                  <textarea
                    ref={textareaRef}
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setIsMessageFocused(true)}
                    onBlur={() => setTimeout(() => setIsMessageFocused(false), 200)}
                    rows={5}
                    className="flex w-full rounded-xl border border-input bg-background px-4 py-3 text-sm md:text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-200"
                  />
                </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg px-6 py-6 md:py-7 rounded-xl"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

