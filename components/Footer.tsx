import { BsInstagram } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"

export default () => {
    return (
        <footer className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around text-center md:text-left bg-correio-inteligente-900 h-auto md:h-90 py-10 md:py-0 px-4 gap-10 md:gap-0">
            <div className="md:pt-10 h-auto md:h-full justify-around flex flex-col items-center md:items-start">
                <div className="flex flex-col items-center md:items-start">
                    <img src="/logoHorizontalEscura.png" className="w-60 max-w-full" alt="" />
                    <p className="text-correio-inteligente-200 text-xs md:pl-30 mt-2 md:mt-0">Powered by Konnectai</p>
                </div>
                <div className="flex flex-col items-center md:items-start mt-6 md:mt-0">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
                        <span className="text-sm text-correio-inteligente-200">&copy; 2026 Konnectaí LTDA.</span>
                        <span className="text-sm text-correio-inteligente-200">contato@komunicai.com.br</span>
                        <div className="flex items-center gap-4">
                            <FaFacebook className="w-6 h-6 text-correio-inteligente-200" />
                            <BsInstagram className="w-5 h-5 text-correio-inteligente-200" />
                        </div>
                    </div>
                    <p className="text-xs text-correio-inteligente-200 mt-2">Todos os direitos reservados</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start text-correio-inteligente-200 h-auto md:h-60 md:mt-30 font-unineue gap-8 md:gap-0">
                <div className="flex flex-col items-center md:items-start w-full max-w-60">
                    <p className="font-bold">Contato</p>
                    <p className="mt-2">Rua Coronel Del Prett, 72, CEP 59.584-000, Centro - Touros/RN</p>
                    <p className="mt-2">contato@konnectai.com.br</p>
                    <p className="mt-2">{`(84) 99184-9939`}</p>
                </div>
                <div className="flex flex-col items-center md:items-start md:ml-10 w-full max-w-60">
                    <p className="font-bold">Redes Sociais</p>
                    <a href={`https://www.instagram.com/correiointeligente`} target="_blank" className="mt-2">Instagram</a>
                    <a href={`https://www.facebook.com/correiointeligente`} target="_blank" className="mt-2">Facebook</a>
                    <a href={`https://www.linkedin.com/company/grupo-komunica%C3%AD`} className="mt-2">Linkedin</a>
                </div>
            </div>
        </footer>
    )
}
