'use client'

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="font-unineue flex justify-center">
            <div className="hidden md:flex rounded-full bg-linear-to-r from-konnectai-primary/30 to-black/30 backdrop-blur-xs px-40 fixed top-7 h-20 z-50">
                <div className="flex items-center h-auto ">
                    <a href='/'>
                        <img src="logoHorizontal.png" className="max-h-15" alt="Logo do Correio Inteligente" />
                    </a>
                    <div className="flex items-center justify-between px-10 w-150">
                        <a href="#quemsomos" className="text-gray-100 font-bold text-lg">Quem Somos</a>
                        <a className="text-gray-100 font-bold text-lg">Segmentos</a>
                        <button className="text-gray-100 font-bold text-lg">Cases de Sucesso</button>
                        {/* <a href="" className="text-gray-100 font-bold text-lg">Contatos</a> */}
                    </div>
                    <a className="w-80 flex items-center justify-center hover:bg-gray-100 hover:text-correio-inteligente-100 text-gray-100 transition-all font-bold duration-300 ease-in p-4 rounded-full text-lg" href="#contato">Fale com um Especialista</a>
                </div>
            </div>

            <div className="flex md:hidden items-center justify-between fixed top-4 left-4 right-4 z-50 px-4 h-16 rounded-full bg-linear-to-r from-konnectai-primary/40 to-black/40 backdrop-blur-xs">
                <a href='/'>
                    <img src="logoHorizontal.png" className="max-h-10" alt="Logo do Correio Inteligente" />
                </a>
                <button onClick={() => setIsMenuOpen((open) => !open)} aria-label="Abrir menu">
                    {isMenuOpen ? (
                        <X className="text-gray-100 w-6 h-6" />
                    ) : (
                        <Menu className="text-gray-100 w-6 h-6" />
                    )}
                </button>
            </div>

            {isMenuOpen && (
                <div className="flex md:hidden flex-col fixed top-22 left-4 right-4 z-40 gap-2 rounded-2xl bg-linear-to-r from-konnectai-primary to-black p-4">
                    <button onClick={() => setIsMenuOpen(false)} className="text-gray-100 font-bold text-lg text-left py-2">Canais</button>
                    <button onClick={() => setIsMenuOpen(false)} className="text-gray-100 font-bold text-lg text-left py-2">Quem Somos</button>
                    <button onClick={() => setIsMenuOpen(false)} className="text-gray-100 font-bold text-lg text-left py-2">Blog</button>
                    <button onClick={() => setIsMenuOpen(false)} className="text-gray-100 font-bold text-lg text-left py-2">Contatos</button>
                    <a
                        href="#contato"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-center bg-gray-100 text-correio-inteligente-100 font-bold p-3 rounded-full text-lg mt-2"
                    >
                        Fale com um Especialista
                    </a>
                </div>
            )}
        </div>
    )
}
