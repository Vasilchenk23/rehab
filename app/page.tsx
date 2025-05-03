import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"


export default function Home() {
  return (
    <>
      <HeroSection
      heading="Family Rehab"
      paragraph="Центр сімейної реабілітації"
      imageSrc="/img/main.svg"
      buttonText="записатися"
      buttonHref="/regiester"
    />
     <AboutSection />
    </>
     
  )
}
