import { ArrowDown, ArrowUp, BanknoteArrowUp, Bot, MessageCircleCheck, MessageSquareDot, Shield, TrendingUp } from "lucide-react"
import Reveal from "../../../../components/Reveal"
import CardSegments from "../../../../components/CardSegments"
import Cta from "../../../../components/Cta"

export default function Saude() {
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
                                <p className="text-lg text-gray-100 uppercase">SAÚDE</p>
                            </Reveal>
                            <Reveal direction="up">
                                <h2 className="text-5xl md:text-6xl pb-4 font-bold bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-300 bg-clip-text text-transparent">Comunicação eficiente para oferecer um atendimento ainda melhor.</h2>
                                <div className="h-0.5 bg-linear-to-r w-80 my-2 md:my-4 from-correio-inteligente-900 to-correio-inteligente-800 "></div>
                            </Reveal>
                            <Reveal direction="left">
                                <p className="text-lg  font-bold mb-6 text-gray-100">Automatize lembretes, confirmações e notificações para reduzir faltas e melhorar a experiência dos pacientes.</p>
                                <a href="/fale-conosco" className="flex items-center justify-center p-3 w-60 bg-correio-inteligente-900 text-correio-inteligente-200">Fale com um Especialista</a>
                            </Reveal>
                        </div>
                        <Reveal direction="right">
                            <img src="/heroBanco.png" className="hidden md:flex md:relative md:max-w-2xl md:rounded-bl-4xl md:rounded-tl-xl md:rounded-br-lg" alt="" />
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-auto bg-gray-100 md:h-100 ">
                <h2 className="text-center max-w-4xl bg-linear-to-r pb-2 from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl mb-6">Uma plataforma para transformar o relacionamento com pacientes.</h2>
                <div className="md:flex items-center">
                    <p className="text-lg text-gray-500 max-w-4xl text-center pr-2">Mais agilidade no atendimento. Menos faltas em consultas. Pacientes melhor informados. Tudo isso através do canal que eles mais utilizam.</p>
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
                            <h2 className="text-4xl p-2 bg-linear-to-r from-correio-inteligente-100 to-correio-inteligente-800 bg-clip-text text-transparent">Comunicação inteligente para um mercado que exige cuidado e confiança.</h2>
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
                                    <p className="text-xl font-bold pl-3">Lembretes e Confirmações de Consultas
                                    </p>
                                    <span className="text-gray-700 pl-3">Automatize avisos de consultas, exames e procedimentos para reduzir faltas e melhorar a organização da agenda.</span>
                                </div>

                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <MessageCircleCheck className='size-7' />
                                </div>
                                <div className="flex flex-col max-w-md">
                                    <p className="text-xl font-bold pl-3">Comunicação Transacional</p>
                                    <span className="text-gray-700 pl-3">Envie confirmações de agendamento, resultados disponíveis, orientações pré-atendimento e avisos importantes em tempo real.</span>
                                </div>

                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <TrendingUp className="size-7" />
                                </div>
                                <div className="flex flex-col max-w-md">
                                    <p className="text-xl font-bold pl-3">Escala</p>
                                    <span className="text-gray-700 pl-3">Envie milhares de mensagens simultaneamente para pacientes, equipes e unidades com estabilidade e alta disponibilidade.</span>
                                </div>
                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <Shield className="size-7" />
                                </div>
                                <div className="flex flex-col max-w-md">
                                    <p className="text-xl pl-3 font-bold">Segurança</p>
                                    <span className="text-gray-700 pl-3">Utilize a API Oficial do WhatsApp Business para manter uma comunicação segura, rastreável e alinhada às necessidades do setor de saúde.</span>
                                </div>
                            </div>
                            <a href="/fale-conosco" className="flex my-8 justify-center text-center rounded-xl p-4 bg-correio-inteligente-200 text-gray-100">Fale com um especialista</a>
                        </div>
                    </div>
                    <div className="flex bg-gray-100 items-center justify-between py-10 h-auto">
                        <div className="flex flex-col max-w-xl">
                            <h2 className="pl-3 text-center text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 p-2 bg-clip-text text-transparent">Tecnologia preparada para operações de saúde em larga escala.</h2>
                            <p className="text-gray-700 py-3 text-md text-center">Nossa infraestrutura foi desenvolvida para atender clínicas, hospitais e redes de saúde que precisam se comunicar com milhares de pacientes diariamente com segurança, estabilidade e eficiência.</p>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">79%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 font-bold text-md">Automatize confirmações, lembretes e avisos, liberando equipes para focarem no atendimento aos pacientes.</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowDown className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">2%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 text-md font-bold">Reduza faltas, chamadas telefônicas e processos manuais com uma comunicação mais rápida e eficiente.</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">60%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 text-md font-bold">Conecte-se com pacientes pelo WhatsApp, um canal acessível, rápido e presente na rotina de milhões de pessoas.</span>
                                </div>
                            </div>
                            <h2 className="text-2xl text-center py-8 pl-3 max-w-2xl text-gray-700">Uma plataforma criada para acompanhar o crescimento da sua instituição de saúde, seja uma clínica, hospital ou rede de atendimento, independentemente do volume de pacientes e da complexidade dos processos.</h2>
                        </div>
                        <div className="hidden md:flex w-150 h-120 items-center">
                            <img src="/Iso.png" className="aspect-square" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center my-10 items-center">
                        <div className="max-w-2xl text-center">
                            <h2 className="text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent p-2">Por que empresas de saúde escolhem o Correio Inteligente?</h2>
                            <p className="text-lg text-gray-600">Nossa plataforma reúne tecnologia, automação e segurança para tornar a comunicação com pacientes mais eficiente, humanizada e escalável.</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center my-5">
                            <CardSegments className="m-2" image="/api.jpeg" title='API Oficial do WhatsApp Business' subtitle="Comunicação segura, autenticada e confiável para interagir com pacientes através do canal oficial da Meta." />
                            <CardSegments className='m-2' image="/automacao.png" title='Automação de lembretes e notificações' subtitle="Crie fluxos inteligentes para consultas, exames, retornos e comunicados importantes sem depender de processos manuais." />
                            <CardSegments className='m-2' image="/gestao.jpeg" title='Relacionamento centralizado com pacientes' subtitle="Gerencie comunicações, históricos e interações em uma única plataforma, facilitando o acompanhamento do atendimento." />
                        </div>
                    </div>
                </div>
            </div>
            <Cta image="/model2.jpeg"
                title="Pronto para transformar a comunicação da sua instituição de saúde?"
                description="Descubra como clínicas, hospitais e empresas de saúde utilizam o Correio Inteligente para automatizar comunicações, reduzir faltas e oferecer uma experiência melhor aos pacientes."
                button="Solicitar Demonstração"
                className="flex h-200 p-10 items-center justify-center bg-correio-inteligente-200" />

        </div >
    )
}