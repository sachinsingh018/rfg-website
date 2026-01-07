import type { Metadata } from "next"
import { CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Business Loan Consultant in Gujarat | MSME & Export Finance",
  description: "Loan advisory, credit structuring & syndication across Gujarat. MSME loans, export finance, CGTMSE, LAP in Ahmedabad, Surat, Vadodara, Rajkot.",
  alternates: {
    canonical: "https://www.rhomboidfinguru.com/states/gujarat",
  },
  openGraph: {
    title: "Business Loan Consultant in Gujarat | MSME & Export Finance",
    description: "Loan advisory, credit structuring & syndication across Gujarat. MSME loans, export finance, CGTMSE, LAP in Ahmedabad, Surat, Vadodara, Rajkot.",
    url: "https://www.rhomboidfinguru.com/states/gujarat",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Business Loan Consultant in Gujarat | MSME & Export Finance",
    description: "Loan advisory, credit structuring & syndication across Gujarat. MSME loans, export finance, CGTMSE, LAP.",
  },
}

export default function GujaratLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Rhomboid Finguru - Financial Advisory Services in Gujarat",
    description: "Loan consultancy and financial advisory services across Gujarat including Ahmedabad, Surat, Vadodara, and Rajkot",
    url: "https://www.rhomboidfinguru.com/states/gujarat",
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "State",
        name: "Gujarat",
      },
      {
        "@type": "City",
        name: "Ahmedabad",
      },
      {
        "@type": "City",
        name: "Surat",
      },
      {
        "@type": "City",
        name: "Vadodara",
      },
      {
        "@type": "City",
        name: "Rajkot",
      },
    ],
    serviceType: [
      "Loan Consultancy",
      "Secured Loans",
      "Unsecured Loans",
      "MSME Finance",
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
        name: "Do you provide loan consultancy across Gujarat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We actively serve Ahmedabad, Surat, Vadodara, Rajkot, and surrounding industrial clusters. We provide loan advisory, credit structuring, and syndication services across Gujarat.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help exporters with bank limits and LCs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We assist with export credit, LC/BG structuring, and coordination. We structure facilities based on export cycles, buyer terms, and foreign exchange exposure while coordinating documentation with banks.",
        },
      },
      {
        "@type": "Question",
        name: "Do you guarantee loan approval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We provide advisory and execution support; final decisions rest with lenders. Outcomes depend on lender policy, borrower profile, and documentation quality.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help fix CIBIL issues for businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We analyze reports and coordinate corrections with lenders. We help identify CIBIL errors from legacy or closed accounts and strengthen credit profiles for improved funding access.",
        },
      },
      {
        "@type": "Question",
        name: "What is CGTMSE and how does it help MSMEs in Gujarat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) provides credit guarantee coverage for loans extended to MSMEs without requiring traditional collateral. This enables MSMEs to access funding based on business viability rather than asset backing. We assist in CGTMSE eligibility assessment, proposal structuring, and coordination with banks.",
        },
      },
      {
        "@type": "Question",
        name: "How does loan against property work in Gujarat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Loan Against Property (LAP) allows businesses in Gujarat to leverage owned property as collateral to secure funding. Lenders typically offer 50-70% of property value. We assist in proposal structuring, documentation coordination, and lender selection based on property type and borrower profile.",
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
        <PageHero title="Financial Advisory & Loan Services in Gujarat" subtitle="Serving Ahmedabad | Surat | Vadodara | Rajkot" />
        <div className="pt-6 md:pt-12">
          <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed relative z-10">
                    <p>
                      Gujarat is one of India&apos;s most industrially driven states, powered by manufacturing, exports, and family-run enterprises operating across established industrial clusters. From Ahmedabad&apos;s diversified manufacturing base to Surat&apos;s textile and diamond exports, Vadodara&apos;s chemical and pharmaceutical ecosystem, and Rajkot&apos;s engineering and auto-component units, businesses in Gujarat require <strong>practical, execution-focused financing support</strong>, not generic bank applications.
                    </p>
                    <p>
                      <strong>Rhomboid Finguru</strong> provides end-to-end <strong>loan advisory, credit structuring, and syndication services across Gujarat</strong>, helping businesses secure funding aligned with lender credit policies, export cycles, and operational realities.
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
                        Who We Work With in Gujarat
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
                          <span>Manufacturing promoters</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Exporters and traders</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Finance heads and business owners</span>
                        </li>
                      </ul>
                      <p className="mt-3">
                        Our Gujarat clientele includes:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Textile and diamond exporters in Surat</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Chemical and pharmaceutical manufacturers in Vadodara</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Engineering and auto-component units in Rajkot</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Agro processors and commodity traders</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Infrastructure and EPC contractors</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                          <span>Logistics and warehousing operators</span>
                        </li>
                      </ul>
                      <p className="mt-3">
                        Many businesses approach us <strong>after repeated bank follow-ups, file stagnation, or rejections due to documentation or CIBIL issues</strong>. Others engage us proactively for <strong>CGTMSE structuring, export finance coordination, or stressed asset resolution</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Gujarat-Specific Business Use Cases */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Gujarat-Specific Business Use Cases We Handle
                      </h2>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Ahmedabad: Manufacturing, Trading & MSME Finance
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Businesses in Ahmedabad commonly require:
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
                              <Link href="/product/secured/loan-against-property" className="text-primary hover:underline font-semibold">Loan Against Property (LAP)</Link>
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Term loans for expansion
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
                          We assist in aligning financials, GST data, and cashflows with PSU and private bank lending norms.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Surat: Textile & Diamond Export Finance
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Export-oriented businesses in Surat typically need:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Packing credit (pre-shipment finance)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Post-shipment export credit
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Letters of Credit (LC)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Bank Guarantees (BG)
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          We structure facilities based on export cycles, buyer terms, and foreign exchange exposure while coordinating documentation with banks.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Vadodara: Chemical & Pharmaceutical Funding
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Companies in Vadodara often seek:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Equipment and machinery finance
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
                              Project finance for capacity expansion
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Given the regulatory sensitivity of these sectors, we ensure compliance documentation and lender-ready cashflow projections.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Rajkot: Engineering & Auto-Component Units
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-2">
                          Manufacturing units typically require:
                        </p>
                        <ul className="space-y-2 mb-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Machinery loans
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Bill discounting
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                              Working capital for inventory and receivables
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          We structure proposals based on production cycles, debtor ageing, and inventory turnover.
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
                        <strong className="text-foreground">Business & Funding Assessment</strong>
                        <br />
                        Understanding your operations, funding objective, and current financial position.
                      </li>
                      <li>
                        <strong className="text-foreground">Eligibility & Lender Mapping</strong>
                        <br />
                        Identifying suitable PSU banks, private banks, and NBFCs based on sector and profile.
                      </li>
                      <li>
                        <strong className="text-foreground">Proposal Structuring</strong>
                        <br />
                        Aligning cashflows, repayment tenure, and documentation with lender credit frameworks.
                      </li>
                      <li>
                        <strong className="text-foreground">Documentation & Coordination</strong>
                        <br />
                        Managing valuations, legal checks, export documentation, and bank queries.
                      </li>
                      <li>
                        <strong className="text-foreground">Execution Support Until Disbursement</strong>
                        <br />
                        Continuous follow-ups and process coordination.
                      </li>
                    </ol>
                    <p className="mt-4 text-sm sm:text-base md:text-base text-muted-foreground italic border-l-4 border-primary/50 pl-4">
                      We do not promise guaranteed approvals or rates. Final outcomes depend on lender policy, borrower profile, and documentation quality.
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
                        Common Issues We Help Gujarat Businesses Avoid
                      </h2>
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Incomplete or outdated financials and GST filings
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Export documentation gaps affecting credit limits
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          <Link href="/product/advisory/cibil-reconciliation" className="text-primary hover:underline font-semibold">CIBIL errors</Link> from legacy or closed accounts
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Applying for mismatched loan products
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Regulatory non-compliance in chemical or pharma sectors
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Cashflow projections that don&apos;t match export or seasonal cycles
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

              {/* Why Gujarat Businesses Choose Us */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Why Gujarat Businesses Choose Rhomboid Finguru
                      </h2>
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Deep understanding of <strong>industrial lending in Gujarat</strong>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Strong experience with <strong>PSU bank processes</strong>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Export-focused credit structuring expertise
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Advisory-led, execution-driven approach
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Active coverage across <strong>Ahmedabad, Surat, Vadodara, and Rajkot</strong>
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
                          Do you provide loan consultancy across Gujarat?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes. We actively serve Ahmedabad, Surat, Vadodara, Rajkot, and surrounding industrial clusters. We provide loan advisory, credit structuring, and syndication services across Gujarat.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Can you help exporters with bank limits and LCs?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes. We assist with export credit, LC/BG structuring, and coordination. We structure facilities based on export cycles, buyer terms, and foreign exchange exposure while coordinating documentation with banks.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Do you guarantee loan approval?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          No. We provide advisory and execution support; final decisions rest with lenders. Outcomes depend on lender policy, borrower profile, and documentation quality.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Can you help fix CIBIL issues for businesses?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes. We analyze reports and coordinate corrections with lenders. We help identify <Link href="/product/advisory/cibil-reconciliation" className="text-primary hover:underline font-semibold">CIBIL errors</Link> from legacy or closed accounts and strengthen credit profiles for improved funding access.
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
                        Get in Touch – Gujarat
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        If you&apos;re exploring business loans, MSME funding, export finance, or credit advisory in Gujarat, we can evaluate your case.
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

