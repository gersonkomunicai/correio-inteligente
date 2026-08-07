import Image from 'next/image'
interface CtaProps{
    className?:string 
    title: string
    description: string
    button: string
    image: string
}
export default ({className, title, description, button, image}: CtaProps ) => {
    return (
        <div className={`${className}`}>
            <div className="absolute bg-correio-inteligente-100/20 w-100 h-100 left-50 mt-100 blur-2xl" />
            <div className="absolute bg-correio-inteligente-300/10 w-150 h-150 rotate-45 right-140  blur-3xl" />
            <div className="absolute bg-correio-inteligente-300/10 w-5 h-5 rotate-45 left-100 mt-20 blur-xs" />
            <div className="absolute bg-correio-inteligente-100/20 w-200 h-200 rounded-full right-10  blur-2xl" />

            <div className="absolute p-10 flex w-[65%] h-140 items-center rounded-xl bg-correio-inteligente-900">
                <div className="flex items-center text-center md:flex md:items-start flex-col justify-center md:text-left h-full md:w-[50%] pr-5">
                    <h2 className="bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-4xl py-5">{title}</h2>
                    <span>{description}</span>
                    <a href="/fale-conosco" className="flex my-5 w-50 text-center items-center md:justify-center mt-8 rounded-md bg-correio-inteligente-200 text-correio-inteligente-900 p-3">
                        {button}
                    </a>
                </div>

                <div className="hidden md:flex items-center h-full">
                    <Image width={1000} height={1000} className="flex w-120 min-w-60 items-center" src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

// Pronto para transformar sua comunicação?

// Converse com nosso time e descubra a melhor solução para automatizar seus envios e potencializar os resultados da sua empresa.