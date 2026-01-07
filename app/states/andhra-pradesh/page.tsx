import type { Metadata } from "next"
import { CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Business Loan Consultant in Andhra Pradesh | MSME & CGTMSE",
  description: "Working capital, MSME, CGTMSE, LAP & export finance advisory for Andhra Pradesh businesses. Trusted loan consultants in Visakhapatnam, Vijayawada, Guntur.",
  alternates: {
    canonical: "https://www.rhomboidfinguru.com/states/andhra-pradesh",
  },
  openGraph: {
    title: "Business Loan Consultant in Andhra Pradesh | MSME & CGTMSE",
    description: "Working capital, MSME, CGTMSE, LAP & export finance advisory for Andhra Pradesh businesses. Trusted loan consultants.",
    url: "https://www.rhomboidfinguru.com/states/andhra-pradesh",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Business Loan Consultant in Andhra Pradesh | MSME & CGTMSE",
    description: "Working capital, MSME, CGTMSE, LAP & export finance advisory for Andhra Pradesh businesses.",
  },
}

export default function AndhraPradeshLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Rhomboid Finguru - Financial Advisory Services in Andhra Pradesh",
    description: "Loan consultancy and financial advisory services across Andhra Pradesh including Visakhapatnam, Vijayawada, and Guntur",
    url: "https://www.rhomboidfinguru.com/states/andhra-pradesh",
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "State",
        name: "Andhra Pradesh",
      },
      {
        "@type": "City",
        name: "Visakhapatnam",
      },
      {
        "@type": "City",
        name: "Vijayawada",
      },
      {
        "@type": "City",
        name: "Guntur",
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
        name: "Can I get a business loan in Andhra Pradesh with low CIBIL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Business loans with low CIBIL scores are challenging but possible through secured options like loan against property or CGTMSE-backed facilities. We provide CIBIL rectification advisory to identify and correct errors before application, improving approval chances. Secured loans may be available even with lower credit scores if collateral value is sufficient.",
        },
      },
      {
        "@type": "Question",
        name: "How does CGTMSE loan work for MSMEs in Andhra Pradesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CGTMSE provides credit guarantee coverage for MSME loans without requiring traditional collateral. Eligible MSMEs in Andhra Pradesh can access working capital and term loans based on business viability. We assist in CGTMSE eligibility assessment, proposal structuring, and coordination with banks. The process involves business evaluation, documentation preparation, and lender coordination.",
        },
      },
      {
        "@type": "Question",
        name: "What documents are required for working capital loans in AP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Working capital loan documentation in Andhra Pradesh includes financial statements (last 2-3 years), bank statements (last 6-12 months), GST returns, business registration documents, KYC documents, and business operations details. For cash credit facilities, inventory valuation and trade cycle documentation may also be required.",
        },
      },
      {
        "@type": "Question",
        name: "Can traders get unsecured business loans in Andhra Pradesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traders can get unsecured business loans in Andhra Pradesh based on credit profile, cash flows, and business performance. Documentation includes financial statements, bank statements, GST returns, and business registration. Approval depends on credit score, business track record, and cashflow strength. We assist in structuring proposals and selecting appropriate lenders.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with export finance for Andhra Pradesh businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we assist Andhra Pradesh businesses with export finance including export credit, letter of credit arrangements, and bank guarantees. We coordinate export finance facilities for port operators in Visakhapatnam, agro exporters in Guntur, and trading businesses. Documentation includes export orders, shipping documents, trade history, and bank guarantee requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How to fix CIBIL score errors in Andhra Pradesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CIBIL errors can be identified through comprehensive credit report analysis. Common issues include incorrect account status, outdated information, or mismatched personal details. We provide advisory support for CIBIL reconciliation, helping identify errors, coordinate corrections with lenders, and strengthen credit profiles for improved funding access.",
        },
      },
      {
        "@type": "Question",
        name: "What is loan against property for business in Andhra Pradesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Loan Against Property (LAP) allows businesses in Andhra Pradesh to leverage owned property as collateral to secure funding. Lenders typically offer 50-70% of property value. Process involves property valuation, legal verification, and credit assessment. We assist in proposal structuring, documentation coordination, and lender selection based on property type and borrower profile.",
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
        <PageHero title="Business Loan & MSME Finance Consultant in Andhra Pradesh" />
        <div className="pt-6 md:pt-12">
          <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="space-y-3 md:space-y-6 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed relative z-10">
                    <p>
                      Andhra Pradesh businesses—from <strong>Visakhapatnam port operators</strong> to <strong>agro traders in Guntur</strong> and <strong>manufacturers in Vijayawada</strong>—often face delays in securing business loans due to documentation gaps, cashflow structuring issues, or CIBIL mismatches.
                    </p>
                    <p>
                      <strong>Rhomboid Finguru is a business loan and MSME finance consultant in Andhra Pradesh</strong>, helping SMEs, MSMEs, traders, exporters, and contractors secure <strong>working capital, CGTMSE loans, loan against property (LAP), export finance, and project funding</strong> through banks and NBFCs across India.
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
                      Working Capital, MSME Loans, CGTMSE & LAP for Andhra Pradesh Businesses
                    </h2>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        We provide <Link href="/product/secured/msme-finance" className="text-primary hover:underline font-semibold">MSME loan consultancy services</Link> including working capital facilities (cash credit, overdraft), <Link href="/product/advisory/cgtmse-msme-credit-advisory" className="text-primary hover:underline font-semibold">CGTMSE-backed collateral-free loans</Link>, <Link href="/product/secured/loan-against-property" className="text-primary hover:underline font-semibold">loan against property for business</Link>, export credit, and project finance. Our <Link href="/product/advisory/cibil-reconciliation" className="text-primary hover:underline font-semibold">CIBIL correction advisory</Link> helps businesses resolve credit report issues before loan applications.
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
                        Business Loan Advisory by City in Andhra Pradesh
                      </h2>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Business Loans in Visakhapatnam
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Port operators, logistics firms, and exporters in Visakhapatnam require <strong>business loan consultant in Visakhapatnam</strong> services for <strong>port finance</strong> and <strong>logistics working capital</strong>. We assist with working capital facilities, equipment finance for cargo handling, warehouse funding, and export credit for port-linked businesses. Documentation includes port agreements, operational cashflows, and export documentation.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          MSME & Working Capital Loans in Vijayawada
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Traders, distributors, and manufacturers in Vijayawada need <strong>MSME loan consultant Vijayawada</strong> support for <strong>cash credit facility</strong> and working capital. We help structure MSME finance, cash credit against inventory, bill discounting, and term loans for expansion. Documentation includes trade history, financial statements, GST returns, and business operations details.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                          Agro & Trading Finance in Guntur
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Cold storage operators, agri processors, and traders in Guntur require <strong>agro business loan Andhra Pradesh</strong> solutions and <strong>export credit consultant</strong> services. We assist with working capital against inventory, cold storage funding, export credit for agri exports, and CGTMSE-backed facilities. Documentation includes commodity trading patterns, export orders, and inventory valuation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Businesses in Andhra Pradesh Choose Us */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Why Businesses in Andhra Pradesh Choose Us
                      </h2>
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Experience structuring loans for <strong>port-linked and seasonal businesses</strong> in Andhra Pradesh
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Familiar with <strong>Andhra Pradesh industry cashflow cycles</strong> including port operations, agro processing, and manufacturing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Multi-bank approach (PSU + private + NBFC) for better approval rates
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Advisory-led, not product-pushing approach
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Strong handling of <strong>CIBIL rectification before submission</strong> to improve approval chances
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Working Capital & Equipment Finance for Port & Logistics */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Working Capital & Equipment Finance for Port & Logistics Businesses (Visakhapatnam)
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        Port operators and logistics firms in Visakhapatnam require working capital facilities, equipment finance for cargo handling machinery, and warehouse funding. Documentation includes port agreements, operational cashflows, and asset details. The structuring involves understanding port operations, cargo handling cycles, and cashflow patterns. We assist in coordinating with banks for port-linked financing solutions.
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
                        Agro Processing & Trading Finance in Andhra Pradesh
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        Agri processors and traders in Guntur and across Andhra Pradesh require working capital facilities, cash credit against inventory, and export credit for agri exports. Documentation includes trade history, commodity trading patterns, and export documentation. The process involves inventory valuation, trade cycle understanding, and export finance coordination. We help structure <Link href="/product/secured/msme-finance" className="text-primary hover:underline font-semibold">MSME finance</Link> and <Link href="/product/advisory/cgtmse-msme-credit-advisory" className="text-primary hover:underline font-semibold">CGTMSE-backed facilities</Link> for agro businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Manufacturing & Engineering Finance */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Manufacturing & Engineering Finance in Andhra Pradesh
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        Manufacturing units in Vijayawada and across Andhra Pradesh require equipment finance, working capital for raw materials, and project finance for expansion. Documentation includes manufacturing licenses, technical specifications, and cashflow projections. The process involves asset valuation and industry-specific risk assessment. We assist in structuring term loans, working capital facilities, and <Link href="/product/secured/loan-against-property" className="text-primary hover:underline font-semibold">loan against property</Link> for manufacturing businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Infrastructure & EPC Finance */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Infrastructure & EPC Project Finance in Andhra Pradesh
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
                        For secured loans, we coordinate property valuation, legal verification, and documentation preparation. For unsecured facilities, we focus on credit profile strengthening, cashflow presentation, and lender selection based on credit policies. For export-oriented businesses, we coordinate export credit facilities, letter of credit arrangements, and bank guarantee requirements.
                      </p>
                      <p>
                        For advisory services like CIBIL rectification, we analyze credit reports, identify discrepancies, coordinate with lenders for corrections, and provide guidance on credit profile improvement. Throughout the process, we manage documentation, coordinate with banks, provide status updates, and assist until disbursement. We do not guarantee approvals or rates; outcomes depend on lender policies, regulatory requirements, borrower profile, and documentation completeness.
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
                            Incomplete financial statements, missing GST returns, or outdated KYC documents can delay approvals. For export-oriented businesses, missing export documentation or trade history can impact export credit facilities. We ensure all required documents are current and properly organized.
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
                            Proposals that don&apos;t align cashflow projections with repayment schedules often face rejection. For businesses with seasonal cycles or export payment terms, cashflow structuring requires understanding business cycles. We structure proposals with realistic cashflow assumptions and appropriate repayment tenures.
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
                            Missing regulatory approvals or non-compliance with sector-specific requirements can halt applications. We ensure regulatory alignment before submission.
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
                          Can I get a business loan in Andhra Pradesh with low CIBIL?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Business loans with low CIBIL scores are challenging but possible through secured options like loan against property or CGTMSE-backed facilities. We provide <Link href="/product/advisory/cibil-reconciliation" className="text-primary hover:underline font-semibold">CIBIL rectification advisory</Link> to identify and correct errors before application, improving approval chances. Secured loans may be available even with lower credit scores if collateral value is sufficient.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          How does CGTMSE loan work for MSMEs in Andhra Pradesh?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          CGTMSE provides credit guarantee coverage for MSME loans without requiring traditional collateral. Eligible MSMEs in Andhra Pradesh can access working capital and term loans based on business viability. We assist in <Link href="/product/advisory/cgtmse-msme-credit-advisory" className="text-primary hover:underline font-semibold">CGTMSE eligibility assessment</Link>, proposal structuring, and coordination with banks.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          What documents are required for working capital loans in AP?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Working capital loan documentation in Andhra Pradesh includes financial statements (last 2-3 years), bank statements (last 6-12 months), GST returns, business registration documents, KYC documents, and business operations details. For cash credit facilities, inventory valuation and trade cycle documentation may also be required.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Can traders get unsecured business loans in Andhra Pradesh?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Traders can get unsecured business loans in Andhra Pradesh based on credit profile, cash flows, and business performance. Documentation includes financial statements, bank statements, GST returns, and business registration. Approval depends on credit score, business track record, and cashflow strength.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                          Do you help with export finance for Andhra Pradesh businesses?
                        </h3>
                        <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                          Yes, we assist Andhra Pradesh businesses with export finance including export credit, letter of credit arrangements, and bank guarantees. We coordinate export finance facilities for port operators in Visakhapatnam, agro exporters in Guntur, and trading businesses.
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
                        If you&apos;re exploring financing options or need advisory support for your business in Andhra Pradesh, we can discuss your requirements and how our services might assist. We serve clients across Visakhapatnam, Vijayawada, Guntur, and other cities in the state.
                      </p>
                      <p>
                        Contact us to discuss your funding needs, CIBIL rectification requirements, export finance coordination, or stressed asset resolution needs.
                      </p>
                      <p className="text-sm sm:text-base font-medium text-foreground mt-4">
                        We advise businesses across <strong>Andhra Pradesh, Maharashtra, Gujarat, Telangana, and Karnataka</strong>, working with leading PSU banks, private banks, and NBFCs.
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

