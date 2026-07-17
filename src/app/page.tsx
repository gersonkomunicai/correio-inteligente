import { Mail, MapPin, ShieldCheck } from "lucide-react";
import CardDemonstration from "../../components/CardDemonstration";
import CardWho from "../../components/CardWho";
import CardWhy from "../../components/CardWhy";
import { menuWhy } from "../../data/lists";
import { menuWho } from "../../data/lists";
import { menuDemonstration } from "../../data/lists";
import { BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import ContactForm from "../../components/ContactForm";
import Reveal from "../../components/Reveal";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Home() {

  return (
    <div>
      <main>
        <div className="flex scroll-smooth flex-col">
          <a href={`https://wa.me/558488418983?text=Quero%20mais%20informações%20sobre%20o%20Correio%20Inteligente.`} target="_blank" >
            <img src="whatsapp.png" className="fixed bottom-10 right-10 h-15" alt="" />
          </a>
          <div className="flex h-auto md:h-200 py-28 md:py-0 items-center justify-around bg-linear-to-r from-konnectai-primary from-60% to-black px-4">
            <Navbar></Navbar>
            <div className="flex flex-col md:flex-row items-center justify-around gap-10">
              <Reveal direction="left" className="flex flex-col items-center md:items-start text-center md:text-left font-unineue w-full max-w-140">
                <img src="Iso.png" className="max-h-30 w-30" alt="" />
                <div>
                  <h1 className="bg-linear-to-r font-harabara font-bold from-correio-inteligente-900 from-10% to-correio-inteligente-800 bg-clip-text text-transparent">Envie mensagens em escala com segurança e performance</h1>
                  <p className="text-gray-100 text-lg pt-10">O <span className="font-bold">Correio Inteligente</span> é a infraestrutura nacional de
                    mensageria da Konnectaí via <span className="font-bold">API Oficial do
                      WhatsApp</span>, ideal para empresas que precisam se
                    comunicar com milhares de clientes de forma
                    rápida, segura e eficiente.</p>
                </div>
                <a href="#contato" className="mt-10 p-3 w-full max-w-60 flex items-center justify-center rounded-full bg-linear-to-r text-konnectai-primary from-green-200 from-1% to-konnectai-secondary">
                  <span className="text-xl">Fale conosco</span>
                </a>
              </Reveal>
              <Reveal direction="right" delay={0.15} className="hidden md:block">
                <img src="7.png" className="md:h-200 w-auto max-h-200" alt="" />
              </Reveal>
            </div>
          </div>
          <div className="flex flex-col items-center text-correio-inteligente-500 justify-center bg-[url('/background-waves.jpg')] h-auto md:h-120 py-16 md:py-0 bg-cover bg-no-repeat bg-center px-4">
            <Reveal>
              <h1 className="font-black font-franie text-center">Muito além de disparos de mensagens</h1>
            </Reveal>
            <Reveal delay={0.15} className="flex flex-col items-center text-center">
              <span className="mt-10 italic text-lg">
                O <span className="font-bold ">Correio Inteligente</span> foi desenvolvido para empresas que precisam escalar sua comunicação sem perder qualidade</span>
              <span className="italic text-lg">ou controle. Com tecnologia baseada na <span className="font-bold">API Oficial do WhatsApp</span>, você garante entregas mais estáveis, evita</span>
              <span className="italic text-lg">bloqueios e mantém total conformidade com as políticas da plataforma.
              </span>
              <span className="italic text-lg">Seja para campanhas, notificações ou cobranças, sua mensagem chega no momento certo e da forma certa.
              </span>
            </Reveal>
          </div>
          <div className="flex flex-col md:flex-row bg-correio-inteligente-600 items-center justify-center h-auto md:h-250 py-16 md:py-0 px-4 gap-10">
            <div className="flex font-unineue flex-col items-center md:items-start">
              <Reveal direction="left">
                <h2 className="text-4xl w-full max-w-100 text-center md:text-left font-bold bg-linear-to-r from-correio-inteligente-900 from-25% to-correio-inteligente-800 bg-clip-text text-transparent">Por que usar o Correio Inteligente?</h2>
              </Reveal>
              <Reveal delay={0.15} className="flex pt-5 flex-wrap justify-center">
                <CardWhy menuItems={menuWhy}></CardWhy>
              </Reveal>
            </div>
            <Reveal direction="right" delay={0.2} className="hidden md:block">
              <img src="/2.png" className="max-w-130 ml-30" alt="Celular Exemplo" />
            </Reveal>
          </div>
          <div className="flex flex-col items-center justify-center bg-[url('/background-waves.jpg')] bg-cover bg-center bg-no-repeat h-auto md:h-screen py-16 md:py-0 px-4">
            <Reveal className="flex flex-col items-center">
              <h2 className="text-3xl font-black text-correio-inteligente-200 text-center">Para quem é</h2>
              <span className="uppercase text-correio-inteligente-700/50 text-lg pt-5 flex justify-center text-center w-full max-w-200">Desenvolvido para operações que exigem escala,</span>
              <span className="uppercase text-correio-inteligente-700/50 text-lg flex justify-center text-center w-full max-w-200">segurança e confiabilidade.</span>
              <span className="text-lg flex pt-5 justify-center text-correio-inteligente-700 text-center w-full max-w-200">O Correio Inteligente atende organizações que precisam se comunicar com grandes volumes de
                pessoas de forma estruturada, segura e com alto nível de entrega.</span>
              <span className="text-lg pt-5 flex justify-center text-correio-inteligente-700 text-center w-full max-w-200">Nossa infraestrutura é preparada para suportar desde empresas em crescimento até operações de
                grande porte, incluindo instituições públicas.</span>
            </Reveal>
            <Reveal delay={0.15} className="flex flex-wrap justify-center mt-10">
              <CardWho menuItems={menuWho}></CardWho>
            </Reveal>
            <Reveal delay={0.3} className="flex items-center font-unineue rounded-full justify-center p-4 mt-10 w-full max-w-80 bg-correio-inteligente-600">
              <a className="text-gray-100" href="#contato">Fale com um Especialista</a>
            </Reveal>
          </div>
          <div className="flex flex-col items-center justify-center h-auto md:h-screen py-16 md:py-0 px-4 bg-correio-inteligente-700">
            <Reveal direction="left" className="flex flex-col items-center">
              <h1 className="flex items-center justify-center text-center w-full max-w-270 text-gray-100 font-bold">Modernize a comunicação da sua prefeitura com o Correio Inteligente</h1>
              <span className="flex justify-center text-center w-full max-w-240 text-xl text-gray-100 pt-10">Uma plataforma desenvolvida especialmente para governos, prefeituras e instituições públicas que desejam automatizar, organizar e centralizar a comunicação com cidadãos de forma moderna, segura e eficiente.</span>
              <span className="flex justify-center text-center pt-5 w-full max-w-240 text-xl text-gray-100">O Correio Inteligente foi pensado para facilitar a comunicação entre órgãos públicos e cidadãos, trazendo mais agilidade, organização e eficiência para o atendimento.</span>
            </Reveal>
            <Reveal direction="right" delay={0.15} className="flex flex-wrap items-center justify-center mt-15 w-full max-w-300">
              <CardDemonstration menuDemonstrations={menuDemonstration}></CardDemonstration>
            </Reveal>
            <Reveal delay={0.3} className="flex flex-col items-center">
              <span className="text-xl text-gray-100 pt-10 text-center">Mais eficiência, transparência e organização para sua administração.</span>
              <a className="flex items-center justify-center text-center mt-10 p-4 w-full max-w-90 font-bold text-gray-700 rounded-full bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-800" href="#contato">Solução Inteligente para Órgãos Públicos</a>
            </Reveal>
          </div>
          <div id="contato" className="flex flex-col md:flex-row h-auto md:h-200 py-16 md:py-0 px-4 items-center justify-center gap-10 bg-correio-inteligente-200">
            <Reveal direction="left">
              <ContactForm></ContactForm>
            </Reveal>
            <Reveal direction="right" delay={0.15} className="hidden md:block">
              <img src="/modelo2.png" className="flex items-end max-w-141 h-auto" alt="" />
            </Reveal>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>

  );
}
