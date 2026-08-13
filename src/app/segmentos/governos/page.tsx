import { ArrowDown, ArrowUp, BanknoteArrowUp, Bot, MessageCircleCheck, MessageSquareDot, Shield, TrendingUp } from "lucide-react"
import Reveal from "../../../../components/Reveal"
import CardSegments from "../../../../components/CardSegments"
import Cta from "../../../../components/Cta"
import Image from 'next/image'
export default function Governos() {
    return (
        <div className="flex flex-col">
            <div className="h-auto bg-correio-inteligente-200/50 relative overflow-hidden">
                <video
                    autoPlay
                    preload="none"
                    muted
                    loop
                    playsInline
                    className="absolute top-1/2 left-1/2 min-h-full min-w-full h-auto -translate-x-1/2 -translate-y-1/2 object-cover -z-10">
                    <source src="/gov.mp4" type="video/mp4" />

                </video>
                <div className="flex items-center justify-center h-screen">
                    <div className="flex container items-center justify-start">
                        <div className="flex flex-col max-w-3xl p-3">
                            <Reveal direction="left">
                                <p className="text-lg text-gray-100 uppercase">GOVERNOS E ONGS</p>
                            </Reveal>
                            <Reveal direction="up">
                                <h2 className="text-5xl lg:text-6xl pb-4 font-bold bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-300 bg-clip-text text-transparent">A comunicação oficial de Governos e ONGS com a população.</h2>
                                <div className="h-0.5 bg-linear-to-r w-80 my-2 md:my-4 from-correio-inteligente-900 to-correio-inteligente-800 "></div>
                            </Reveal>
                            <Reveal direction="left">
                                <p className="text-lg font-bold mb-6 text-gray-100">Envie notificações, campanhas institucionais e comunicados pela API Oficial do Whatsapp, alcançando grande escala com uma única plataforma.</p>
                                <a href="/fale-conosco" className="flex items-center justify-center p-3 w-60 bg-correio-inteligente-900 text-correio-inteligente-200">Solicitar Demonstração</a>
                            </Reveal>
                        </div>
                        {/* <Reveal direction="right">
                            <img src="/heroBanco.png" className="hidden md:flex md:relative md:max-w-2xl md:rounded-bl-4xl md:rounded-tl-xl md:rounded-br-lg" alt="" />
                        </Reveal> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-auto bg-gray-100 py-10 ">
                <h2 className="text-center max-w-4xl bg-linear-to-r from-correio-inteligente-200 pb-2 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl mt-6">Os <span className="font-bold">desafios</span> da comunicação pública</h2>
                <div className="lg:flex items-center">
                    <p className="text-lg text-gray-500 max-w-4xl text-center pr-2">Órgãos públicos e organizações sociais precisam alcançar milhares de pessoas com rapidez, transparência e baixo custo. Processos manuais, canais pouco eficientes e baixa taxa de leitura dificultam a comunicação com cidadãos, beneficiários e parceiros.</p>
                    <div className="lg:w-[0.1px] lg:h-35 lg:left-1/2 lg:bg-gradient-to-b lg:from-transparent lg:via-correio-inteligente-100" />
                    <Image width={1000} height={1000} src="/Iso.png" className="hidden lg:flex max-w-40" alt="" />
                    <div />
                </div>
            </div>
            <div className="flex flex-col h-auto items-center bg-gray-100">
                <div className="container my-10 md:px-30">
                    {/* <h2 className="bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl my-3"></h2> */}
                    <div className="lg:flex text-center items-start text-correio-inteligente-100 justify-between">
                        <div className="flex flex-col items-center max-w-xl ">
                            <h2 className="text-4xl p-2 bg-linear-to-r from-correio-inteligente-100 to-correio-inteligente-800 bg-clip-text text-transparent">Comunicação inteligente para quem precisa <span className="font-bold">informar milhões de pessoas</span>.</h2>
                            <div className="flex justify-center items-center w-160">
                                {/* <video muted autoPlay loop src="/enterprise.mp4" className="rounded-lg mt-3"></video> */}
                                <Image src="/gov.png" width={1000} height={1000} className="hidden lg:flex rounded-bl-4xl rounded-tl-2xl rounded-tr-xl" alt="" />
                            </div>
                        </div>
                        <div className="lg:flex flex-col lg:px-5 divide-y divide-correio-inteligente-100">
                            <div className="flex justify-center items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <BanknoteArrowUp className="size-7" />
                                </div>
                                <div className="flex flex-col max-w-md">
                                    <p className="text-xl font-bold pl-3">Comunicação com cidadãos</p>
                                    <span className="text-gray-700 pl-3">Envie avisos, campanhas institucionais e notificações para milhares de pessoas em poucos minutos.</span>
                                </div>

                            </div>
                            <div className="flex justify-center items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <MessageCircleCheck className='size-7' />
                                </div>
                                <div className="flex justify-center flex-col max-w-md">
                                    <p className="text-xl font-bold pl-3">Agendamentos e confirmações</p>
                                    <span className="text-gray-700 pl-3">Automatize confirmações de atendimentos, vacinação, emissão de documentos e outros serviços públicos.</span>
                                </div>

                            </div>
                            <div className="flex justify-center items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <TrendingUp className="size-7" />
                                </div>
                                <div className="flex flex-col max-w-md">
                                    <p className="text-xl font-bold pl-3">Escalabilidade</p>
                                    <span className="text-gray-700 pl-3">Envie grandes volumes de mensagens simultaneamente mantendo estabilidade e alta disponibilidade.</span>
                                </div>
                            </div>
                            <div className="flex justify-center items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <Shield className="size-7" />
                                </div>
                                <div className="flex flex-col max-w-md">
                                    <p className="text-xl pl-3 font-bold">Segurança</p>
                                    <span className="text-gray-700 pl-3">API Oficial do WhatsApp Business com rastreabilidade, autenticação e conformidade para comunicações institucionais.</span>
                                </div>
                            </div>
                            <a href="/fale-conosco" className="flex my-8 justify-center text-center rounded-xl p-4 bg-correio-inteligente-200 text-gray-100">Fale com um especialista</a>
                        </div>
                    </div>
                    <div className="flex bg-gray-100 items-center justify-between py-10 h-auto">
                        <div className="flex flex-col max-w-xl">
                            <h2 className="pl-3 text-center text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 p-2 bg-clip-text text-transparent">Tecnologia preparada para atender milhões de cidadãos.</h2>
                            <p className="text-gray-700 py-3 text-md text-center">Nossa plataforma suporta operações de alta demanda, permitindo que órgãos públicos e organizações sociais mantenham uma comunicação eficiente, organizada e acessível.</p>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">79%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 font-bold text-md">Automatize processos repetitivos e reduza filas de atendimento.</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowDown className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">2%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 text-md font-bold">Diminua custos com ligações, SMS e comunicações impressas.</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">60%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 text-md font-bold">Alcance a população em um canal utilizado diariamente.</span>
                                </div>
                            </div>
                            <h2 className="text-2xl text-center py-8 pl-3 max-w-2xl text-gray-700">Uma plataforma desenvolvida para acompanhar o crescimento da sua operação, independentemente do volume de mensagens ou da complexidade dos processos.</h2>
                        </div>
                        <div className="hidden lg:flex w-150 h-120 items-center">
                            <Image width={1000} height={1000} src="/Iso.png" className="hidden lg:aspect-square" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center my-10 items-center">
                        <div className="max-w-2xl text-center mb-5">
                            <h2 className="text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent p-2">Por que <span className="font-bold">Governos e ONGs</span> podem escolher o Correio Inteligente?</h2>
                            <p className="text-lg text-gray-600">Nossa plataforma reúne tecnologia, automação e segurança para tornar a comunicação financeira mais eficiente, escalável e orientada a resultados.</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center my-5">
                            <CardSegments className="m-2" image="/api.jpeg" title='API Oficial do WhatsApp Business' subtitle="Comunicação confiável, autenticada e em conformidade com os padrões oficiais da Meta." />
                            <CardSegments className='m-2' image="/automacao.png" title='Campanhas públicas automatizadas' subtitle="Crie fluxos inteligentes para cobranças, lembretes e comunicações recorrentes sem esforço manual." />
                            <CardSegments className='m-2' image="/gestao.jpeg" title='Comunicação centralizada com cidadãos' subtitle="Administre campanhas, históricos e interações em uma única plataforma intuitiva." />
                        </div>
                    </div>
                </div>
            </div>
            <Cta image="/model2.jpeg"
                title="Transforme a comunicação da sua instituição."
                description="Leve mais eficiência para programas sociais, campanhas públicas e atendimento ao cidadão com uma plataforma preparada para operações em larga escala."
                button="Solicitar Demonstração"
                className="flex h-200 p-10 items-center justify-center bg-correio-inteligente-200" />
        </div >
    )
}