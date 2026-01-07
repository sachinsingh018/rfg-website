import { Mail, Phone, MapPin, Globe } from "lucide-react"
import PageHero from "@/components/PageHero"

export default function LeaseRentalDiscountingPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="Lease Rental Discounting" />
      <div className="pt-6 md:pt-12">
        <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-4 md:mb-8">
            <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
              <div className="space-y-3 md:space-y-6 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed relative z-10">
                <p>
                  LRD as the name reveals is one of the loans offered by banks under
                  which an applicant avails loan against his/her leased or rental
                  property. Under this loan borrower pledges the future receivables
                  under specified escrow arrangement where the rent is directly
                  deposited with the lender and not with the borrower. LRD is
                  typically offered against commercial or industrial properties. Under
                  the scheme lenders usually prefer the rental receivables from
                  renowned corporate where the lease agreement is executed for a
                  definite tenure. Lenders also ensure that the future rental earnings
                  from the property are secured before offering LRD. To avail this loan
                  the property should be occupied by the Lessee as in Loan against
                  Property.
                </p>
                <p>
                  The borrower is sanctioned the loan based upon the rent to be
                  collected over the period of lease. This product is tailored for
                  people having significant rental income. The tenure of such loans is
                  much shorter than other property based loans and usually linked to
                  the amount of time remaining for the lease on property to expire.
                  Most institutions provide Loans upto 90% of the value of remaining
                  lease, provided the borrower can convince the lender and exhibit the
                  ability to pay the installment for such a loan. LRD enables you to
                  encash your current rental cash flows and Funds can be used for
                  expansion of business, consolidation of obligations and / or business
                  capital requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Get in Touch Section */}
          <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden mt-4 md:mt-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
            <div className="relative z-10">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  Get in Touch
                </h2>
              </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-primary flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-base text-muted-foreground">
                  510, AT By AGM Vijaylaxmi Venture, Plot 6/7,
                  Mahal Industrial Estate, Mahakali Caves Road, Andheri East,
                  Mumbai 400093.
                </p>
              </div>
              <div className="flex items-start">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-primary flex-shrink-0" />
                <div className="text-sm sm:text-base md:text-base text-muted-foreground">
                  <a
                    href="tel:+918291642739"
                    className="hover:text-primary transition-colors"
                  >
                    +91 82916 42739
                  </a>
                  ,{" "}
                  <a
                    href="tel:+917400139877"
                    className="hover:text-primary transition-colors"
                  >
                    +91 74001 39877
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-primary flex-shrink-0" />
                <div className="text-sm sm:text-base md:text-base text-muted-foreground">
                  <a
                    href="mailto:rhomboidfinguru@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    rhomboidfinguru@gmail.com
                  </a>{" "}
                  <a
                    href="mailto:shambhu.singh@rediffmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    shambhu.singh@rediffmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="https://www.rhomboidfinguru.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base md:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  www.rhomboidfinguru.com
                </a>
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

