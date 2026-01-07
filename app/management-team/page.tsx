"use client"

import { Mail, Phone, Award, Briefcase, MapPin } from "lucide-react"
import PageHero from "@/components/PageHero"
import Image from "next/image"

interface TeamMember {
  name: string
  title: string
  image?: string
  description: string[]
  email?: string
  phone?: string
  location?: string
  tenure?: string
  achievements?: string[]
  isDirector?: boolean
}

export default function ManagementTeamPage() {
  // Core Team - all members in consistent card format
  const coreTeam: TeamMember[] = [
    {
      name: "SHAMBHU SINGH",
      title: "Mr. Shambhu Sharan Prasad Singh (Founder & Managing Director)",
      image: "/shambhu.png",
      description: [
        "Mr Shambhu Singh (Founder & Managing Director), a seasoned banker with strong credentials as a successful leader and over three decades of financial services in the areas of Construction finance, working capital finance, SME loans, Mortgage loans, Agri loans, NPA Management. Prior to incorporation of Rhomboid Finguru Pvt. Ltd; he was with Kotak Mahindra Bank Ltd for more than 14 years. Has been an asset to all the entities he has worked with, and the list includes, Axis Bank Ltd and Bank of Baroda.",
        "He is an expert who respects conventional wisdom while at the same time justifying decision with rationale. He is driven by passion and strongly believes in innovation and adapting to change. Strongly advocates; service quality, customer-centric approach and inclusive growth. As an Executive Vice President & Business Head with Kotak Mahindra Bank, he brought immense experience of building and managing profitable and scalable businesses, innovation, relationship management, business development & strategic advisory. \"Entrepreneurial creativity\" and \"Drive for results\" truly been drivers of Mr Shambhu Singh.",
      ],
      email: "shambhu.singh@rhomboidfinguru.com, shambhu.singh142021@gmail.com",
      phone: "8291642739 / 7400139877",
      isDirector: true,
    },
    {
      name: "TANUJA SINGH",
      title: "Mrs. Tanuja Singh (Director)",
      image: "/tanuja.png",
      description: [
        "Mrs. Tanuja is the second promoter director and competent to handle manpower with major responsibility to take care of team management & their development. Leading, mentoring and monitoring the performance of the team to ensure efficiency in process operations. Creating and sustaining a dynamic environment that fosters development opportunity and motivate the high performance among the team members.",
      ],
      isDirector: true,
    },
    {
      name: "MANASI PARKAR",
      title: "Senior Relationship & Credit Specialist",
      image: "/mansi.png",
      description: [
        "Manasi Parkar is an MBA in Finance with over 12 years of hands-on experience in credit assessment, borrower profiling, and high-value relationship management. She brings deep expertise in CIBIL and CMR analysis, enabling accurate risk evaluation and strong lender alignment. Her ability to interpret credit data, understand financial behavior, and anticipate lender expectations has consistently resulted in higher approval ratios and faster turnaround times.",
        "As one of the founding members of Rhomboid Finguru, Manasi has played a pivotal role in shaping the firm's credit philosophy and client-first culture. Having been with the firm since its early days, she has contributed significantly to building our reputation for excellence in credit advisory. She is particularly known for managing high-end and repeat customers, building long-term trust, and acting as a strategic advisor rather than a transactional intermediary. Her experience bridges the gap between complex financial structures and practical borrower needs, consistently delivering successful outcomes for clients across diverse sectors.",
      ],
      tenure: "Founding Member",
      achievements: [
        "Established credit assessment frameworks that improved approval rates by 35%",
        "Managed portfolio of 200+ high-value clients with 95% satisfaction rate",
      ],
      isDirector: true,
    },
    {
      name: "NEELAM GUPTA",
      title: "Credit Structuring & Risk Specialist",
      description: [
        "Neelam Gupta is a specialist in credit analysis and proposal structuring, with a sharp eye for financial viability and lender risk frameworks. She excels at dissecting balance sheets, cash flows, and repayment capacity to build proposals that are both bankable and commercially sensible.",
        "With over 8 years of experience in credit structuring, Neelam has been instrumental in developing Rhomboid Finguru's approach to risk assessment and proposal design. Her strength lies in converting complex financial data into clear, well-structured credit notes that resonate with banks and financial institutions. Neelam's contribution directly impacts approval quality, optimal loan structuring, and risk mitigation for both clients and lenders. She has successfully structured over 500+ credit proposals across various sectors, maintaining an impressive conversion rate and helping clients secure financing at competitive terms.",
      ],
      tenure: "8+ years with the firm",
      achievements: [
        "Structured 500+ successful credit proposals",
        "Maintained 85%+ approval rate on structured proposals",
      ],
    },
    {
      name: "ROHIT JAISWAR",
      title: "Credit & Product Strategy Expert",
      description: [
        "Rohit Jaiswar brings strong expertise in credit evaluation, product mapping, and financial solution design. He works closely with clients to understand their exact requirements and aligns them with the most suitable lending products available across banks and NBFCs.",
        "Having been part of Rhomboid Finguru's growth journey for over 6 years, Rohit has developed deep relationships with key lenders and an extensive understanding of product portfolios across the financial services landscape. His role goes beyond credit assessment—Rohit focuses on product finalization, pricing optimization, and structuring solutions that support the client's long-term financial health. His approach ensures that customers receive financing that is not just approved, but sustainable and strategically aligned. He has successfully mapped and delivered solutions for over 300 clients, consistently achieving optimal pricing and terms.",
      ],
      tenure: "6+ years with the firm",
      achievements: [
        "Delivered 300+ successful product mappings",
        "Achieved average interest rate savings of 1.5-2% for clients",
      ],
    },
    {
      name: "SAMIR PARAB",
      title: "Structured Retail Loans Lead",
      description: [
        "Samir Parab manages the end-to-end lifecycle of structured retail loan products, including housing loans, LAP, and other customized retail solutions. From initial eligibility assessment to documentation, coordination, and final disbursement, he ensures a seamless client experience.",
        "With 7 years of dedicated focus on retail lending at Rhomboid Finguru, Samir has built a reputation for exceptional process control and client service. His execution-driven mindset ensures predictable outcomes and high client satisfaction. With strong process control and lender coordination skills, Samir is instrumental in maintaining speed, accuracy, and compliance across retail portfolios. He has successfully processed over 1,000+ retail loan applications, maintaining an average turnaround time of 15-20 days and a client satisfaction score of 4.8/5.",
      ],
      tenure: "7+ years with the firm",
      achievements: [
        "Processed 1,000+ retail loan applications",
        "Maintained 15-20 day average turnaround time",
        "4.8/5 client satisfaction rating",
      ],
    },
    {
      name: "HARSHITA SHEDGE",
      title: "Accounts, Taxation & Compliance Manager",
      description: [
        "Harshita Shedge is responsible for accounts management, GST, TDS, statutory filings, and regulatory compliance across the organization. She ensures that all financial records are accurate, timely, and audit-ready.",
        "As a key member of the finance team for over 5 years, Harshita has been crucial in establishing robust financial controls and compliance frameworks at Rhomboid Finguru. Her role is central to maintaining financial discipline and operational transparency, supporting both internal management and external stakeholders. Harshita's structured approach strengthens Rhomboid Finguru's credibility with banks, partners, and regulators. She has successfully managed all statutory compliances with zero penalties or notices, ensuring the firm maintains its reputation for operational excellence and regulatory adherence.",
      ],
      tenure: "5+ years with the firm",
      achievements: [
        "Zero compliance penalties or regulatory notices",
        "100% on-time statutory filing record",
      ],
    },
    {
      name: "KIRTI SINGH",
      title: "Head of Marketing & Sales Strategy",
      description: [
        "Kirti Singh leads marketing, branding, and sales strategy, shaping how Rhomboid Finguru is positioned across markets and client segments. She focuses on building a strong pipeline through strategic outreach, partnerships, and targeted campaigns.",
        "Since joining Rhomboid Finguru 4 years ago, Kirti has been instrumental in building brand awareness and establishing the firm's market presence. Her role also includes market expansion planning, channel development, and brand consistency, ensuring that the firm's value proposition is clearly communicated to clients, banks, and institutional partners. Under her leadership, the firm has expanded its reach across multiple regions, developed strategic partnerships with 50+ channel partners, and consistently grown the client acquisition pipeline by 40% year-over-year.",
      ],
      tenure: "4+ years with the firm",
      achievements: [
        "40% year-over-year growth in client acquisition",
        "Established 50+ strategic channel partnerships",
      ],
    },
  ]

  // Strategic Partners - all members in consistent card format
  const strategicPartners: TeamMember[] = [
    {
      name: "ABHIJIT JOSHI",
      title: "Partner | Pune & Nashik",
      description: [
        "Abhijit Joshi brings 23 years of extensive experience in finance and lending, with deep regional expertise in Pune and Nashik. He manages business development, client acquisition, and key lender relationships across these markets. Since joining as a regional partner, he has been instrumental in establishing Rhomboid Finguru's strong presence in Maharashtra's key commercial centers, successfully closing over 200+ deals in the region.",
      ],
      location: "Pune & Nashik",
      tenure: "Regional Partner",
      achievements: [
        "Closed 200+ successful deals in Pune & Nashik",
        "Established strong relationships with 15+ regional lenders",
      ],
    },
    {
      name: "MANOJ SINHA",
      title: "Partner | Gujarat & Rajasthan",
      description: [
        "Manoj Sinha is a former CBI and HDFC Bank professional with 28 years of experience in banking and credit risk. He is a recognized expert in NPA management and stressed asset resolution. Based in Ahmedabad, he oversees operations across Gujarat and Rajasthan, providing strategic leadership in recovery, restructuring, and high-risk credit scenarios. He has successfully resolved over 150+ stressed asset cases, helping clients restructure debt worth over ₹500 crores.",
      ],
      location: "Ahmedabad, Gujarat",
      tenure: "28 years industry experience",
      achievements: [
        "Resolved 150+ stressed asset cases",
        "Restructured debt worth ₹500+ crores",
      ],
    },
    {
      name: "SURESH NARAPRAJU",
      title: "Partner | South India (AP, Telangana, Karnataka)",
      description: [
        "With 27 years of experience at institutions such as Bank of Maharashtra and Kotak Bank, Suresh Narapraju brings deep institutional insight into South Indian markets. He manages lending and advisory operations across Andhra Pradesh, Telangana, and Karnataka, leveraging long-standing relationships with banks and financial institutions. He has successfully facilitated over 300+ loan transactions across the region.",
      ],
      location: "South India",
      tenure: "27 years industry experience",
      achievements: [
        "Facilitated 300+ loan transactions in South India",
        "Established partnerships with 20+ regional lenders",
      ],
    },
    {
      name: "VENKATESH",
      title: "Partner | Chennai",
      description: [
        "Venkatesh is a finance veteran with 27 years of experience, overseeing Rhomboid Finguru's operations in Chennai and Tamil Nadu. He plays a key role in expanding institutional partnerships and managing large, relationship-driven accounts. He has successfully managed over 250+ high-value transactions, with a particular strength in corporate and SME financing.",
      ],
      location: "Chennai, Tamil Nadu",
      tenure: "27 years industry experience",
      achievements: [
        "Managed 250+ high-value transactions",
        "Specialized in corporate and SME financing",
      ],
    },
    {
      name: "YUVRAJ MOHITE",
      title: "Partner | Stressed Asset Resolution",
      description: [
        "An ex-Kotak and IndusInd Bank professional, Yuvraj Mohite specializes in stressed asset management, restructuring, and resolution strategies. With over 20 years of experience in banking and credit risk, he brings a unique perspective to complex financial challenges. He has successfully restructured over 100+ cases, helping businesses recover from financial distress and maintain relationships with their lenders.",
      ],
      tenure: "20+ years industry experience",
      achievements: [
        "Restructured 100+ stressed asset cases",
        "Developed firm's stressed asset resolution framework",
      ],
    },
    {
      name: "JASMINE SHAH",
      title: "Marketing Partner | Mumbai",
      description: [
        "Jasmine Shah leads marketing initiatives and business outreach in Mumbai, focusing on brand visibility, lead generation, and strategic collaborations. With a strong background in financial services marketing, she has been key to establishing the firm's brand in Mumbai's sophisticated market. She has successfully developed and executed marketing strategies that have increased brand awareness by 60% and generated over 500+ qualified leads annually.",
      ],
      location: "Mumbai",
      tenure: "Marketing Partner",
      achievements: [
        "60% increase in brand awareness",
        "Generated 500+ qualified leads annually",
      ],
    },
    {
      name: "CHANDRAKANT KAPADIA",
      title: "Regional Partner | Gujarat",
      description: [
        "With 15 years of experience, Chandrakant Kapadia supports regional growth in Gujarat through client servicing, partner coordination, and local market development. His deep understanding of the Gujarat market and strong relationships with local businesses have been instrumental in expanding Rhomboid Finguru's client base. He has successfully serviced over 150+ clients across Gujarat, with a particular focus on SME and retail segments.",
      ],
      location: "Gujarat",
      tenure: "15 years industry experience",
      achievements: [
        "Serviced 150+ clients across Gujarat",
        "Specialized in SME and retail segments",
      ],
    },
    {
      name: "ASHOK KUMAR MISHRA",
      title: "Marketing Partner | Mumbai (Central Line)",
      description: [
        "Ashok Kumar Mishra manages on-ground marketing and client engagement across Mumbai's Central Line region, strengthening grassroots presence and acquisition. His focus on local market penetration and community engagement has been crucial in building Rhomboid Finguru's presence in one of Mumbai's most important commercial corridors. He has successfully organized over 50+ community events and business networking sessions, establishing the firm as a trusted local partner.",
      ],
      location: "Mumbai (Central Line)",
      tenure: "Marketing Partner",
      achievements: [
        "Organized 50+ community events",
        "Established strong local market presence",
      ],
    },
  ]

  // Helper function to render director card (with larger, more prominent image)
  const renderDirectorCard = (member: TeamMember) => {
    const hasImage = member.image && member.image !== ""
    return (
      <div
        key={member.name}
        className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-modern-lg hover:shadow-modern-xl transition-all duration-300 border-2 border-primary/30 hover:border-primary/50 bg-gradient-to-br from-white to-primary/5"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
          {hasImage ? (
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0 ring-4 ring-primary/20">
              <Image
                src={member.image!}
                alt={member.name}
                fill
                className={`object-cover ${member.name === "MANASI PARKAR" ? "object-top" : ""}`}
                style={member.name === "MANASI PARKAR" ? { objectPosition: "top center" } : undefined}
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          ) : (
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 ring-4 ring-primary/20">
              <span className="text-6xl">👤</span>
            </div>
          )}
          <div className="flex-1 min-w-0 text-center md:text-left">
            {member.title.toLowerCase().includes("director") ? (
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3">
                DIRECTOR
              </div>
            ) : (
              <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full mb-3">
                LEADERSHIP
              </div>
            )}
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {member.name}
            </h3>
            <p className="text-base md:text-lg font-semibold text-primary mb-2">
              {member.title}
            </p>
            {member.location && (
              <div className="flex items-center justify-center md:justify-start text-sm text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {member.location}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
          {member.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {(member.tenure || member.achievements) && (
          <div className="mt-4 pt-4 border-t border-border/50">
            {member.tenure && (
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">
                  {member.tenure}
                </span>
              </div>
            )}
            {member.achievements && member.achievements.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {member.achievements.map((achievement, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/5 text-primary text-xs font-medium rounded-lg"
                  >
                    <Award className="h-3 w-3" />
                    {achievement}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
        {(member.email || member.phone) && (
          <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
            {member.email && (
              <div className="flex items-center text-muted-foreground text-sm">
                <Mail className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                <div className="flex flex-wrap gap-1">
                  {member.email.split(", ").map((email, idx) => (
                    <a
                      key={idx}
                      href={`mailto:${email.trim()}`}
                      className="hover:text-primary transition-colors break-all"
                    >
                      {email.trim()}
                      {idx < member.email!.split(", ").length - 1 && ", "}
                    </a>
                  ))}
                </div>
              </div>
            )}
            {member.phone && (
              <div className="flex items-center text-muted-foreground text-sm">
                <Phone className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                <div className="flex flex-wrap gap-1">
                  {member.phone.split(" / ").map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:+91${phone.replace(/\s/g, "")}`}
                      className="hover:text-primary transition-colors"
                    >
                      {phone}
                      {idx < member.phone!.split(" / ").length - 1 && " / "}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  // Helper function to render team member card (handles both with and without images)
  const renderMemberCard = (member: TeamMember) => {
    const hasImage = member.image && member.image !== ""
    return (
      <div
        key={member.name}
        className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-modern hover:shadow-modern-lg transition-all duration-300 border border-border/50 hover:border-primary/20"
      >
        <div className="flex items-start gap-4 mb-4">
          {hasImage ? (
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0">
              <Image
                src={member.image!}
                alt={member.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">👤</span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
              {member.name}
            </h3>
            <p className="text-sm md:text-base font-semibold text-primary mb-2">
              {member.title}
            </p>
            {member.location && (
              <div className="flex items-center text-xs text-muted-foreground mb-2">
                <MapPin className="h-3 w-3 mr-1" />
                {member.location}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
          {member.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {(member.tenure || member.achievements) && (
          <div className="mt-4 pt-4 border-t border-border/50">
            {member.tenure && (
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">
                  {member.tenure}
                </span>
              </div>
            )}
            {member.achievements && member.achievements.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {member.achievements.map((achievement, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/5 text-primary text-xs font-medium rounded-lg"
                  >
                    <Award className="h-3 w-3" />
                    {achievement}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
        {(member.email || member.phone) && (
          <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
            {member.email && (
              <div className="flex items-center text-muted-foreground text-sm">
                <Mail className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                <div className="flex flex-wrap gap-1">
                  {member.email.split(", ").map((email, idx) => (
                    <a
                      key={idx}
                      href={`mailto:${email.trim()}`}
                      className="hover:text-primary transition-colors break-all"
                    >
                      {email.trim()}
                      {idx < member.email!.split(", ").length - 1 && ", "}
                    </a>
                  ))}
                </div>
              </div>
            )}
            {member.phone && (
              <div className="flex items-center text-muted-foreground text-sm">
                <Phone className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                <div className="flex flex-wrap gap-1">
                  {member.phone.split(" / ").map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:+91${phone.replace(/\s/g, "")}`}
                      className="hover:text-primary transition-colors"
                    >
                      {phone}
                      {idx < member.phone!.split(" / ").length - 1 && " / "}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <PageHero title="Management Team" />
      <div className="pt-6 md:pt-12">
        <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12 md:space-y-20">
              {/* Core Team Section */}
              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
                  Core Team
                </h2>
                <div className="space-y-8 md:space-y-12 mb-12">
                  {/* Directors - Full width prominent cards */}
                  {coreTeam
                    .filter((member) => member.isDirector)
                    .map(renderDirectorCard)}
                </div>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {coreTeam
                    .filter((member) => !member.isDirector)
                    .map(renderMemberCard)}
                </div>
              </section>

              {/* Strategic Partners Section */}
              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
                  Strategic Partners & Regional Leadership
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {strategicPartners.map(renderMemberCard)}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
