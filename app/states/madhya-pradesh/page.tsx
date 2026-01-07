import type { Metadata } from "next"
import { CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Business Loan Consultant in Madhya Pradesh | MSME & CGTMSE",
  description: "Working capital, MSME, CGTMSE, LAP & project finance advisory for MP businesses. Trusted loan consultants in Indore, Bhopal, Gwalior.",
  alternates: {
    canonical: "https://www.rhomboidfinguru.com/states/madhya-pradesh",
  },
  openGraph: {
    title: "Business Loan Consultant in Madhya Pradesh | MSME & CGTMSE",
    description: "Working capital, MSME, CGTMSE, LAP & project finance advisory for MP businesses. Trusted loan consultants.",
    url: "https://www.rhomboidfinguru.com/states/madhya-pradesh",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Business Loan Consultant in Madhya Pradesh | MSME & CGTMSE",
    description: "Working capital, MSME, CGTMSE, LAP & project finance advisory for MP businesses.",
  },
}

export default function MadhyaPradeshLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Rhomboid Finguru - Financial Advisory Services in Madhya Pradesh",
    description: "Loan consultancy and financial advisory services across Madhya Pradesh including Indore, Bhopal, and Gwalior",
    url: "https://www.rhomboidfinguru.com/states/madhya-pradesh",
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "State",
        name: "Madhya Pradesh",
      },
      {
        "@type": "City",
        name: "Indore",
      },
      {
        "@type": "City",
        name: "Bhopal",
      },
      {
        "@type": "City",
        name: "Gwalior",
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
        name: "How can I get a business loan in Madhya Pradesh with low CIBIL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Business loans with low CIBIL scores are challenging but possible through secured options like loan against property or CGTMSE-backed facilities. We provide CIBIL rectification advisory to identify and correct errors before application, improving approval chances. Secured loans may be available even with lower credit scores if collateral value is sufficient.",
        },
      },
      {
        "@type": "Question",
        name: "Is CGTMSE loan available for MSMEs in Madhya Pradesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, CGTMSE loans are available for eligible MSMEs in Madhya Pradesh. CGTMSE provides credit guarantee coverage without requiring traditional collateral. We assist in CGTMSE eligibility assessment, proposal structuring, and coordination with banks. The process involves business evaluation, documentation preparation, and lender coordination.",
        },
      },
      {
        "@type": "Question",
        name: "What documents are required for manufacturing business loans in MP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manufacturing business loan documentation in Madhya Pradesh includes manufacturing licenses, financial statements (last 2-3 years), bank statements (last 6-12 months), GST returns, technical specifications, cashflow projections, and business registration documents. For equipment finance, asset details and valuation reports may also be required.",
        },
      },
      {
        "@type": "Question",
        name: "Can pharma companies get working capital loans in Madhya Pradesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, pharmaceutical companies can get working capital loans in Madhya Pradesh. Documentation includes regulatory approvals, financial statements, bank statements, GST returns, and business operations details. We assist in structuring working capital facilities, coordinating with lenders, and ensuring regulatory compliance.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with stressed business loans in MP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide advisory support for stressed business loans in Madhya Pradesh including recovery strategy planning, restructuring options, OTS settlements, and IBC process support. We provide portfolio analysis, strategy development, and coordination with banks, aligned with regulatory frameworks.",
        },
      },
      {
        "@type": "Question",
        name: "How to fix CIBIL score errors in Madhya Pradesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CIBIL errors can be identified through comprehensive credit report analysis. Common issues include incorrect account status, outdated information, or mismatched personal details. We provide advisory support for CIBIL reconciliation, helping identify errors, coordinate corrections with lenders, and strengthen credit profiles for improved funding access.",
        },
      },
      {
        "@type": "Question",
        name: "What is loan against property for business in Madhya Pradesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Loan Against Property (LAP) allows businesses in Madhya Pradesh to leverage owned property as collateral to secure funding. Lenders typically offer 50-70% of property value. Process involves property valuation, legal verification, and credit assessment. We assist in proposal structuring, documentation coordination, and lender selection based on property type and borrower profile.",
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
        <PageHero title="Business Loan & MSME Finance Consultant in Madhya Pradesh" />
        <div className="pt-6 md:pt-12">
          <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="space-y-3 md:space-y-6 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed relative z-10">
                    <p>
                      Businesses across <strong>Indore</strong>, <strong>Bhopal</strong>, and <strong>Gwalior</strong>—from manufacturing and agro processing to pharmaceuticals and EPC contracting—often face delays in securing business loans due to documentation gaps, cashflow structuring issues, or CIBIL discrepancies.
                    </p>
                    <p>
                      <strong>Rhomboid Finguru is a business loan and MSME finance consultant in Madhya Pradesh</strong>, assisting SMEs, MSMEs, manufacturers, traders, and promoters with <strong>working capital loans, CGTMSE-backed collateral-free funding, loan against property (LAP), project finance, and stressed asset advisory</strong> through PSU banks, private banks, and NBFCs.
                    </p>
                  </div>
                </div>
              </section>

              {/* Key Services H2 */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                      Working Capital, CGTMSE, LAP & Project Finance for MP Businesses
                    </h2>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        We provide <Link href="/product/secured/msme-finance" className="text-primary hover:underline font-semibold">MSME loan consultancy services</Link> including working capital facilities (cash credit, overdraft), <Link href="/product/advisory/cgtmse-msme-credit-advisory" className="text-primary hover:underline font-semibold">CGTMSE loan advisory</Link>, <Link href="/product/secured/loan-against-property" className="text-primary hover:underline font-semibold">loan against property for business</Link>, project finance, and stressed asset resolution. Our <Link href="/product/advisory/cibil-reconciliation" className="text-primary hover:underline font-semibold">CIBIL correction advisory</Link> helps businesses resolve credit report issues before loan applications.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Business Loan Advisory by City */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Business Loan Advisory by City in Madhya Pradesh
                      </h2>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Business & MSME Loans in Indore
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Manufacturing clusters, trading businesses, and distributors in Indore need <strong>MSME loan consultant in Indore</strong> support for <strong>manufacturing business loan Indore</strong> and <strong>working capital loan for traders</strong>. We assist with equipment finance, cash credit against inventory, bill discounting, and term loans for expansion. Documentation includes manufacturing licenses, trade history, financial statements, GST returns, and business operations details.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Working Capital & Project Finance in Bhopal
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          EPC contractors, government-linked vendors, and infrastructure businesses in Bhopal require <strong>business loan consultant Bhopal</strong> services for <strong>project finance MP</strong> and working capital. We help structure project finance, construction finance, working capital for ongoing projects, and term loans. Documentation includes project contracts, technical specifications, cashflow projections, and business operations details.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Business Finance for Traders & SMEs in Gwalior
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Trading businesses and logistics-linked enterprises in Gwalior need <strong>business loan Gwalior</strong> solutions and <strong>SME finance MP</strong> support. We assist with working capital facilities, cash credit against inventory, bill discounting, and term loans. Documentation includes trade history, financial statements, bank statements, GST returns, and business registration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Businesses in Madhya Pradesh Work With Us */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Why Businesses in Madhya Pradesh Work With Rhomboid Finguru
                      </h2>
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Experience with <strong>manufacturing & pharma loan structuring</strong> in Madhya Pradesh
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Strong understanding of <strong>seasonal and project-based cashflows</strong> for MP businesses
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Multi-lender approach (PSU, private banks, NBFCs) for better approval rates
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Advisory-first, not product-pushing approach
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Proven handling of <strong>CIBIL corrections before submission</strong> to improve approval chances
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Manufacturing Business Loans & Equipment Finance */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Manufacturing Business Loans & Equipment Finance in Indore
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        Manufacturing units in Indore require equipment finance, working capital for raw materials, and project finance for expansion. Documentation includes manufacturing licenses, technical specifications, and cashflow projections. The process involves asset valuation, operational cashflows, and industry-specific risk assessment. We assist in structuring <Link href="/product/secured/msme-finance" className="text-primary hover:underline font-semibold">MSME finance</Link> and <Link href="/product/secured/loan-against-property" className="text-primary hover:underline font-semibold">loan against property</Link> for manufacturing businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Agro Processing & Trading Finance */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Agro Processing & Trading Finance in Madhya Pradesh
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        Agri processors and traders in Madhya Pradesh require working capital facilities, cash credit against inventory, and export credit for agri exports. Documentation includes trade history, commodity trading patterns, and export documentation. The process involves inventory valuation, trade cycle understanding, and export finance coordination. We help structure <Link href="/product/advisory/cgtmse-msme-credit-advisory" className="text-primary hover:underline font-semibold">CGTMSE-backed facilities</Link> for agro businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Pharmaceutical & Healthcare Finance */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Pharmaceutical & Healthcare Finance in Madhya Pradesh
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        Pharmaceutical companies require equipment finance, working capital for raw materials, and project finance for expansion. Documentation includes regulatory approvals, technical specifications, and cashflow projections. The structuring involves understanding pharmaceutical operations and regulatory compliance. We assist in structuring term loans, working capital facilities, and project finance for pharmaceutical businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Infrastructure & EPC Project Finance */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Infrastructure & EPC Project Finance in Madhya Pradesh
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        Contractors handling infrastructure and EPC projects require project finance, construction finance, and working capital for ongoing projects. Documentation includes project contracts, technical specifications, and cashflow projections. The structuring involves project evaluation, cashflow analysis, and lender coordination. We assist in structuring project finance and working capital facilities for infrastructure contractors.
                      </p>
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
                        For stressed asset resolution, we provide portfolio analysis, strategy development, and coordination with banks aligned with regulatory frameworks. Throughout the process, we manage documentation, coordinate with banks, provide status updates, and assist until disbursement. We do not guarantee approvals or rates; outcomes depend on lender policies, regulatory requirements, borrower profile, and documentation completeness.
                      </p>
                    </div>
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
                        Common Pitfalls We Help Avoid
                      </h2>
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <div>
                          <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                            Documentation Gaps:
                          </span>
                          <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                            {" "}
                            Incomplete financial statements, missing GST returns, or outdated KYC documents can delay approvals. For manufacturing units, missing technical specifications or regulatory approvals can impact applications. We ensure all required documents are current and properly organized.
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <div>
                          <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                            Cashflow Mismatch:
                          </span>
                          <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                            {" "}
                            Proposals that don&apos;t align cashflow projections with repayment schedules often face rejection. For businesses with seasonal cycles, cashflow structuring requires understanding business cycles. We structure proposals with realistic cashflow assumptions and appropriate repayment tenures.
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <div>
                          <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                            CIBIL Discrepancies:
                          </span>
                          <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                            {" "}
                            Errors in credit reports, outdated account status, or mismatched personal details can impact eligibility. We identify and coordinate corrections before submission.
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <div>
                          <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                            Regulatory Non-Compliance:
                          </span>
                          <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                            {" "}
                            Missing regulatory approvals or non-compliance with sector-specific requirements can halt applications. For pharmaceutical and manufacturing industries, regulatory compliance is critical. We ensure regulatory alignment before submission.
                          </span>
                        </div>
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
                          How can I get a business loan in Madhya Pradesh with low CIBIL?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Business loans with low CIBIL scores are challenging but possible through secured options like loan against property or CGTMSE-backed facilities. We provide <Link href="/product/advisory/cibil-reconciliation" className="text-primary hover:underline font-semibold">CIBIL rectification advisory</Link> to identify and correct errors before application, improving approval chances. Secured loans may be available even with lower credit scores if collateral value is sufficient.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Is CGTMSE loan available for MSMEs in Madhya Pradesh?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes, CGTMSE loans are available for eligible MSMEs in Madhya Pradesh. CGTMSE provides credit guarantee coverage without requiring traditional collateral. We assist in <Link href="/product/advisory/cgtmse-msme-credit-advisory" className="text-primary hover:underline font-semibold">CGTMSE eligibility assessment</Link>, proposal structuring, and coordination with banks.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          What documents are required for manufacturing business loans in MP?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Manufacturing business loan documentation in Madhya Pradesh includes manufacturing licenses, financial statements (last 2-3 years), bank statements (last 6-12 months), GST returns, technical specifications, cashflow projections, and business registration documents. For equipment finance, asset details and valuation reports may also be required.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Can pharma companies get working capital loans in Madhya Pradesh?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes, pharmaceutical companies can get working capital loans in Madhya Pradesh. Documentation includes regulatory approvals, financial statements, bank statements, GST returns, and business operations details. We assist in structuring working capital facilities, coordinating with lenders, and ensuring regulatory compliance.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Do you help with stressed business loans in MP?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes, we provide advisory support for stressed business loans in Madhya Pradesh including recovery strategy planning, restructuring options, OTS settlements, and IBC process support. We provide portfolio analysis, strategy development, and coordination with banks, aligned with regulatory frameworks.
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
                        If you&apos;re exploring financing options or need advisory support for your business in Madhya Pradesh, we can discuss your requirements and how our services might assist. We serve clients across Indore, Bhopal, Gwalior, and other cities in the state.
                      </p>
                      <p>
                        Contact us to discuss your funding needs, CIBIL rectification requirements, or stressed asset resolution needs.
                      </p>
                      <p className="text-sm sm:text-base font-medium text-foreground mt-4">
                        We advise businesses across <strong>Madhya Pradesh, Maharashtra, Gujarat, Rajasthan, and Chhattisgarh</strong>, working with leading banks and NBFCs across India.
                      </p>
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

