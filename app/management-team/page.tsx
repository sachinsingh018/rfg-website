"use client"

import { Mail, Phone } from "lucide-react"
import PageHero from "@/components/PageHero"

export default function ManagementTeamPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="Management Team" />
      <div className="pt-6 md:pt-12">
      <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 md:space-y-16">
            {/* Shambhu Singh */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-start">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {/* Image Placeholder */}
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Shambhu Singh Image
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {/* Add image: /images/team/shambhu-singh.jpg */}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
                  SHAMBHU SINGH
                </h2>
                <p className="text-base sm:text-lg font-semibold text-primary mb-3 md:mb-4">
                  Mr. Shambhu Sharan Prasad Singh (Founder & Managing Director)
                </p>
                <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Mr Shambhu Singh (Founder & Managing Director), a seasoned
                    banker with strong credentials as a successful leader and over
                    three decades of financial services in the areas of Construction
                    finance, working capital finance, SME loans, Mortgage loans,
                    Agri loans, NPA Management. Prior to incorporation of Rhomboid
                    Finguru Pvt. Ltd; he was with Kotak Mahindra Bank Ltd for more
                    than 14 years. Has been an asset to all the entities he has
                    worked with, and the list includes, Axis Bank Ltd and Bank of
                    Baroda.
                  </p>
                  <p>
                    He is an expert who respects conventional wisdom while at the
                    same time justifying decision with rationale.. He is driven by
                    passion and strongly believes in innovation and adapting to
                    change. Strongly advocates; service quality, customer-centric
                    approach and inclusive growth. As an Executive Vice President &
                    Business Head with Kotak Mahindra Bank, he brought immense
                    experience of building and managing profitable and scalable
                    businesses, innovation, relationship management, business
                    development & strategic advisory. &quot;Entrepreneurial creativity&quot; and
                    &quot;Drive for results&quot; truly been drivers of Mr Shambhu Singh
                  </p>
                </div>
                <div className="mt-4 md:mt-6 space-y-2">
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <a
                      href="mailto:shambhu.singh@rhomboidfinguru.com"
                      className="hover:text-primary transition-colors"
                    >
                      shambhu.singh@rhomboidfinguru.com
                    </a>
                    ,{" "}
                    <a
                      href="mailto:shambhu.singh142021@gmail.com"
                      className="hover:text-primary transition-colors ml-1"
                    >
                      shambhu.singh142021@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <a
                      href="tel:+918291642739"
                      className="hover:text-primary transition-colors"
                    >
                      8291642739
                    </a>
                    {" / "}
                    <a
                      href="tel:+917400139877"
                      className="hover:text-primary transition-colors"
                    >
                      7400139877
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tanuja Singh */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-start">
              <div className="relative md:order-2">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  {/* Image Placeholder */}
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Tanuja Singh Image
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {/* Add image: /images/team/tanuja-singh.jpg */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:order-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
                  TANUJA SINGH
                </h2>
                <p className="text-base sm:text-lg font-semibold text-primary mb-3 md:mb-4">
                  Mrs. Tanuja Singh (Director)
                </p>
                <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Mrs. Tanuja is the second promoter director and competent to
                    handle manpower with major responsibility to take care of team
                    management & their development. Leading, mentoring and monitoring
                    the performance of the team to ensure efficiency in process
                    operations. Creating and sustaining a dynamic environment that
                    fosters development opportunity and motivate the high performance
                    among the team members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

