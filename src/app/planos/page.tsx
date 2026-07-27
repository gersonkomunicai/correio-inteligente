import { ChevronDown } from "lucide-react"
import Navbar from "../../../components/Navbar"
import Reveal from "../../../components/Reveal"
import CardPricing from "../../../components/CardPricing"

export default () => {
    return (
        <div className="flex w-screen scroll-smooth overflow-clip snap-y snap-mandatory flex-col">
            <div className="w-50 h-50 absolute bg-correio-inteligente-100/20 rotate-45 top-14 left-30 blur-xl" />
            <div className="w-140 h-140 absolute bg-correio-inteligente-100/15 rounded-full top-30 left-100 blur-3xl" />
            <div className="w-20 h-20 absolute bg-correio-inteligente-100/30 rotate-45 bottom-13 right-30 blur-xl" />
            <div className="w-200 h-200 absolute bg-correio-inteligente-100/10 rounded-full top-14 right-40 blur-2xl" />
            <div className="flex flex-col w-full h-screen bg-correio-inteligente-200">
                <Reveal direction="left">
                    <Navbar />
                </Reveal>
                <div className="flex snap-center items-center justify-center h-full ">
                    <div className="w-100 md:w-250 md:mt-0 text-left flex-col">
                        <Reveal direction="left">
                            <span className=" text-lg text-gray-100">PLANOS</span>
                        </Reveal>
                        <Reveal>
                            <h2 className="bg-linear-to-r text-5xl md:text-6xl py-3 font-bold from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent">Temos o plano ideal para sua empresa!</h2>
                            <div className="w-100 h-1 my-8 bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-800" />
                        </Reveal>
                        <Reveal direction="left">
                            <span className="md:text-xl text-lg text-gray-100 md:font-medium font-light">Maecenas nec leo sit amet risus aliquet laoreet. Nulla a lobortis diam, non faucibus elit. Nunc bibendum elementum urna eget laoreet</span>
                        </Reveal>
                        <Reveal direction="left">
                            <a className="w-30 flex my-10 items-center p-3 text-correio-inteligente-200 bg-correio-inteligente-900" href="#preco">
                                <ChevronDown className=" w-4 mr-2 h-4 size-4 animate-bounce" />
                                <span>Conhecer</span>
                            </a>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div id="preco" className="flex snap-center flex-col items-center py-16 justify-start h-auto bg-gray-100">
                <div className="flex flex-col w-150 text-center">
                    <h2 className="text-4xl font-unineue font-bold bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent">Curabitur sed massa dictum</h2>
                    <span className="text-gray-500 pt-5">Sed eleifend, quam eu mollis volutpat, elit ligula dapibus arcu, vel elementum lectus neque facilisis urna. Vivamus justo mauris, maximus non elit sed, blandit aliquam nibh. Aenean elementum elit sed fermentum bibendum.</span>
                </div>
                <div className="flex items-center justify-center flex-wrap mt-10">
                    <CardPricing></CardPricing>
                </div>
            </div>

        </div>
    )
}