import { ArrowDown, ArrowUp, BanknoteArrowUp, Bot, MessageCircleCheck, MessageSquareDot, Shield, TrendingUp } from "lucide-react"
import Reveal from "../../../../components/Reveal"
import CardSegments from "../../../../components/CardSegments"
import Cta from "../../../../components/Cta"
import Image from 'next/image'

export default function Seguradoras() {
    return (
        <div className="flex flex-col">

            <div className="h-auto bg-correio-inteligente-200/50 w-full relative overflow-hidden">
                <video autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover -z-10">
                    <source src="/videoSecurity.mp4" type="video/mp4" />
                </video>
                <div className="flex items-center justify-center h-screen">
                    <div className="flex container items-start justify-start">
                        <div className="flex flex-col max-w-4xl pl-7">
                            <Reveal direction="left">
                                <p className="text-lg text-gray-100 uppercase">SEGURADORAS</p>
                            </Reveal>
                            <Reveal direction="up">
                                <h2 className="text-5xl md:text-6xl pb-4 font-bold bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-300 bg-clip-text text-transparent">A comunicação em escala pensada para a renovação e o relacionamento com seus segurados.</h2>
                                <div className="h-0.5 bg-linear-to-r w-80 my-2 md:my-4 from-correio-inteligente-900 to-correio-inteligente-800 "></div>
                            </Reveal>
                            <Reveal direction="left">
                                <p className="text-lg  font-bold mb-6 text-gray-100">Automatize cobranças, avisos de renovação e comunicados para segurados através da API Oficial do Whatsapp.</p>
                                <a href="/fale-conosco" className="flex items-center justify-center p-3 w-60 bg-correio-inteligente-900 text-correio-inteligente-200">Solicitar Demonstração</a>
                            </Reveal>
                        </div>
                        {/* <Reveal direction="right">
                            <Image width={1000} height={1000} src="/heroSecurity.png" className="hidden lg:flex md:relative md:max-w-2xl md:rounded-bl-4xl md:rounded-tl-xl md:rounded-br-lg" alt="" />
                        </Reveal> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-auto bg-gray-100 md:h-100 ">
                <h2 className="text-center max-w-4xl bg-linear-to-r from-correio-inteligente-200 pb-2 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl mt-6">Muito além do envio de mensagens.</h2>
                <h2 className="text-center max-w-4xl bg-linear-to-r pb-2 from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-4xl mb-6">Uma plataforma para melhorar a experiência dos segurados.</h2>
                <div className="lg:flex items-center">
                    <p className="text-lg text-gray-500 max-w-4xl text-center pr-2">Menos inadimplência. Menos processos manuais. Segurados melhor informados, tudo através do canal que eles mais utilizam.</p>
                    <div className="lg:w-[0.1px] lg:h-35 lg:left-1/2 lg:bg-gradient-to-b lg:from-transparent lg:via-correio-inteligente-100" />
                    <Image width={1000} height={1000} src="/Iso.png" className="hidden lg:flex lg:max-w-40" alt="" />
                    <div />
                </div>
            </div>
            <div className="flex flex-col h-auto items-center bg-gray-100">
                <div className="container justify-center items-center my-10">
                    <h2 className="bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl my-3"></h2>
                    <div className="lg:flex text-center items-center text-correio-inteligente-100 justify-center lg:justify-between">
                        <div className="flex flex-col items-center lg:max-w-xl">
                            <h2 className="text-4xl p-2 bg-linear-to-r from-correio-inteligente-100 to-correio-inteligente-800 bg-clip-text text-transparent">Feito para um mercado que exige confiança.</h2>
                            <div className="items-center w-160">
                                <Image width={1000} height={1000} src="/ceo.jpeg" className="hidden lg:flex rounded-bl-4xl rounded-tl-2xl rounded-tr-xl" alt="" />
                            </div>
                        </div>
                        <div className="lg:flex flex-col px-5 divide-y divide-correio-inteligente-100">
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <BanknoteArrowUp className="size-7" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <p className="text-xl font-bold pl-3">Avisos</p>
                                    <span className="text-gray-700 pl-3">Envie comunicados de renovação, vencimentos e informações importantes.</span>
                                </div>

                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <MessageCircleCheck className='size-7' />
                                </div>
                                <div className="flex flex-col w-full">
                                    <p className="text-xl font-bold pl-3">Comunicação com Segurados</p>
                                    <span className="text-gray-700 pl-3">Envie comunicados de renovação, vencimentos e informações importantes.</span>
                                </div>

                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <TrendingUp className="size-7" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <p className="text-xl font-bold pl-3">Escalabilidade Operacional</p>
                                    <span className="text-gray-700 pl-3">Comunique milhares de segurados simultaneamente com estabilidade, rapidez e alta disponibilidade.</span>
                                </div>
                            </div>
                            <div className="flex items-center py-4">
                                <div className="flex items-center justify-center p-3 w-13 h-13 rounded-full bg-correio-inteligente-900">
                                    <Shield className="size-7" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <p className="text-xl pl-3 font-bold">Segurança e Confiabilidade</p>
                                    <span className="text-gray-700 pl-3">Utilize a API Oficial do WhatsApp Business com rastreabilidade em cada envio.</span>
                                </div>
                            </div>
                            <a href="/fale-conosco" className="flex my-8 justify-center text-center rounded-xl p-4 bg-correio-inteligente-200 text-gray-100">Fale com um especialista</a>
                        </div>
                    </div>
                    <div className="flex bg-gray-100 items-center justify-between py-10 h-auto">
                        <div className="flex flex-col lg:max-w-xl">
                            <h2 className="pl-3 text-center text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 p-2 bg-clip-text text-transparent">Tecnologia preparada para operações que exigem agilidade e escala.</h2>
                            <p className="text-gray-700 py-3 text-md text-center">Nossa infraestrutura foi desenvolvida para seguradoras que precisam gerenciar grandes volumes de comunicação com clientes e corretores.</p>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full shrink-0 border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">79%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 font-bold text-md">Automatize avisos de renovação e comunicações recorrentes sem depender de processos manuais.</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowDown className="border rounded-full shrink-0 border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">2%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 text-md font-bold">Diminua o tempo gasto com comunicações manuais e repetitivas.</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full shrink-0 border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    {/* <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">60%</p> */}
                                    <span className="pl-3 text-correio-inteligente-100 text-md font-bold">Conecte-se com segurados pelo WhatsApp, um canal direto com alta taxa de leitura e maior proximidade no relacionamento.</span>
                                </div>
                            </div>
                            <h2 className="text-2xl text-center py-8 pl-3 lg:max-w-2xl text-gray-700">Uma plataforma criada para o volume que sua seguradora exige.</h2>
                        </div>
                        <div className="hidden lg:flex w-150 h-120 items-center">
                            <Image width={1000} height={1000} src="/Iso.png" className="lg:aspect-square" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center my-10 items-center">
                        <div className="max-w-2xl text-center">
                            <h2 className="text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent p-2">Por que seguradoras escolhem o Correio Inteligente?</h2>
                            <p className="text-lg text-gray-600">Reunimos tecnologia e automação numa plataforma pensada para reduzir a inadimplência e manter a comunicação com segurados sempre em dia.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center my-5">
                            <CardSegments className="m-2" image="/api.jpeg" title='API Oficial do WhatsApp Business' subtitle="Comunicação segura e autenticada para interagir com segurados através do canal oficial da Meta." />
                            <CardSegments className='m-2' image="/automacao.png" title='Automação de comunicações' subtitle="Crie fluxos automáticos para renovações, cobranças e atualizações importantes." />
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