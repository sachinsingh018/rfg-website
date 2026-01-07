import PageHero from "@/components/PageHero"

export default function IPOAdvisoryPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="IPO Advisory & Pre-IPO Support" />
      <div className="pt-6 md:pt-12">
        <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-4 md:mb-8">
              <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      IPO Advisory & Pre-IPO Support
                    </h2>
                  </div>
                  <div className="space-y-3 md:space-y-6 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Rhomboid Finguru provides comprehensive IPO advisory services to help companies achieve financial readiness for their Initial Public Offering. Our advisory encompasses financial structuring, documentation support, and strategic coordination with investment bankers, intermediaries, and regulatory advisors to ensure a smooth transition to public markets.
                    </p>
                    <p>
                      We assist companies in preparing for IPO by evaluating financial health, ensuring compliance with regulatory requirements, and structuring the offering in alignment with market expectations. Our team coordinates with merchant bankers, legal advisors, and other intermediaries to facilitate the entire IPO process, from initial planning through listing and post-listing support.
                    </p>
                    <p>
                      Our pre-IPO support includes financial readiness assessment, documentation preparation, and strategic guidance on valuation, pricing, and market positioning. We work closely with promoters and management teams to address regulatory requirements and ensure all necessary approvals and clearances are obtained in a timely manner.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services */}
            <section className="mb-4 md:mb-8">
              <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      Our Services
                    </h2>
                  </div>
                  <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      We provide end-to-end support for companies planning to go public, including financial readiness assessment, regulatory compliance review, and coordination with all stakeholders involved in the IPO process. Our advisory services are designed to help companies navigate the complexities of public listing while maintaining focus on business operations.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

