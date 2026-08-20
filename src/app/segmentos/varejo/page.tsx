import { ArrowDown, ArrowUp, BanknoteArrowUp, Bot, MessageCircleCheck, MessageSquareDot, Shield, TrendingUp } from "lucide-react"
import Reveal from "../../../../components/Reveal"
import CardSegments from "../../../../components/CardSegments"
import Cta from "../../../../components/Cta"
import Image from 'next/image'

export default function Varejo() {
    return (
        <div className="flex flex-col">
            <div className="h-auto bg-correio-inteligente-200/50 w-full relative overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover -z-10"
                >
                    <source src="/varejo.mp4" type="video/mp4" />
                </video>
                <div className="flex items-center justify-center h-screen">
                    <div className="flex container items-center justify-start">
                        <div className="flex flex-col max-w-4xl pl-7">
                            <Reveal direction="left">
                                <p className="text-lg text-gray-100 uppercase">VAREJO</p>
                            </Reveal>
                            <Reveal direction="up">
                                <h2 className="text-5xl md:text-6xl pb-4 font-bold bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-300 bg-clip-text text-transparent">Venda mais utilizando o canal que seus clientes mais acessam.</h2>
                                <div className="h-0.5 bg-linear-to-r w-80 my-2 md:my-4 from-correio-inteligente-900 to-correio-inteligente-800 "></div>
                            </Reveal>
                            <Reveal direction="left">
                                <p className="text-lg  font-bold mb-6 text-gray-100">Automatiza campanhas promocionais e aumente o relacionamento com seus clientes utilizando a API Oficial do WhatsApp.</p>
                                <a href="/fale-conosco" className="flex items-center justify-center p-3 w-60 bg-correio-inteligente-900 text-correio-inteligente-200">Solicitar Demonstração</a>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-auto bg-gray-100 md:h-100 ">
                <h2 className="text-center max-w-4xl bg-linear-to-r from-correio-inteligente-200 pb-2 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl mt-6">Comunicação que impulsiona vendas.</h2>
                <h2 className="text-center max-w-4xl bg-linear-to-r pb-2 from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl mb-6">Experiência que fideliza clientes.</h2>
                <div className="md:flex items-center">
                    <p className="text-lg text-gray-500 max-w-4xl text-center pr-2">Construa um relacionamento contínuo com seus clientes, mantendo sua marca sempre presente.</p>
                    <div className="lg:w-[0.1px] lg:h-35 lg:left-1/2 lg:bg-gradient-to-b lg:from-transparent lg:via-correio-inteligente-100" />
                    <Image src="/Iso.png" width={1000} height={1000} className="hidden lg:flex lg:max-w-40" alt="" />
                    <div />
                </div>
            </div>
            <div className="flex flex-col h-auto items-center bg-gray-100">
                <div className="container justify-center items-center my-10">
                    <div className="lg:flex text-center items-center text-correio-inteligente-100 lg:justify-between">
                        <div className="flex flex-col items-center lg:max-w-xl">
                            <h2 className="text-4xl p-2 bg-linear-to-r from-correio-inteligente-100 to-correio-inteligente-800 bg-clip-text text-transparent">Comunicação estratégica para <span className="font-bold">fortalecer</span> sua marca.</h2>
                            <div className=" items-center w-160">
                                {/* <video muted autoPlay loop src="/enterprise.mp4" className="rounded-lg mt-3"></video> */}
                                <Image src="/varejo.png" width={1000} height={1000} className="hidden lg:flex rounded-bl-4xl rounded-tl-2xl rounded-tr-xl" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center lg:max-w-xl divide-y divide-correio-inteligente-100">
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-14 h-14 shrink-0 rounded-full bg-correio-inteligente-900">
                                    <BanknoteArrowUp className="size-7" />
                                </div>
                                <div className="flex w-full flex-col">
                                    <p className="text-xl font-bold pl-3">Campanhas Promocionais</p>
                                    <span className="text-gray-700 pl-3">Divulgue ofertas, lançamentos e cupons de desconto para milhares de clientes.</span>
                                </div>
                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-14 h-14 shrink-0 rounded-full bg-correio-inteligente-900">
                                    <MessageCircleCheck className='size-7' />
                                </div>
                                <div className="flex flex-col w-full">
                                    <p className="text-xl font-bold pl-3">Reengajamento de Clientes</p>
                                    <span className="text-gray-700 pl-3">Reative clientes que não compram há um tempo com ofertas direcionadas.</span>
                                </div>

                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-14 h-14 shrink-0 rounded-full bg-correio-inteligente-900">
                                    <TrendingUp className="size-7" />
                                </div>
                                <div className="flex w-full flex-col">
                                    <p className="text-xl font-bold pl-3">Escalabilidade</p>
                                    <span className="text-gray-700 pl-3">Execute campanhas em massa durante datas promocionais com estabilidade, velocidade e alta disponibilidade.</span>
                                </div>
                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-14 h-14 shrink-0 rounded-full bg-correio-inteligente-900">
                                    <Shield className="size-7" />
                                </div>
                                <div className="flex w-full flex-col">
                                    <p className="text-xl pl-3  font-bold">Experiência do Cliente</p>
                                    <span className="text-gray-700 pl-3">Ofereça uma comunicação direta e confiável através da API Oficial do WhatsApp.</span>
                                </div>
                            </div>
                            <a href="/fale-conosco" className="flex my-8 justify-center text-center rounded-xl p-4 bg-correio-inteligente-200 text-gray-100">Fale com um especialista</a>
                        </div>
                    </div>
                    <div className="flex bg-gray-100 items-center lg:justify-between justify-center py-10 h-auto">
                        <div className="flex flex-col lg:max-w-xl">
                            <h2 className="pl-3 text-center text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 p-2 bg-clip-text text-transparent">Tecnologia preparada para acompanhar o ritmo do varejo.</h2>
                            <p className="text-gray-700 py-3 text-md text-center">Nossa infraestrutura foi desenvolvida para suportar campanhas promocionais e operações de alto volume.</p>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 w-10 h-10 shrink-0 p-2" />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">79%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 font-bold text-md">Automatize campanhas, notificações e processos repetitivos para que sua equipe foque nas vendas.</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowDown className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 w-10 h-10 shrink-0 p-2 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">2%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 text-md font-bold">Reduza custos com atendimento manual e mantenha sua base sempre informada sobre novidades e ofertas.</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 w-10 h-10 shrink-0 p-2" />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">60%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 text-md font-bold">Utilize o WhatsApp para fortalecer o relacionamento e impulsionar novas vendas.</span>
                                </div>
                            </div>
                            <h2 className="text-2xl text-center py-8 pl-3 lg:max-w-2xl text-gray-700">Reunimos tecnologia e automação para levar campanhas, ofertas e comunicação em escala direto para o WhatsApp do seu cliente.</h2>
                        </div>
                        <div className="hidden lg:flex max-w-xl h-120 items-center">
                            <Image width={1000} height={1000} src="/Iso.png" className="hidden lg:flex lg:aspect-square" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center my-10 items-center">
                        <div className="text-center">
                            <h2 className="text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent p-2">Por que empresas do varejo podem escolher o Correio Inteligente?</h2>
                            <p className="text-lg text-gray-600">Reunimos tecnologia e automação numa plataforma feita para transformar alcance em resultado.</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center my-5">
                            <CardSegments className="m-2" image="/api.jpeg" title='API Oficial do WhatsApp Business' subtitle="Transmita mais confiança com mensagens autenticadas e entregues pelo canal oficial da Meta." />
                            <CardSegments className='m-2' image="/automacao.png" title='Campanhas e notificações automatizadas' subtitle="Automatize promoções, lançamentos e ações de relacionamento sem esforço manual." />
                            <CardSegments className='m-2' image="/gestao.jpeg" title='Campanhas centralizadas' subtitle="Administre e acompanhe suas campanhas, relatórios e histórico de envio em uma única plataforma." />
                        </div>
                    </div>
                </div>
            </div>
            <Cta image="/model2.jpeg"
                title="Pronto para transformar a comunicação do seu negócio?"
                description="Descubra com lojas e redes de comércio utilizam o Correio Inteligente para automatizar campanhas e fortalecer o relacionamento com seus clientes."
                button="Solicitar Demonstração"
                className="flex h-200 p-10 items-center justify-center bg-correio-inteligente-200" />

        </div >
    )
}