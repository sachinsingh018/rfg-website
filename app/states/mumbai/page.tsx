import type { Metadata } from "next"
import { CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"

export const metadata: Metadata = {
  title: "Financial Advisory & Loan Services in Mumbai | Rhomboid Finguru",
  description: "Expert loan consultancy and financial advisory services in Mumbai. Secured loans, unsecured loans, MSME finance, CIBIL rectification, and IPO advisory for businesses across BKC, Andheri, Powai, Thane, Navi Mumbai.",
  alternates: {
    canonical: "https://www.rhomboidfinguru.com/states/mumbai",
  },
  openGraph: {
    title: "Financial Advisory & Loan Services in Mumbai | Rhomboid Finguru",
    description: "Expert loan consultancy and financial advisory services in Mumbai. Secured loans, unsecured loans, MSME finance, CIBIL rectification, and IPO advisory.",
    url: "https://www.rhomboidfinguru.com/states/mumbai",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Financial Advisory & Loan Services in Mumbai | Rhomboid Finguru",
    description: "Expert loan consultancy and financial advisory services in Mumbai.",
  },
}

export default function MumbaiLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Rhomboid Finguru - Financial Advisory Services in Mumbai",
    description: "Loan consultancy and financial advisory services in Mumbai including BKC, Andheri, Powai, Thane, and Navi Mumbai",
    url: "https://www.rhomboidfinguru.com/states/mumbai",
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "City",
        name: "Mumbai",
      },
      {
        "@type": "AdministrativeArea",
        name: "Bandra Kurla Complex",
      },
      {
        "@type": "AdministrativeArea",
        name: "Nariman Point",
      },
      {
        "@type": "AdministrativeArea",
        name: "Andheri East",
      },
      {
        "@type": "AdministrativeArea",
        name: "Thane",
      },
      {
        "@type": "AdministrativeArea",
        name: "Navi Mumbai",
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
        name: "How to get a business loan in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Business loans in Mumbai are available through secured and unsecured options. Secured loans require collateral like property or commercial assets, while unsecured business loans are based on credit profile, cash flows, and business performance. The process involves assessing eligibility, preparing documentation including financial statements, bank statements, GST returns, and business registration. We assist in structuring proposals, coordinating with banks, and managing the application process. Final outcomes depend on lender policies, regulatory requirements, borrower profile, and documentation.",
        },
      },
      {
        "@type": "Question",
        name: "What is lease rental discounting and how does it work in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lease Rental Discounting (LRD) allows property owners to leverage lease rental income to secure funding. Lenders evaluate the property, lease agreements, and tenant creditworthiness. The loan amount is typically based on discounted future rental income. Documentation includes property papers, lease agreements, tenant financials, and property valuation reports. This is particularly useful for commercial property owners in Mumbai with long-term lease agreements.",
        },
      },
      {
        "@type": "Question",
        name: "How to fix CIBIL score errors in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CIBIL errors can be identified through comprehensive credit report analysis. Common issues include incorrect account status, outdated information, or mismatched personal details. The rectification process involves identifying discrepancies, coordinating with the concerned lender to correct records, and following up with credit bureaus. We provide advisory support for CIBIL reconciliation, helping identify errors, coordinate corrections with lenders, and strengthen credit profiles for improved funding access.",
        },
      },
      {
        "@type": "Question",
        name: "What is working capital finance and how is it structured for Mumbai businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Working capital finance supports day-to-day business operations including inventory, receivables, and operational expenses. Common forms include cash credit, overdraft, bill discounting, and invoice funding. The structure depends on business cash flow cycles, inventory turnover, and receivables patterns. For Mumbai businesses, documentation typically includes financial statements, bank statements, GST returns, and business operations details. We assist in assessing working capital needs, structuring appropriate facilities, and coordinating with lenders.",
        },
      },
      {
        "@type": "Question",
        name: "How does invoice funding work for businesses in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Invoice funding allows businesses to receive advance funding against outstanding invoices. Lenders evaluate invoice quality, debtor creditworthiness, and business track record. The process involves invoice verification, debtor assessment, and funding against approved invoices. Documentation includes invoice copies, debtor details, delivery challans, and business financials. This is particularly useful for businesses with long payment cycles and strong debtor profiles.",
        },
      },
      {
        "@type": "Question",
        name: "What is CGTMSE and how does it help MSMEs in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) provides credit guarantee coverage for loans extended to MSMEs without requiring traditional collateral. This enables MSMEs to access funding based on business viability rather than asset backing. We assist in CGTMSE eligibility assessment, proposal structuring aligned with bank requirements, and coordination with banks for credit approval. The process involves business evaluation, documentation preparation, and lender coordination.",
        },
      },
      {
        "@type": "Question",
        name: "How does IPO advisory work for companies in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IPO advisory involves preparing companies for public listing through financial readiness assessment, documentation support, and coordination with investment bankers, legal advisors, and regulatory bodies. Our role includes evaluating financial health, ensuring regulatory compliance, structuring the offering, and coordinating with intermediaries. We work alongside merchant bankers and legal advisors, focusing on financial structuring, documentation, and process coordination rather than regulatory approvals which are handled by authorized intermediaries.",
        },
      },
      {
        "@type": "Question",
        name: "What support is available for stressed assets and NPAs in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stressed asset resolution involves analyzing the situation, developing recovery strategies aligned with regulatory frameworks, and coordinating with banks for restructuring, settlement, or resolution. Options include One Time Settlement (OTS), restructuring, or IBC processes. We provide advisory support including portfolio analysis, strategy development, and coordination with banks. The approach depends on asset type, borrower circumstances, and lender policies. Final outcomes depend on lender policies, regulatory requirements, borrower profile, and documentation.",
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
        <PageHero title="Financial Advisory & Loan Services in Mumbai" />
        <div className="pt-6 md:pt-12">
          <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="space-y-3 md:space-y-6 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed relative z-10">
                    <p>
                      Mumbai, India&apos;s financial capital, hosts diverse businesses from BKC&apos;s corporate headquarters to Andheri&apos;s manufacturing units, Powai&apos;s tech parks, and Navi Mumbai&apos;s industrial zones. The city&apos;s commercial ecosystem requires sophisticated financing solutions that align with varied business models—from hospitality and real estate to pharmaceuticals and logistics.
                    </p>
                  </div>
                </div>
              </section>

              {/* Serving Businesses Across Mumbai's Commercial & Industrial Hubs */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-red to-brand-blue rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Serving Businesses Across Mumbai&apos;s Commercial & Industrial Hubs
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        Mumbai&apos;s business landscape spans multiple commercial and industrial zones, each with distinct financing needs. Bandra Kurla Complex (BKC) hosts corporate headquarters and financial services firms requiring structured financing for expansion and working capital. Nariman Point and Fort remain central business districts where businesses seek property-backed financing and lease rental discounting solutions.
                      </p>
                      <p>
                        Lower Parel and Worli have evolved into mixed-use commercial zones where real estate developers, hospitality operators, and corporate offices require construction finance, LAP, and working capital facilities. Andheri East and West, along with MIDC Andheri, house manufacturing units, logistics firms, and export-oriented businesses needing equipment finance, working capital, and export credit facilities.
                      </p>
                      <p>
                        Powai&apos;s technology and pharmaceutical clusters require specialized financing for R&D facilities, equipment, and working capital. Goregaon and Malad host retail, hospitality, and service businesses seeking unsecured business loans and property-backed facilities.
                      </p>
                      <p>
                        Thane and Navi Mumbai, including Vashi and Belapur, have emerged as industrial and commercial hubs where manufacturing, logistics, and real estate businesses require comprehensive financing solutions including project finance, construction finance, and working capital.
                      </p>
                    </div>
                    <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Bandra Kurla Complex (BKC) - Corporate financing and working capital
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Nariman Point - Property-backed financing and LRD
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Fort - Commercial property financing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Lower Parel - Real estate and hospitality financing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Worli - Mixed commercial financing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Andheri East & West - Manufacturing and logistics financing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Powai - Technology and pharmaceutical sector financing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          MIDC Andheri - Industrial financing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Goregaon & Malad - Retail and service sector financing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Thane - Industrial and commercial financing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Navi Mumbai - Project and construction finance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                          Vashi & Belapur - Manufacturing and logistics financing
                        </span>
                      </li>
                    </ul>
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
                        We serve SMEs, MSMEs, corporate promoters, and finance heads across Mumbai who need strategic financial guidance. Our clients include hotel operators in BKC and Andheri, educational institutions in Powai and Thane, real estate developers managing projects across the city, agro processors and traders in Navi Mumbai, pharmaceutical companies in Powai and MIDC areas, logistics firms in Andheri and Vashi, and infrastructure contractors handling EPC projects.
                      </p>
                      <p>
                        Many clients approach us when traditional bank applications stall due to documentation gaps, cashflow presentation issues, or CIBIL discrepancies. Others seek our advisory when exploring IPO readiness, managing stressed assets, or structuring CGTMSE-backed facilities for collateral-free funding.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Typical Use Cases */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Typical Use Cases in Mumbai
                      </h2>
                    </div>
                    <ul className="space-y-2 md:space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <div>
                          <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                            Hospitality Sector:
                          </span>
                          <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                            {" "}
                            Hotels and resorts in BKC, Andheri, and Powai often require construction finance for new properties or LRD against existing lease agreements. Documentation typically includes property papers, lease agreements, financial projections, and operational history.
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <div>
                          <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                            Real Estate Developers:
                          </span>
                          <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                            {" "}
                            Construction finance for residential and commercial projects across Mumbai requires project feasibility analysis, cashflow projections, and coordination with multiple lenders. Documentation includes project approvals, construction schedules, sales projections, and promoter financials.
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <div>
                          <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                            Manufacturing & Logistics:
                          </span>
                          <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                            {" "}
                            Businesses in MIDC Andheri, Thane, and Navi Mumbai require equipment finance, warehouse funding, and working capital for inventory and receivables. The structuring involves asset valuation, operational cashflows, and industry-specific risk assessment.
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <div>
                          <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                            Technology & Pharmaceuticals:
                          </span>
                          <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                            {" "}
                            Companies in Powai and other tech parks need financing for R&D facilities, equipment, and working capital. Documentation includes technology licenses, R&D project details, and intellectual property considerations.
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <div>
                          <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                            Export-Oriented Businesses:
                          </span>
                          <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                            {" "}
                            Export-import businesses in Andheri and Vashi need working capital facilities, export credit, and letter of credit support. Documentation includes trade history, export orders, bank guarantees, and commodity trading patterns.
                          </span>
                        </div>
                      </li>
                    </ul>
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
                            Incomplete financial statements, missing GST returns, or outdated KYC documents can delay approvals. We ensure all required documents are current and properly organized.
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
                            Proposals that don&apos;t align cashflow projections with repayment schedules often face rejection. We structure proposals with realistic cashflow assumptions and appropriate repayment tenures.
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
                            Property Documentation Issues:
                          </span>
                          <span className="text-sm sm:text-base md:text-base text-muted-foreground">
                            {" "}
                            Incomplete property papers, pending approvals, or legal disputes can halt secured loan applications. We verify property documentation completeness before submission.
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
                              Financing against lease rental income from commercial properties. Suitable for property owners in BKC, Nariman Point, and other commercial zones with long-term lease agreements.
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

              {/* Get in Touch */}
              <section className="mb-4 md:mb-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-white" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-brand-blue to-brand-red rounded-full mr-3 md:mr-4" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Get in Touch
                      </h2>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        If you&apos;re exploring financing options or need advisory support for your business in Mumbai, we can discuss your requirements and how our services might assist. We serve clients across BKC, Andheri, Powai, Thane, Navi Mumbai, and other areas in the city.
                      </p>
                      <p>
                        Contact us to discuss your funding needs, CIBIL rectification requirements, IPO readiness assessment, or stressed asset resolution needs.
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

