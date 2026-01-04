import { CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"

export default function BusinessLoanPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="Business Loan" />
      <div className="pt-6 md:pt-12">
        <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-4 md:mb-8">
              <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                <div className="space-y-3 md:space-y-6 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed relative z-10">
                  <p>
                    Business loan is an unsecured loan offered to self-employed
                    individuals including proprietors, partnership, private and
                    public limited companies on the basis of their financials filed
                    over last 3 years. Most banks have a common set of parameters
                    that they evaluate loan applicants with but what exactly these
                    parameters are depends from bank to bank. Banks prefer that your
                    business have at least 5 years of stability and reveals stable
                    signs of growth during last 3 years. Banks give a loan amount up
                    to 60 to 80% of your median annual profits.
                  </p>
                </div>
              </div>
            </section>

            {/* Eligibility Factors */}
            <section className="mb-4 md:mb-8">
              <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      Business Loan Eligibility is determined on following factors:
                    </h2>
                  </div>
                  <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    Last 3 years business financials
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Business Vintage and current level of business activity
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Type of the industry and how the industry is performing in
                    current scenario
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Current obligations of the business entity
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Past credit history of Business Entity
                  </span>
                </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Documents Required */}
            <section className="mb-8">
              <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-4" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Documents Required:
                    </h2>
                  </div>
                  <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Identity Proof:
                    </span>{" "}
                    PAN Card, GST Registration Certificate, Partnership Deep, etc.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Address Proof:
                    </span>{" "}
                    Current account bank statement,
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Bank Statement of last 6 months
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Last 3 years business financials like Balance Sheet, P&L,
                    Audit Report (Certified by a CA)
                  </span>
                </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tenure */}
            <section className="mb-8">
              <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-4" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Tenure
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Business loans tenure ranges from min. of 1 year up to a max of 5
                    years
                  </p>
                </div>
              </div>
            </section>

            {/* Fees and Charges */}
            <section className="mb-8">
              <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-4" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Business Loan Application Fees and Charges:
                    </h2>
                  </div>
                  <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Business Loan Lenders levy some fees and charges at the time of
                      loan sanctioning which includes Processing Fees. Prepayment of
                      the loan is possible after repayment of a minimum of 6 EMI&apos;s.
                      Foreclosure charges would be applicable as per the banks term
                      and condition. Part pre-payment can be made after 6 months from
                      the Disbursement of the Loan, once in a financial year and the
                      same may vary with bank to bank.
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

