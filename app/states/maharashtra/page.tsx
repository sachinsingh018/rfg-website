import type { Metadata } from "next"
import { CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Business Loan Consultant in Maharashtra | MSME & CGTMSE",
  description: "Loan advisory, syndication & credit consulting across Maharashtra. MSME loans, CGTMSE, LAP, CIBIL correction in Mumbai, Pune, Nashik, Nagpur.",
  alternates: {
    canonical: "https://www.rhomboidfinguru.com/states/maharashtra",
  },
  openGraph: {
    title: "Business Loan Consultant in Maharashtra | MSME & CGTMSE",
    description: "Loan advisory, syndication & credit consulting across Maharashtra. MSME loans, CGTMSE, LAP, CIBIL correction in Mumbai, Pune, Nashik, Nagpur.",
    url: "https://www.rhomboidfinguru.com/states/maharashtra",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Business Loan Consultant in Maharashtra | MSME & CGTMSE",
    description: "Loan advisory, syndication & credit consulting across Maharashtra. MSME loans, CGTMSE, LAP, CIBIL correction.",
  },
}

export default function MaharashtraLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Rhomboid Finguru - Financial Advisory Services in Maharashtra",
    description: "Loan consultancy and financial advisory services across Maharashtra including Mumbai, Pune, Nashik, and Nagpur",
    url: "https://www.rhomboidfinguru.com/states/maharashtra",
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "State",
        name: "Maharashtra",
      },
      {
        "@type": "City",
        name: "Mumbai",
      },
      {
        "@type": "City",
        name: "Pune",
      },
      {
        "@type": "City",
        name: "Nashik",
      },
      {
        "@type": "City",
        name: "Nagpur",
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
        name: "Do you provide loan consultancy across all cities in Maharashtra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We actively serve Mumbai, Pune, Nashik, Nagpur, and surrounding industrial zones. We provide loan advisory, syndication, and credit consulting services across Maharashtra.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help if my bank loan was rejected?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We review rejection reasons, correct gaps, and re-structure proposals. We analyze documentation gaps, cashflow mismatches, CIBIL issues, and product mismatches to improve approval chances.",
        },
      },
      {
        "@type": "Question",
        name: "Do you guarantee loan approvals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We provide advisory and execution support; final decisions rest with lenders. Outcomes depend on lender policies, regulatory requirements, borrower profile, and documentation quality.",
        },
      },
      {
        "@type": "Question",
        name: "Do you assist with CIBIL correction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We analyze credit reports, identify discrepancies, and coordinate corrections with lenders. We help strengthen credit profiles for improved funding access.",
        },
      },
      {
        "@type": "Question",
        name: "What is CGTMSE and how does it help MSMEs in Maharashtra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) provides credit guarantee coverage for loans extended to MSMEs without requiring traditional collateral. This enables MSMEs to access funding based on business viability rather than asset backing. We assist in CGTMSE eligibility assessment, proposal structuring, and coordination with banks.",
        },
      },
      {
        "@type": "Question",
        name: "How does loan against property work in Maharashtra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Loan Against Property (LAP) allows businesses and individuals to leverage owned property as collateral to secure funding. Lenders typically offer 50-70% of the property value. We assist in proposal structuring, documentation coordination, and lender selection based on property type and borrower profile.",
        },
      },
      {
        "@type": "Question",
        name: "How does IPO advisory work for companies in Maharashtra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IPO advisory involves preparing companies for public listing through financial readiness assessment, documentation support, and coordination with investment bankers, legal advisors, and regulatory bodies. We work alongside merchant bankers and legal advisors, focusing on financial structuring, documentation, and process coordination.",
        },
      },
      {
        "@type": "Question",
        name: "What support is available for stressed assets and NPAs in Maharashtra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide advisory support for stressed assets and NPAs including recovery strategy planning, restructuring options, OTS settlements, and IBC process support. We provide portfolio analysis, strategy development, and coordination with banks, aligned with regulatory frameworks.",
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
        <PageHero title="Financial Advisory & Loan Services in Maharashtra" subtitle="Serving Mumbai | Pune | Nashik | Nagpur" />
        <div className="pt-6 md:pt-12">
          <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
          <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed relative z-10">
                    <p>
                      Maharashtra is India&apos;s most active commercial state — home to large corporates, MSMEs, exporters, real estate developers, manufacturers, and service businesses operating across multiple economic zones. From Mumbai&apos;s financial and commercial hubs to Pune&apos;s industrial corridors, Nashik&apos;s agro-manufacturing base, and Nagpur&apos;s logistics and trading ecosystem, businesses here require <strong>practical, approval-focused financing solutions</strong>, not generic bank applications.
                    </p>
                    <p>
                      <strong>Rhomboid Finguru</strong> provides end-to-end <strong>loan advisory, syndication, and credit consulting services across Maharashtra</strong>, helping businesses structure, correct, and execute funding transactions aligned with lender risk frameworks.
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
                Who We Work With
              </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                <p>
                  We serve SMEs, MSMEs, corporate promoters, and finance heads across Maharashtra who need strategic financial guidance. Our clients include hotel operators in Mumbai and Pune, educational institutions seeking infrastructure funding, real estate developers managing construction finance, agro processors and traders requiring working capital, pharmaceutical companies expanding operations, logistics firms needing equipment finance, and infrastructure contractors handling EPC projects.
                </p>
                <p>
                  Many clients approach us when traditional bank applications stall due to documentation gaps, cashflow presentation issues, or CIBIL discrepancies. Others seek our advisory when exploring IPO readiness, managing stressed assets, or structuring CGTMSE-backed facilities for collateral-free funding.
                </p>
                    </div>
                  </div>
              </div>
            </section>

              {/* Maharashtra-Specific Business Use Cases */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Maharashtra-Specific Business Use Cases We Handle
              </h2>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Mumbai: Corporate, Hospitality & Real Estate Finance
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Businesses in Mumbai frequently require:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              <Link href="/product/secured/loan-against-property" className="text-primary hover:underline font-semibold">Loan Against Property (LAP)</Link>
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Lease Rental Discounting (LRD)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Construction finance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              High-value working capital
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Challenges often include complex property titles, tight bank credit norms, lease structuring issues, and CIBIL mismatches. We help restructure proposals, align documentation, and place cases with suitable lenders.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Pune: Manufacturing, IT & MSME Funding
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Pune&apos;s industrial and service businesses typically seek:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              <Link href="/product/secured/msme-finance" className="text-primary hover:underline font-semibold">MSME working capital (CC/OD)</Link>
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Equipment and machinery finance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              <Link href="/product/advisory/cgtmse-msme-credit-advisory" className="text-primary hover:underline font-semibold">CGTMSE collateral-free loans</Link>
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Expansion term loans
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          We assist Pune-based businesses by aligning cashflows with repayment structures and matching them with lenders comfortable with manufacturing and MSME risk profiles.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Nashik: Agro-Processing, Exports & Industrial Units
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Nashik businesses often require:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Export finance and packing credit
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Working capital for seasonal cycles
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Warehouse and cold storage funding
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Term loans for processing units
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          We structure facilities that reflect commodity cycles, export orders, and GST-linked cashflows.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Nagpur: Trading, Logistics & Infrastructure Contractors
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Nagpur&apos;s strategic location drives demand for:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Logistics and fleet finance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Bank guarantees and LCs
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Contractor funding for EPC projects
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Working capital for traders
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          We assist in aligning project documentation, billing cycles, and lender compliance requirements.
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
                How the Process Works
              </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Our advisory-led approach begins with understanding your funding requirement, business model, and current financial position. We assess eligibility across multiple lenders, identify the most suitable products, and structure proposals that align with lender risk frameworks.
                </p>
                <p>
                  For secured loans, we coordinate property valuation, legal verification, and documentation preparation. For unsecured facilities, we focus on credit profile strengthening, cashflow presentation, and lender selection based on credit policies. For advisory services like CIBIL rectification, we analyze credit reports, identify discrepancies, coordinate with lenders for corrections, and provide guidance on credit profile improvement.
                </p>
                <p>
                  Throughout the process, we manage documentation, coordinate with banks, provide status updates, and assist until disbursement. We do not guarantee approvals or rates; outcomes depend on lender policies, regulatory requirements, borrower profile, and documentation completeness.
                </p>
                    </div>
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
                        Common Issues We Help Maharashtra Businesses Fix
              </h2>
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Incomplete or outdated financial statements
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          GST or bank statement mismatches
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          <Link href="/product/advisory/cibil-reconciliation" className="text-primary hover:underline font-semibold">CIBIL errors</Link> or incorrect account tagging
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Applying for the wrong loan product
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Regulatory or compliance gaps
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Cashflow projections that don&apos;t match repayment schedules
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

              {/* Why Businesses Choose Us */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Why Businesses Across Maharashtra Choose Rhomboid Finguru
                      </h2>
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Strong understanding of <strong>regional lender behavior</strong> across Maharashtra
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Experience across <strong>multiple industries</strong> (hospitality, real estate, manufacturing, pharma, logistics)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Focus on <strong>execution, not just application filing</strong>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Transparent advisory-led approach
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Presence and active operations across <strong>Mumbai, Pune, Nashik, and Nagpur</strong>
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
                          Do you provide loan consultancy across all cities in Maharashtra?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes. We actively serve Mumbai, Pune, Nashik, Nagpur, and surrounding industrial zones. We provide loan advisory, syndication, and credit consulting services across Maharashtra.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Can you help if my bank loan was rejected?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes. We review rejection reasons, correct gaps, and re-structure proposals. We analyze documentation gaps, cashflow mismatches, <Link href="/product/advisory/cibil-reconciliation" className="text-primary hover:underline font-semibold">CIBIL issues</Link>, and product mismatches to improve approval chances.
                        </p>
                      </div>
                  <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Do you guarantee loan approvals?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          No. We provide advisory and execution support; final decisions rest with lenders. Outcomes depend on lender policies, regulatory requirements, borrower profile, and documentation quality.
                    </p>
                  </div>
                  <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Do you assist with CIBIL correction?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes. We analyze credit reports, identify discrepancies, and coordinate corrections with lenders. We help strengthen credit profiles for improved funding access.
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
                        Get in Touch – Maharashtra
              </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        If you&apos;re exploring business loans, MSME funding, CIBIL correction, IPO readiness, or advisory support in Maharashtra, we&apos;re happy to evaluate your case.
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

