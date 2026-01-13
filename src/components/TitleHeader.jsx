import React from "react"

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="hero-badge">
        <p>{title}</p>
      </div>

      <div className="font-semibold text-3xl md:text-5xl text-center">
        {sub}
      </div>
    </div>
  )
}

export default TitleHeader
