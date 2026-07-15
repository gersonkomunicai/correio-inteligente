import { MenuItems } from "../data/listWhy"

interface CardWhyProps {
    menuItems: MenuItems[]
}

export default function CardWhy({ menuItems }: CardWhyProps) {
    return (
        <div className="grid grid-cols-2 gap-2">
            {menuItems.map((item) => {
                const Icon = item.icon
                return (
                    <div key={item.id} className="flex flex-col w-70 h-53 flex-wrap p-3 bg-linear-to-r from-transparent to-correio-inteligente-700 rounded-md items-start">
                        <div className="flex items-center w-full h-20 justify-start p-2 bg-linear-to-r from-green-200 to-correio-inteligente-300 bg-clip-text text-transparent">
                            <Icon className="h-6 w-6 text-white" />
                            <h3 className="font-bold p-1 text-lg">{item.label}</h3>
                        </div>
                        <p className="flex items-center  text-gray-100 h-25">{item.text}</p>
                    </div>
                )
            })}
        </div>
    )
}