'use client'
import { useState } from "react"
import Typewriter from "typewriter-effect"

export default () => {
    const [appear, setAppear] = useState(false)
    return (
        <div className="flex flex-col items-center justify-center bg-[url('/bg.png')] brightness-50 bg-cover bg-no-repeat bg- h-screen">
    
                        {appear &&
                            <img src="/Iso.png" className="transition-all duration-300 ease-in w-30 h-30" alt="" />
                        }
                        <div className="flex w-250 text-center">
                            <Typewriter onInit={(typewriter) => {
                                typewriter.typeString('A solução mais confiável para envios em longa escala do mercado.').callFunction(() => setTimeout(() => setAppear(!appear), 300)).start()
                            }} options={{
                                delay:45,
                                wrapperClassName: 'text-7xl text-correio-inteligente-900 font-libreNormal',
                                cursorClassName: 'text-7xl text-correio-inteligente-900'
                            }} ></Typewriter>
                            {/* <h2 className="text-6xl w-250 text-gray-100 font-libreNormal"></h2> */}
                        </div>
                    </div>
    )
}