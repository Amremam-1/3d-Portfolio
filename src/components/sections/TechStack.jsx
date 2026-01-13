import TitleHeader from "../TitleHeader"
import { iconSkills } from "../../constants/index"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    )
  })
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="tech-card w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring to the Tabel"
        />

        <div className="w-full overflow-hidden mt-20">
          <div className="flex animate-marquee gap-8 w-max">
            {[...iconSkills, ...iconSkills].map((iconImg, idx) => (
              <img
                key={idx}
                src={iconImg.imgPath}
                alt="icon-skill"
                className=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
