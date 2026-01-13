import { counterItems } from "../constants"
import CountUp from "react-countup"

const AnimatedCounter = () => {
  return (
    <div className="padding-x-lg xl:mt-0 mt-32" id="counter">
      <div className="grid-4-cols mx-auto">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col items-center justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <p className="font-normal text-white-50 text-[14px]">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter
