import NavBar from "./components/NavBar"
import AppShowcase from "./components/sections/AppShowcase"
import Contact from "./components/sections/Contact"
import ExperienceSection from "./components/sections/ExperienceSection"
import FeaturesCard from "./components/sections/FeaturesCard"
import Hero from "./components/sections/Hero"
import HowIWork from "./components/sections/HowIWork"
import TechStack from "./components/sections/TechStack"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      <FeaturesCard />
      <ExperienceSection />
      <HowIWork />
      <TechStack />
      <Contact />
    </>
  )
}

export default App
