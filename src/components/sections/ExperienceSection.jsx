import { expCards } from "../../constants";
import GlowCard from "../GlowCard";
import TitleHeader from "../TitleHeader";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding xl:px-0 w-full">
      <div className="w-full h-full md:px-20 px-5">

        <TitleHeader
          title="💼 My Career Overview"
          sub="Professional Work Experience"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 space-y-10 xl:space-y-32">

            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">

                {/* LEFT SIDE */}
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <img src={card.imgPath} alt={card.title}/>
                  </GlowCard>
                </div>

                {/* RIGHT SIDE */}
                <div className="xl:w-4/6">
                  <div className="flex items-start">

                    {/* Timeline Line */}
                    <div className="absolute top-0 xl:left-[35.2vw] md:left-10 left-5 h-full flex justify-center">
                      <div className="absolute z-30 h-[110%] -top-10 w-14 md:w-28 bg-red" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="time-line-logo rounded-full p-3 w-20 h-19 flex items-center justify-center bg-[#0f172a]">
                        <img src={card.logoPath} alt="logo" loading="lazy"/>
                      </div>

                      <div>
                        {/* Title */}
                        <h1 className="text-3xl font-semibold">
                          {card.title}
                        </h1>

                        {/* Date */}
                        <p className="my-5 text-white-50">
                          🗓️ {card.date}
                        </p>

                        {/* Responsibilities */}
                        <p className="italic text-[#839cb5]">
                          Responsibilities
                        </p>

                        <ul className="list-disc ms-5 flex flex-col gap-3 text-white-50">
                          {card.responsibilities.map((item, idx) => (
                            <li key={idx} className="text-lg">
                              {item}
                            </li>
                          ))}
                        </ul>

                        {/* Key Strengths */}
                        {card.strengths && (
                          <>
                            <p className="italic text-[#839cb5] mt-6">
                              Key Strengths
                            </p>

                            <ul className="flex flex-wrap gap-3 mt-3">
                              {card.strengths.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="px-4 py-2 rounded bg-[#1e293b] text-sm text-white-80"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {/* Tech Stack */}
                        {card.techStack && (
                          <>
                            <p className="italic text-[#839cb5] mt-6">
                              Tech Stack
                            </p>

                            <p className="mt-2 text-white-50">
                              {card.techStack.join(" · ")}
                            </p>
                          </>
                        )}

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
