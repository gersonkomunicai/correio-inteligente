'use client'

import { motion } from "motion/react"
import { Home } from "lucide-react"
import Navbar from "../../components/Navbar"

export default function NotFound() {
    return (
        <main className="relative flex flex-col items-center justify-center overflow-hidden bg-correio-inteligente-200 h-screen px-4 text-center">
            <div className="absolute bg-correio-inteligente-100/20 w-200 h-200 rounded-full -left-100 -bottom-100 blur-2xl" />
            <div className="absolute bg-correio-inteligente-100/20 w-200 h-200 rounded-full -right-100 -top-100 blur-2xl" />
            <div className="absolute bg-correio-inteligente-300/10 w-150 h-150 rotate-45 right-140 top-20 blur-3xl" />

            <Navbar />

            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "backOut" }}
            >
                <motion.h1
                    className="font-harabara bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent text-[8rem] md:text-[12rem] leading-none font-bold"
                    animate={{ y: [0, -16, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    404
                </motion.h1>
            </motion.div>

            <motion.span
                className="font-unineue text-2xl md:text-3xl font-bold text-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                Página não encontrada
            </motion.span>

            <motion.p
                className="font-unineue mt-4 max-w-md text-gray-100/70"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
            >
                A página que você está procurando não existe ou foi movida.
            </motion.p>

            <motion.a
                href="/"
                className="font-unineue mt-8 flex items-center gap-2 rounded-full bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-800 px-6 py-3 font-bold text-correio-inteligente-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
            >
                <Home className="w-4 h-4" />
                Voltar para o início
            </motion.a>
        </main>
    )
}
