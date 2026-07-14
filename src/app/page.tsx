import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <a href={`https://wa.me/558488418983?text=Quero%20mais%20informações%20sobre%20o%20Correio%20Inteligente.`} target="_blank" >
          <img src="whatsapp.png" className="fixed bottom-10 right-10 h-15" alt="" />
        </a>
        <div className="flex h-200 items-center justify-around bg-linear-to-r from-konnectai-primary from-60% to-black">
          <div className="flex font-unineue rounded-md bg-linear-to-r from-konnectai-primary/60 from-60% to-black/60 backdrop-blur-md items-center justify-between px-50 fixed top-8 h-20 ">
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
              <a className="w-80 flex items-center justify-center bg-gray-100 text-konnectai-primary p-4 rounded-full text-lg" href="">Fale com um Especialista</a>
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
        <div className="flex">
          <div className="flex items-center font-unineue flex-col bg-konnectai-primary w-screen">
            <h2 className="mt-30 text-4xl w-100 font-bold bg-linear-to-r from-green-200 to-correio-inteligente-300 bg-clip-text text-transparent">Por que usar o Correio Inteligente?</h2>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
