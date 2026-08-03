import { Bot } from "lucide-react"
import Reveal from "../../../../components/Reveal"

export default () => {
    return (
        <div className="flex flex-col">
            <div className="h-screen bg-correio-inteligente-200 bg-center bg-no-repeat bg-cover ">
                <div className="flex items-center justify-center h-screen">
                    <div className="flex container items-center justify-center">
                        <div className="flex flex-col max-w-3xl  p-3">
                            <Reveal direction="left">
                                <p className="text-lg text-gray-100 uppercase">BANCOS E FINTECHS</p>
                            </Reveal>
                            <Reveal direction="up">
                                <h2 className="text-5xl md:text-6xl pb-4 font-bold bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-300 bg-clip-text text-transparent">Comunicação inteligente para bancos e fintechs</h2>
                                <div className="h-0.5 bg-linear-to-r w-80 my-2 md:my-8 from-correio-inteligente-900 to-correio-inteligente-800 "></div>
                            </Reveal>
                            <Reveal direction="left">
                                <p className="text-lg  font-bold mb-6 text-gray-100">Automatize cobranças, notificações e campanhas de relacionamento pelo WhatsApp, ampliando o alcance da sua operação com mais agilidade, segurança e eficiência.</p>
                                <a href="/fale-conosco" className="flex items-center justify-center p-3 w-60 bg-correio-inteligente-900 text-correio-inteligente-200">Solicitar Demonstração</a>
                            </Reveal>
                        </div>
                        <img src="/heroBanco.png" className="max-w-2xl rounded-bl-4xl rounded-tl-xl rounded-br-lg" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-auto bg-correio-inteligente-900">
                <h2 className="bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl my-3">Morbi pretium ultrices nisl ut tincidunt.</h2>
                <div>

                </div>
            </div>
            <div className="flex flex-col h-auto items-center bg-gray-100">
                <div className="container px-30">
                    <h2 className="bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl my-3"></h2>
                    <div className="flex items-center text-blue-500  justify-between">
                        <img src="/Iso.png" className="max-w-xl" alt="" />
                        <div className="flex flex-col divide-y divide-blue-400">
                            <div className="flex items-center py-4">
                                <Bot className="border rounded-full p-2 w-10 h-10"></Bot>
                                <p className="text-xl pl-3">Vivamus tempus imperdiet rhoncus.</p>
                            </div>
                            <div className="flex items-center py-4">
                                <Bot className="border rounded-full p-2 w-10 h-10"></Bot>
                                <p className="text-xl pl-3">Vivamus tempus imperdiet rhoncus.</p>
                            </div>
                            <div className="flex items-center py-4">
                                <Bot className="border rounded-full p-2 w-10 h-10"></Bot>
                                <p className="text-xl pl-3">Vivamus tempus imperdiet rhoncus.</p>
                            </div>
                            <div className="flex items-center py-4">
                                <Bot className="border rounded-full p-2 w-10 h-10"></Bot>
                                <p className="text-xl pl-3">Vivamus tempus imperdiet rhoncus.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}