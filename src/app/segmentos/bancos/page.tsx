import Cta from "../../../../components/Cta"

export default () => {
    return (
        <div className="flex flex-col">
            <div className="h-screen bg-[url(/heroBanco.png)] bg-center bg-no-repeat bg-cover ">
                <div className="flex items-center justify-center h-screen bg-correio-inteligente-200/80 backdrop-blur-sm">
                    <div className="flex container justify-center">
                        <div className="flex flex-col w-200 p-3">
                            <p className="text-lg text-gray-100 uppercase">BANCOS E FINTECHS</p>
                            <h2 className="text-6xl pb-4 font-bold bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent">Comunicação inteligente para bancos e fintechs</h2>
                            <div className="h-0.5 bg-linear-to-r w-100 my-8 from-correio-inteligente-900 to-correio-inteligente-800 "></div>
                            <p className="text-xl mb-2 text-gray-100">Automatize cobranças,
                                notificações e campanhas
                                em escala pelo WhatsApp.</p>
                            <a href="/fale-conosco" className="flex items-center justify-center p-3 w-60 bg-correio-inteligente-900 text-correio-inteligente-200">Solicitar Demonstração</a>
                        </div>
                        {/* <img src="/heroBanco.png" className="w-200" alt="" /> */}
                    </div>
                </div>
                <div className="h-auto bg-gray-100">
                    <h1>a</h1>
                </div>
            </div>
        </div>
    )
}