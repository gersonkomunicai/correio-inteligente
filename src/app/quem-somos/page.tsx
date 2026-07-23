'use client'

import Navbar from "../../../components/Navbar"
import Typewriter from 'typewriter-effect'
import Reveal from "../../../components/Reveal"
import { ChevronDown } from "lucide-react"

export default () => {
    return (
        <main>
            <div className="flex flex-col w-screen">
                <div className="md:flex flex-col bg-correio-inteligente-200 h-screen">
                    <div className="absolute bg-correio-inteligente-100/20 w-200 h-200 rounded-full -left-100 -bottom-100 blur-2xl" />
                    <div className="absolute bg-correio-inteligente-300/10 w-150 h-150 rotate-45 right-140 top-20 blur-3xl" />
                    <div className="absolute bg-correio-inteligente-300/10 w-5 h-5 rotate-45 left-100 top-20 blur-xs" />
                    <div className="absolute bg-correio-inteligente-100/20 w-200 h-200 rounded-full -right-100 -top-100 blur-2xl" />
                    <Reveal direction="right">
                        <Navbar />
                    </Reveal>
                    <div className="flex w-full items-center justify-around h-screen">
                        <div className="flex w-100 md:w-250 md:mt-0 text-left flex-col">
                            <Reveal>
                                <span className="md:text-lg text-md text-gray-100">QUEM SOMOS</span>
                            </Reveal>
                            {/* <Typewriter options={{
                                wrapperClassName: 'bg-linear-to-r text-6xl py-3 font-bold from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent',
                                cursorClassName: 'bg-linear-to-r text-6xl py-3 font-bold from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent',
                                delay: 20
                            }} onInit={(typewriter) => {
                                typewriter.typeString('A infraestrutura mais confiável para envios em longa escala do mercado.').callFunction(() => { setTimeout(() => setAppear(!appear), 300) }).start()
                            }} ></Typewriter> */}
                            <Reveal>
                                <h2 className="bg-linear-to-r text-4xl md:text-6xl py-3 font-bold from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent">A solução mais confiável para envios em longa escala do mercado.</h2>
                            </Reveal>
                            <Reveal direction="left">
                                <div className="h-1 border border-gray-800 bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-800 md:my-8 my-3 w-100" />
                                <span className="md:text-xl text-lg text-gray-100 md:font-medium font-light">A solução que nasceu para transformar a
                                    forma como empresas e instituições se comunicam
                                    com seus clientes. Unimos tecnologia, segurança e
                                    automação para tornar cada mensagem mais
                                    eficiente, confiável e estratégica.</span>
                            </Reveal>
                            <Reveal>
                                <a href="#começo" className="flex my-5 w-35 items-center justify-start mt-8 rounded-md bg-correio-inteligente-900 text-correio-inteligente-200 p-3">
                                    <ChevronDown className="size-4 w-4 h-4 mr-2 animate-bounce" />
                                    <span>Saiba mais</span>
                                </a>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div id="começo" className="flex items-start py-16 justify-center h-auto md:h-150 bg-gray-100">
                    <div className="absolute bg-correio-inteligente-100/40 w-10 h-10 rotate-45 right-50 blur-sm" />
                    <div className="flex flex-col items-center md:px-35 px-5 w-full">
                        <div className="md:flex flex-col md:w-220">
                            <h2 className="text-4xl bg-linear-to-r bg-clip-text text-transparent from-correio-inteligente-200 to-correio-inteligente-800 font-bold font-unineue text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        </div>
                        <div className="md:flex justify-center mt-10">
                            <div className="md:flex text-left items-start md:mr-10 ">
                                <Reveal direction="left">
                                    <span className="md:text-lg">Fusce vitae odio non ligula aliquet imperdiet ut vel lectus.
                                        Pellentesque feugiat mi a ullamcorper auctor. Fusce vel ex lobortis, accumsan nisl quis,
                                        laoreet tellus. Integer condimentum aliquam fermentum.
                                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                        Cras ac leo et mauris malesuada elementum at et arcu. Pellentesque habitant morbi tristique
                                        senectus et netus et malesuada fames ac turpis egestas.
                                        Sed tristique ligula quis viverra aliquam. </span>
                                </Reveal>
                                <div className="absolute bg-correio-inteligente-100/20 w-50 h-50 rotate-45 left-130 mt-30 blur-2xl" />
                            </div>
                            <Reveal direction="right">
                                <img className="hidden md:flex w-150 min-w-130" src="/model.jpeg" alt="" />
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="h-200 bg-gray-100">
                    <div className="absolute bg-correio-inteligente-100/20 w-200 h-200 rounded-full -right-100 -top-100 blur-2xl" />
                    <div className="absolute bg-correio-inteligente-300/10 w-5 h-5 rotate-45 left-100 mt-30 blur-xs" />
                    <div className="absolute bg-correio-inteligente-300/10 w-5 h-5 rotate-45 left-143 mt-50 blur-xs" />
                    <div className="absolute bg-correio-inteligente-300/10 w-5 h-5 rotate-45 left-121 mt-40 blur-xs" />
                    <div className="absolute bg-correio-inteligente-300/10 w-100 h-100 rounded-full right-100 blur-3xl" />
                    <div className="flex h-full items-center">
                        <div className="hidden md:flex flex-col items-center justify-center text-left w-[50%] h-140 bg-correio-inteligente-900">
                            <Reveal direction="left">
                                <div className="w-150 ml-20">
                                    <h2 className="bg-linear-to-r p-3 from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent font-bold text-3xl">Sobre o Correio Inteligente</h2>
                                    <h2 className="bg-linear-to-r p-3 text-gray-600 text-3xl">Praesent blandit lectus non tempor fermentum. Aliquam porta rutrum placerat. Duis eleifend vitae lorem eu placerat. Nulla nec suscipit lectus.</h2>
                                </div>
                            </Reveal>
                        </div>
                        <div className="h-auto flex text-center md:w-[50%] md:h-140 bg-correio-inteligente-200">
                            <Reveal direction="right">
                                <div className="flex flex-col justify-center m-5">
                                    <h2 className="md:hidden bg-linear-to-r py-3 from-correio-inteligente-800 to-correio-inteligente-900 bg-clip-text text-transparent font-bold text-4xl">Sobre o Correio Inteligente</h2>
                                    <h2 className="md:hidden bg-linear-to-r py-3 text-gray-300 text-2xl">Praesent blandit lectus non tempor fermentum. Aliquam porta rutrum placerat. Duis eleifend vitae lorem eu placerat. Nulla nec suscipit lectus.</h2>
                                    <div className="flex flex-col text-lg text-gray-100 text-center md:text-left">
                                        <span className="py-2">
                                            Nunc sit amet risus quis odio euismod tincidunt in eu nulla. Praesent facilisis dapibus facilisis. Nullam pulvinar viverra mauris ut luctus. Mauris eleifend est non ipsum fermentum efficitur. Fusce faucibus diam et dapibus accumsan. Nullam iaculis sit amet ante sed sagittis. Phasellus hendrerit eu dui non lobortis.</span>
                                        <span>
                                            Aliquam erat volutpat. Aenean venenatis porttitor convallis. Ut a laoreet elit. Donec tincidunt sodales massa, et finibus sem lacinia commodo. Fusce ac risus mauris. Integer molestie purus ac dictum tincidunt. Proin laoreet felis lorem, porttitor pulvinar est tempor id. Integer eleifend, eros a pellentesque vehicula, nunc sem fringilla dui, et aliquam ipsum orci eget mi. Proin ac eleifend odio, quis hendrerit neque.
                                        </span>
                                    </div>

                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="flex h-200 p-10 items-center justify-center bg-correio-inteligente-200">
                    <div className="absolute bg-correio-inteligente-100/20 w-100 h-100 left-50 mt-100 blur-2xl" />
                    <div className="absolute bg-correio-inteligente-300/10 w-150 h-150 rotate-45 right-140  blur-3xl" />
                    <div className="absolute bg-correio-inteligente-300/10 w-5 h-5 rotate-45 left-100 mt-20 blur-xs" />
                    <div className="absolute bg-correio-inteligente-100/20 w-200 h-200 rounded-full right-10  blur-2xl" />

                    <div className="absolute p-10 flex w-[65%] h-140 items-center rounded-xl bg-correio-inteligente-900">
                        <div className="flex items-center text-center md:flex md:items-start flex-col justify-center md:text-left h-full md:w-[50%] pr-5">
                            <h2 className="bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-4xl py-5">Lorem ipsum dolor sit amet</h2>
                            <span>Donec finibus turpis metus, ut accumsan massa blandit ac. Cras sagittis porta dui. Vivamus pellentesque risus sed fermentum lacinia. Suspendisse id dui nunc. Phasellus sed elit vulputate, euismod ante sit amet, laoreet tortor. </span>
                            <a href="#começo" className="flex my-5 w-30 items-center md:justify-start mt-8 rounded-md bg-correio-inteligente-200 text-correio-inteligente-900 p-3">
                                <span>Fale conosco</span>
                            </a>
                        </div>

                        <div className="hidden md:flex items-center h-full">
                            <img className="flex w-120 min-w-60 items-center" src="model2.jpeg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </main>

    )
}
