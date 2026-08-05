import { ArrowDown, ArrowUp, Bot } from "lucide-react"
import Reveal from "../../../../components/Reveal"
import CardSegments from "../../../../components/CardSegments"

export default () => {
    return (
        <div className="flex flex-col">
            <div className="h-screen bg-correio-inteligente-200 bg-center bg-no-repeat bg-cover ">
                <div className="flex items-center justify-center h-screen">
                    <div className="flex container items-center justify-center">
                        <div className="flex flex-col max-w-3xl  p-3">
                            <Reveal direction="left">
                                <p className="text-lg text-gray-100 uppercase">BANCOS E FINTECHS</p>
                            </Reveal>
                            <Reveal direction="up">
                                <h2 className="text-5xl md:text-6xl pb-4 font-bold bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-300 bg-clip-text text-transparent">Comunicação inteligente para bancos e fintechs</h2>
                                <div className="h-0.5 bg-linear-to-r w-80 my-2 md:my-8 from-correio-inteligente-900 to-correio-inteligente-800 "></div>
                            </Reveal>
                            <Reveal direction="left">
                                <p className="text-lg  font-bold mb-6 text-gray-100">Automatize cobranças, notificações e campanhas de relacionamento pelo WhatsApp, ampliando o alcance da sua operação com mais agilidade, segurança e eficiência.</p>
                                <a href="/fale-conosco" className="flex items-center justify-center p-3 w-60 bg-correio-inteligente-900 text-correio-inteligente-200">Solicitar Demonstração</a>
                            </Reveal>
                        </div>
                        <Reveal direction="right">
                            <img src="/heroBanco.png" className="max-w-2xl rounded-bl-4xl rounded-tl-xl rounded-br-lg" alt="" />
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-auto md:h-100 bg-gray-100">
                <h2 className="bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl my-6">Morbi pretium ultrices nisl ut tincidunt.</h2>
                <div className="flex items-center">
                    {/* <div className="md:h-[0.1px] md:w-full md:top-1/2 md:bg-gradient-to-b md:from-transparent md:via-correio-inteligente-100"/> */}
                    <p className="text-lg text-gray-500 max-w-4xl text-center">Aliquam nec eleifend magna. Ut vulputate erat vel neque rutrum, sed accumsan eros ultrices. Nam egestas a nunc ac eleifend. Aliquam dapibus quis magna nec semper. Donec facilisis nibh nec malesuada iaculis. Mauris mollis semper elit id vestibulum. Praesent convallis lacinia mauris, vel convallis lectus iaculis ut.</p>
                    <div className="md:w-[0.1px] md:h-35 md:left-1/2 md:bg-gradient-to-b md:from-transparent md:via-correio-inteligente-100" />
                    <img src="/Iso.png" className="max-w-40" alt="" />
                    <div />
                </div>
            </div>
            <div className="flex flex-col h-auto items-center bg-gray-100">
                <div className="container px-30">
                    <h2 className="bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl my-3"></h2>
                    <div className="flex items-center text-correio-inteligente-100 justify-between">
                        <div className="flex flex-col text-center items-center mr-3">
                            <h2 className="text-4xl max-w-2xl p-2 bg-linear-to-r from-correio-inteligente-100 to-correio-inteligente-800 bg-clip-text text-transparent">Donec interdum tortor nunc, a volutpat magna malesuada id.</h2>
                            <div className="flex items-center w-100 h-80">
                                <img src="/Iso.png" className="aspect-square " alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col divide-y divide-correio-inteligente-100">
                            <div className="flex items-center py-4">
                                <Bot className="bg-correio-inteligente-900 rounded-full p-3 w-13 h-13" />
                                <div className="flex flex-col max-w-md">
                                    <p className="text-xl pl-3">Vivamus tempus imperdiet rhoncus.</p>
                                    <span className="text-gray-400 pl-3">In tempor nisl metus, sit amet interdum enim pellentesque at. Ut risus justo, semper cursus faucibus sit amet, molestie quis ante.</span>
                                </div>

                            </div>
                            <div className="flex items-center py-4">
                                <Bot className="rounded-full bg-correio-inteligente-900 p-3 w-13 h-13" />
                                <div className="flex flex-col max-w-md">
                                    <p className="text-xl pl-3">Vivamus tempus imperdiet rhoncus.</p>
                                    <span className="text-gray-400 pl-3">In tempor nisl metus, sit amet interdum enim pellentesque at. Ut risus justo, semper cursus faucibus sit amet, molestie quis ante.</span>
                                </div>

                            </div>
                            <div className="flex items-center py-4">
                                <Bot className="bg-correio-inteligente-900 rounded-full p-3 w-13 h-13" />
                                <div className="flex flex-col max-w-md">
                                    <p className="text-xl pl-3">Vivamus tempus imperdiet rhoncus.</p>
                                    <span className="text-gray-400 pl-3">In tempor nisl metus, sit amet interdum enim pellentesque at. Ut risus justo, semper cursus faucibus sit amet, molestie quis ante.</span>
                                </div>
                            </div>
                            <div className="flex items-center py-4">
                                <Bot className="bg-correio-inteligente-900 rounded-full p-3 w-13 h-13" />
                                <div className="flex flex-col max-w-md">
                                    <p className="text-xl pl-3">Vivamus tempus imperdiet rhoncus.</p>
                                    <span className="text-gray-400 pl-3">In tempor nisl metus, sit amet interdum enim pellentesque at. Ut risus justo, semper cursus faucibus sit amet, molestie quis ante.</span>
                                </div>
                            </div>
                            <a href="" className="my-8 text-center rounded-xl w-full py-4 bg-correio-inteligente-200 text-gray-100">Fale com um especialista</a>
                        </div>
                    </div>
                    <div className="flex bg-gray-100 items-center justify-between py-10 h-auto">
                        <div className="flex flex-col max-w-xl">
                            <h2 className="pl-3 text-center text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent">Proin a euismod purus. Morbi massa neque, pretium vitae ullamcorper non, viverra ut odio.</h2>
                            <p className="text-gray-700 py-3 text-md text-center">Quisque viverra justo vitae augue maximus, eget dapibus quam molestie. Nulla auctor, neque id sodales suscipit, lectus eros cursus massa, quis gravida sapien enim ut neque. Etiam ac ex fermentum, rutrum arcu quis, pulvinar justo.</p>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">XX%</p>
                                    <span className="pl-3 text-gray-700 text-md">Pellentesque condimentum lobortis nunc sed dignissim</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowDown className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">XX%</p>
                                    <span className="pl-3 text-gray-700 text-md">Pellentesque condimentum lobortis nunc sed dignissim</span>
                                </div>
                            </div>
                            <div className="flex items-center p-3">
                                <ArrowUp className="border rounded-full border-correio-inteligente-100 text-correio-inteligente-100 p-3 w-13 h-13 " />
                                <div className="flex items-end">
                                    <p className="pl-3 text-4xl font-bold text-correio-inteligente-100">XX%</p>
                                    <span className="pl-3 text-gray-700 text-md">Pellentesque condimentum lobortis nunc sed dignissim</span>
                                </div>
                            </div>
                            <h2 className="text-2xl text-center py-8 pl-3 max-w-2xl text-gray-700">Sed ut tortor ipsum. Sed maximus vel urna ultrices convallis. Ut ac odio lacus. </h2>
                        </div>
                        <div className="flex w-150 h-120 items-center">
                            <img src="/Iso.png" className="aspect-square" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center my-10 items-center">
                        <div className="max-w-2xl text-center">
                            <h2 className="text-4xl bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent">Nulla viverra leo orci, non ornare ante vestibulum vel.</h2>
                            <p className="text-lg py-2 text-gray-700">Suspendisse posuere orci non sapien semper, in consectetur erat consectetur. In nulla arcu, egestas non ex at, sagittis mollis nunc.</p>
                        </div>
                        <div className="flex my-5">
                            <CardSegments className="m-2" image="/handshake.jpeg"/>
                            <CardSegments className='m-2' image="/handshake.jpeg"/>
                            <CardSegments className='m-2' image="/handshake.jpeg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}