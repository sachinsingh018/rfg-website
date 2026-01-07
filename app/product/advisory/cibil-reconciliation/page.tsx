import PageHero from "@/components/PageHero"

export default function CIBILReconciliationPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="TransUnion CIBIL Reconciliation & Credit Profile Advisory" />
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
                      TransUnion CIBIL Reconciliation & Credit Profile Advisory
                    </h2>
                  </div>
                  <div className="space-y-3 md:space-y-6 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Rhomboid Finguru offers specialized advisory services for TransUnion CIBIL reconciliation and credit profile management. We assist borrowers in identifying discrepancies in their credit reports, coordinating with lenders for corrections, and developing strategies to strengthen credit profiles for improved access to funding.
                    </p>
                    <p>
                      Our team conducts comprehensive analysis of credit reports to identify errors, inconsistencies, or outdated information that may impact credit scores. We work directly with financial institutions and credit bureaus to facilitate corrections and ensure accurate credit reporting, which is essential for securing favorable loan terms and interest rates.
                    </p>
                    <p>
                      Beyond reconciliation, we provide strategic credit profile advisory to help clients improve their creditworthiness over time. This includes guidance on debt management, payment behavior optimization, and credit utilization strategies that can enhance credit scores and expand access to competitive financing options from banks and NBFCs.
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
                      We provide comprehensive credit report analysis, discrepancy identification, and resolution support through direct coordination with lenders and credit bureaus. Our advisory extends to credit profile enhancement strategies that help clients improve their creditworthiness and access better financing terms.
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

