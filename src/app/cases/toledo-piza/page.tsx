import { Ampersand, Quote } from "lucide-react"
import Reveal from "../../../../components/Reveal"
import Image from 'next/image'
export default () => {
    return (
        <div className="flex flex-col">
            <div className="lg:flex h-auto pt-20 lg:h-screen items-center justify-center bg-correio-inteligente-200">
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
                    <div className="lg:ml-10 flex items-center justify-center lg:justify-between ml-4 my-10">
                        <Image width={1000} height={1000} src="/ceo3.jpeg" className="bg-top w-120 h-120 object-cover rounded-br-md rounded-bl-4xl rounded-tr-4xl" alt="" />
                    </div>
                </Reveal>
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
                            <p className="text-lg lg:text-left text-center">Com uma atuação especializada e processos que envolvem um grande volume de contatos e negociações, a Toledo Piza busca constantemente aprimorar sua operação e oferecer uma comunicação mais eficiente aos clientes.

                                A combinação entre experiência jurídica, processos estruturados e tecnologia permite que o escritório acompanhe as novas demandas do mercado e encontre maneiras cada vez mais eficientes de conduzir suas operações, mantendo o foco na qualidade do atendimento e na resolução das demandas.</p>
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
                            <span className="text-lg text-center mb-10 text-correio-inteligente-200">Com uma operação que envolve a comunicação com clientes ao longo de diferentes etapas de seus processos, a Toledo Piza precisava ampliar sua capacidade de contato sem comprometer a agilidade e a qualidade da comunicação.

                                O desafio estava em alcançar um grande número de pessoas de maneira rápida e organizada, especialmente em situações que exigem acompanhamento, envio de informações, notificações e oportunidades de negociação.

                                À medida que o volume de contatos aumenta, depender exclusivamente de processos manuais torna a operação mais complexa. Era necessário, portanto, contar com uma solução capaz de acompanhar essa escala e, ao mesmo tempo, proporcionar uma comunicação mais eficiente e próxima dos clientes.

                                Nesse cenário, o WhatsApp surgiu como um importante canal para fortalecer o contato e criar novas oportunidades de interação ao longo da jornada de cada cliente.</span>
                        </div>
                </Reveal>
                    </div>
                <div className="flex flex-col items-center w-full h-auto">
                    <div className="p-5 bg-correio-inteligente-200">
                        <div className="md:flex my-10 px-10">
                            <div className="hidden lg:flex lg:min-w-200">
                                <Image width={1000} height={1000} src="/handshake.jpeg" className="" alt="" />
                            </div>
                            <Reveal direction="right">
                                <div className="flex flex-col">
                                    <div className="lg:ml-40">
                                        <div className="flex justify-center lg:justify-start items-center">
                                            <h2 className="bg-linear-to-r from-gray-100 to-correio-inteligente-800 bg-clip-text lg:text-left text-center text-transparent pb-5 text-4xl md:mr-10 md:text-5xl">Como o <span className="font-bold">Correio Inteligente</span> ajudou</h2>
                                        </div>
                                        <span className="flex flex-col text-center mt-10 md:mt-0 lg:text-left text-correio-inteligente-900 text-lg">Para apoiar a operação da Toledo Piza, o Correio Inteligente trouxe mais automação, escala e organização para a comunicação com os clientes.

                                            A plataforma permitiu estruturar campanhas e realizar disparos pelo WhatsApp em grande volume, ampliando a capacidade de contato e tornando mais ágil o envio de comunicações durante os processos conduzidos pelo escritório.

                                            Com a automação das mensagens, diferentes comunicações puderam ser realizadas de maneira mais rápida e organizada, incluindo notificações, lembretes e contatos relacionados às etapas de negociação e acompanhamento dos clientes.

                                            Além de aumentar a capacidade operacional, o acompanhamento das mensagens enviadas, entregues, lidas e das interações geradas proporcionou uma visão mais clara sobre o desempenho das comunicações.

                                            Dessa forma, o Toledo Piza passou a contar com uma estrutura de comunicação mais escalável, capaz de acompanhar o volume da operação e contribuir para uma jornada de contato mais eficiente.</span>
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
                        <img src="/ceo4.jpeg" className="rounded-bl-4xl rounded-tr-4xl rounded-tl-xl" alt="" />
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