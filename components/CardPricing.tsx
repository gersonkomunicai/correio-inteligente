'use client'
import { Check } from "lucide-react"
import { menuPricing } from "../data/lists"
import PlanVolumeSlider from "./RangeInput"

export default () => {

    const pricing = menuPricing
    return (
        pricing.map((price) => (
            <div key={price.id} className="flex flex-col m-2 flex-wrap md:flex-nowrap w-100 p-4 rounded-xl border border-correio-inteligente-400">
                <p className="flex items-center text-sm text-correio-inteligente-400 justify-start rounded-xl ml-4 w-full">{price.plan}</p>
                <p className="flex items-center text-sm text-correio-inteligente-900 justify-start rounded-xl pl-4 bg-correio-inteligente-200 w-29">{price.mostSaled === true ? ` Mais Vendido` : ''}</p>
                <div className="flex ml-4">
                    <span className="text-5xl font-medium text-correio-inteligente-200 font-libreNormal">{`R$${price.value}`}</span><span className="flex items-center bg-correio-inteligente-200 h-6 p-1 rounded-full text-correio-inteligente-900">por envio</span>
                </div>
                <p className="ml-4 my-1 text-correio-inteligente-400 text-xs">Pagamento mensal</p>
                <div className="border-t mx-4 border-gray-300" />
                {price.id === 'personalizado' ?
                    (
                        <div className="flex flex-col ml-4 mt-2">
                            <p className="text-sm">Volume customizado</p>
                            <p className="text-xs">De 100.000 até 1.000.000 de mensagens</p>
                            <PlanVolumeSlider />
                        </div>
                    ) : price.differentials.map((differential) => (
                        <div key={differential} className="flex items-center ml-4 mt-2 text-correio-inteligente-400">
                            <Check className="w-4 h-4 mr-2 size-4" />
                            <span>{differential}</span>
                        </div>
                    ))}
                <div className="border-t mx-4 mt-3 border-gray-300" />
                <a className="flex p-3 items-center text-correio-inteligente-900 justify-center mx-2 border bg-correio-inteligente-200 h-auto my-2" href={price.href} target="_blank">
                    {price.id === 'personalizado' ? 'Fale Conosco' : 'Contratar Agora'}
                </a>
            </div>
        )
        )

    )
}