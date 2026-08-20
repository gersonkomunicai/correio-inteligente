import { ArrowDown, ArrowUp, BanknoteArrowUp, Bot, MessageCircleCheck, MessageSquareDot, Shield, TrendingUp } from "lucide-react"
import Reveal from "../../../../components/Reveal"
import CardSegments from "../../../../components/CardSegments"
import Cta from "../../../../components/Cta"
import Image from 'next/image'

export default function Educacao() {
    return (
        <div className="flex flex-col">

            <div className="h-auto bg-correio-inteligente-200/50 w-full relative overflow-hidden">
                <video autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover -z-10">
                    <source src="/videoEducation.mp4" type="video/mp4" />
                </video>
                <div className="flex items-center justify-center h-screen">
                    <div className="flex container items-start justify-start">
                        <div className="flex flex-col max-w-4xl pl-7">
                            <Reveal direction="left">
                                <p className="text-lg text-gray-100 uppercase">EDUCAÇÃO</p>
                            </Reveal>
                            <Reveal direction="up">
                                <h2 className="text-5xl md:text-6xl pb-4 font-bold bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-300 bg-clip-text text-transparent">Comunicação automatizada para instituições de ensino.</h2>
                            </Reveal>
                            <Reveal direction="left">
                                <p className="text-lg  font-bold mb-6 text-gray-100">Automatize lembretes de mensalidade, avisos acadêmicos e comunicados para alunos e responsáveis através da API Oficial do WhatsApp.</p>
                                <a href="/fale-conosco" className="flex items-center justify-center p-3 w-60 bg-correio-inteligente-900 text-correio-inteligente-200">Solicitar Demonstração</a>
                            </Reveal>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-auto bg-gray-100 md:h-100 ">
                <h2 className="text-center max-w-4xl bg-linear-to-r from-correio-inteligente-200 pb-2 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl mt-6">Muito além do envio de mensagens.</h2>
                <h2 className="text-center max-w-4xl bg-linear-to-r pb-2 from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-4xl mb-6">Uma plataforma para <span className="font-bold">aproximar</span> sua instituição de ensino.</h2>
                <div className="lg:flex items-center">
                    <p className="text-lg text-gray-500 max-w-4xl text-center pr-2">Mais alunos informados. Menos processos manuais. Uma comunicação mais ágil com alunos, responsáveis e equipes. Tudo isso através do canal que eles mais utilizam.</p>
                    <div className="lg:w-[0.1px] lg:h-35 lg:left-1/2 lg:bg-gradient-to-b lg:from-transparent lg:via-correio-inteligente-100" />
                    <Image width={1000} height={1000} src="/Iso.png" className="hidden lg:flex md:max-w-40" alt="" />
                    <div />
                </div>
            </div>
            <div className="flex flex-col h-auto items-center bg-gray-100">
                <div className="container justify-center items-center mb-10">
                    <div className="lg:flex text-center items-center  text-correio-inteligente-100 justify-center lg:justify-between">
                        <div className="flex flex-col items-center lg:max-w-xl">
                            <h2 className="text-4xl p-2 bg-linear-to-r from-correio-inteligente-100 to-correio-inteligente-800 bg-clip-text text-transparent">Feito para instituições que precisam estar <span className="font-bold">sempre conectadas</span>.</h2>
                            <div className="items-center w-160">
                                {/* <video muted autoPlay loop src="/enterprise.mp4" className="rounded-lg mt-3"></video> */}
                                <Image width={1000} height={1000} src="/heroEducation.png" className="hidden lg:flex rounded-bl-4xl rounded-tl-2xl rounded-tr-xl" alt="" />
                            </div>
                        </div>
                        <div className="lg:flex flex-col px-5 lg:max-w-2xl divide-y divide-correio-inteligente-100">
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <BanknoteArrowUp className="size-7" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <p className="text-xl font-bold pl-3">Comunicação Acadêmica</p>
                                    <span className="text-gray-700 pl-3">Envie avisos sobre eventos, calendário acadêmico e outras informações importantes.</span>
                                </div>

                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <MessageCircleCheck className='size-7' />
                                </div>
                                <div className="flex flex-col w-full">
                                    <p className="text-xl font-bold pl-3">Mensalidades e Financeiro</p>
                                    <span className="text-gray-700 pl-3">Envie lembretes de vencimento e comunicações financeiras de forma automatizada.</span>
                                </div>

                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <TrendingUp className="size-7" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <p className="text-xl font-bold pl-3">Matrículas e Rematrículas</p>
                                    <span className="text-gray-700 pl-3">Facilite o contato com alunos e responsáveis durante períodos de matrícula, rematrícula e renovação.</span>
                                </div>
                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <Shield className="size-7" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <p className="text-xl pl-3 font-bold">Escala e Automação</p>
                                    <span className="text-gray-700 pl-3">Envie milhares de mensagens de forma simultânea, reduzindo processos manuais e acompanhando o crescimento da sua instituição.</span>
                                </div>
                            </div>
                            <a href="/fale-conosco" className="flex my-8 justify-center text-center rounded-xl p-4 bg-correio-inteligente-200 text-gray-100">Fale com um especialista</a>
                        </div>
                    </div>
                    <div className="flex bg-gray-100 items-center justify-between py-10 h-auto">
                        <div className="flex flex-col lg:max-w-2xl">
                            <h2 className="pl-3 text-center text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 p-2 bg-clip-text text-transparent">Tecnologia preparada para a rotina da educação.</h2>
                            <p className="text-gray-700 py-3 text-md text-center">Nossa infraestrutura foi desenvolvida para sustentar os períodos de maior demanda da sua instituição, como matrículas e rematrículas.</p>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-2 w-10 h-10 shrink-0" />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">79%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 font-bold max-w-xl text-md">Automatize processos repetitivos</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border shrink-0 rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-2 w-10 h-10 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">2%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 text-md max-w-xl font-bold">Fortaleça a comunicação financeira da sua instituição.</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border shrink-0 rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-2 w-10 h-10 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">60%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 text-md max-w-xl font-bold">Alcance seus alunos e responsáveis pelo WhatsApp.</span>
                                </div>
                            </div>
                            <h2 className="text-2xl text-center py-8 pl-3 lg:max-w-2xl text-gray-700">Uma plataforma preparada para acompanhar sua instituição em todos os momentos — da matrícula ao dia a dia acadêmico.</h2>
                        </div>
                        <div className="hidden lg:flex max-w-xl h-120 items-center">
                            <Image width={1000} height={1000} src="/Iso.png" className="hidden lg:flex aspect-square" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center my-10 items-center">
                        <div className="max-w-2xl text-center">
                            <h2 className="text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent p-2">Por que instituições de ensino escolhem o Correio Inteligente?</h2>
                            <p className="text-lg text-gray-600">Reunimos tecnologia e automação numa plataforma pensada para transformar avisos em resultado.</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center my-5">
                            <CardSegments className="m-2" image="/api.jpeg" title='API Oficial do WhatsApp Business' subtitle="Comunicação oficial entre sua instituição e a comunidade escolar." />
                            <CardSegments className='m-2' image="/automacao.png" title='Campanhas centralizadas' subtitle="Administre e acompanhe suas campanhas, relatórios e histório de envio em uma única plataforma." />
                            <CardSegments className='m-2' image="/gestao.jpeg" title='Relacionamento centralizado' subtitle="Organize suas comunicações em uma única plataforma e tenha mais controle sobre os contatos realizados pela instituição." />

                        </div>
                    </div>
                </div>
            </div>
            <Cta image="/model2.jpeg"
                title="Pronto para transformar a comunicação da sua instituição de ensino?"
                description="Descubra como o Correio Inteligente pode ajudar sua instituição a automatizar comunicações, reduzir processos manuais e manter alunos, responsáveis e equipes sempre informados."
                button="Solicitar Demonstração"
                className="flex h-200 p-10 items-center justify-center bg-correio-inteligente-200" />

        </div >
    )
}