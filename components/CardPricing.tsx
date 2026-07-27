'use client'
import { Check } from "lucide-react"
import { menuPricing } from "../data/lists"

export default () => {

    const pricing = menuPricing
    return (
        pricing.map((price) => (
            <div key={price.id} className="flex flex-col m-2 flex-wrap md:flex-nowrap w-100 p-4 rounded-xl border border-correio-inteligente-400">
                <p className="flex items-center text-sm text-correio-inteligente-400 justify-start rounded-xl ml-4 w-15">{price.plan}</p>
                <div className="flex ml-4">
                    <span className="text-5xl font-medium text-correio-inteligente-200 font-libreNormal">{`R$${price.value}`}</span>
                </div>
                <p className="ml-4 my-2 text-correio-inteligente-400 text-xs">Pagamento mensal</p>
                <div className="border-t mx-4 mt-3 border-gray-300" />
                {price.differentials.map((differential) => (
                    <div key={differential} className="flex items-center ml-4 mt-2 text-correio-inteligente-400">
                        <Check className="w-4 h-4 mr-2 size-4" />
                        <span>{differential}</span>
                    </div>
                ))}
                <div className="border-t mx-4 mt-3 border-gray-300" />
                <a className="flex p-3 items-center text-gray-100 justify-center mx-2 border bg-correio-inteligente-400 h-auto my-2" href={price.href}>
                    Contratar Agora
                </a>
            </div>
        )
        )

    )
}