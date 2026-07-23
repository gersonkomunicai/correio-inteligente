'use client'
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

export default () => {
    const [appear, setAppear] = useState(false)
    return (
        <main>
            <div className="flex flex-col w-screen">
                <section id="hero">
                    <a href="/" className="flex absolute top-0 z-50 text-gray-100 items-center pt-10 ml-30">
                        <ArrowLeft className="size-4 w-4 h-4 mr-2" />
                        <span>Voltar a página inicial</span>
                    </a>
                    <div className="flex items-center bg-correio-inteligente-200">
                        <div className="flex flex-col bg-correio-inteligente-200 justify-between h-120">
                            <div className="ml-30">
                                <img src="/logoHorizontal.png" className="transition-all duration-300 ease-in h-15" alt="" />
                                <div className="flex pb-10 items-center">
                                    <div className="w-2 h-2 mr-2 rounded-full bg-correio-inteligente-100 shadow-[0_0_15px] shadow-correio-inteligente-300"></div>
                                    <span className="uppercase font-medium  text-correio-inteligente-100 text-xl">QUEM SOMOS</span>
                                </div>
                            </div>
                            <div className="flex flex-col ml-30 w-250 text-left">
                                <h2 className="text-7xl text-white font-libreNormal">A solução mais confiável para envios em longa escala do mercado.</h2>
                                <div className=" mt-8 w-190">
                                    <span className="text-xl text-gray-200">Te ajudamos a alcançar seus clientes de forma confiável, utilizando uma infraestrutura segura e capaz de escalar para milhões de conversas.</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[45%] h-screen bg-[url('/bg.png')] brightness-50 bg-right ">

                        </div>
                    </div>
                </section>
                <section >
                    <div className="flex justify-around snap-start bg-correio-inteligente-900 h-screen">
                        <div className="flex ml-40 flex-col justify-center w-[30%] p-6 bg-correio-inteligente-200">
                            <h2 className="pb-4 text-6xl font-libreNormal font-bold text-correio-inteligente-900">Quem somos</h2>
                            <div className="flex flex-col text-justify text-correio-inteligente-900">
                                <div className="flex">
                                    <span className="indent-8 text-xl">O <span className="font-bold">Correio Inteligente
                                    </span> é uma operação focada, construída em torno de um problema real: empresas que precisam se comunicar em grande escala, sem perder a qualidade e a relevância de cada mensagem enviada.</span>
                                </div>
                                <span className="indent-8 text-xl">Cada funcionalidade do produto nasce de um problema concreto que identificamos, ou que um cliente trouxe, e não de uma lista genérica de recursos que "todo mundo tem". Preferimos crescer resolvendo bem um problema específico do que tentar ser tudo para todos.</span>
                            </div>
                        </div>
                        <div className="flex h-screen items-center" id="image">
                            <div className="w-150 h-150 border">
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex h-screen items-center justify-around bg-correio-inteligente-200">
                        <div className="flex h-screen items-center">
                            <div className="w-100 border h-170"></div>
                        </div>
                        <div className="flex flex-col h-screen justify-center w-[30%] p-6 bg-correio-inteligente-900">
                            <h2 className="pb-4 text-6xl font-libreNormal font-bold text-correio-inteligente-200">Por que o <span className="italic">Correio Inteligente</span> existe?</h2>
                            <div className="flex flex-col text-justify text-correio-inteligente-200">
                                <div className="flex">
                                    <span className="indent-8 text-xl">Toda empresa que cresce chega num ponto em que falar com um cliente de cada vez deixa de fazer sentido. Muitas ferramentas prometem resolver isso, mas tratam comunicação como número: quanto mais mensagens, melhor, mesmo que isso signifique conteúdo genérico, entrega ruim, ou uma experiência ruim para quem recebe.</span>
                                </div>
                                <span className="indent-8 text-xl">O <span className="font-bold">Correio Inteligente</span> nasceu de uma ideia simples: é possível falar com muita gente e ainda assim fazer isso com qualidade. Acreditamos que crescer em escala não deveria significar abrir mão de cuidado. É possível alcançar milhares de pessoas chegando na certa, no momento certo, pelo canal certo.</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}