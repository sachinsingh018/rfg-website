import type { Metadata } from "next"
import { CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Business Loan Consultant in Karnataka | MSME & Startup Loans",
  description: "Loan advisory, credit structuring & syndication across Karnataka. MSME loans, startup funding, CGTMSE, LAP in Bengaluru, Hubballi, Mangaluru, Mysuru.",
  alternates: {
    canonical: "https://www.rhomboidfinguru.com/states/karnataka",
  },
  openGraph: {
    title: "Business Loan Consultant in Karnataka | MSME & Startup Loans",
    description: "Loan advisory, credit structuring & syndication across Karnataka. MSME loans, startup funding, CGTMSE, LAP in Bengaluru, Hubballi, Mangaluru, Mysuru.",
    url: "https://www.rhomboidfinguru.com/states/karnataka",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Business Loan Consultant in Karnataka | MSME & Startup Loans",
    description: "Loan advisory, credit structuring & syndication across Karnataka. MSME loans, startup funding, CGTMSE, LAP.",
  },
}

export default function KarnatakaLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Rhomboid Finguru - Financial Advisory Services in Karnataka",
    description: "Loan consultancy and financial advisory services across Karnataka including Bengaluru, Hubballi-Dharwad, Mangaluru, and Mysuru",
    url: "https://www.rhomboidfinguru.com/states/karnataka",
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "State",
        name: "Karnataka",
      },
      {
        "@type": "City",
        name: "Bengaluru",
      },
      {
        "@type": "City",
        name: "Hubballi-Dharwad",
      },
      {
        "@type": "City",
        name: "Mangaluru",
      },
      {
        "@type": "City",
        name: "Mysuru",
      },
    ],
    serviceType: [
      "Loan Consultancy",
      "Secured Loans",
      "Unsecured Loans",
      "MSME Finance",
      "IPO Advisory",
      "CIBIL Reconciliation",
      "Stressed Asset Resolution",
      "CGTMSE Advisory",
    ],
    provider: {
      "@type": "Organization",
      name: "Rhomboid Finguru Private Limited",
      url: "https://www.rhomboidfinguru.com",
    },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide loan consultancy across Karnataka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We serve businesses across Bengaluru, Hubballi-Dharwad, Mangaluru, Mysuru, and surrounding regions. We provide loan advisory, credit structuring, and syndication services across Karnataka.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help if my business loan was rejected?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We identify gaps, restructure proposals, and realign lender selection. We analyze cashflow presentation issues, CIBIL discrepancies, product mismatches, and documentation gaps to improve approval chances.",
        },
      },
      {
        "@type": "Question",
        name: "Do you guarantee loan approval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We provide advisory and execution support; approvals depend on lenders. Outcomes depend on lender policies, borrower profile, and documentation quality.",
        },
      },
      {
        "@type": "Question",
        name: "Do you assist with CIBIL correction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We analyse credit reports and coordinate corrections. We help identify CIBIL errors and strengthen credit profiles for improved funding access.",
        },
      },
      {
        "@type": "Question",
        name: "What is CGTMSE and how does it help MSMEs in Karnataka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) provides credit guarantee coverage for loans extended to MSMEs without requiring traditional collateral. This enables MSMEs to access funding based on business viability rather than asset backing. We assist in CGTMSE eligibility assessment, proposal structuring, and coordination with banks.",
        },
      },
      {
        "@type": "Question",
        name: "How does loan against property work in Karnataka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Loan Against Property (LAP) allows businesses in Karnataka to leverage owned property as collateral to secure funding. Lenders typically offer 50-70% of property value. We assist in proposal structuring, documentation coordination, and lender selection based on property type and borrower profile.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen">
        <PageHero title="Financial Advisory & Loan Services in Karnataka" subtitle="Serving Bengaluru | Hubballi–Dharwad | Mangaluru | Mysuru" />
        <div className="pt-6 md:pt-12">
          <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed relative z-10">
                    <p>
                      Karnataka is one of India&apos;s most dynamic business states, driven by Bengaluru&apos;s technology and startup ecosystem, strong MSME manufacturing clusters, port-led trade, and a growing services economy. Businesses across the state—from early-stage startups to established MSMEs—require <strong>practical, approval-focused financing support</strong>, not generic loan applications.
                    </p>
                    <p>
                      <strong>Rhomboid Finguru</strong> provides end-to-end <strong>loan advisory, credit structuring, and syndication services across Karnataka</strong>, helping businesses secure funding aligned with lender credit policies, cashflow realities, and sector-specific risks.
                    </p>
                  </div>
                </div>
              </section>

              {/* Who We Work With */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Who We Work With in Karnataka
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        We advise:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>MSMEs and SMEs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Startup founders and promoters</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Service and manufacturing businesses</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Finance heads and business owners</span>
                        </li>
                      </ul>
                      <p className="mt-3">
                        Our Karnataka clients commonly include:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Technology and service companies in <strong>Bengaluru</strong></span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Manufacturing units in <strong>Hubballi–Dharwad</strong></span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Logistics, trading, and port-linked businesses in <strong>Mangaluru</strong></span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Educational institutions and industrial units in <strong>Mysuru</strong></span>
                        </li>
                      </ul>
                      <p className="mt-3">
                        Most clients approach us <strong>after bank delays, repeated document requests, or outright rejections</strong> due to cashflow presentation issues, CIBIL discrepancies, or product mismatch. Others engage us proactively for <strong>CGTMSE structuring, working capital optimisation, or credit profile strengthening</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Karnataka-Specific Business Use Cases */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Karnataka-Specific Business Use Cases We Handle
                      </h2>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Bengaluru: Startups, IT & Service Businesses
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Businesses in Bengaluru typically require:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Unsecured business loans
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              <Link href="/product/secured/msme-finance" className="text-primary hover:underline font-semibold">MSME working capital (OD/CC)</Link>
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              <Link href="/product/secured/loan-against-property" className="text-primary hover:underline font-semibold">Loan Against Property (LAP)</Link>
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              <Link href="/product/advisory/cgtmse-msme-credit-advisory" className="text-primary hover:underline font-semibold">CGTMSE-backed collateral-free funding</Link>
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          We structure proposals that reflect service-based revenue models, client contracts, and realistic cashflows—key factors for lender approvals in Bengaluru.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Hubballi–Dharwad: Manufacturing & MSMEs
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Manufacturing units often need:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Machinery and equipment finance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Working capital for raw materials
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Term loans for expansion
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          We align production cycles, inventory turnover, and receivables with lender repayment expectations.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Mangaluru: Trade, Logistics & Education
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Businesses in Mangaluru commonly seek:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Working capital for trading operations
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Warehouse and logistics funding
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Term loans for educational institutions
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          We structure facilities around operational cashflows, lease agreements, and asset-backed lending norms.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Mysuru: Institutions, Industry & Real Estate
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Mysuru-based businesses typically require:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Term loans against property
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Infrastructure funding for institutions
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Working capital for manufacturing units
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          We assist with valuation coordination, documentation, and lender alignment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* How the Process Works */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        How Our Financial Advisory Process Works
                      </h2>
                    </div>
                    <ol className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed list-decimal list-inside">
                      <li>
                        <strong className="text-foreground">Requirement Assessment</strong>
                        <br />
                        Understanding your business model, funding requirement, and financial position.
                      </li>
                      <li>
                        <strong className="text-foreground">Eligibility & Lender Mapping</strong>
                        <br />
                        Identifying suitable PSU banks, private banks, and NBFCs.
                      </li>
                      <li>
                        <strong className="text-foreground">Proposal Structuring</strong>
                        <br />
                        Aligning cashflows, repayment tenures, and documentation with lender risk frameworks.
                      </li>
                      <li>
                        <strong className="text-foreground">Documentation & Bank Coordination</strong>
                        <br />
                        Managing valuations, legal checks, and bank queries.
                      </li>
                      <li>
                        <strong className="text-foreground">Execution Until Disbursement</strong>
                        <br />
                        Continuous follow-ups until closure.
                      </li>
                    </ol>
                    <p className="mt-4 text-sm sm:text-base md:text-base text-muted-foreground italic border-l-4 border-primary/50 pl-4">
                      We do not guarantee approvals or interest rates. Final outcomes depend on lender policies, borrower profile, and documentation quality.
                    </p>
                  </div>
                </div>
              </section>

              {/* Common Issues We Help Fix */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Common Issues We Help Karnataka Businesses Avoid
                      </h2>
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Poorly presented cashflows for service-based businesses
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          MSME loan applications without <Link href="/product/advisory/cgtmse-msme-credit-advisory" className="text-primary hover:underline font-semibold">CGTMSE alignment</Link>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          <Link href="/product/advisory/cibil-reconciliation" className="text-primary hover:underline font-semibold">CIBIL errors</Link> impacting eligibility
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Applying for unsuitable loan products
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Documentation gaps delaying approvals
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Services Covered */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Services Covered
                      </h2>
                    </div>

                    <div className="mb-6 md:mb-8">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                        Secured Loans
                      </h3>
                      <ul className="space-y-2 md:space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <div>
                            <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                              Home Loans:
                            </span>
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              {" "}
                              For property purchase, construction, or renovation. Documentation includes property papers, income proof, and KYC documents.
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <div>
                            <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                              Loan Against Property (LAP):
                            </span>
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              {" "}
                              Leveraging owned property for business or personal funding. Process involves property valuation, legal verification, and credit assessment.
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <div>
                            <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                              Lease Rental Discounting (LRD):
                            </span>
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              {" "}
                              Financing against lease rental income from commercial properties. Suitable for property owners with long-term lease agreements.
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <div>
                            <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                              MSME Finance:
                            </span>
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              {" "}
                              Comprehensive working capital and term loan solutions including cash credit, overdraft, letter of credit, bank guarantees, export credit, bill discounting, invoice funding, and project finance. Documentation includes financial statements, bank statements, GST returns, and business operations details.
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-6 md:mb-8">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                        Unsecured Loans
                      </h3>
                      <ul className="space-y-2 md:space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <div>
                            <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                              Business Loans:
                            </span>
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              {" "}
                              Based on credit profile, cash flows, and business performance. Documentation includes financial statements, bank statements, GST returns, and business registration.
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <div>
                            <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                              Personal Loans:
                            </span>
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              {" "}
                              For individuals based on creditworthiness and income. Documentation includes income proof, bank statements, and KYC documents.
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                        Advisory Services
                      </h3>
                      <ul className="space-y-3 md:space-y-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <div>
                            <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                              IPO Advisory & Pre-IPO Support:
                            </span>
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              {" "}
                              Financial readiness assessment, documentation support, and coordination with investment bankers, legal advisors, and regulatory bodies. We assist in financial structuring, regulatory compliance review, and process coordination. We work alongside merchant bankers and legal advisors, focusing on financial aspects rather than regulatory approvals.
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <div>
                            <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                              TransUnion CIBIL Reconciliation & Credit Profile Advisory:
                            </span>
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              {" "}
                              Identification and resolution of CIBIL discrepancies, coordination with lenders for corrections, and credit profile strengthening. We analyze credit reports, identify errors, coordinate corrections, and provide guidance on improving creditworthiness for better funding access.
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <div>
                            <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                              Recovery & Resolution Advisory for PSU Banks:
                            </span>
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              {" "}
                              Consulting support for stressed assets and NPAs, including recovery strategy planning, restructuring options, OTS settlements, and IBC process support. We provide portfolio analysis, strategy development, and coordination with banks, aligned with regulatory frameworks.
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <div>
                            <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                              CGTMSE & MSME Credit Advisory:
                            </span>
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              {" "}
                              Advisory for CGTMSE-backed collateral-free loans, eligibility assessment, proposal structuring, and coordination with banks. We assist in business evaluation, documentation preparation, and lender coordination for MSME funding solutions.
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Karnataka Businesses Choose Us */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Why Karnataka Businesses Choose Rhomboid Finguru
                      </h2>
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Strong understanding of <strong>Karnataka lender behavior</strong>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Experience with <strong>startup and MSME cashflow models</strong>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Advisory-led, execution-focused approach
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Active coverage across <strong>major Karnataka business hubs</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Frequently Asked Questions */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Frequently Asked Questions
                      </h2>
                    </div>
                    <div className="space-y-4 md:space-y-5">
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Do you provide loan consultancy across Karnataka?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes. We serve businesses across Bengaluru, Hubballi-Dharwad, Mangaluru, Mysuru, and surrounding regions. We provide loan advisory, credit structuring, and syndication services across Karnataka.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Can you help if my business loan was rejected?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes. We identify gaps, restructure proposals, and realign lender selection. We analyze cashflow presentation issues, <Link href="/product/advisory/cibil-reconciliation" className="text-primary hover:underline font-semibold">CIBIL discrepancies</Link>, product mismatches, and documentation gaps to improve approval chances.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Do you guarantee loan approval?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          No. We provide advisory and execution support; approvals depend on lenders. Outcomes depend on lender policies, borrower profile, and documentation quality.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Do you assist with CIBIL correction?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes. We analyse credit reports and coordinate corrections. We help identify CIBIL errors and strengthen credit profiles for improved funding access.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Get in Touch */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Get in Touch – Karnataka
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        If you&apos;re exploring business loans, MSME funding, CGTMSE advisory, or credit profile improvement in Karnataka, we can evaluate your case.
                      </p>
                      <div className="space-y-2 mt-4">
                        <p className="font-semibold text-foreground">Office:</p>
                        <p>
                          510, AT By AGM Vijaylaxmi Venture,<br />
                          Plot 6/7, Mahal Industrial Estate,<br />
                          Mahakali Caves Road, Andheri East, Mumbai – 400093
                        </p>
                        <p className="mt-3">
                          <span className="font-semibold text-foreground">Phone:</span>{" "}
                          <a href="tel:+918291642739" className="text-primary hover:underline">+91 82916 42739</a> |{" "}
                          <a href="tel:+917400139877" className="text-primary hover:underline">+91 74001 39877</a>
                        </p>
                        <p>
                          <span className="font-semibold text-foreground">Email:</span>{" "}
                          <a href="mailto:rhomboidfinguru@gmail.com" className="text-primary hover:underline">rhomboidfinguru@gmail.com</a> |{" "}
                          <a href="mailto:info@rhomboidfinguru.com" className="text-primary hover:underline">info@rhomboidfinguru.com</a>
                        </p>
                        <p>
                          <span className="font-semibold text-foreground">Website:</span>{" "}
                          <a href="https://www.rhomboidfinguru.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.rhomboidfinguru.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Disclaimer */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <p className="text-sm sm:text-base text-muted-foreground italic">
                      <strong>Disclaimer:</strong> Final outcomes depend on lender policies, regulatory requirements, borrower profile, and documentation.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

