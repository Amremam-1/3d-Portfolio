import { abilities } from "../../constants"

const FeaturesCard = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map((card, index) => (
          <div
            key={index}
            className="card-border p-8 flex flex-col rounded-xl gap-4"
          >
            <div className="h-[52px] w-[52px] flex items-center">
              <img
                src={card.imgPath}
                alt={card.title}
                className="border rounded-full p-0.5 border-gray-50/8"
              />
            </div>
            <h2 className="font-semibold text-xl">{card.title}</h2>
            <p className="text-[14px] text-gray-500">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturesCard
