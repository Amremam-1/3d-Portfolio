import { socialImgs } from "../../constants/index"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col items-center justify-center md:items-start">
          <a href="/">Visit my Blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((icon) => (
            <a
              href={icon.link}
              key={icon.name}
              target="_blank"
              className="icon"
            >
              <img src={icon.imgPath} alt={icon.name} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © Copyright {new Date().getFullYear()} AMR.. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
