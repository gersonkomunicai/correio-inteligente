import { AtSign, Building, HeartHandshake, Mail, MapPin, Smartphone, User } from "lucide-react";
import CardDemonstration from "../../components/CardDemonstration";
import CardWho from "../../components/CardWho";
import CardWhy from "../../components/CardWhy";
import { menuWhy } from "../../data/lists";
import { menuWho } from "../../data/lists";
import { menuDemonstration } from "../../data/lists";
import { BsWhatsapp } from "react-icons/bs";

export default function Home() {

  return (
    <div>
      <main className="scroll-smooth">
        <div className="flex flex-col">
          <a href={`https://wa.me/558488418983?text=Quero%20mais%20informações%20sobre%20o%20Correio%20Inteligente.`} target="_blank" >
            <img src="whatsapp.png" className="fixed bottom-10 right-10 h-15" alt="" />
          </a>
          <div className="flex h-200 items-center justify-around bg-linear-to-r from-konnectai-primary from-60% to-black">
            <div className="flex font-unineue rounded-full bg-linear-to-r from-konnectai-primary/30 to-black/30 backdrop-blur-xs items-center justify-between px-50 fixed top-8 h-20 ">
              <div className="flex items-center justify-around h-auto container">
                <a href='/'>
                  <img src="logoHorizontal.png" className="max-h-15" alt="Logo do Correio Inteligente" />
                </a>
                <div className="flex items-center justify-between px-10 w-150">
                  <button className="text-gray-100 font-bold text-lg">Canais</button>
                  <button className="text-gray-100 font-bold text-lg">Quem Somos</button>
                  <button className="text-gray-100 font-bold text-lg">Blog</button>
                  <button className="text-gray-100 font-bold text-lg">Contatos</button>
                </div>
                <a className="w-80 flex items-center justify-center hover:bg-gray-100 hover:text-correio-inteligente-100 text-gray-100 transition-all font-bold duration-300 ease-in p-4 rounded-full text-lg" href="">Fale com um Especialista</a>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <div className="flex flex-col font-unineue w-140">
                <img src="Iso.png" className="max-h-30 w-30" alt="" />
                <div>
                  <h1 className="bg-linear-to-r font-bold from-green-200 from-1% to-konnectai-secondary bg-clip-text text-transparent">Envie mensagens em escala com segurança e performance</h1>
                  <p className="text-gray-100 text-lg pt-10">O <span className="font-bold">Correio Inteligente</span> é a infraestrutura nacional de
                    mensageria da Konnectaí via <span className="font-bold">API Oficial do
                      WhatsApp</span>, ideal para empresas que precisam se
                    comunicar com milhares de clientes de forma
                    rápida, segura e eficiente.</p>
                </div>
                <div className="mt-10 p-3 w-60 flex items-center justify-center rounded-full bg-linear-to-r text-konnectai-primary from-green-200 from-1% to-konnectai-secondary">
                  <span className="text-xl">Fale conosco</span>
                </div>
              </div>
              <div>
                <img src="1.png" className="h-200 w-auto max-h-200" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-correio-inteligente-500  justify-center bg-[url('/background-waves.jpg')] h-120 bg-cover bg-no-repeat bg-center">
            <h1 className="font-black font-unineue ">Muito além de disparos de mensagens</h1>
            <span className="mt-10 italic text-lg">
              O <span className="font-bold ">Correio Inteligente</span> foi desenvolvido para empresas que precisam escalar sua comunicação sem perder qualidade</span>
            <span className="italic text-lg">ou controle. Com tecnologia baseada na <span className="font-bold">API Oficial do WhatsApp</span>, você garante entregas mais estáveis, evita</span>
            <span className="italic text-lg">bloqueios e mantém total conformidade com as políticas da plataforma.
            </span>
            <span className="italic text-lg">Seja para campanhas, notificações ou cobranças, sua mensagem chega no momento certo e da forma certa.
            </span>
          </div>
          <div className="flex bg-correio-inteligente-600 items-center justify-center h-250">
            <div className="flex font-unineue flex-col">
              <h2 className=" text-4xl w-100 font-bold bg-linear-to-r from-green-200 to-correio-inteligente-300 bg-clip-text text-transparent">Por que usar o Correio Inteligente?</h2>
              <div className="flex pt-5 flex-wrap ">
                <CardWhy menuItems={menuWhy}></CardWhy>
              </div>
            </div>
            <div>
              <img src="/2.png" className="max-w-130  ml-30" alt="Celular Exemplo" />
            </div>
          </div>
          <div className="flex flex-col items-center font-unineue justify-center bg-[url('/background-waves.jpg')] bg-cover bg-center bg-no-repeat h-screen">
            <h2 className="text-3xl font-black text-correio-inteligente-700">Para quem é</h2>
            <span className="uppercase text-correio-inteligente-700/50 text-lg pt-5 flex justify-center text-center w-200">Desenvolvido para operações que exigem escala,</span>
            <span className="uppercase text-correio-inteligente-700/50 text-lg flex justify-center text-center w-200">segurança e confiabilidade.</span>
            <span className="text-lg flex pt-5 justify-center text-correio-inteligente-700 text-center w-200">O Correio Inteligente atende organizações que precisam se comunicar com grandes volumes de
              pessoas de forma estruturada, segura e com alto nível de entrega.</span>
            <span className="text-lg pt-5 flex justify-center text-correio-inteligente-700 text-center w-200">Nossa infraestrutura é preparada para suportar desde empresas em crescimento até operações de
              grande porte, incluindo instituições públicas.</span>
            <div className="flex mt-10">
              <CardWho menuItems={menuWho}></CardWho>
            </div>
            <div className="flex items-center font-unineue rounded-full justify-center p-4 mt-10 w-80 bg-correio-inteligente-600">
              <a className="text-gray-100" href="">Fale com um Especialista</a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-screen bg-correio-inteligente-700">
            <h1 className="flex items-center justify-center text-center w-270 text-gray-100 font-bold">Modernize a comunicação da sua prefeitura com o Correio Inteligente</h1>
            <span className="flex justify-center text-center w-240 text-xl text-gray-100 pt-10">Uma plataforma desenvolvida especialmente para governos, prefeituras e instituições públicas que desejam automatizar, organizar e centralizar a comunicação com cidadãos de forma moderna, segura e eficiente.</span>
            <span className="flex justify-center text-center pt-5 w-240 text-xl text-gray-100">O Correio Inteligente foi pensado para facilitar a comunicação entre órgãos públicos e cidadãos, trazendo mais agilidade, organização e eficiência para o atendimento.</span>
            <div className="flex items-center justify-center mt-15 w-300">
              <CardDemonstration menuDemonstrations={menuDemonstration}></CardDemonstration>
            </div>
            <span className="text-xl text-gray-100 pt-10">Mais eficiência, transparência e organização para sua administração.</span>
            <a className="flex items-center justify-center mt-10 p-4 w-90 font-bold text-gray-700 rounded-full bg-linear-to-r from-correio-inteligente-900 to-correio-inteligente-800" href="">Solução Inteligente para Órgãos Públicos</a>
          </div>
          <div className="flex h-200 justify-center bg-correio-inteligente-200">
            <div className="flex flex-col justify-center w-170">
              <h1 className="bg-linear-to-r font-bold from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent">Pronto para escalar sua comunicação?</h1>
              <span className="text-xl pt-5 w-140 text-gray-100">Comece agora a enviar mensagens com mais eficiência, segurança e resultados.</span>
              <div className="flex flex-col rounded-2xl mt-5 w-130 p-3 bg-correio-inteligente-500">
                <span className="text-xl font-bold text-gray-100">Junte-se a nós e transforme sua comunicação!</span>
                <form className="flex pt-8 flex-col">
                  <label className="text-sm text-gray-100" htmlFor="">Nome Completo*</label>
                  <div className="flex w-120 border border-gray-100 rounded-xl p-1 items-center">
                    <User className="w-5 h-5 size-4 mr-2 text-gray-100"></User>
                    <input type="text" className=" text-gray-100 w-full  focus:outline-none " />
                  </div>
                  <label className="text-gray-100 mt-4" htmlFor="">Empresa*</label>
                  <div className="flex w-120  border border-gray-100 rounded-xl p-1 items-center">
                    <Building className="w-5 h-5 size-4 mr-2 text-gray-100"></Building>
                    <input type="text" className=" w-full  focus:outline-none " />
                  </div>
                  <label className="text-gray-100 mt-4" htmlFor="">Insira seu email*</label>
                  <div className="flex w-120  border border-gray-100 rounded-xl p-1 items-center">
                    <AtSign className="w-5 h-5 size-4 mr-2 text-gray-100"></AtSign>
                    <input type="text" className=" w-full  focus:outline-none " />
                  </div>
                  <label className="text-gray-100 mt-4" htmlFor="">Celular*</label>
                  <div className="flex w-120  border border-gray-100 rounded-xl p-1 items-center">
                    <Smartphone className="w-5 h-5 size-4 mr-2 text-gray-100"></Smartphone>
                    <input type="text" className="w-full  focus:outline-none " />
                  </div>
                  <div className="flex items-center pt-8">
                    <input type="checkbox" className="size-4 mr-2 ml-1 transition-all duration-300 ease-in" name="comunicacoes" id="" />
                    <label className="text-gray-100" htmlFor="">Li e concordo com a política de Privacidade e Termos de Uso.</label>
                  </div>
                  <div className="flex items-center pt-2">
                    <input type="checkbox" className="size-4 mr-2 ml-1 transition-all duration-300 ease-in" name="comunicacoes" id="" />
                    <label className="text-gray-100" htmlFor="">Desejo receber comunicação via email.</label>
                  </div>
                  <div className="flex w-full items-center mt-10 justify-center">
                    <div className="flex items-center rounded-xl text-gray-100 hover:text-correio-inteligente-200 hover:bg-gray-100 bg-correio-inteligente-200 transition-all duration-200 ease-in justify-center p-3 w-60 ">
                      <HeartHandshake className="size-4  w-4 h-4 mr-2"></HeartHandshake>
                      <span className="">Solicitar atendimento!</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <img src="/modelo2.png" className="flex items-end max-w-200 h-auto" alt="" />
          </div>
        </div>
      </main>
      <footer>
        <div className="flex font-unineue justify-around items-center bg-gray-100 h-100">
          <div className="flex flex-col border-r border-correio-inteligente-200 pr-4">
            <img src="/logoHorizontalEscura.png" className="max-h-22" alt="" />
            <span className="flex justify-end text-xs text-correio-inteligente-200">Powered by Konnectai</span>
            <p className="text-sm mt-3">&copy; 2026 Konnectai. Todos os direitos reservados.</p>
            <div className="flex text-sm mt-4 justify-center">
              <p>Konnectaí LTDA | <span className="font-bold">CNPJ: 60.908.950/0001-40</span></p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex w-80 items-center">
              <MapPin className="w-20 h-20 size-4 text-correio-inteligente-200"/>
              <span className="flex text-lg justify-center text-correio-inteligente-200 text-center">Rua Coronel Del Prett, 72, CEP 59.584-000, Centro - Touros/RN</span>
            </div>
            <div className="flex w-80 items-center">
              <Mail className="w-10 h-10 size-4 mr-4 text-correio-inteligente-200"/>
              <span className="flex text-lg justify-center text-correio-inteligente-200 text-center">contato@konnectai.com.br</span>
            </div>
            <div className="flex w-80 items-center">
              <BsWhatsapp className="w-10 h-10 pt-2 mr-4 size-4 text-correio-inteligente-200"/>
              <span className="flex text-lg justify-center text-correio-inteligente-200 text-center">{`(84) 99184-9939`}</span>
            </div>
          </div>

        </div>
      </footer>
    </div>

  );
}
