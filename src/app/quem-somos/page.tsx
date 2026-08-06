'use client'

import Navbar from "../../../components/Navbar"
import Reveal from "../../../components/Reveal"
import { Check, ChevronDown } from "lucide-react"
import Cta from "../../../components/Cta"
export default () => {
    return (
        <main>
            <div className="flex flex-col w-screen">
                <div className="md:flex flex-col bg-correio-inteligente-200 h-screen">
                    <div className="absolute bg-correio-inteligente-100/20 w-200 h-200 rounded-full -left-100 -bottom-100 blur-2xl" />
                    <div className="absolute bg-correio-inteligente-300/10 w-150 h-150 rotate-45 right-140 top-20 blur-3xl" />
                    <div className="absolute bg-correio-inteligente-300/10 w-5 h-5 rotate-45 left-100 top-20 blur-xs" />
                    <div className="absolute bg-correio-inteligente-100/20 w-200 h-200 rounded-full -right-100 -top-100 blur-2xl" />
                    <Reveal direction="right">
                        <Navbar />
                    </Reveal>
                    <div className="flex w-full items-center justify-around h-screen">
                        <div className="flex mt-25 w-100 md:w-250 md:mt-20 text-left flex-col">
                            <Reveal>
                                <span className="md:text-lg text-md text-gray-100">QUEM SOMOS</span>
                            </Reveal>
                            {/* <Typewriter options={{
                                wrapperClassName: 'bg-linear-to-r text-6xl py-3 font-bold from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent',
                                cursorClassName: 'bg-linear-to-r text-6xl py-3 font-bold from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent',
                                delay: 20
                            }} onInit={(typewriter) => {
                                typewriter.typeString('A infraestrutura mais confiável para envios em longa escala do mercado.').callFunction(() => { setTimeout(() => setAppear(!appear), 300) }).start()
                            }} ></Typewriter> */}
                            <Reveal>
                                <h2 className="bg-linear-to-r text-5xl md:text-6xl py-3 font-bold from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent">A solução mais confiável para envios em longa escala do mercado.</h2>
                            </Reveal>
                            <Reveal direction="left">
                                <div className="h-1 border border-gray-800 bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-800 md:my-8 my-3 w-100" />
                                <span className="md:text-xl text-lg text-gray-100 md:font-medium font-light">A resposta que nasceu para transformar a
                                    forma como empresas e instituições se comunicam
                                    com seus clientes. Unimos tecnologia, segurança e
                                    automação para tornar cada mensagem mais
                                    eficiente, confiável e estratégica.</span>
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
                <div id="começo" className="flex items-start py-16 justify-center h-auto md:h-150 bg-gray-100">
                    <div className="absolute bg-correio-inteligente-100/40 w-10 h-10 rotate-45 right-50 blur-sm" />
                    <div className="flex flex-col items-center md:px-35 px-5 w-full">
                        <div className="md:flex flex-col md:w-220">
                            <h2 className="text-4xl bg-linear-to-r bg-clip-text text-transparent from-correio-inteligente-200 p-3 to-correio-inteligente-800 text-center">A infraestrutura <span className="font-bold">completa</span> para a sua empresa, num <span className="font-bold">único lugar</span>.</h2>
                        </div>
                        <div className="md:flex justify-center mt-10">
                            <div className="md:flex text-left items-start md:mr-10 ">
                                <Reveal direction="left">
                                    <div className="flex flex-col">
                                        <span className="md:text-2xl text-correio-inteligente-200">O <span className="font-bold italic">Correio Inteligente</span> nasceu com o propósito de apoiar operações que exigem alto nível de controle, padronização e governança na comunicação digital. Ele possui uma infraestrutura completa para comunicação empresarial, com foco em performance, segurança e escala, integrando canais e automatizando jornadas de relacionamento.</span>
                                        <span className="md:text-2xl text-correio-inteligente-200"> Algumas coisas que orientam nosso trabalho são: </span>
                                        <div className="flex items-center  m-3">
                                            <Check className="w-8 h-8 size-4  text-correio-inteligente-200" />
                                            <span className="md:text-xl bg-correio-inteligente-900 text-correio-inteligente-200 ml-3">  busca pela <span className="font-bold">inovação</span> que se manifesta em uma <span className="font-bold">evolução constante</span> para elevar a <span className="font-bold">qualidade e a inteligência</span> das interações digitais.</span>
                                        </div>
                                        <div className="flex items-center m-3">
                                            <Check className="flex items-center justify-center w-7 h-7 size-4 text-correio-inteligente-200" />
                                            <span className="md:text-xl bg-correio-inteligente-900 text-correio-inteligente-200 ml-3">  prioridade para <span className="font-bold">segurança, confiabilidade e boas práticas</span> em toda a operação de mensagens.</span>
                                        </div>


                                    </div>
                                </Reveal>
                                <div className="absolute bg-correio-inteligente-100/20 w-50 h-50 rotate-45 left-130 mt-30 blur-2xl" />
                            </div>
                            <Reveal direction="right">
                                <img className="hidden md:flex w-150 min-w-130" src="/model.jpeg" alt="" />
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
                                <div className="w-150 ml-20">
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

                {/* <Cta className="flex h-200 p-10 items-center justify-center bg-correio-inteligente-200"></Cta> */}

            </div>
        </main>

    )
}
