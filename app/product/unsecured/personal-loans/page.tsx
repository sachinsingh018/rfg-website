import { CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"

export default function PersonalLoansPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="Personal Loans" />
      <div className="pt-6 md:pt-12">
        <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-4 md:mb-8">
              <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                <div className="space-y-3 md:space-y-6 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed relative z-10">
                  <p>
                    Personal loan is an all-purpose loan for personal use. It could
                    be for any expenses such as be your child&apos;s wedding, going on
                    vacation, purchase of consumer durables, medical expenses,
                    buying jewelry, margin/ down-payment for a home loan, transfer of
                    credit card out-standings buying of new furniture and various
                    other needs that arise for an individual or sudden business
                    requirements. Personal loan does not require any security or
                    collateral and thus have a disadvantage compared to loans against
                    security in that they come for a higher rate of interest.
                  </p>
                  <p>
                    Personal loans are loans provided based on the borrower&apos;s past
                    credit history and ability to pay. Typically personal loans range
                    from Rs. 0.50 Lakhs to Rs. 30.00 Lakhs with a tenure typically
                    ranging from one to five years.The interest rates of Personal
                    Loan are allotted based on the salary of the customer, amount
                    being borrowed and credit history, amongst others. Personal Loan
                    requires the least bit of paper-work and is usually approved
                    within 48 hours of application submission.
                  </p>
                </div>
              </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="mb-4 md:mb-8">
              <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      Eligibility Criteria:
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                    Personal loan eligibility depends upon various factors which differ
                    from bank to bank. Your eligibility is determined considering
                    following parameters:
                  </p>
                  <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                      Current income:
                    </span>{" "}
                    The main factor of course, is your ability to repay the loan
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Applicant Age:
                    </span>{" "}
                    Banks generally give out personal loans to salaried individuals
                    typically between the ages of 21 to 60 years. For self employed
                    individuals this range is from 25 to 65 years.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Total Years of work experience
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Nature of your job
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Category of company you work for:
                    </span>{" "}
                    Companies/ Employers are grouped into categories on basis of
                    their own records. Public sector employees and employees working
                    with reputed and established private companies are more eligible
                    for availing personal loans as compared to others as there is
                    stability in their income.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Current obligations you are paying for existing loans availed
                    are factored while arriving on your personal loan amount
                    eligibility
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Past credit history:
                    </span>{" "}
                    Having a healthy CIBIL score also helps in improving your
                    eligibility towards getting a personal loan
                  </span>
                </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Fees and Charges */}
            <section className="mb-8">
              <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-4" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Personal Loan Application Fees and Charges:
                    </h2>
                  </div>
                  <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Personal Loan Lenders levy some fees and charges at the time of
                      loan sanctioning which includes Processing Fees. Prepayment of
                      the loan is possible after repayment of a minimum of 6 EMI&apos;s.
                      Foreclosure charges would be applicable as per the banks term and
                      condition. Part pre-payment can be made after 6 months from the
                      Disbursement of the Loan, once in a financial year and the same
                      may vary with bank to bank.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Unsecured Dropline Overdraft */}
            <section className="mb-4 md:mb-8">
              <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      Unsecured Dropline Overdraft
                    </h2>
                  </div>
                  <div className="space-y-3 md:space-y-6 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Drop-line overdraft is a hybrid between a term loan and an
                  overdraft facility. You are charged interest only on the amount
                  utilized by you. Dropline overdraft is a facility granted to you
                  where you can overdraw your current account up to an agreed limit.
                  Overdraft is an efficient form of borrowing as you pay interest
                  only for the time you use the money. It gives you flexibility in
                  terms of you can at any time deposit money into the account to
                  reduce the outstanding balance or can draw out money whenever you
                  need it as long as you do not exceed the limit.
                </p>
                <p>
                  Interest is calculated daily on the fluctuating outstanding
                  balance and is normally charged at the end of each month. The
                  overdraft utilized determines the interest that will be payable
                  by the customer. This product is useful for professionals, Sole
                  Proprietors, Proprietorship Firms, Partnership Firms or a Private
                  Limited Company in the business of manufacturing, trading or
                  services.
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

