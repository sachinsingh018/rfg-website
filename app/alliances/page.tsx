import { Mail, Phone, MapPin, Globe } from "lucide-react"
import PageHero from "@/components/PageHero"
import AlliancesGrid from "@/components/AlliancesGrid"

export default function AlliancesPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="Alliances" />
      <div className="pt-6 md:pt-12">
        <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
          <div className="max-w-4xl mx-auto mb-4 md:mb-8">
            <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
              <div className="relative z-10 text-center">
                <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  <p>
                    We are associated with multiple leading Banks and NBFC&apos;s to cater to your
                    diverse financial needs, offering the best products and most competitive interest rates in the market.
                  </p>
                  <p>
                    Our strategic partnerships with top-tier financial institutions enable us to provide you with a wide range of loan products including home loans, business loans, personal loans, loan against property, and specialized financing solutions. We work closely with our partner banks to ensure you get access to the most suitable financial products tailored to your specific requirements, along with transparent processes and quick approvals.
                  </p>
                  <p>
                    Through these alliances, we bring you the combined expertise and resources of India&apos;s most trusted financial institutions, ensuring you receive comprehensive financial solutions with the best terms, flexible repayment options, and dedicated support throughout your loan journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Partners Section */}
      <div className="container mx-auto px-4 lg:px-8 mb-6 md:mb-12">
        <AlliancesGrid />
      </div>

      {/* Get in Touch Section */}
      <div className="container mx-auto px-4 lg:px-8 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-6 md:p-10 lg:p-12 shadow-xl border border-border/50 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4 md:mb-8">
                <div className="w-1 h-8 md:h-10 lg:h-12 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
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
                      510, AT By AGM Vijaylaxmi Venture, Plot 6/7,
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
        </div>
      </div>
    </div>
  )
}

