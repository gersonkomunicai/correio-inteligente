import { Ampersand, Plus, Quote } from "lucide-react"
import Reveal from "../../../../components/Reveal"
import Image from 'next/image'

export default () => {
    return (
        <div className="flex flex-col">
            <div className="w-100 h-100 blur-2xl bg-correio-inteligente-100/20 rounded-full absolute left-50 top-30" />
            <div className="w-80 h-80 blur-2xl bg-correio-inteligente-100/20 rounded-full absolute left-100 top-20" />
            <div className="w-150 h-150 blur-3xl bg-correio-inteligente-100/20 rotate-45 absolute " />
            <div className="w-10 h-10 blur-lg bg-correio-inteligente-100/20 rotate-45 absolute right-100 bottom-10" />
            <div className="w-10 h-10 blur-lg bg-correio-inteligente-100/20 rotate-45 absolute left-100 bottom-10" />

            <div className="lg:flex h-auto pt-20 lg:h-screen items-center justify-center bg-correio-inteligente-200">
                <Reveal direction="left">
                    <div className="lg:flex flex-col">
                        <div className="flex p-2 lg:p-0 relative items-center justify-center lg:justify-start">
                            <Image width={80} height={80} src="/aval.png" className="max-w-20" alt="" />
                            <Ampersand className="ml-2 size-4 text-gray-100" />
                            <Image width={60} height={80} src="/Iso.png" className="max-h-15" alt="" />
                        </div>
                        <div className="flex flex-col relative h-auto items-center text-center px-4 lg:text-left lg:p-0 lg:max-w-4xl">
                            <h2 className="text-6xl bg-linear-to-r from-correio-inteligente-900 pb-4 to-correio-inteligente-800 bg-clip-text text-transparent">O <span className="font-bold">Grupo Aval</span> recuperou milhares em crédito com o Correio Inteligente.</h2>
                            <p className="text-lg text-gray-100">Com campanhas automatizadas pelo WhatsApp, o Grupo Aval aumentou a eficiência da cobrança, recuperou uma parcela significativa de créditos em aberto e agilizou a comunicação com seus clientes.</p>
                        </div>
                        <div className="flex w-full lg:justify-start items-center justify-center relative ">
                            <a href="/fale-conosco" className="flex justify-center my-4 p-5 rounded-full bg-correio-inteligente-900 md:w-60 text-correio-inteligente-200">
                                Fale com um especialista
                            </a>
                        </div>
                    </div>
                </Reveal>
                <Reveal direction="right">
                    <div className="lg:ml-10 flex items-center lg:justify-between justify-center ml-4 my-10">
                        <Image width={1000} height={1000} src="/ceo.jpeg" className="bg-top w-120 h-120 object-cover rounded-br-md rounded-bl-4xl rounded-tr-4xl" alt="" />
                    </div>
                </Reveal>
            </div>
            <div className="flex flex-col h-auto items-center justify-center py-10 bg-gray-100" id='sobreogrupo'>
                <div className="md:flex p-5 container items-center bg-correio-inteligente-900 rounded-lg md:text-left ">
                    <Reveal direction="left">
                        <div className="hidden lg:flex items-center justify-center md:w-80 md:h-60 rounded-lg bg-correio-inteligente-200">
                            <Image width={1000} height={1000} className="w-30 md:aspect-square md:w-full" src="/aval.png" alt="" />
                        </div>
                    </Reveal>
                    <div className="">
                        <Reveal direction="right" className="flex flex-col lg:ml-10">
                            <div className="flex pb-5 mt-20 md:mt-0 justify-center lg:justify-start bg-correio-inteligente-900 container">
                                <h2 className="text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent">Sobre o <span className="font-bold">Grupo Aval</span></h2>
                            </div>
                            <p className="lg:text-left text-center text-lg">Há mais de 42 anos, o Grupo Aval atua no mercado financeiro oferecendo serviços especializados voltados à localização, contato e relacionamento com clientes, além da condução de processos relacionados à regularização de pendências financeiras.

                                Ao longo de sua trajetória, a empresa consolidou uma atuação pautada pela eficiência, agilidade e excelência no atendimento, utilizando estratégias modernas e recursos tecnológicos para otimizar seus processos e ampliar os resultados de suas operações.

                                Com foco na resolução ágil das demandas e na construção de relacionamentos duradouros, o Grupo Aval busca constantemente aprimorar seus procedimentos, combinando experiência de mercado, inovação e atendimento personalizado para oferecer soluções eficientes aos seus clientes.

                                Essa experiência de mais de quatro décadas reforça o compromisso do Grupo Aval com a qualidade na prestação de serviços e com a busca contínua por melhores resultados, sempre acompanhando as transformações e as novas necessidades do mercado financeiro.</p>

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
                            <span className="text-lg text-center mb-10 text-correio-inteligente-200">Com uma operação voltada à localização, comunicação e negociação com clientes, o Grupo Aval precisava encontrar maneiras de tornar seus processos de cobrança mais eficientes e escaláveis. O grande volume de contatos exigia uma comunicação capaz de alcançar um número maior de pessoas de forma rápida, organizada e consistente.

                                Nesse cenário, aumentar a eficiência não significava apenas enviar mais mensagens, mas garantir que elas chegassem aos clientes no momento adequado e criassem novas oportunidades de interação. Era necessário ampliar o alcance das comunicações, reduzir a dependência de processos manuais e tornar a jornada de contato mais dinâmica e eficiente.

                                A empresa buscava, portanto, uma solução que acompanhasse o ritmo de sua operação e permitisse realizar comunicações em grande escala sem perder agilidade, controle e qualidade no atendimento.

                                Foi a partir dessa necessidade que o Grupo Aval encontrou no Correio Inteligente uma ferramenta capaz de transformar sua estratégia de comunicação, automatizando os contatos, ampliando o alcance das mensagens e criando melhores condições para que os clientes fossem efetivamente impactados e retornassem às comunicações.

                                O desafio estava lançado: alcançar mais clientes, tornar a comunicação mais eficiente e transformar cada contato em uma nova oportunidade de negociação e recuperação de crédito.</span>
                        </div>
                    </Reveal>
                </div>
                <div className="flex flex-col items-center w-full h-auto">
                    <div className="p-5 bg-correio-inteligente-200">

                        <div className="md:flex items-center my-10 px-10">
                            <Reveal direction="left">
                                <div className="hidden lg:flex lg:min-w-200">
                                    <Image width={1000} height={1000} src="/handshake.jpeg" className="" alt="" />
                                </div>
                            </Reveal>
                            <Reveal direction="right">
                                <div className="flex flex-col">
                                    <div className="flex items-center text-center justify-center lg:text-left lg:justify-start lg:ml-40">
                                        <h2 className="bg-linear-to-r from-gray-100 to-correio-inteligente-800 bg-clip-text text-transparent pb-5 text-4xl md:mr-10 md:text-5xl">Como o <span className="font-bold">Correio Inteligente</span> ajudou</h2>
                                    </div>
                                    <div className="lg:ml-40">
                                        <span className="flex flex-col text-center mt-10 md:mt-0 lg:text-left text-correio-inteligente-900 text-lg">Para atender às necessidades do Grupo Aval, o Correio Inteligente passou a apoiar a operação de comunicação com uma estrutura mais ágil, automatizada e preparada para grandes volumes de mensagens.
                                            Por meio da plataforma, foi possível utilizar o WhatsApp como um importante canal de comunicação com os clientes, permitindo a realização de campanhas automatizadas e disparos em escala.</span>
                                        <span className="text-lg flex text-center lg:text-left text-correio-inteligente-900">Dessa forma, o Grupo Aval ganhou maior capacidade para alcançar sua base de contatos e manter uma comunicação mais frequente e organizada durante os processos de cobrança.
                                            A automação também possibilitou tornar os contatos mais eficientes, permitindo o envio de mensagens de acordo com diferentes necessidades e momentos da jornada do cliente. Lembretes, notificações e comunicações relacionadas às pendências financeiras passaram a fazer parte de um fluxo mais estruturado, reduzindo a dependência de processos manuais e aumentando a agilidade da operação.</span>
                                        <span className="flex text-center lg:text-left text-correio-inteligente-900 text-lg">Outro ponto importante foi a possibilidade de acompanhar o desempenho das comunicações realizadas. A análise das mensagens enviadas, entregues, lidas e das interações geradas proporcionou uma visão mais clara sobre o comportamento dos clientes e ajudou a identificar oportunidades para aprimorar continuamente as campanhas.
                                            Com uma operação mais automatizada e escalável, o Grupo Aval conseguiu ampliar sua capacidade de contato e criar novas oportunidades de interação com os clientes. O Correio Inteligente passou, assim, a contribuir não apenas para o envio das mensagens, mas para uma estratégia de comunicação mais eficiente, capaz de transformar cada contato em uma oportunidade de negociação e recuperação de crédito.</span>
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
                <div className="md:flex container my-10 justify-around">
                    <Reveal direction="left">
                        <div className="flex flex-col w-120">
                            <h2 className="text-4xl bg-linear-to-r mb-4 text-center from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent p-5">
                                Quando a comunicação gera <span className="font-bold">resultados</span>.
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
                    </Reveal>

                    <div className="flex md:my-0 my-5 items-center w-150">
                        <img src="/ceo2.jpeg" className="rounded-bl-4xl rounded-tr-4xl rounded-tl-xl" alt="" />
                    </div>

                </div>
            </div>
        </div >
    )
}
// export default () => {
//     return (
//         <div></div>
//     )
// }