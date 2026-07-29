import { Ampersand, Plus } from "lucide-react"

export default () => {
    return (
        <div className="flex flex-col">
            <div className="flex h-auto pt-20 md:h-screen items-center justify-center bg-correio-inteligente-200">
                <div className="flex flex-col">
                    <div className="flex items-center ">
                        <img src="/aval.png" className="max-w-20" alt="" />
                        <Ampersand className="ml-2 size-4 text-gray-100" />
                        <img src="/Iso.png" className="max-h-15" alt="" />
                    </div>
                    <div className="flex flex-col h-auto w-160">
                        <h2 className="text-6xl bg-linear-to-r from-correio-inteligente-900 pb-4 to-correio-inteligente-800 bg-clip-text text-transparent">O <span className="font-bold">Banco Aval</span> recuperou milhares em crédito com o Correio Inteligente.</h2>
                        <p className="text-lg text-gray-100">Com campanhas automatizadas pelo WhatsApp, o Banco Aval aumentou a eficiência da cobrança, recuperou uma parcela significativa de créditos em aberto e agilizou a comunicação com seus clientes.</p>
                    </div>
                    <a href="/fale-conosco" className="flex items-center justify-center my-4 p-5 rounded-full bg-correio-inteligente-900 w-60 text-correio-inteligente-200">
                        Fale com um especialista
                    </a>
                </div>
                <div className="ml-10 ">
                    <img src="/ceo.jpeg" className="bg-top w-120 h-120 object-cover rounded-br-md rounded-bl-4xl rounded-tr-4xl" alt="" />
                </div>
            </div>
            <div className="flex h-auto bg-gray-100">
                <div className="flex justify-around items-center p-20 w-full mx-60 rounded-3xl bg-correio-inteligente-200 my-20 h-20">
                    <div className="flex flex-col w-50">
                        <p className="font-black bg-linear-to-r from-correio-inteligente-800 to-correio-inteligente-900 bg-clip-text text-transparent text-2xl">+79%</p>
                        <span className="text-lg text-correio-inteligente-900">na taxa de entrega de mensagens</span>
                    </div>
                    <div className="flex flex-col w-50">
                        <p className="font-black bg-linear-to-r from-correio-inteligente-800 to-correio-inteligente-900 bg-clip-text text-transparent text-2xl">+300mil</p>
                        <span className="text-lg text-correio-inteligente-900">mensagens disparadas em um único mês</span>
                    </div>
                    <div className="flex flex-col w-50">
                        <p className="font-black bg-linear-to-r from-correio-inteligente-800 to-correio-inteligente-900 bg-clip-text text-transparent text-2xl">+50%</p>
                        <span className="text-lg text-correio-inteligente-900">entre mensagens lidas e retornadas</span>
                    </div>
                </div>
                <div className="flex">
                    
                </div>
            </div>
        </div>
    )
}