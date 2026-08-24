import { Ampersand, Quote } from "lucide-react"
import Reveal from "../../../../components/Reveal"
import Image from 'next/image'
export default () => {
    return (
        <div className="flex flex-col w-screen">
            {/* <div className="w-screen h-screen absolute bg-[url('/toledo2.jpg')] bg-center bg-cover bg-no-repeat"/> */}
            <div className="flex justify-center w-screen h-screen relative bg-correio-inteligente-200/92 ">
            <div className="lg:flex container h-auto pt-20 lg:h-screen items-center justify-evenly ">
                <div className="w-100 h-100 blur-2xl bg-correio-inteligente-100/20 rounded-full absolute left-50 top-30" />
                <div className="w-80 h-80 blur-2xl bg-correio-inteligente-100/20 rounded-full absolute left-100 top-20" />
                <div className="w-150 h-150 blur-3xl bg-correio-inteligente-100/20 rotate-45 absolute " />
                <div className="w-10 h-10 blur-lg bg-correio-inteligente-100/20 rotate-45 absolute right-100 bottom-10" />
                <div className="w-10 h-10 blur-lg bg-correio-inteligente-100/20 rotate-45 absolute left-100 bottom-10" />
                <Reveal direction="left">
                    <div className="flex relative flex-col">
                        <div className="flex p-2 lg:p-0 items-center justify-center lg:justify-start">
                            <Image width={80} height={80} src="/toledo.png" className="max-w-20" alt="" />
                            <Ampersand className="ml-2 size-4 text-gray-100" />
                            <Image width={60} height={80} src="/Iso.png" className="max-h-15" alt="" />
                        </div>
                        <div className="flex flex-col h-auto items-center justify-center  text-center lg:text-left px-4 lg:px-0 lg:max-w-4xl">
                            <h2 className="text-6xl bg-linear-to-r from-correio-inteligente-900 pb-4 to-correio-inteligente-800 bg-clip-text text-transparent">Mais <span className="font-bold">eficiência na comunicação</span>. Mais <span>oportunidades de negócio</span>.</h2>
                            <p className="text-lg text-gray-100">Com o Correio Inteligente, a Toledo Piza potencializou sua comunicação com clientes, utilizando o WhatsApp para ampliar o alcance das mensagens e tornar seus processos de contato mais ágeis e eficientes.</p>
                        </div>
                        <div className="flex w-full items-center justify-center lg:justify-start">
                            <a href="/fale-conosco" className="flex items-center justify-center my-4 p-5 rounded-full bg-correio-inteligente-900 md:w-60 text-correio-inteligente-200">
                                Fale com um especialista
                            </a>
                        </div>
                    </div>
                </Reveal>
                <Reveal direction="right">
                    <div className="flex items-center justify-center lg:justify-between relative bg-gray-100 h-120 my-10 rounded-br-md rounded-bl-4xl rounded-tr-4xl">
                        <Image width={1000} height={1000} src="/logoToledo.png" className="lg:flex hidden bg-top w-120 " alt="" />
                    </div>
                </Reveal>
            </div>
                </div>
            <div className="flex flex-col h-auto items-center justify-center py-10 bg-gray-100" id='sobreogrupo'>
                
                <div className="md:flex p-5 container bg-correio-inteligente-900 rounded-lg md:text-left ">
                    <Reveal direction="left">
                        <div className="hidden lg:flex mb-5 items-center justify-center md:w-80 md:h-60 rounded-lg bg-correio-inteligente-200">
                            <Image width={1000} height={1000} className="w-30 md:aspect-square md:w-full" src="/toledo.png" alt="" />
                        </div>
                    </Reveal>
                    <div className="">
                        <Reveal direction="right" className="flex flex-col lg:ml-10">
                            <div className="flex pb-5 bg-correio-inteligente-900 container">
                                <h2 className="text-center text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent">Experiência jurídica aliada a <span className="font-bold">eficiência operacional</span></h2>
                            </div>
                            <p className="text-lg lg:text-left text-center">A Toledo Piza é uma sociedade de advogados especializada em recuperação de crédito judicial e extrajudicial, atuando com contratos bancários em todo o território nacional. Como parceira do Banco BV, o escritório precisava de uma estrutura de comunicação capaz de acompanhar o volume de contatos gerado por essa operação.</p>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center h-auto bg-gray-100" id='desafio'>
                <Reveal direction="down">
                    <div className="flex items-center justify-center">
                        <h2 className="bg-linear-to-r from-black to-gray-500 bg-clip-text text-transparent text-4xl my-10">O <span className="font-bold">Desafio</span></h2>
                    </div>
                </Reveal>
                    <div className="flex container p-5">
                <Reveal direction="up">
                        <div className="flex">
                            <span className="text-lg text-center mb-10 text-correio-inteligente-200">Com o volume de contatos gerado pela operação junto ao Banco BV, a Toledo Piza precisava de uma estrutura de comunicação capaz de acompanhar essa escala sem depender de processos manuais. O desafio estava em alcançar um grande número de clientes de forma rápida e organizada, mantendo o controle sobre cada etapa da negociação. Nesse cenário, o WhatsApp surgiu como um canal capaz de sustentar esse volume e aproximar o escritório dos seus clientes.</span>
                        </div>
                </Reveal>
                    </div>
                <div className="flex flex-col items-center w-full h-auto">
                    <div className="p-5 bg-correio-inteligente-200">
                        <div className="md:flex my-10 px-10">
                            <div className="hidden lg:flex lg:min-w-150">
                                <Image width={1000} height={1000} src="/matriz.png" className="w-200" alt="" />
                            </div>
                            <Reveal direction="right">
                                <div className="flex flex-col">
                                    <div className="lg:ml-40">
                                        <div className="flex justify-center lg:justify-start items-center">
                                            <h2 className="bg-linear-to-r from-gray-100 to-correio-inteligente-800 bg-clip-text lg:text-left text-center text-transparent pb-5 text-4xl md:mr-10 md:text-5xl">Como o <span className="font-bold">Correio Inteligente</span> ajudou</h2>
                                        </div>
                                        <span className="flex flex-col text-center mt-10 md:mt-0 lg:text-left text-correio-inteligente-900 text-lg">Com o Correio Inteligente, a Toledo Piza passou a contar com uma estrutura de campanhas em escala para gerenciar a comunicação com clientes, incluindo as campanhas ligadas à operação junto ao Banco BV. A plataforma permitiu automatizar notificações, lembretes e comunicações relacionadas às etapas de negociação, reduzindo a dependência de processos manuais.
O acompanhamento em tempo real do status das mensagens enviadas, entregues, lidas e pendentes, deu à Toledo Piza uma visão mais clara sobre o desempenho de cada campanha. Com uma operação mais automatizada, o escritório ampliou sua capacidade de contato e ganhou mais controle sobre cada etapa da comunicação com os clientes.</span>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center h-auto bg-gray-100">
                <div className="md:flex md:justify-around text-center items-center p-10 md:p-20 md:container md:mx-60 rounded-3xl bg-correio-inteligente-200 my-20 md:h-20">
                    {/* <div className="flex ">
                        <h2 className="bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-800 text-4xl font-bold bg-clip-text text-transparent">Resultados</h2>
                    </div> */}
                    <div className="flex flex-col md:my-0 mb-10 w-50">
                        <p className="font-black bg-linear-to-r from-correio-inteligente-800 to-correio-inteligente-900 bg-clip-text text-transparent text-2xl">+79%</p>
                        <span className="text-lg text-correio-inteligente-900">na taxa de entrega de mensagens</span>
                    </div>
                    <div className="flex flex-col md:my-0 mb-10 w-50">
                        <p className="font-black bg-linear-to-r from-correio-inteligente-800 to-correio-inteligente-900 bg-clip-text text-transparent text-2xl">+300mil</p>
                        <span className="text-lg text-correio-inteligente-900">mensagens disparadas em um único mês</span>
                    </div>
                    <div className="flex flex-col md:my-0 mb-10 w-50">
                        <p className="font-black bg-linear-to-r from-correio-inteligente-800 to-correio-inteligente-900 bg-clip-text text-transparent text-2xl">+50%</p>
                        <span className="text-lg text-correio-inteligente-900">entre mensagens lidas e retornadas</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full bg-gray-100 h-auto">
                <div className="md:flex container my-10 lg:justify-around">
                    <div className="flex flex-col max-w-xl">
                        <h2 className="text-4xl bg-linear-to-r mb-4 text-center from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent p-5">
                            Quando a tecnologia fortalece a <span className="font-bold">atuação jurídica</span>.
                        </h2>
                        <Quote className="rotate-180 size-10 w-10 h-10 text-correio-inteligente-200 stroke-0" fill='#888888'></Quote>
                        <div className="flex pl-10 -mt-3 italic">
                            <span>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus cursus ligula felis, eget rutrum augue mollis ac. Aliquam augue ipsum, egestas sit amet ex eu, blandit maximus felis. Proin sed sodales elit. Curabitur finibus tortor mauris, eu pharetra augue cursus nec.
                                In hac habitasse platea dictumst. Aenean imperdiet dolor ac odio sollicitudin fringilla.
                                Sed varius augue ac pellentesque posuere. Nunc semper mollis ligula, a fringilla sapien vulputate eu. Fusce venenatis et lacus quis porta. Etiam porttitor non urna aliquam dictum. Vestibulum mi tortor, convallis quis sollicitudin eget, hendrerit vitae lectus. Proin dictum vitae augue eu lobortis. Aenean sed auctor ipsum. Cras ac ante faucibus, mattis urna vitae, dictum massa.</span>
                        </div>
                        <div className="flex justify-end">
                            <Quote className="size-4 w-6 h-6 text-correio-inteligente-200 stroke-0" fill='#888888'></Quote>
                        </div>

                    </div>
                    <div className="flex md:my-0 my-5 items-center w-150">
                        <img src="/ceo3.jpeg" className="rounded-bl-4xl rounded-tr-4xl rounded-tl-xl" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
// export default () => {
//     return (
//         <div>
            
//         </div>
//     )
// }