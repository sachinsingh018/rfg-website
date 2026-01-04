"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    // Set initial state based on page
    if (!isHomePage) {
      setIsScrolled(true)
    }
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  // On home page, header is transparent until scrolled
  // On other pages, header should always have white background
  const shouldShowTransparent = isHomePage && !isScrolled

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        shouldShowTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <div className="flex-shrink-0 flex-1 max-w-[350px] md:max-w-[450px] lg:max-w-[500px]">
            <Link href="/" className="block">
              <div className="relative transform transition-all duration-300 hover:-translate-y-1">
                <Image
                  src="/rfg.png"
                  alt="Rhomboid Financial"
                  width={500}
                  height={112}
                  className="h-20 md:h-24 lg:h-28 w-full max-w-full object-contain object-left relative z-10 transition-transform duration-300 hover:scale-105"
                  style={{
                    filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)) drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1)) drop-shadow(0 20px 25px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 0 1px rgba(255, 255, 255, 0.1))",
                    transform: "translateZ(0)",
                  }}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "transition-colors",
                shouldShowTransparent
                  ? "text-white hover:text-accent"
                  : "text-foreground hover:text-primary"
              )}
            >
              Home
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown("company")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={cn(
                  "flex items-center transition-colors",
                  shouldShowTransparent
                    ? "text-white hover:text-accent"
                    : "text-foreground hover:text-primary"
                )}
              >
                Company
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === "company" && (
                <div className="absolute top-full left-0 pt-2 w-48">
                  <div className="bg-white rounded-xl shadow-lg py-2 border border-border">
                    <Link
                      href="/about-us"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/management-team"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    >
                      Management Team
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Product Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown("product")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={cn(
                  "flex items-center transition-colors",
                  shouldShowTransparent
                    ? "text-white hover:text-accent"
                    : "text-foreground hover:text-primary"
                )}
              >
                Product
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === "product" && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white rounded-xl shadow-lg py-2 border border-border">
                    {/* Secured Submenu */}
                    <div className="relative group/submenu">
                      <div className="px-4 py-2 text-sm font-semibold text-foreground border-b border-border">
                        Secured
                      </div>
                      <div className="py-1">
                        <Link
                          href="/product/secured/home-loans"
                          className="block px-6 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          Home Loans
                        </Link>
                        <Link
                          href="/product/secured/loan-against-property"
                          className="block px-6 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          Loan Against Property
                        </Link>
                        <Link
                          href="/product/secured/lease-rental-discounting"
                          className="block px-6 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          Lease Rental Discounting
                        </Link>
                        <Link
                          href="/product/secured/msme-finance"
                          className="block px-6 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          MSME Finance
                        </Link>
                      </div>
                    </div>
                    {/* Unsecured Submenu */}
                    <div className="relative group/submenu">
                      <div className="px-4 py-2 text-sm font-semibold text-foreground border-b border-border mt-1">
                        Unsecured
                      </div>
                      <div className="py-1">
                        <Link
                          href="/product/unsecured/business-loan"
                          className="block px-6 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          Business Loan
                        </Link>
                        <Link
                          href="/product/unsecured/personal-loans"
                          className="block px-6 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          Personal Loans
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/alliances"
              className={cn(
                "transition-colors",
                shouldShowTransparent
                  ? "text-white hover:text-accent"
                  : "text-foreground hover:text-primary"
              )}
            >
              Alliances
            </Link>
            <Link
              href="/channel-partner"
              className={cn(
                "transition-colors",
                shouldShowTransparent
                  ? "text-white hover:text-accent"
                  : "text-foreground hover:text-primary"
              )}
            >
              Become A Channel Partner
            </Link>

            <Button
              onClick={() => router.push("/contact-us")}
              className={cn(
                "transition-colors",
                shouldShowTransparent
                  ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground"
              )}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={cn(
                  "h-6 w-6 transition-colors",
                  shouldShowTransparent ? "text-white" : "text-foreground"
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "h-6 w-6 transition-colors",
                  shouldShowTransparent ? "text-white" : "text-foreground"
                )}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={cn(
              "lg:hidden py-4 border-t transition-colors",
              shouldShowTransparent
                ? "border-white/20 bg-primary/95 backdrop-blur-sm"
                : "border-border bg-white"
            )}
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={cn(
                  "transition-colors",
                  shouldShowTransparent
                    ? "text-white hover:text-accent"
                    : "text-foreground hover:text-primary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div>
                <button
                  className={cn(
                    "flex items-center justify-between w-full transition-colors",
                    shouldShowTransparent
                      ? "text-white hover:text-accent"
                      : "text-foreground hover:text-primary"
                  )}
                  onClick={() => toggleDropdown("company-mobile")}
                >
                  Company
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openDropdown === "company-mobile" && "rotate-180"
                    )}
                  />
                </button>
                {openDropdown === "company-mobile" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/about-us"
                      className={cn(
                        "block text-sm transition-colors",
                        shouldShowTransparent
                          ? "text-white/80 hover:text-accent"
                          : "text-muted-foreground hover:text-primary"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/management-team"
                      className={cn(
                        "block text-sm transition-colors",
                        shouldShowTransparent
                          ? "text-white/80 hover:text-accent"
                          : "text-muted-foreground hover:text-primary"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Management Team
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <button
                  className={cn(
                    "flex items-center justify-between w-full transition-colors",
                    shouldShowTransparent
                      ? "text-white hover:text-accent"
                      : "text-foreground hover:text-primary"
                  )}
                  onClick={() => toggleDropdown("product-mobile")}
                >
                  Product
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openDropdown === "product-mobile" && "rotate-180"
                    )}
                  />
                </button>
                {openDropdown === "product-mobile" && (
                  <div className="pl-4 mt-2 space-y-3">
                    {/* Secured Submenu */}
                    <div>
                      <button
                        className={cn(
                          "flex items-center justify-between w-full text-sm font-semibold transition-colors mb-1",
                          shouldShowTransparent
                            ? "text-white/90"
                            : "text-foreground"
                        )}
                        onClick={() => toggleDropdown("secured-mobile")}
                      >
                        Secured
                        <ChevronDown
                          className={cn(
                            "h-3 w-3 transition-transform",
                            (openDropdown as string) === "secured-mobile" && "rotate-180"
                          )}
                        />
                      </button>
                      {(openDropdown as string) === "secured-mobile" && (
                        <div className="pl-4 mt-1 space-y-1">
                          <Link
                            href="/product/secured/home-loans"
                            className={cn(
                              "block text-sm transition-colors",
                              shouldShowTransparent
                                ? "text-white/70 hover:text-accent"
                                : "text-muted-foreground hover:text-primary"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Home Loans
                          </Link>
                          <Link
                            href="/product/secured/loan-against-property"
                            className={cn(
                              "block text-sm transition-colors",
                              shouldShowTransparent
                                ? "text-white/70 hover:text-accent"
                                : "text-muted-foreground hover:text-primary"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Loan Against Property
                          </Link>
                          <Link
                            href="/product/secured/lease-rental-discounting"
                            className={cn(
                              "block text-sm transition-colors",
                              shouldShowTransparent
                                ? "text-white/70 hover:text-accent"
                                : "text-muted-foreground hover:text-primary"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Lease Rental Discounting
                          </Link>
                          <Link
                            href="/product/secured/msme-finance"
                            className={cn(
                              "block text-sm transition-colors",
                              shouldShowTransparent
                                ? "text-white/70 hover:text-accent"
                                : "text-muted-foreground hover:text-primary"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            MSME Finance
                          </Link>
                        </div>
                      )}
                    </div>
                    {/* Unsecured Submenu */}
                    <div>
                      <button
                        className={cn(
                          "flex items-center justify-between w-full text-sm font-semibold transition-colors mb-1",
                          shouldShowTransparent
                            ? "text-white/90"
                            : "text-foreground"
                        )}
                        onClick={() => toggleDropdown("unsecured-mobile")}
                      >
                        Unsecured
                        <ChevronDown
                          className={cn(
                            "h-3 w-3 transition-transform",
                            (openDropdown as string) === "unsecured-mobile" && "rotate-180"
                          )}
                        />
                      </button>
                      {(openDropdown as string) === "unsecured-mobile" && (
                        <div className="pl-4 mt-1 space-y-1">
                          <Link
                            href="/product/unsecured/business-loan"
                            className={cn(
                              "block text-sm transition-colors",
                              shouldShowTransparent
                                ? "text-white/70 hover:text-accent"
                                : "text-muted-foreground hover:text-primary"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Business Loan
                          </Link>
                          <Link
                            href="/product/unsecured/personal-loans"
                            className={cn(
                              "block text-sm transition-colors",
                              shouldShowTransparent
                                ? "text-white/70 hover:text-accent"
                                : "text-muted-foreground hover:text-primary"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Personal Loans
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/alliances"
                className={cn(
                  "transition-colors",
                  shouldShowTransparent
                    ? "text-white hover:text-accent"
                    : "text-foreground hover:text-primary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Alliances
              </Link>
              <Link
                href="/channel-partner"
                className={cn(
                  "transition-colors",
                  shouldShowTransparent
                    ? "text-white hover:text-accent"
                    : "text-foreground hover:text-primary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Become A Channel Partner
              </Link>
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  router.push("/contact-us")
                }}
                className={cn(
                  "w-full transition-colors",
                  shouldShowTransparent
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                )}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

