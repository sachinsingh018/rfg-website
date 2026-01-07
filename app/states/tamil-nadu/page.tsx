import type { Metadata } from "next"
import { CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Business Loan Consultant in Tamil Nadu | MSME & CGTMSE",
  description: "Loan advisory, credit structuring & syndication across Tamil Nadu. MSME loans, CGTMSE, LAP, CIBIL correction in Chennai, Coimbatore, Madurai.",
  alternates: {
    canonical: "https://www.rhomboidfinguru.com/states/tamil-nadu",
  },
  openGraph: {
    title: "Business Loan Consultant in Tamil Nadu | MSME & CGTMSE",
    description: "Loan advisory, credit structuring & syndication across Tamil Nadu. MSME loans, CGTMSE, LAP, CIBIL correction in Chennai, Coimbatore, Madurai.",
    url: "https://www.rhomboidfinguru.com/states/tamil-nadu",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Business Loan Consultant in Tamil Nadu | MSME & CGTMSE",
    description: "Loan advisory, credit structuring & syndication across Tamil Nadu. MSME loans, CGTMSE, LAP, CIBIL correction.",
  },
}

export default function TamilNaduLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Rhomboid Finguru - Financial Advisory Services in Tamil Nadu",
    description: "Loan consultancy and financial advisory services across Tamil Nadu including Chennai, Coimbatore, and Madurai",
    url: "https://www.rhomboidfinguru.com/states/tamil-nadu",
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "State",
        name: "Tamil Nadu",
      },
      {
        "@type": "City",
        name: "Chennai",
      },
      {
        "@type": "City",
        name: "Coimbatore",
      },
      {
        "@type": "City",
        name: "Madurai",
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
        name: "Do you provide loan consultancy across Tamil Nadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We serve businesses across Chennai, Coimbatore, Madurai, and surrounding regions. We provide loan advisory, credit structuring, and syndication services across Tamil Nadu.",
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
          text: "No. We provide advisory and execution support; approvals depend on lenders. We improve probability, clarity, and lender confidence. Outcomes depend on lender policies, borrower profile, and documentation quality.",
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
        name: "What is CGTMSE and how does it help MSMEs in Tamil Nadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) provides credit guarantee coverage for loans extended to MSMEs without requiring traditional collateral. This enables MSMEs to access funding based on business viability rather than asset backing. We assist in CGTMSE eligibility assessment, proposal structuring, and coordination with banks.",
        },
      },
      {
        "@type": "Question",
        name: "How does loan against property work in Tamil Nadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Loan Against Property (LAP) allows businesses in Tamil Nadu to leverage owned property as collateral to secure funding. Lenders typically offer 50-70% of property value. We assist in proposal structuring, documentation coordination, and lender selection based on property type and borrower profile.",
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
        <PageHero title="Financial Advisory & Loan Services in Tamil Nadu" subtitle="Serving Chennai | Coimbatore | Madurai" />
        <div className="pt-6 md:pt-12">
          <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed relative z-10">
                    <p>
                      Tamil Nadu is one of India&apos;s most diversified business economies—spanning large-scale manufacturing, export-oriented MSMEs, IT services, education, healthcare, and infrastructure contracting. From <strong>Chennai</strong>&apos;s automotive and IT corridors to <strong>Coimbatore</strong>&apos;s textile and engineering clusters and <strong>Madurai</strong>&apos;s trade-led enterprises, businesses here require <strong>well-structured, lender-ready financing</strong>, not generic loan applications.
                    </p>
                    <p>
                      <strong>Rhomboid Finguru</strong> provides advisory-led loan structuring and financial consulting for businesses across Tamil Nadu—helping promoters navigate bank policies, credit frameworks, and documentation complexity to improve approval outcomes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Business & Industrial Hubs We Serve */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Business & Industrial Hubs We Serve in Tamil Nadu
                      </h2>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Chennai – IT, Automotive, Infrastructure & Corporate Finance
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Chennai hosts IT services firms, automotive OEMs and component suppliers, EPC contractors, logistics operators, and corporate headquarters. Businesses here often seek:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Working capital & cash credit
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Equipment & machinery finance
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
                              IPO & pre-IPO financial readiness
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Structured <Link href="/product/secured/loan-against-property" className="text-primary hover:underline font-semibold">LAP</Link> for expansion
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Coimbatore – Textiles, Engineering & Export-Led MSMEs
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Coimbatore&apos;s textile manufacturers, foundries, and engineering exporters require:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Export credit & bill discounting
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Machinery & term loans
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              <Link href="/product/advisory/cgtmse-msme-credit-advisory" className="text-primary hover:underline font-semibold">CGTMSE-backed collateral-free funding</Link>
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Cashflow-aligned repayment structuring
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Madurai & Tier-2 Cities – Trade, Education & Healthcare
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Businesses in Madurai, Trichy, Salem, Erode, and Tiruppur typically require:
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
                              Education institution financing
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Healthcare equipment finance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Working capital for trading businesses
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
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
                        We advise:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span><strong>SMEs & MSMEs</strong></span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span><strong>Manufacturers & Exporters</strong></span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span><strong>IT & Technology Companies</strong></span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span><strong>Educational Institutions</strong></span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span><strong>Healthcare & Pharma Businesses</strong></span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span><strong>Infrastructure & EPC Contractors</strong></span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span><strong>Corporate Promoters & CFOs</strong></span>
                        </li>
                      </ul>
                      <p className="mt-3">
                        Many clients approach us after <strong>bank applications stall</strong> due to:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Weak proposal structuring</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Cashflow mismatch with EMI schedules</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span><Link href="/product/advisory/cibil-reconciliation" className="text-primary hover:underline font-semibold">CIBIL discrepancies</Link></span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Sector-specific compliance gaps</span>
                        </li>
                      </ul>
                      <p className="mt-3">
                        We step in <strong>before rejection becomes permanent damage</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Typical Financing Use Cases */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Typical Financing Use Cases in Tamil Nadu
                      </h2>
                    </div>
                    <div className="space-y-4 md:space-y-5">
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2">
                          Textile & Manufacturing Businesses (Coimbatore, Tiruppur)
                        </h3>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Working capital, CC/OD, export credit
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Equipment & modernization finance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Structuring based on production cycles and inventory turnover
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2">
                          IT & Technology Companies (Chennai)
                        </h3>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Unsecured business loans
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Cashflow-based funding
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              IPO & scale-up advisory
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Growth-projection aligned structuring
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2">
                          Automotive & Engineering Units
                        </h3>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Machinery loans
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Project finance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Asset-backed working capital
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Technical risk profiling for lenders
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2">
                          Educational Institutions
                        </h3>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Term loans against approved premises
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Fee-collection-aligned repayment models
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Regulatory-compliant proposal structuring
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2">
                          Pharma & Healthcare
                        </h3>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Equipment finance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Expansion capital
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Compliance-led documentation packaging
                            </span>
                          </li>
                        </ul>
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
                        How Our Advisory Process Works
                      </h2>
                    </div>
                    <ol className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed list-decimal list-inside">
                      <li>
                        <strong className="text-foreground">Requirement & Eligibility Assessment</strong>
                        <br />
                        We study your business model, funding objective, credit profile, and documentation readiness.
                      </li>
                      <li>
                        <strong className="text-foreground">Lender & Product Mapping</strong>
                        <br />
                        We identify banks and NBFCs whose credit policies align with your profile—no blind submissions.
                      </li>
                      <li>
                        <strong className="text-foreground">Proposal Structuring & Documentation</strong>
                        <br />
                        Cashflows, ratios, narratives, and repayment logic are aligned to lender risk frameworks.
                      </li>
                      <li>
                        <strong className="text-foreground">Bank Coordination & Follow-ups</strong>
                        <br />
                        We manage queries, clarifications, and status updates through to outcome.
                      </li>
                    </ol>
                    <p className="mt-4 text-sm sm:text-base md:text-base text-muted-foreground italic border-l-4 border-primary/50 pl-4">
                      We do <strong>not</strong> promise approvals or rates. We improve probability, clarity, and lender confidence.
                    </p>
                  </div>
                </div>
              </section>

              {/* Common Pitfalls */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Common Pitfalls We Help Businesses Avoid
                      </h2>
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          <strong>Incomplete GST / financial filings</strong>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          <strong>Cashflow projections that don&apos;t match EMIs</strong>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          <strong>Incorrect or outdated <Link href="/product/advisory/cibil-reconciliation" className="text-primary hover:underline font-semibold">CIBIL data</Link></strong>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          <strong>Missing sector-specific approvals</strong>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          <strong>Applying to the wrong lender first (this kills deals)</strong>
                        </span>
                      </li>
                    </ul>
                    <p className="mt-4 text-sm sm:text-base md:text-base text-muted-foreground">
                      Fixing these early saves <strong>months of lost time</strong>.
                    </p>
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
                        Financial & Loan Services Covered
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

              {/* Serving Tamil Nadu & Cross-State Businesses */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Serving Tamil Nadu & Cross-State Businesses
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        We advise clients across <strong>Tamil Nadu</strong>, while also supporting promoters with operational or expansion links to <strong>Bengaluru</strong>, Mumbai, and other commercial hubs—ensuring funding structures remain consistent across states.
                      </p>
                    </div>
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
                          Do you provide loan consultancy across Tamil Nadu?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes. We serve businesses across Chennai, Coimbatore, Madurai, and surrounding regions. We provide loan advisory, credit structuring, and syndication services across Tamil Nadu.
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
                          No. We provide advisory and execution support; approvals depend on lenders. We improve probability, clarity, and lender confidence. Outcomes depend on lender policies, borrower profile, and documentation quality.
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
                        Get in Touch – Tamil Nadu Financial Advisory
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        If you&apos;re exploring:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Business loans</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>MSME funding</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>CIBIL correction</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>IPO readiness</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Stressed asset resolution</span>
                        </li>
                      </ul>
                      <p className="mt-3">
                        We can evaluate whether your case is <strong>structurable</strong> before you lose time with banks.
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

