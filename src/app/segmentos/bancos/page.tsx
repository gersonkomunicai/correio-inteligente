import { ArrowDown, ArrowUp, BanknoteArrowUp, Bot, MessageCircleCheck, MessageSquareDot, Shield, TrendingUp } from "lucide-react"
import Reveal from "../../../../components/Reveal"
import CardSegments from "../../../../components/CardSegments"
import Cta from "../../../../components/Cta"
import Image from 'next/image'

export default () => {
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
                    <source src="/enterprise.mp4" type="video/mp4" />

                </video>
                <div className="flex items-center justify-center h-screen">
                    <div className="flex container items-start justify-start">
                        <div className="flex flex-col max-w-4xl pl-7">
                            <Reveal direction="left">
                                <p className="text-lg text-gray-100 uppercase">BANCOS E FINTECHS</p>
                            </Reveal>
                            <Reveal direction="up">
                                <h2 className="text-5xl md:text-6xl pb-4 font-bold bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-300 bg-clip-text text-transparent">A comunicação pensada para os padrões do setor financeiro.</h2>
                                <div className="h-0.5 bg-linear-to-r w-80 my-2 md:my-4 from-correio-inteligente-900 to-correio-inteligente-800 "></div>
                            </Reveal>
                            <Reveal direction="left">
                                <p className="text-lg  font-bold mb-6 text-gray-100">Automatize cobranças, notificações, renegociações e comunicações financeiras com uma plataforma robusta, criptografada e integrada à API Oficial do WhatsApp Business.</p>
                                <a href="/fale-conosco" className="flex items-center justify-center p-3 w-60 bg-correio-inteligente-900 text-correio-inteligente-200">Solicitar Demonstração</a>
                            </Reveal>
                        </div>
                        {/* <Reveal direction="right">
                            <Image width={1000} height={1000} src="/heroBanco.png" className="hidden md:flex md:relative md:max-w-2xl md:rounded-bl-4xl md:rounded-tl-xl md:rounded-br-lg" alt="" />
                        </Reveal> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-auto bg-gray-100 md:h-100 ">
                <h2 className="text-center max-w-4xl bg-linear-to-r from-correio-inteligente-200 pb-2 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl mt-6">Muito além do envio de mensagens.</h2>
                <h2 className="text-center max-w-5xl bg-linear-to-r pb-2 from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl mb-6">Uma plataforma para <span className="font-bold">acelerar resultados</span>.</h2>
                <div className="md:flex items-center">
                    <p className="text-lg text-gray-500 max-w-4xl text-center pr-2">Mais recuperação de crédito. Menos custos operacionais. Clientes melhor informados. Tudo isso através do canal que eles mais utilizam.</p>
                    <div className="lg:w-[0.1px] lg:h-35 lg:left-1/2 lg:bg-gradient-to-b lg:from-transparent lg:via-correio-inteligente-100" />
                    <Image width={1000} height={1000} src="/Iso.png" className="hidden lg:flex max-w-40" alt="" />
                    <div />
                </div>
            </div>
            <div className="flex flex-col h-auto items-center bg-gray-100">
                <div className="container my-10">
                    <div className="lg:flex text-center items-start text-correio-inteligente-100 justify-between">
                        <div className="flex flex-col items-center lg:max-w-xl">
                            <h2 className="text-4xl p-2 bg-linear-to-r from-correio-inteligente-100 to-correio-inteligente-800 bg-clip-text text-transparent">Feito para um setor que não abre mão de <span className="font-bold">conformidade</span>.</h2>
                            <div className="flex justify-center items-center w-160">
                                {/* <video muted autoPlay loop preload="none" src="/enterprise.mp4" className="rounded-lg mt-3"></video> */}
                                <Image width={1000} height={1000} src="/heroBanco.png" className="hidden lg:flex rounded-bl-4xl rounded-tl-2xl rounded-tr-xl" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:max-w-xl px-5 divide-y divide-correio-inteligente-100">
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-14 h-14 shrink-0 rounded-full bg-correio-inteligente-900">
                                    <BanknoteArrowUp className="size-7" />
                                </div>
                                <div className="flex flex-col ">
                                    <p className="text-xl font-bold pl-3">Recuperação de Crédito</p>
                                    <span className="text-gray-700 pl-3">Automatize campanhas de cobrança, acordos e renegociações para aumentar o índice de recuperação.</span>
                                </div>

                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-14 h-14 shrink-0 rounded-full bg-correio-inteligente-900">
                                    <MessageCircleCheck className='size-7' />
                                </div>
                                <div className="flex flex-col ">
                                    <p className="text-xl font-bold pl-3">Comunicação Transacional</p>
                                    <span className="text-gray-700 pl-3">Envie notificações de pagamento, vencimentos, confirmações e avisos importantes em tempo real.</span>
                                </div>

                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-14 h-14 shrink-0 rounded-full bg-correio-inteligente-900">
                                    <TrendingUp className="size-7" />
                                </div>
                                <div className="flex flex-col ">
                                    <p className="text-xl font-bold pl-3">Escala</p>
                                    <span className="text-gray-700 pl-3">Milhares de mensagens enviadas simultaneamente com estabilidade e alta disponibilidade.</span>
                                </div>
                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-14 h-14 shrink-0 rounded-full bg-correio-inteligente-900">
                                    <Shield className="size-7" />
                                </div>
                                <div className="flex flex-col ">
                                    <p className="text-xl pl-3 font-bold">Segurança</p>
                                    <span className="text-gray-700 pl-3">Comunicação através da API Oficial do WhatsApp Business, com rastreio de status em cada envio.</span>
                                </div>
                            </div>
                            <a href="/fale-conosco" className="flex my-8 justify-center text-center rounded-xl p-4 bg-correio-inteligente-200 text-gray-100">Fale com um especialista</a>
                        </div>
                    </div>
                    <div className="flex bg-gray-100 items-center justify-between py-10 h-auto">
                        <div className="flex flex-col lg:max-w-xl">
                            <h2 className="pl-3 text-center text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 p-2 bg-clip-text text-transparent">Tecnologia preparada para operações de <span className="font-bold">alta demanda</span>.</h2>
                            <p className="text-gray-700 py-3 text-md text-center">Nossa infraestrutura foi desenvolvida para operações que exigem alta disponibilidade e grandes volumes de comunicação.</p>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-2 shrink-0 w-10 h-10 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">79%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 font-bold text-md">Automatize processos repetitivos e reduza o tempo gasto com comunicações manuais.</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowDown className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-2 shrink-0 w-10 h-10" />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">2%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 text-md font-bold">Diminua ligações, retrabalho e recursos utilizados em campanhas tradicionais.</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-2 shrink-0 w-10 h-10 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">60%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 text-md font-bold">Utilize o WhatsApp para alcançar clientes em um canal com alta taxa de leitura e engajamento.</span>
                                </div>
                            </div>
                            <h2 className="text-2xl text-center py-8 pl-3 lg:max-w-2xl text-gray-700">Uma infraestrutura dimensionada para o volume da sua carteira.</h2>
                        </div>
                        <div className="hidden lg:flex max-w-2xl h-auto items-center">
                            <Image width={1000} height={1000} src="/Iso.png" className="hidden lg:flex lg:aspect-square" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center my-10 items-center">
                        <div className="text-center">
                            <h2 className="text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent p-2">Por que <span className="font-bold">instituições financeiras</span> escolhem o Correio Inteligente?</h2>
                            <p className="text-lg text-gray-600">Nossa plataforma reúne tecnologia, automação e segurança para tornar a comunicação financeira mais eficiente, escalável e orientada a resultados.</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center my-5">
                            <CardSegments className="m-2" image="/api.jpeg" title='Automação de Campanhas e Notificações' subtitle="Crie fluxos automatizados para cobranças, lembretes e comunicações recorrentes, sem esforço manual." />
                            <CardSegments className='m-2' image="/automacao.png" title='Automação de campanhas e notificações' subtitle="Crie fluxos inteligentes para cobranças, lembretes e comunicações recorrentes sem esforço manual." />
                            <CardSegments className='m-2' image="/gestao.jpeg" title='Campanhas Centralizadas' subtitle="Administre e acompanhe suas campanhas, relatórios e histórico de envio em uma única plataforma." />
                        </div>
                    </div>
                </div>
            </div>
            <Cta image="/model2.jpeg"
                title="Pronto para transformar a comunicação da sua instituição financeira?"
                description="Descubra como bancos, financeiras e fintechs utilizam o Correio Inteligente para automatizar processos, aumentar a eficiência operacional e fortalecer o relacionamento com seus clientes."
                button="Solicitar Demonstração"
                className="flex h-200 p-10 items-center justify-center bg-correio-inteligente-200" />

        </div >
    )
}