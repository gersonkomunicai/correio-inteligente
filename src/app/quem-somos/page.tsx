'use client'
import Navbar from "../../../components/Navbar"
import Reveal from "../../../components/Reveal"
import { Check, ChevronDown } from "lucide-react"
import Cta from "../../../components/Cta"
import Image from 'next/image'
export default () => {
    return (
        <div className="flex flex-col w-screen">
            <div className="bg-[url('/image.webp')] absolute bg-right bg-cover bg-no-repeat w-screen h-screen">
                <a href="">oi</a>
            </div>
            <div className="lg:flex items-center flex-col bg-correio-inteligente-200/90 relative h-screen">
                <div className="absolute bg-correio-inteligente-100/20 w-200 h-200 rounded-full -left-100 -bottom-100 blur-2xl" />
                <div className="absolute bg-correio-inteligente-300/10 w-150 h-150 rotate-45 right-140 top-20 blur-3xl" />
                <div className="absolute bg-correio-inteligente-300/10 w-5 h-5 rotate-45 left-100 top-20 blur-xs" />
                <div className="absolute bg-correio-inteligente-100/20 w-200 h-200 rounded-full -right-100 -top-100 blur-2xl" />
                <Reveal direction="right">
                    <Navbar />
                </Reveal>
                <div className="flex relative w-full items-center pl-7 container h-screen">
                    <div className="flex justify-start max-w-4xl pl-7 mt-25 lg:mt-20 text-left flex-col">
                        <Reveal>
                            <span className="lg:text-lg text-md text-gray-100">QUEM SOMOS</span>
                        </Reveal>
                        {/* <Typewriter options={{
                                wrapperClassName: 'bg-linear-to-r text-6xl py-3 font-bold from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent',
                                cursorClassName: 'bg-linear-to-r text-6xl py-3 font-bold from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent',
                                delay: 20
                            }} onInit={(typewriter) => {
                                typewriter.typeString('A infraestrutura mais confiável para envios em longa escala do mercado.').callFunction(() => { setTimeout(() => setAppear(!appear), 300) }).start()
                            }} ></Typewriter> */}
                        <Reveal>
                            <h2 className="bg-linear-to-r text-5xl md:text-6xl py-3 font-bold from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent">Infraestrutura própria para envios em longa escala, feita para operações que não podem parar.</h2>
                        </Reveal>
                        <Reveal direction="left">
                            <div className="h-1 bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-800 md:my-8 my-3 w-100" />
                            <span className="lg:text-xl text-lg text-gray-100 md:font-medium font-light">O Correio Inteligente nasceu para transformar a forma como empresas e instituições se comunicam com seus clientes.</span>
                        </Reveal>
                        <Reveal>
                            <a href="#começo" className="flex my-5 w-35 items-center justify-start mt-8 rounded-md bg-correio-inteligente-900 text-correio-inteligente-200 p-3">
                                <ChevronDown className="size-4 w-4 h-4 mr-2 animate-bounce" />
                                <span>Saiba mais</span>
                            </a>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div id="começo" className="flex items-start py-16 justify-center h-auto  bg-gray-100">
                <div className="absolute bg-correio-inteligente-100/40 w-10 h-10 rotate-45 right-50 blur-sm" />
                <div className="flex flex-col items-center md:px-35 px-5 w-full">
                    <div className="lg:flex flex-col md:w-220">
                        <h2 className="text-4xl bg-linear-to-r bg-clip-text text-transparent from-correio-inteligente-200 p-3 to-correio-inteligente-800 text-center">Uma estrutura criada para quem precisa de<span className="font-bold"> controle e centralização</span>.</h2>
                    </div>
                    <div className="lg:flex justify-center mt-10">
                        <div className="lg:flex  text-left items-start md:mr-10 ">
                            <Reveal direction="left">
                                <div className="flex flex-col">
                                    <span className="md:text-2xl text-correio-inteligente-200">O <span className="font-bold italic">Correio Inteligente</span> nasceu com o propósito de apoiar operações que exigem controle e padronização na comunicação digital. Unimos tecnologia e automação a uma infraestrutura própria, pensada para sustentar operações de alto volume com estabilidade. Algumas coisas que orientam nosso trabalho são:</span>
                                    <span className="md:text-2xl text-correio-inteligente-200"> Algumas coisas que orientam nosso trabalho são: </span>
                                    <div className="flex items-center my-2">
                                        <Check className="w-8 h-8 size-4  text-correio-inteligente-200" />
                                        <span className="md:text-xl bg-correio-inteligente-900 text-correio-inteligente-200 ml-3"> Evolução constante da plataforma, acompanhando as mudanças das diretrizes oficiais do WhatsApp.</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Check className="flex items-center justify-center w-8 h-8 size-4 text-correio-inteligente-200" />
                                        <span className="md:text-xl bg-correio-inteligente-900 text-correio-inteligente-200 ml-3"> Prioridade no suporte à operação e gestão de mensagens.</span>
                                    </div>
                                </div>
                            </Reveal>
                            <div className="absolute bg-correio-inteligente-100/20 w-50 h-50 rotate-45 left-130 mt-30 blur-2xl" />
                        </div>
                        <Reveal direction="right">
                            <Image width={1000} height={1000} className="hidden lg:flex w-150 min-w-130" src="/model.jpeg" alt="" />
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="h-200 bg-gray-100">
                <div className="absolute bg-correio-inteligente-100/20 w-200 h-200 rounded-full -right-100 -top-100 blur-2xl" />
                <div className="absolute bg-correio-inteligente-300/10 w-5 h-5 rotate-45 left-100 mt-30 blur-xs" />
                <div className="absolute bg-correio-inteligente-300/10 w-5 h-5 rotate-45 left-143 mt-50 blur-xs" />
                <div className="absolute bg-correio-inteligente-300/10 w-5 h-5 rotate-45 left-121 mt-40 blur-xs" />
                <div className="absolute bg-correio-inteligente-300/10 w-100 h-100 rounded-full right-100 blur-3xl" />
                <div className="flex h-full items-center">
                    <div className="hidden md:flex flex-col items-center justify-center text-left w-[50%] h-110 bg-correio-inteligente-900">
                        <Reveal direction="left">
                            <div className="max-w-xl ml-20">
                                <h2 className="bg-linear-to-r p-2 from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent font-bold text-3xl">Sobre o Correio Inteligente</h2>
                                <h2 className="bg-linear-to-r px-2 text-gray-600 text-3xl">Nossa história, missão e visão.</h2>
                            </div>
                        </Reveal>
                    </div>
                    <div className="h-auto flex items-center text-center md:w-[50%] md:h-110 bg-correio-inteligente-200">
                        <Reveal direction="right">
                            <div className="flex flex-col justify-center m-5">
                                <h2 className="md:hidden bg-linear-to-r py-3 from-correio-inteligente-800 to-correio-inteligente-900 bg-clip-text text-transparent font-bold text-4xl">Sobre o Correio Inteligente</h2>
                                <h2 className="md:hidden bg-linear-to-r py-3 text-gray-300 text-2xl">Nossa história, missão e visão.</h2>
                                <div className="flex flex-col md:h-auto  justify-center items-center text-lg text-gray-100 text-center md:text-left">
                                    <span className="">
                                        O Correio Inteligente foi criado para <span className="font-bold">simplificar a comunicação</span> entre organizações e pessoas, combinando <span className="font-bold">tecnologia, automação, segurança</span> e <span className="font-bold">integração de canais</span> em uma plataforma preparada para diferentes contextos de operação — do atendimento ao cidadão a fluxos corporativos de relacionamento com clientes.
                                    </span>
                                    <span>
                                        Nossa missão é transformar a comunicação empresarial em uma experiência <span className="font-bold">simples, segura</span> e <span className="font-bold">inteligente</span>. Nossa busca é alcançar um patamar de reconhecimento nacional em <span className="font-bold">soluções de comunicação digita</span>. Por esse motivo nós priorizamos <span className="font-bold">proteção, confiabilidade e boas práticas</span> em toda a operação de mensagens.
                                    </span>
                                </div>

                            </div>
                        </Reveal>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <Cta image="/model2.jpeg"
                title="Pronto para transformar sua comunicação?"
                description="Converse com nosso time e descubra a melhor solução para automatizar seus envios e potencializar os resultados da sua empresa."
                button="Fale com um Especialista"
                className="flex h-200 p-10 items-center justify-center bg-correio-inteligente-200" />
            {/* <Cta className="flex h-200 p-10 items-center justify-center bg-correio-inteligente-200"></Cta> */}

        </div>

    )
}
