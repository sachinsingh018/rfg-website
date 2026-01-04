import HeroSlider from "@/components/HeroSlider"
import AboutSection from "@/components/AboutSection"
import ProductsTabs from "@/components/ProductsTabs"
import AlliancesGrid from "@/components/AlliancesGrid"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ProductsTabs />
      <AlliancesGrid />
      <Testimonials />
    </>
  )
}

