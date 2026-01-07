import PageHero from "@/components/PageHero"

export default function CGTMSEMSMEAdvisoryPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="CGTMSE & MSME Credit Advisory" />
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
                      CGTMSE & MSME Credit Advisory
                    </h2>
                  </div>
                  <div className="space-y-3 md:space-y-6 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Rhomboid Finguru provides specialized advisory services for Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) backed loans and MSME credit solutions. We assist MSMEs in understanding eligibility criteria, structuring credit proposals, and coordinating with banks to secure CGTMSE-backed financing that supports business growth without requiring traditional collateral.
                    </p>
                    <p>
                      Our advisory services include comprehensive eligibility assessment for CGTMSE schemes, proposal structuring that aligns with bank requirements, and coordination with financial institutions to facilitate credit approval. We help MSME clients navigate the CGTMSE application process, ensuring all documentation and compliance requirements are met for successful credit sanction.
                    </p>
                    <p>
                      We work closely with MSMEs across various sectors to identify suitable credit products, structure proposals that demonstrate creditworthiness, and coordinate with partner banks to secure funding solutions. Our advisory extends to both new credit facilities and enhancement of existing credit limits, helping MSMEs access the capital needed for business expansion and working capital requirements.
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
                      We provide comprehensive advisory for CGTMSE-backed loans, including eligibility assessment, proposal structuring, and coordination with banks for MSME funding solutions. Our services help MSMEs access collateral-free credit facilities through CGTMSE schemes, facilitating business growth and expansion.
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

