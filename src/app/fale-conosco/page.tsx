import { Mail } from "lucide-react"
import ContactForm from "../../../components/ContactForm"
import Navbar from "../../../components/Navbar"
import { BsWhatsapp } from "react-icons/bs"
import Footer from "../../../components/Footer"

export default () => {
    return (
        <div className="flex flex-col w-screen">
            <Navbar></Navbar>
            <div className="flex h-auto bg-correio-inteligente-200">
                <div className="absolute w-140 h-140 rounded-full top-30 -left-60 blur-3xl bg-correio-inteligente-100/20" />
                <div className="absolute w-140 h-140 rounded-full bottom-30 -right-60 blur-3xl bg-correio-inteligente-100/20" />
                <div className="absolute w-140 h-140 rounded-full top-45 left-50 blur-3xl bg-correio-inteligente-100/20" />
                <div className="absolute w-140 h-140 rounded-full bottom-45 right-50 blur-3xl bg-correio-inteligente-100/20" />
                <div className="absolute w-110 h-110 rounded-full bottom-65 right-110 blur-3xl bg-correio-inteligente-100/20" />
                <div className="absolute w-110 h-110 rounded-full bottom-45 left-150 blur-3xl bg-correio-inteligente-100/20" />
                <div>
                </div>
                <div className="md:flex relative w-full my-30 md:mx-10 justify-around items-center">
                    <div className="flex flex-col p-3 md:w-190 ">
                        <h2 className="bg-linear-to-r md:text-left text-center from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent text-5xl p-3">O <span className="font-bold">Correio</span> diário da sua empresa, pode ser ainda mais <span className="font-bold">Inteligente</span>.</h2>
                        <p className="p-5 text-center md:text-left text-lg text-correio-inteligente-900">Tratamos o envio de mensagens de forma séria. Não vemos como um disparo de mensagens qualquer, mas de forma inteligente e profissional. Preencha o formulário que nós iremos entrar em contato com você e lhe apresentar a melhor solução de acordo com sua necessidade.</p>
                        <div className="flex items-center text-lg text-correio-inteligente-900 pl-5">
                            <Mail className="w-5 h-5 size-4 mr-3" />
                            <span>contato@komunicai.com.br</span>
                        </div>
                        <div className="flex items-center text-lg pl-5">
                            <BsWhatsapp className="w-5 text-correio-inteligente-900 h-5 size-4 mr-3" />
                            <a href={`https://wa.me/5584994146984?text=Quero%20mais%20informações%20sobre%20o%20Correio%20Inteligente.`} className="text-correio-inteligente-800">+55 84 994146984</a>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <ContactForm className="md:w-130" />
                    </div>
                </div>
            </div>
        </div>
    )
}