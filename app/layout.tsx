import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rhomboidfinguru.com"),
  title: {
    default: "Rhomboid Finguru - Loan Specialist & Financial Advisory Services",
    template: "%s | Rhomboid Finguru",
  },
  description:
    "Expert loan solutions and financial advisory services. Connect with India's leading banks for secured and unsecured financing, home loans, business loans, personal loans, and more. Your trusted financial partner.",
  keywords: [
    "loan specialist",
    "financial advisory",
    "home loans",
    "business loans",
    "personal loans",
    "loan against property",
    "secured loans",
    "unsecured loans",
    "MSME finance",
    "financial services Mumbai",
    "loan consultancy",
    "rhomboid finguru",
    "best loan rates",
  ],
  authors: [{ name: "Rhomboid Finguru" }],
  creator: "Rhomboid Finguru",
  publisher: "Rhomboid Finguru Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.rhomboidfinguru.com",
    siteName: "Rhomboid Finguru",
    title: "Rhomboid Finguru - Loan Specialist & Financial Advisory Services",
    description:
      "Expert loan solutions and financial advisory services. Connect with India's leading banks for secured and unsecured financing.",
    images: [
      {
        url: "/rfg.png",
        width: 1301,
        height: 722,
        alt: "Rhomboid Finguru Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhomboid Finguru - Loan Specialist & Financial Advisory",
    description:
      "Expert loan solutions and financial advisory services. Your trusted financial partner.",
    images: ["/rfg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/rfg.png",
    shortcut: "/rfg.png",
    apple: "/rfg.png",
  },
  verification: {
    // Add verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Rhomboid Finguru Private Limited",
    description:
      "Expert loan solutions and financial advisory services. Connect with India's leading banks for secured and unsecured financing.",
    url: "https://www.rhomboidfinguru.com",
    logo: "https://www.rhomboidfinguru.com/rfg.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-82916-42739",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "510, AT By AGM Vijaylaxmi Venture, Plot 6/7, Mahal Industrial Estate, Mahakali Caves Road, Andheri East",
      addressLocality: "Mumbai",
      postalCode: "400093",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.rhomboidfinguru.com",
    ],
  }

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}

