import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Correio Inteligente | Operações em Longa Escala",
  description: "O Correio Inteligente é uma solução que utiliza a API Oficial do Whatsapp para envios em longa escala.",
  openGraph: {
    siteName: "Correio Inteligente",
    title: "Correio Inteligente | Operações em Longa Escala",
    description: "O Correio Inteligente é uma solução que utiliza a API Oficial do Whatsapp para envios em longa escala.",
    url: "https://www.correiointeligente.com.br",
    images: [
      {
        url: 'https://correiointeligente.com.br/logoHorizontalEscura.png',
        width: 1200,
        height: 630,
        alt: 'Logo do Correio Inteligente'
      },
    ],
    locale: 'pt-BR',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  return (
    <html
      lang="pt-br"
      className='h-full antialiased overflow-x-hidden'
    >
      <body className="min-h-full flex flex-col overflow-x-hidden" suppressHydrationWarning>
        {gtmId && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}
        {gtmId && (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
          </noscript>
        )}
        <main>
          {children}

        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>

    </html>
  );
}
