import type { Metadata } from "next"
import { CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Financial Advisory & Business Loan Consultant in Telangana | Rhomboid Finguru",
  description: "Business loans, LAP, MSME finance & IPO advisory in Hyderabad & Telangana. Trusted loan consultants for IT, pharma & manufacturing firms.",
  alternates: {
    canonical: "https://www.rhomboidfinguru.com/states/telangana",
  },
  openGraph: {
    title: "Financial Advisory & Business Loan Consultant in Telangana | Rhomboid Finguru",
    description: "Business loans, LAP, MSME finance & IPO advisory in Hyderabad & Telangana. Trusted loan consultants for IT, pharma & manufacturing firms.",
    url: "https://www.rhomboidfinguru.com/states/telangana",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Financial Advisory & Business Loan Consultant in Telangana | Rhomboid Finguru",
    description: "Business loans, LAP, MSME finance & IPO advisory in Hyderabad & Telangana. Trusted loan consultants.",
  },
}

export default function TelanganaLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Rhomboid Finguru - Financial Advisory Services in Telangana",
    description: "Loan consultancy and financial advisory services across Telangana including Hyderabad, Secunderabad, Medchal, Uppal, Patancheru, Shamshabad, Warangal, Karimnagar, and Nizamabad",
    url: "https://www.rhomboidfinguru.com/states/telangana",
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "State",
        name: "Telangana",
      },
      {
        "@type": "City",
        name: "Hyderabad",
      },
      {
        "@type": "City",
        name: "Secunderabad",
      },
      {
        "@type": "City",
        name: "Warangal",
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
        name: "Do you provide loan consultancy across Telangana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We serve businesses across Hyderabad, Secunderabad, Medchal, Uppal, Patancheru, Shamshabad, Warangal, Karimnagar, Nizamabad, and surrounding industrial zones. We provide loan advisory, credit structuring, and syndication services across Telangana.",
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
          text: "No. We provide advisory and execution support; approvals depend on lenders. We maximize probability through correct structuring. Outcomes depend on lender policies, borrower profile, and documentation quality.",
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
        name: "What is CGTMSE and how does it help MSMEs in Telangana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) provides credit guarantee coverage for loans extended to MSMEs without requiring traditional collateral. This enables MSMEs to access funding based on business viability rather than asset backing. We assist in CGTMSE eligibility assessment, proposal structuring, and coordination with banks.",
        },
      },
      {
        "@type": "Question",
        name: "How does loan against property work in Telangana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Loan Against Property (LAP) allows businesses in Telangana to leverage owned property (residential or commercial) as collateral to secure funding. Lenders typically offer 50-70% of property value. We assist in proposal structuring, documentation coordination, and lender selection based on property type and borrower profile.",
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
        <PageHero title="Financial Advisory & Loan Services in Telangana" subtitle="Serving Hyderabad | HITEC City | Genome Valley | Medchal" />
        <div className="pt-6 md:pt-12">
          <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed relative z-10">
                    <p>
                      Telangana, led by <strong>Hyderabad</strong>, has emerged as one of India&apos;s strongest business ecosystems—driven by <strong>IT & SaaS</strong>, <strong>pharmaceutical manufacturing</strong>, <strong>life sciences</strong>, <strong>infrastructure</strong>, and <strong>logistics</strong>. From <strong>HITEC City and Gachibowli</strong> to <strong>Genome Valley, Pharma City, Medchal, Uppal, and Shamshabad</strong>, businesses across Telangana require <strong>well-structured financing</strong>, not generic loan applications.
                    </p>
                    <p>
                      <strong>Rhomboid Finguru</strong> works with growing and established businesses across Telangana to <strong>structure, position, and execute funding solutions</strong> aligned with lender risk frameworks, regulatory norms, and cash-flow realities.
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
                        Who We Work With in Telangana
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        We advise:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>MSMEs & SMEs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Startup founders & promoters</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>CFOs and finance heads</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Pharma & manufacturing operators</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Infrastructure & EPC contractors</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Educational institutions & trusts</span>
                        </li>
                      </ul>
                      <p className="mt-3">
                        Our Telangana clients typically include <strong>IT companies in HITEC City</strong>, <strong>pharmaceutical manufacturers in Genome Valley</strong>, <strong>logistics operators near Shamshabad</strong>, and <strong>industrial units in Medchal–Uppal corridors</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Telangana-Specific Business Financing Needs */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Telangana-Specific Business Financing Needs We Handle
                      </h2>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          IT, SaaS & Technology Companies (Hyderabad – HITEC City, Gachibowli)
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Technology companies require:
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
                              <Link href="/product/secured/msme-finance" className="text-primary hover:underline font-semibold">Working capital facilities</Link>
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Founder-level personal credit structuring
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Pre-IPO and IPO financial readiness advisory
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          We structure proposals considering <strong>recurring revenue models, client concentration, ESOP costs, and cash-burn cycles</strong>—factors most banks misunderstand without proper positioning.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Pharmaceutical & Life Sciences (Genome Valley, Pharma City)
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Pharma and healthcare companies require:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Equipment finance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Expansion & project finance
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
                              <Link href="/product/secured/loan-against-property" className="text-primary hover:underline font-semibold">LAP against factory or commercial property</Link>
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          We ensure alignment with <strong>regulatory approvals, technical reports, pollution control norms, and industry-specific risk assessment</strong> demanded by lenders.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Manufacturing & Engineering Units (Medchal, Uppal, Patancheru)
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Manufacturers approach us for:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Machinery & equipment finance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Cash credit & overdraft
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Project finance for capacity expansion
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          We structure proposals based on <strong>production cycles, receivables patterns, and asset valuation</strong>, avoiding common cash-flow mismatch rejections.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Logistics, Warehousing & Trading (Shamshabad, ORR Corridor)
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Logistics firms require:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Warehouse funding
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Fleet & equipment finance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Working capital for operational cycles
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          We align funding with <strong>lease agreements, contract revenues, and inventory turnover</strong>, ensuring lender comfort.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Educational Institutions & Trusts
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Schools and colleges seek:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Term loans against owned premises
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Infrastructure funding
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              LAP for expansion
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          We structure proposals around <strong>enrollment stability, fee collection cycles, and regulatory compliance</strong>—critical for approvals in this sector.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Telangana Businesses Come to Us */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Why Telangana Businesses Come to Us
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        Many clients reach us when:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Bank files stall due to <strong>documentation gaps</strong></span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span><Link href="/product/advisory/cibil-reconciliation" className="text-primary hover:underline font-semibold">CIBIL reports</Link> show <strong>errors or mismatches</strong></span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Cash-flow projections don&apos;t align with EMI structures</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span><Link href="/product/advisory/cgtmse-msme-credit-advisory" className="text-primary hover:underline font-semibold">CGTMSE or MSME loans</Link> are rejected without clarity</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Expansion plans require <strong>multi-bank structuring</strong></span>
                        </li>
                      </ul>
                      <p className="mt-3">
                        We step in <strong>before rejection</strong>, not after damage is done.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* How the Process Works */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Our Advisory-Led Process
                      </h2>
                    </div>
                    <ol className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed list-decimal list-inside">
                      <li>
                        <strong className="text-foreground">Requirement & eligibility assessment</strong>
                        <br />
                        We study your business model, funding objective, credit profile, and documentation readiness.
                      </li>
                      <li>
                        <strong className="text-foreground">Lender shortlisting based on Telangana-specific policies</strong>
                        <br />
                        We identify banks and NBFCs whose credit policies align with your profile—no blind submissions.
                      </li>
                      <li>
                        <strong className="text-foreground">Financial structuring & documentation alignment</strong>
                        <br />
                        Cashflows, ratios, narratives, and repayment logic are aligned to lender risk frameworks.
                      </li>
                      <li>
                        <strong className="text-foreground">Bank coordination, legal & valuation handling</strong>
                        <br />
                        We manage queries, clarifications, valuations, and legal checks.
                      </li>
                      <li>
                        <strong className="text-foreground">End-to-end support till disbursement</strong>
                        <br />
                        Continuous follow-ups and process coordination until closure.
                      </li>
                    </ol>
                    <p className="mt-4 text-sm sm:text-base md:text-base text-muted-foreground italic border-l-4 border-primary/50 pl-4">
                      We don&apos;t promise approvals. We <strong>maximize probability</strong> through correct structuring.
                    </p>
                  </div>
                </div>
              </section>

              {/* Common Issues We Prevent */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Common Issues We Prevent
                      </h2>
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Incorrect cash-flow structuring
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Missing regulatory approvals (critical for pharma & education)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Poor credit presentation despite strong businesses
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          <Link href="/product/advisory/cgtmse-msme-credit-advisory" className="text-primary hover:underline font-semibold">CGTMSE misuse</Link> or wrong lender selection
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
                        Services Offered in Telangana
                      </h2>
                    </div>

                    <div className="mb-6 md:mb-8">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                        Secured Financing
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
                              Loan Against Property (Residential & Commercial) - leveraging owned property for business or personal funding. Process involves property valuation, legal verification, and credit assessment.
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
                              Project & Expansion Finance, MSME Working Capital (CC, OD, BG, LC) - comprehensive working capital and term loan solutions. Documentation includes financial statements, bank statements, GST returns, and business operations details.
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-6 md:mb-8">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                        Unsecured Financing
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
                              Professional Loans, Personal Loans for promoters - for individuals based on creditworthiness and income. Documentation includes income proof, bank statements, and KYC documents.
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

              {/* Serving Across Telangana */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Serving Across Telangana
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        We serve businesses across <strong>Hyderabad, Secunderabad, Medchal, Uppal, Patancheru, Shamshabad, Warangal, Karimnagar, Nizamabad</strong>, and surrounding industrial zones.
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
                          Do you provide loan consultancy across Telangana?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes. We serve businesses across Hyderabad, Secunderabad, Medchal, Uppal, Patancheru, Shamshabad, Warangal, Karimnagar, Nizamabad, and surrounding industrial zones. We provide loan advisory, credit structuring, and syndication services across Telangana.
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
                          No. We provide advisory and execution support; approvals depend on lenders. We maximize probability through correct structuring. Outcomes depend on lender policies, borrower profile, and documentation quality.
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
                        Get in Touch
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        If you&apos;re exploring <strong>business loans, LAP, MSME funding, IPO readiness, or credit advisory in Telangana</strong>, speak with our advisory team.
                      </p>
                      <div className="space-y-2 mt-4">
                        <p className="font-semibold text-foreground">Mumbai Head Office | Serving Telangana Pan-India</p>
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

