import { FaArrowDown } from "react-icons/fa6"
import { navLinks } from "../constants"
import { useState } from "react"
import { useEffect } from "react"
import { TbBrandWhatsapp } from "react-icons/tb";


const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll)

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          A M R I M A M
        </a>

        <nav className="desktop">
          <ul className="">
            {navLinks.map((link, index) => (
              <li key={index} className="group">
                <a href={link.link}>
                  <span>{link.name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center">
          {/* CONTACT BUTTON — hover only here */}
          <a
            href="https://wa.me/201065621168"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn relative overflow-hidden px-2 py-1 rounded-lg 
                      text-black bg-white hover:text-white hover:bg-[#1A1A1D] border hover:border-white/50 transition-all duration-300"
          >
            <span>
              <TbBrandWhatsapp size={20}/>
            </span>
          </a>

          {/* RESUME BUTTON — no hover effects */}
          <a
            href="/images/EMAM.pdf"
            className="px-3 py-1 ms-2 rounded-lg border border-white/40 
             text-white flex items-center gap-2 hover:border-white/70 transition-colors"
          >
            <span className="uppercase tracking-wider text-sm">Resume</span>
            <FaArrowDown className="text-sm" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default NavBar
