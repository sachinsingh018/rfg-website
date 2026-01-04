import { CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"

export default function MSMEFinancePage() {
  return (
    <div className="min-h-screen">
      <PageHero title="MSME Finance" />
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
                    Working Capital Loans/ MSME Finance
                  </h2>
                </div>
                <div className="space-y-3 md:space-y-6 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    The Micro, Small & Medium Enterprises [MSME] sector has been
                    recognized as the engine of growth.The development of SME has been
                    assigned an important role in national plans. Commercial Banks are
                    advised from time to time by GOI and RBI to finance liberally to
                    MSMEs. Lending to Micro & Small Enterprises qualifies for PSA.
                  </p>
                  <p>
                    A working capital loan is a loan that has the purpose of financing
                    the everyday operations of a firm. Working capital loans are used to
                    cover accounts payable, wages etc. Companies that have high
                    seasonality or cyclical sales cycles usually rely on working capital
                    loans to help with periods of reduced business activity. Working
                    capital is the cash available to finance a company's short-term
                    operational needs. However, sometimes a company does not have the
                    adequate cash on hand or asset liquidity to cover daily operational
                    expenses. Therefore, working capital loans are simple corporate debt
                    borrowings that are used by a company to finance its daily
                    operations. The immediate benefit of a working capital loan is that
                    it's quick and lets business owners efficiently cover any gaps in
                    working capital expenditures. Some working capital loans are unsecured.
                    If this is the case, it means that a company is not required to put
                    down any collateral to secure the loan. However, only companies or
                    business owners with a high credit rating are eligible for an
                    unsecured loan. Businesses with little to no credit have to
                    securitize the loan.
                  </p>
                  <p>
                    This type of finance / loan is suitable for meeting the needs of
                    small to medium sized enterprises (SME) that can include Small Scale
                    Industries, Traders, Builders, Societies, Trusts, Educational
                    Institutions, Hospitals and Hotels etc. This funding represents a
                    major function of the general business finance market in which
                    capital for different types of firms are supplied, acquired and
                    priced.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Forms of Capital */}
          <section className="mb-4 md:mb-8">
            <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
              <div className="relative z-10">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    The capital can be supplied in the form of:
                  </h2>
                </div>
                <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                  Cash credit /Overdraft for meeting working capital finance
                  requirement.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Export credit to provide pre-shipment and post shipment finance.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Letter of credit to facilitate trade.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Bank guarantees for meeting performance and financial obligations.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Term loans and Working Capital Term Loans for purchase of
                  commercial assets and business expansion needs.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Interest rate is linked to Bank's base rate for fund based
                  facility.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Low collateral requirement and lending available up to 1.20 times
                  of the value of collateral.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Leasing Hire-purchase agreements
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Venture capital or private equity where viability of business is
                  the prime criteria
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Asset-based finance (factoring / invoice discounting)
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Foreign Bill Discounting / Negotiation/ Purchase (FBD/FBN/FBP )
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Letter of Credit Backed Bill Discounting (LCBD)
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Secured / un secured Bill Discounting
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Working capital Demand
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Buyer's Credit</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Invoice Funding</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Letter of Credit Backed Purchase Bill Discounting
                </span>
              </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Forms of SME Finance */}
          <section className="mb-8">
            <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-4" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Various forms of SME finance can be:
                  </h2>
                </div>
                <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">
                    Institutional Finance
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    – Educational institutions can avail term loan(s) against their
                    government-approved premises like: school, college, university
                    etc.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">
                    Builder Finance
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    – Builder can avail finance on his / her self-owned commercial or
                    residential property or on unsold inventory (flats/houses/villas
                    etc).
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">
                    Project Finance
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    – option is available for the new industrial project setup.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">
                    Construction Finance
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    – This product is suitable for builders for construction of new
                    apartments, commercial complex, malls or townships etc.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">
                    Equipment Finance
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    – It is available for the purchase of different sorts of
                    equipment like machinery, construction equipment, medical
                    equipments etc.
                  </span>
                </div>
              </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>
    </div>
  )
}

