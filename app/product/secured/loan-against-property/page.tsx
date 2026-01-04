import { CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"

export default function LoanAgainstPropertyPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="Loan Against Property" />
      <div className="pt-6 md:pt-12">
        <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-4 md:mb-8">
            <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
              <div className="space-y-3 md:space-y-6 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed relative z-10">
                <p>
                  Loan against property is the perfect way to unlock the hidden value
                  of your property. LAP is designed to meet the financial needs of
                  someone who already owns a house or multiple properties so as to get
                  the best out of their assets. A loan against property can be taken
                  as a business loan to grow your business, or to fund your children&apos;s
                  education, or meet wedding expenses or any other personal expenses.
                  It is loan granted against the mortgage of property. The loan amount
                  ranges from 50% to 75% of the valuation amount. Banks provide LAP for
                  both Salaried as well as Self-Employed individuals. The rates and
                  loan amounts differ based on your property and your annual income.
                  Loan against property is a secured loan as the borrower guarantees
                  that default, if any, can be compensated by his property. LAP is a
                  better option compared to personal loan as the rate of interest is
                  lesser in case of LAP (being a secured loan).The loan tenure can be
                  up to 15 years and the interest ranges between 9.50% to 15%.
                </p>
                <p>
                  Loan against property can be taken for various reasons:
                </p>
              </div>
            </div>
          </section>

          {/* Reasons for LAP */}
          <section className="mb-4 md:mb-8">
            <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
              <div className="relative z-10">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    Reasons for Loan Against Property:
                  </h2>
                </div>
                <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                  For business requirements i.e. for purchase of stock, machinery,
                  expansion of business etc. or we can say to meet working capital
                  requirements of business
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Closure of existing high-cost existing loans
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Purchase of commercial premise (office / shop) or land and / or
                  industrial premise (office / shop) or land
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  For Personal use might be for wedding of children, for their
                  higher education etc.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">In debt consolidation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Any other personal, professional needs
                </span>
              </li>
                </ul>
              </div>
            </div>
          </section>

          {/* LAP Classification */}
          <section className="mb-8">
            <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-4" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    LAP can be classified as:
                  </h2>
                </div>
                <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">
                    Loan against residential property
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    – this loan can be taken against your residential property that
                    is self occupied, rented or vacant
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">
                    Loan against commercial property
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    – this loan can be taken against commercial property that is
                    self occupied, rented or vacant
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">
                    Loan against industrial property
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    – this loan can be taken against industrial property that is
                    self occupied, rented or vacant
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">
                    Loan against open land
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    – this loan can be taken against open land which can be
                    residential or commercial
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">
                    Balance transfer
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    – this loan can be availed to reduce the ROI of current running
                    loan by transferring it from the present financial institution
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">
                    Balance transfer and top up
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    – this loan can be availed to reduce the ROI of current Running
                    loan by transferring it from the present financial institution
                    and also giving further enhancement on the takeover loan
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Top up</span>
                  <span className="text-muted-foreground">
                    {" "}
                    – One can get an enhanced or additional amount from the existing
                    financial institution on the running LAP
                  </span>
                </div>
              </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Eligibility Criteria */}
          <section className="mb-8">
            <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-4" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Criteria for eligibility of LAP are:
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Criteria for eligible for LAP are similar to that of Home Loan as
                  mentioned in Home Loan Section.
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
                    LAP/ Mortgage Loan Application Fees and Charges:
                  </h2>
                </div>
                  <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Mortgage Loan Lenders levy some fees and charges at the time of loan
                    sanctioning which includes Processing Fees. Prepayment/ Foreclosure
                    Charges: Prepayment fee comes in to play when one wants to prepay the
                    loan before the end of the tenure. Different banks have different
                    charges so one should take the time out to know them.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Required Documents */}
          <section className="mb-4 md:mb-8">
            <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
              <div className="relative z-10">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    Mandatory Documents Required for Applying Mortgage Loan:
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Mandatory documents required for LAP are similar to that of Home Loan
                  as mentioned in Home Loan Section.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>
    </div>
  )
}

