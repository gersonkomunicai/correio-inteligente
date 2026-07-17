import { MenuDemonstration } from "../data/lists"

interface CardDemonstrationProps {
    menuDemonstrations: MenuDemonstration[]
}

export default function CardDemonstration({ menuDemonstrations }: CardDemonstrationProps,) {
    return (
        <div className='flex flex-wrap justify-center gap-4'>
            {menuDemonstrations.map((item) => {
                return (
                    <div key={item.id} className="flex flex-col w-full max-w-80 h-35 p-3 bg-konnectai-primary rounded-xl items-center hover:bg-correio-inteligente-200 transition-all duration-200 ease-in">
                        <h3 className="font-bold p-1 text-lg text-gray-100">{item.title}</h3>
                        <p className="flex items-center justify-center text-center p-1 text-correio-inteligente-300 h-30">{item.text}</p>
                    </div>
                )
            })}
        </div>
    )
}