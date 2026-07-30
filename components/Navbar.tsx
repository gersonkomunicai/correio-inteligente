'use client'

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [subMenuSegments, setSubMenuSegments] = useState(false)
    const [subMenuCases, setSubMenuCases] = useState(false)
    const url = usePathname().split('/')

    return (
        <div className="flex justify-center">
            <div className="hidden md:flex rounded-full bg-linear-to-r from-konnectai-primary/30 to-black/30 backdrop-blur-xs px-40 fixed top-7 h-20 z-50">
                <div className="flex items-center h-auto ">
                    <a href='/'>
                        <img src="/logoHorizontal.png" className="max-h-12" alt="Logo do Correio Inteligente" />
                    </a>
                    <div className="flex items-center justify-between px-10 w-170">
                        <a href="/quem-somos" title="Quem Somos" className={` ${url[1] === 'quem-somos' ? 'text-correio-inteligente-800' : 'text-gray-100'} hover:text-correio-inteligente-800 transition-all ease-in duration-200 p-2 rounded-md font-bold text-lg`}>Quem Somos</a>
                        <div className="relative group">
                            <a href="#" title="Segmentos" className={` ${url[1] === 'segmentos' ? 'text-correio-inteligente-800' : 'text-gray-100'} hover:text-correio-inteligente-800 transition-all ease-in duration-200  p-2 rounded-md font-bold text-lg`}>Segmentos</a>
                            <div className="absolute hidden group-hover:flex flex-col top-full left-0 pt-2 min-w-40">
                                <div className="flex flex-col rounded-md bg-correio-inteligente-200 p-2 gap-1 shadow-xl">
                                    <a href="/segmentos/bancos" className={`${url[2] === 'bancos' ? 'text-gray-100 bg-correio-inteligente-800 ' : 'hover:text-gray-700 text-gray-100 hover:bg-correio-inteligente-900'} transition-all duration-200 ease-in  text-base rounded-md p-2 `}>Bancos e Fintechs</a>
                                    <a href="/segmentos/governos" className={`${url[2] === 'governos' ? 'text-gray-100 bg-correio-inteligente-800 ' : 'hover:text-gray-700 text-gray-100 hover:bg-correio-inteligente-900'} transition-all duration-200 ease-in text-base rounded-md p-2 `}>Governos e ONGs</a>
                                    <a href="/segmentos/varejo" className={`${url[2] === 'varejo' ? 'text-gray-100 bg-correio-inteligente-800 ' : 'hover:text-gray-700 text-gray-100 hover:bg-correio-inteligente-900'} transition-all duration-200 ease-in text-base rounded-md p-2 `}>Varejo</a>
                                    <a href="/segmentos/saude" className={`${url[2] === 'saude' ? 'text-gray-100 bg-correio-inteligente-800 ' : 'hover:text-gray-700 text-gray-100 hover:bg-correio-inteligente-900'} transition-all duration-200 ease-in  text-base rounded-md p-2 `}>Saúde</a>
                                    <a href="/segmentos/educacao" className={`${url[2] === 'educacao' ? 'text-gray-100 bg-correio-inteligente-800 ' : 'hover:text-gray-700 text-gray-100 hover:bg-correio-inteligente-900'} transition-all duration-200 ease-in text-base rounded-md p-2 `}>Educação</a>
                                    <a href="/segmentos/seguradoras" className={`${url[2] === 'seguradoras' ? 'text-gray-100 bg-correio-inteligente-800 ' : 'hover:text-gray-700 text-gray-100 hover:bg-correio-inteligente-900'} transition-all duration-200 ease-in text-base rounded-md p-2 `}>Seguradoras</a>                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <a href="#" title="Cases de Sucesso" className={` ${url[1] === 'cases' ? 'text-correio-inteligente-800' : 'text-gray-100'} hover:text-correio-inteligente-800 transition-all ease-in duration-200  p-2 rounded-md font-bold text-lg`}>Cases de Sucesso</a>
                            <div className="absolute hidden group-hover:flex flex-col top-full left-0 pt-2 min-w-40">
                                <div className="flex flex-col rounded-md bg-correio-inteligente-200 p-2 gap-1 shadow-xl">
                                    <a href="/cases/grupo-aval" className={`${url[2] === 'grupo-aval' ? 'text-correio-inteligente-200 bg-correio-inteligente-800 ' : 'hover:text-gray-700 text-gray-100 hover:bg-correio-inteligente-900'} transition-all duration-200 ease-in text-base rounded-md p-2 `}>Grupo Aval</a>
                                    <a href="/cases/bellinati-perez" className={`${url[2] === 'bellinati-perez' ? 'text-gray-100 bg-correio-inteligente-800 ' : 'hover:text-gray-700 text-gray-100 hover:bg-correio-inteligente-900'} transition-all duration-200 ease-in  text-base rounded-md p-2 `}>Bellinati Perez</a>
                                    <a href="/cases/toledo-piza" className={`${url[2] === 'toledo-piza' ? 'text-gray-100 bg-correio-inteligente-800 ' : 'hover:text-gray-700 text-gray-100 hover:bg-correio-inteligente-900'} transition-all duration-200 ease-in text-base rounded-md p-2 `}>Toledo Piza</a>
                                </div>
                            </div>
                        </div>
                        <a href="/planos" title="Planos" className={` ${url[1] === 'planos' ? 'text-correio-inteligente-800' : 'text-gray-100'} hover:text-correio-inteligente-800 transition-all ease-in duration-200 p-2 rounded-md font-bold text-lg`}>Planos</a>
                    </div>
                    <a title="Fale conosco" className="w-80 border flex items-center justify-center hover:text-correio-inteligente-800  text-gray-100 transition-all font-bold duration-200 ease-in p-4 rounded-full text-lg" href='/fale-conosco'>Fale conosco</a>


                </div>
            </div>

            <div className="flex md:hidden items-center justify-between fixed top-4 left-4 right-4 z-50 px-4 h-16 rounded-full bg-linear-to-r from-konnectai-primary/40 to-black/40 backdrop-blur-xs">
                <a href='/'>
                    <img src="/logoHorizontal.png" className="max-h-10" alt="Logo do Correio Inteligente" />
                </a>
                <button onClick={() => setIsMenuOpen((open) => !open)} aria-label="Abrir menu">
                    {isMenuOpen ? (
                        <X className="text-gray-100 w-6 h-6" />
                    ) : (
                        <Menu className="text-gray-100 w-6 h-6" />
                    )}
                </button>
            </div>

            {
                isMenuOpen && (
                    <div className="flex md:hidden flex-col fixed top-22 left-4 right-4 z-40 gap-2 rounded-2xl bg-linear-to-r from-correio-inteligente-200 to-black p-4">
                        <a href="/quem-somos" className={`${url[1] === 'quem-somos' ? 'text-correio-inteligente-100 rounded-md' : 'text-gray-100'} font-bold text-lg text-left py-2`}>Quem Somos</a>
                        <button onClick={() => setSubMenuSegments(!subMenuSegments)} className={`${url[1] === 'segmentos' ? 'text-correio-inteligente-800' : 'text-gray-100'} font-bold text-lg text-left py-2`}>Segmentos</button>
                        {subMenuSegments && (
                            <div className="flex flex-col border-gray-100 bg-correio-inteligente-200">
                                <a href="/segmentos/bancos" className={`${url[2] === 'bancos' ? 'bg-correio-inteligente-800' : ''} p-2 text-gray-100 font-bold text-lg text-left`}>Bancos e Fintechs</a>
                                <a href="/segmentos/governos" className={`${url[2] === 'governos' ? 'bg-correio-inteligente-800' : ''} p-2 text-gray-100 font-bold text-lg text-left`}>Governos e ONGs</a>
                                <a href="/segmentos/varejo" className={`${url[2] === 'varejo' ? 'bg-correio-inteligente-800' : ''} p-2 text-gray-100 font-bold text-lg text-left`}>Varejo</a>
                                <a href="/segmentos/saude" className={`${url[2] === 'saude' ? 'bg-correio-inteligente-800' : ''} p-2 text-gray-100 font-bold text-lg text-left`}>Saúde</a>
                                <a href="/segmentos/educacao" className={`${url[2] === 'educacao' ? 'bg-correio-inteligente-800' : ''} p-2 text-gray-100 font-bold text-lg text-left`}>Educação</a>
                                <a href="/segmentos/seguradoras" className={`${url[2] === 'seguradoras' ? 'bg-correio-inteligente-800' : ''} p-2 text-gray-100 font-bold text-lg text-left`}>Seguradoras</a>
                            </div>
                        )}
                        <button onClick={() => setSubMenuCases(!subMenuCases)} className={`${url[1] === 'cases' ? 'text-correio-inteligente-800' : 'text-gray-100'}  font-bold text-lg text-left py-2`}>Cases de Sucesso</button>
                        {subMenuCases && (
                            <div className="flex flex-col border-gray-100 bg-correio-inteligente-200">
                                <a href="/cases/grupo-aval" className={`${url[2] === 'grupo-aval' ? 'bg-correio-inteligente-800' : ''} p-2 text-gray-100 font-bold text-lg text-left`}>Grupo Aval</a>
                                <a href="/cases/bellinati-perez" className={`${url[2] === 'bellinati-perez' ? 'bg-correio-inteligente-800' : ''} p-2 text-gray-100 font-bold text-lg text-left`}>Bellinati Perez</a>
                                <a href="/cases/toledo-piza" className={`${url[2] === 'toledo-piza' ? 'bg-correio-inteligente-800' : ''} p-2 text-gray-100 font-bold text-lg text-left`}>Toledo Piza</a>

                            </div>
                        )}
                        <a href="/planos" className="text-gray-100 font-bold text-lg text-left py-2">Planos</a>
                        <a href="/fale-conosco" className="flex items-center justify-center bg-gray-100 text-correio-inteligente-100 font-bold p-3 rounded-full text-lg mt-2">Fale conosco</a>
                    </div>
                )
            }
        </div >
    )
}
