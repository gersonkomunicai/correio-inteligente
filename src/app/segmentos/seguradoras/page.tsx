import { ArrowDown, ArrowUp, BanknoteArrowUp, Bot, MessageCircleCheck, MessageSquareDot, Shield, TrendingUp } from "lucide-react"
import Reveal from "../../../../components/Reveal"
import CardSegments from "../../../../components/CardSegments"
import Cta from "../../../../components/Cta"

export default function Seguradoras() {
    return (
        <div className="flex flex-col">
            <div className="absolute bg-correio-inteligente-100/20 w-200 h-200 rounded-full -left-100 -bottom-100 blur-2xl" />
            <div className="absolute bg-correio-inteligente-300/10 w-150 h-150 rotate-45 right-140 top-20 blur-3xl" />
            <div className="absolute bg-correio-inteligente-300/10 w-5 h-5 rotate-45 left-100 top-20 blur-xs" />
            <div className="absolute bg-correio-inteligente-100/20 w-200 h-200 rounded-full -right-100 -top-100 blur-2xl" />
            <div className="h-screen bg-correio-inteligente-200 bg-center bg-no-repeat bg-cover ">
                <div className="flex items-center justify-center h-screen">
                    <div className="flex container items-center justify-center">
                        <div className="flex flex-col max-w-3xl  p-3">
                            <Reveal direction="left">
                                <p className="text-lg text-gray-100 uppercase">SEGURADORAS</p>
                            </Reveal>
                            <Reveal direction="up">
                                <h2 className="text-5xl md:text-6xl pb-4 font-bold bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-300 bg-clip-text text-transparent">Comunicação inteligente para transformar o relacionamento com segurados.</h2>
                                <div className="h-0.5 bg-linear-to-r w-80 my-2 md:my-4 from-correio-inteligente-900 to-correio-inteligente-800 "></div>
                            </Reveal>
                            <Reveal direction="left">
                                <p className="text-lg  font-bold mb-6 text-gray-100">Automatize avisos de sinistros, atualizações de apólices, cobranças, renovações e comunicações importantes através de uma plataforma segura integrada à API Oficial do WhatsApp Business.</p>
                                <a href="/fale-conosco" className="flex items-center justify-center p-3 w-60 bg-correio-inteligente-900 text-correio-inteligente-200">Solicitar Demonstração</a>
                            </Reveal>
                        </div>
                        <Reveal direction="right">
                            <img src="/heroBanco.png" className="hidden md:flex md:relative md:max-w-2xl md:rounded-bl-4xl md:rounded-tl-xl md:rounded-br-lg" alt="" />
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-auto bg-gray-100 md:h-100 ">
                <h2 className="text-center max-w-4xl bg-linear-to-r from-correio-inteligente-200 pb-2 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl mt-6">Muito além do envio de mensagens.</h2>
                <h2 className="text-center max-w-4xl bg-linear-to-r pb-2 from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl mb-6">Uma plataforma para melhorar a experiência dos segurados.</h2>
                <div className="md:flex items-center">
                    <p className="text-lg text-gray-500 max-w-4xl text-center pr-2">Mais agilidade no atendimento. Menos processos manuais. Segurados melhor informados. Tudo isso através do canal que eles mais utilizam.</p>
                    <div className="md:w-[0.1px] md:h-35 md:left-1/2 md:bg-gradient-to-b md:from-transparent md:via-correio-inteligente-100" />
                    <img src="/Iso.png" className="md:max-w-40" alt="" />
                    <div />
                </div>
            </div>
            <div className="flex flex-col h-auto items-center bg-gray-100">
                <div className="container my-10 md:px-30">
                    <h2 className="bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl my-3"></h2>
                    <div className="md:flex text-center items-start text-correio-inteligente-100 justify-between">
                        <div className="flex flex-col items-center max-w-xl">
                            <h2 className="text-4xl p-2 bg-linear-to-r from-correio-inteligente-100 to-correio-inteligente-800 bg-clip-text text-transparent">Comunicação inteligente para um mercado que exige confiança.</h2>
                            <div className="flex justify-center items-center w-160">
                                <video muted autoPlay loop src="/enterprise.mp4" className="rounded-lg mt-3"></video>
                                {/* <img src="/ceo.jpeg" className="rounded-bl-4xl rounded-tl-2xl rounded-tr-xl" alt="" /> */}
                            </div>
                        </div>
                        <div className="md:flex flex-col px-5 divide-y divide-correio-inteligente-100">
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <BanknoteArrowUp className="size-7" />
                                </div>
                                <div className="flex flex-col max-w-md">
                                    <p className="text-xl font-bold pl-3">Gestão de Sinistros</p>
                                    <span className="text-gray-700 pl-3">Automatize avisos, atualizações de andamento e comunicações relacionadas aos processos de sinistro, oferecendo mais transparência ao segurado.</span>
                                </div>

                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <MessageCircleCheck className='size-7' />
                                </div>
                                <div className="flex flex-col max-w-md">
                                    <p className="text-xl font-bold pl-3">Comunicação com Segurados</p>
                                    <span className="text-gray-700 pl-3">Envie avisos de renovação, vencimentos, pagamentos, atualizações de contratos e informações importantes em tempo real.</span>
                                </div>

                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <TrendingUp className="size-7" />
                                </div>
                                <div className="flex flex-col max-w-md">
                                    <p className="text-xl font-bold pl-3">Escalabilidade Operacional</p>
                                    <span className="text-gray-700 pl-3">Comunique milhares de segurados simultaneamente com estabilidade, rapidez e alta disponibilidade.</span>
                                </div>
                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <Shield className="size-7" />
                                </div>
                                <div className="flex flex-col max-w-md">
                                    <p className="text-xl pl-3 font-bold">Segurança e Confiabilidade</p>
                                    <span className="text-gray-700 pl-3">Utilize a API Oficial do WhatsApp Business com rastreabilidade, controle das conversas e comunicação segura com seus clientes.</span>
                                </div>
                            </div>
                            <a href="/fale-conosco" className="flex my-8 justify-center text-center rounded-xl p-4 bg-correio-inteligente-200 text-gray-100">Fale com um especialista</a>
                        </div>
                    </div>
                    <div className="flex bg-gray-100 items-center justify-between py-10 h-auto">
                        <div className="flex flex-col max-w-xl">
                            <h2 className="pl-3 text-center text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 p-2 bg-clip-text text-transparent">Tecnologia preparada para operações que exigem agilidade e escala.</h2>
                            <p className="text-gray-700 py-3 text-md text-center">Nossa infraestrutura foi desenvolvida para seguradoras que precisam gerenciar grandes volumes de comunicação com clientes, corretores e equipes internas de forma rápida e segura.</p>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">79%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 font-bold text-md">Automatize avisos de renovação, acompanhamento de sinistros e comunicações recorrentes sem depender de processos manuais.</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowDown className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">2%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 text-md font-bold">Reduza chamadas no atendimento, retrabalho operacional e custos com processos tradicionais de comunicação.</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">60%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 text-md font-bold">Conecte-se com segurados pelo WhatsApp, um canal direto com alta taxa de leitura e maior proximidade no relacionamento.</span>
                                </div>
                            </div>
                            <h2 className="text-2xl text-center py-8 pl-3 max-w-2xl text-gray-700">Uma plataforma criada para acompanhar o crescimento da sua seguradora, independente do número de clientes, produtos oferecidos ou volume de comunicações realizadas diariamente.</h2>
                        </div>
                        <div className="hidden md:flex w-150 h-120 items-center">
                            <img src="/Iso.png" className="aspect-square" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center my-10 items-center">
                        <div className="max-w-2xl text-center">
                            <h2 className="text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent p-2">Por que seguradoras escolhem o Correio Inteligente?</h2>
                            <p className="text-lg text-gray-600">Nossa plataforma reúne tecnologia, automação e segurança para tornar a comunicação com segurados mais eficiente, personalizada e escalável.</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center my-5">
                            <CardSegments className="m-2" image="/api.jpeg" title='API Oficial do WhatsApp Business' subtitle="Comunicação segura e autenticada para interagir com segurados através do canal oficial da Meta." />
                            <CardSegments className='m-2' image="/automacao.png" title='Automação de comunicações' subtitle="Crie fluxos automáticos para avisos de sinistros, renovações, cobranças e atualizações importantes." />
                            <CardSegments className='m-2' image="/gestao.jpeg" title='Relacionamento centralizado' subtitle="Gerencie históricos, campanhas e interações com segurados em uma única plataforma." />

                        </div>
                    </div>
                </div>
            </div>
            <Cta image="/model2.jpeg"
                title="Pronto para transformar a comunicação da sua seguradora?"
                description="Descubra como seguradoras utilizam o Correio Inteligente para automatizar comunicações, melhorar a experiência dos segurados e aumentar a eficiência operacional."
                button="Fale com um Especialista"
                className="flex h-200 p-10 items-center justify-center bg-correio-inteligente-200" />

        </div >
    )
}