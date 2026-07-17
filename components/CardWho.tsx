import { MenuWho } from "../data/lists"

interface CardWhoProps {
    menuItems: MenuWho[]
}

export default function CardWho({ menuItems }: CardWhoProps,) {
    return (
        <div className='flex flex-wrap justify-center gap-4'>
            {menuItems.map((item) => {
                return (
                    <div key={item.id} className="flex flex-col w-full max-w-70 h-70 flex-wrap p-3 bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-800 rounded-xl items-start">
                        <img src={item.image} className="h-15 w-15" />
                        <h3 className="font-bold p-1 text-lg text-correio-inteligente-100">{item.title}</h3>
                        <p className="flex items-center text-correio-inteligente-100 h-30">{item.text}</p>
                    </div>
                )
            })}
        </div>
    )
}