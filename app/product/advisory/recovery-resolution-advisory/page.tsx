import PageHero from "@/components/PageHero"

export default function RecoveryResolutionAdvisoryPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="Recovery & Resolution Advisory for PSU Banks" />
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
                      Recovery & Resolution Advisory for PSU Banks
                    </h2>
                  </div>
                  <div className="space-y-3 md:space-y-6 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Rhomboid Finguru provides specialized consulting support to Public Sector Undertaking (PSU) banks for managing stressed assets and Non-Performing Assets (NPAs). Our advisory services focus on developing and executing recovery strategies that align with regulatory frameworks and institutional requirements.
                    </p>
                    <p>
                      We assist PSU banks in analyzing stressed asset portfolios, identifying recovery opportunities, and structuring resolution plans that comply with RBI guidelines and regulatory frameworks. Our team brings extensive experience in NPA management, restructuring, and resolution mechanisms including IBC processes, OTS settlements, and asset reconstruction strategies.
                    </p>
                    <p>
                      Our recovery and resolution advisory encompasses comprehensive support for banks in dealing with defaulting borrowers, including legal coordination, asset valuation, and negotiation support. We work closely with bank management teams to develop pragmatic recovery strategies that balance regulatory compliance with practical resolution outcomes.
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
                      We provide strategic consulting support for stressed asset management, including portfolio analysis, recovery strategy development, and execution assistance. Our advisory is aligned with regulatory frameworks and institutional requirements, helping PSU banks navigate complex NPA resolution scenarios effectively.
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

