import { CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"

export default function HomeLoansPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="Home Loans" />
      <div className="pt-6 md:pt-12">
        <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-4 md:mb-8">
              <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                <div className="space-y-3 md:space-y-6 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed relative z-10">
                  <p>
                    As the name suggests home loan is taken for buying or construction
                    of home / residence. Apart from this, home loan is also taken to buy
                    land and construct a house on it or to renovate or repair an
                    existing property. Home loan, thus, helps in realization of dream of
                    owning a home even if a person / family do not have ready cash to
                    pay it all up front. There are certain lending norms for availing a
                    home loan and these vary slightly from one lender to another. Banks
                    usually lend between 75-85% of the value stipulated in the agreement
                    and the rest of the amount is borne by the buyer (borrower). The
                    Home Loan is taken by a borrower against the property/security to be
                    bought. This is done by giving the banker a conditional ownership
                    over the property i.e. if the borrower fails to pay back the loan,
                    the banker can retrieve the lent money by selling the property.
                  </p>
                  <p>
                    Most lenders get the property valued independently and provide loans
                    based on their estimated value. It is important to remember,
                    however, that frequently their valuation is significantly lower than
                    the actual cost and hence the requirement of the Borrower goes up.
                    Equated Monthly Installments (EMIs) spread over a fixed tenure. The
                    repayment time period, which ranges upto 30 years, is fixed based on
                    the amount taken as loan and includes the outstanding principal plus
                    the interest costs.
                  </p>
                </div>
              </div>
            </section>

            {/* Home Loan Classification */}
            <section className="mb-4 md:mb-8">
              <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      Home Loan can be classified as:
                    </h2>
                  </div>
                  <ul className="space-y-2 md:space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <div>
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                      Ready House/Flat purchase
                    </span>
                    <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                      {" "}
                      – A simple home loan that enables you to purchase a new
                      residential property (house / villa / flat).
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <div>
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                      Land purchase and construction
                    </span>
                    <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                      {" "}
                      – For the purchase of approved plot and residential construction
                      on it.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <div>
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                      House construction
                    </span>
                    <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                      {" "}
                      – This type of loan is only for the residential construction on
                      self-owned and approved residential land.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <div>
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                      House improvement
                    </span>
                    <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                      {" "}
                      – This is for the renovation of house to get the desired look
                      and comfort.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <div>
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                      Balance transfer
                    </span>
                    <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                      {" "}
                      – This loan is to get a better offer, that is, reduced ROI on
                      existing home loan by taking it over from the current financial
                      institution to another.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <div>
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">Top up</span>
                    <span className="text-muted-foreground">
                      {" "}
                      – One can get enhanced amount from the existing lender on the
                      running home loan.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <div>
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                      Pre-approved home loan
                    </span>
                    <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                      {" "}
                      – One can get the loan approved prior to finalizing the property
                      to know his / her maximum loan eligibility.
                    </span>
                  </div>
                </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="mb-4 md:mb-8">
              <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      Criteria for eligibility of Home Loan are:
                    </h2>
                  </div>
                  <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    Credentials of the borrower (Income, Age, Duration, CIBIL, KYC
                    etc)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                      Credit history (CIBIL Score)
                    </span>
                    {" "}
                    – Your credit report tells the bank about your repayment capacity
                    and hence determines if you're eligible for a loan.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    Type and age of property
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                      Your current income
                    </span>
                    {" "}
                    - Your income determines the amount of home loan you are eligible
                    for. Banks generally keep the EMI to income ratio at 0.50 to 0.70.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    The nature and continuity of your employment
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    Your current obligations i.e. the other installments (EMIs) you
                    are currently paying, the number of credit cards and credit
                    limits you have or use
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">Tenure</span> –
                    The longer tenure you opt for, the more is your home loan
                    eligibility and the lesser is your EMI. Lenders generally go up to
                    maximum of 30 years tenure based on age of the applicant.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">Age</span> –
                    Your age will determine your home loan tenure and hence your
                    eligibility.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                      Interest Rate offered
                    </span>
                    {" "}
                    – Banks offer Fixed and Floating Rates of Interest. If your
                    interest rates are on a lower side, then the loan eligibility will
                    be higher.
                  </span>
                </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Fees and Charges */}
            <section className="mb-4 md:mb-8">
              <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      Home Loan Application Fees and Charges:
                    </h2>
                  </div>
                  <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Home Loan Lenders levy some fees and charges at the time of loan
                      sanctioning which includes Processing Fees. Prepayment/ Foreclosure
                      Charges: As per RBI norms, banks are not allowed to levy foreclosure
                      charges on home loans anymore.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="mb-4 md:mb-8">
              <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      Mandatory Documents Required for Applying Home Loan:
                    </h2>
                  </div>
                  <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    Application form with photograph of applicant and co-applicant.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    Identity and Residense Proof.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    Income documents viz. Latest 3 months salary slip and Form 16 for
                    salaried employees and Proof of Business existence along with last
                    3 years Financials including ITRs and Profit & Loss Account and
                    Balance Sheets.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    Last 6 months bank statement of saving/ salary account in case of
                    salaried and of current/ limit account in case of self-employed.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    Processing Fee Cheque.
                  </span>
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

