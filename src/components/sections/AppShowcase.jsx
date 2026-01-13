import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SiReact, SiTypescript, SiTailwindcss } from "react-icons/si"
import { SiNextdotjs } from "react-icons/si"
import { FaSass } from "react-icons/fa"
import { SiFirebase } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiChakraui } from "react-icons/si"
import { SiReactquery } from "react-icons/si"
import { FiArrowRight } from "react-icons/fi"

gsap.registerPlugin(ScrollTrigger)

// البيانات
const mainProject = {
  title: "Nestretto Coffee",
  description:
    "An App built with React.js for a fast, user-friendly experience",
  image: "/images/project1.jpeg",
  alt: "Nestretto Coffee",
  tools: [
    <SiReact key="react" />,
    <FaSass key="sass" />,
    <SiFirebase key="firebase" />,
    <SiRedux key="redux" />,
  ],
  liveLink: "https://nestrettocoffee.com/",
}

const otherProjects = [
  {
    title: "Video Games Explorer",
    image: "/images/2.jpg",
    alt: "Video Games Explorer",
    tools: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="Tailwindcss" />,
      <SiChakraui key="Chakraui" />,
      <SiReactquery key="Reactquery" />,
    ],
    liveLink: "https://gamevortex.netlify.app/",
  },
  {
    title: "OpenWeather Forecast",
    image: "/images/dd.png",
    alt: "OpenWeather Forecast",
    tools: [<SiNextdotjs key="next" />, <SiTailwindcss key="Tailwindcss" />],
    liveLink: "https://weather-app-blush-psi-75.vercel.app/",
  },
]

const AppShowcase = () => {
  const sectionRef = useRef(null)
  const mainProjectRef = useRef(null)
  const otherProjectsRefs = useRef([])

  otherProjectsRefs.current = []

  const addToRefs = (el) => {
    if (el && !otherProjectsRefs.current.includes(el)) {
      otherProjectsRefs.current.push(el)
    }
  }

  useGSAP(() => {
    // أنيميشن المشروع الرئيسي
    gsap.fromTo(
      mainProjectRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: mainProjectRef.current,
          start: "top bottom-=100",
        },
      }
    )

    // أنيميشن المشاريع الأخرى
    otherProjectsRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      )
    })

    // fade in للـ section كله
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    )
  }, [])

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left - المشروع الرئيسي */}
          <div ref={mainProjectRef} className="first-project-wrapper group">
            <div className="image-wrapper cursor-pointer relative overflow-hidden">
              <img src={mainProject.image} alt={mainProject.alt} />
              {mainProject.liveLink && (
                <a
                  href={mainProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                >
                  Live Preview <FiArrowRight className="ml-2 text-xl" />
                </a>
              )}
            </div>
            <div className="text-content">
              <div className="flex items-center justify-between">
                <h2>{mainProject.title}</h2>
                <div className="flex gap-2 mt-2 text-xl text-white">
                  {mainProject.tools.map((icon) => icon)}
                </div>
              </div>
              <p className="text-white-50 md:text-xl">
                {mainProject.description}
              </p>
            </div>
          </div>

          {/* Right - بقية المشاريع */}
          <div className="project-list-wrapper overflow-hidden">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="project relative group"
              >
                <div className="image-wrapper bg-[#ffefdb] cursor-pointer relative overflow-hidden">
                  <img src={project.image} alt={project.alt} />
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    >
                      Live Preview <FiArrowRight className="ml-2 text-xl" />
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-between flex-wrap mt-2">
                  <p>{project.title}</p>
                  <p className="flex gap-2 mt-2 text-xl text-white">
                    {project.tools.map((icon) => icon)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="/projects"
            className="inline-block px-8 py-3 border border-white/30 text-white rounded-full 
                     hover:bg-white hover:text-black transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default AppShowcase
