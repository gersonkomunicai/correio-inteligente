import { Mail } from "lucide-react"
import ContactForm from "../../../components/ContactForm"
import Navbar from "../../../components/Navbar"
import { BsWhatsapp } from "react-icons/bs"

export default () => {
    return (
        <div className="flex flex-col w-screen">
            <Navbar></Navbar>
            <div className="flex items-center h-screen bg-correio-inteligente-200">
                <div className="absolute w-140 h-140 rounded-full top-30 -left-60 blur-3xl bg-correio-inteligente-100/20" />
                <div className="absolute w-140 h-140 rounded-full bottom-30 -right-60 blur-3xl bg-correio-inteligente-100/20" />
                <div className="absolute w-140 h-140 rounded-full top-45 left-50 blur-3xl bg-correio-inteligente-100/20" />
                <div className="absolute w-140 h-140 rounded-full bottom-45 right-50 blur-3xl bg-correio-inteligente-100/20" />
                <div>
                </div>
                <div className="flex relative w-full justify-center items-center">
                    <div className="flex flex-col p-3 w-190 bg-correio-inteligente-900 rounded-lg">
                        <h2 className="bg-linear-to-r from-correio-inteligente-200 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl p-3">O <span className="font-bold">Correio</span> diário da sua empresa, pode ser ainda mais <span className="font-bold">Inteligente</span>.</h2>
                        <p className="p-3 indent-7 text-left text-correio-inteligente-200">Tratamos o envio de mensagens de forma séria. Não vemos como um disparo de mensagens qualquer, mas de forma inteligente e profissional. Preencha o formulário que nós iremos entrar em contato com você e lhe apresentar a melhor solução de acordo com sua necessidade.</p>
                        <div className="flex items-center text-correio-inteligente-200 p-2">
                            <Mail className="w-5 h-5 size-4 mr-3" />
                            <span>contato@komunicai.com.br</span>
                        </div>
                        <div className="flex items-center p-2">
                            <BsWhatsapp className="w-5 text-correio-inteligente-200 h-5 size-4 mr-3" />
                            <span className="text-correio-inteligente-100">+55 84 994146984</span>
                        </div>
                    </div>
                    <div className="flex justify-center w-150">
                        <ContactForm />
                    </div>
                </div>
                
            </div>
        </div>
    )
}