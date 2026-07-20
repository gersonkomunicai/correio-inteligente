'use client'

import { AtSign, Building, Globe, HeartHandshake, LoaderCircle, Smartphone, User, X } from "lucide-react"
import { useState } from "react"
import { LeadInput, leadSchema } from "@/lib/schemas/lead"


type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

declare global {
    interface Window { dataLayer: any[] }
}

export default function ContactForm() {
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [companyWebsite, setCompanyWebsite] = useState('')
    const [acceptsCommunication, setAcceptsCommunication] = useState(false)
    const [acceptsPrivacyPolicy, setAcceptsPrivacyPolicy] = useState(false)
    const [error, setError] = useState<Partial<Record<keyof LeadInput, string[]>>>()
    const [status, setStatus] = useState<SubmitStatus>('idle')

    async function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const result = leadSchema.safeParse({
            name: name,
            email: email,
            company: company,
            phone: phone,
            companyWebsite: companyWebsite,
            acceptsCommunication: acceptsCommunication,
            acceptsPrivacyPolicy: acceptsPrivacyPolicy
        })
        if (!result.success) {
            setError(() => result.error.flatten().fieldErrors)
            setStatus('error')
            return
        }
        setError(undefined)
        setStatus('loading')
        try {
            const response = await fetch('/api/leads', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, company, email, phone, companyWebsite, acceptsCommunication, acceptsPrivacyPolicy })
            })
            if (!response.ok) {
                setStatus('error')
            } else {
                setStatus('success')

                if (window.dataLayer) {
                    window.dataLayer.push({ event: 'lead_form_submit' })
                }
            }

        } catch {
            setStatus('error')
        }
    }

    return (
        <div>
            <div className="flex flex-col justify-center">
                <h1 className="bg-linear-to-r font-bold from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent">Pronto para escalar sua comunicação?</h1>
                <span className="text-xl pt-5 w-full text-center md:text-left text-gray-100">Comece agora a enviar mensagens com mais eficiência, segurança e resultados.</span>
                <div className="relative flex flex-col rounded-2xl mt-5 w-full max-w-130 p-3 bg-correio-inteligente-500">
                    {status === 'success' ? (
                        <div className="flex items-center justify-between rounded-md absolute inset-x-4 p-4 w-auto bg-correio-inteligente-900 text-correio-inteligente-200">
                            <p className="">Informações enviadas! Entraremos em contato.</p>
                            <X className="w-4 h-4 size-4" onClick={() => setStatus('idle')}></X>
                        </div>
                    ) : ''}
                    <span className="text-xl font-bold text-gray-100">Junte-se a nós e transforme sua comunicação!</span>
                    <form onSubmit={HandleSubmit} className="flex pt-8 flex-col">
                        <label className="text-sm text-gray-100" htmlFor="">Nome Completo*</label>
                        <div className={`flex w-full border rounded-xl p-1 items-center ${error?.name?.[0] ? 'border-red-500' : 'border-gray-100'}`}>
                            <User className="w-5 h-5 size-4 mr-2 text-gray-100"></User>
                            <input type="text" placeholder="Nome Completo" value={name} onChange={(e) => setName(e.target.value)} className="text-gray-100 w-full  focus:outline-none " />
                        </div>
                        {error?.name?.[0] && (
                            <span className="text-red-500 text-xs">{error.name[0]}</span>
                        )}
                        <label className="text-gray-100 mt-4" htmlFor="">Empresa*</label>
                        <div className={`flex w-full border rounded-xl p-1 items-center ${error?.company?.[0] ? 'border-red-500' : 'border-gray-100'}`}>
                            <Building className="w-5 h-5 size-4 mr-2 text-gray-100"></Building>
                            <input type="text" placeholder="Sua Empresa" value={company} onChange={(e) => setCompany(e.target.value)} className=" w-full text-gray-100 focus:outline-none " />
                        </div>
                        {error?.company?.[0] && (
                            <span className="text-red-500 text-xs">{error.company[0]}</span>
                        )}
                        <label className="text-gray-100 mt-4" htmlFor="">Insira seu email*</label>
                        <div className={`flex w-full border rounded-xl p-1 items-center ${error?.email?.[0] ? 'border-red-500' : 'border-gray-100'}`}>
                            <AtSign className="w-5 h-5 size-4 mr-2 text-gray-100"></AtSign>
                            <input type="email" placeholder="seumelhor@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full text-gray-100 focus:outline-none " />
                        </div>
                        {error?.email?.[0] && (
                            <span className="text-red-500 text-xs">{error.email[0]}</span>
                        )}
                        <label className="text-gray-100 mt-4" htmlFor="">Celular*</label>
                        <div className={`flex w-full border rounded-xl p-1 items-center ${error?.phone?.[0] ? 'border-red-500' : 'border-gray-100'}`}>
                            <Smartphone className="w-5 h-5 size-4 mr-2 text-gray-100"></Smartphone>
                            <input type="text" placeholder="(21) 987654321" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full text-gray-100 focus:outline-none " />
                        </div>
                        {error?.phone?.[0] && (
                            <span className="text-red-500 text-xs">{error.phone[0]}</span>
                        )}
                        <label className="text-gray-100 mt-4" htmlFor="">Site da Empresa</label>
                        <div className={`flex w-full border rounded-xl p-1 items-center ${error?.companyWebsite?.[0] ? 'border-red-500' : 'border-gray-100'}`}>
                            <Globe className="w-5 h-5 size-4 mr-2 text-gray-100" />
                            <input type="text" value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)} className="w-full text-gray-100 focus:outline-none " />
                        </div>
                        {error?.companyWebsite?.[0] && (
                            <span className="text-red-500 text-xs">{error.companyWebsite[0]}</span>
                        )}
                        <div className="flex items-center pt-8">
                            <input checked={acceptsPrivacyPolicy} onChange={(e) => setAcceptsPrivacyPolicy(e.target.checked)} type="checkbox" className="size-4 mr-2 ml-1 transition-all duration-300 ease-in" name="termo" id="" />
                            <label className="text-gray-100" htmlFor="">Concordo com a política de Privacidade e Termos de Uso.</label>
                        </div>
                        {error?.acceptsPrivacyPolicy?.[0] && (
                            <span className="text-red-500 text-xs">{error.acceptsPrivacyPolicy[0]}</span>
                        )}
                        <div className="flex items-center pt-2">
                            <input checked={acceptsCommunication} onChange={(e) => setAcceptsCommunication(e.target.checked)} type="checkbox" className="size-4 mr-2 ml-1 transition-all duration-300 ease-in" name="comunicacoes" id="" />
                            <label className="text-gray-100" htmlFor="">Desejo receber comunicação via email.</label>
                        </div>

                        <div className="flex w-full items-center mt-10 justify-center">
                            <button type="submit" className="flex items-center rounded-xl text-correio-inteligente-200 hover:text-correio-inteligente-200 bg-linear-to-r from-correio-inteligente-900 to-60% to-correio-inteligente-800 transition-all duration-200 ease-in justify-center p-3 w-full max-w-60 ">
                                {status === 'loading' ? (
                                    <div className="flex items-center">
                                        <LoaderCircle className="w-4 h-4 mr-2 size-4 animate-spin" />
                                        <span>Enviando</span>
                                    </div>) : (<div className="flex items-center">
                                        <HeartHandshake className="size-4  w-4 h-4 mr-2"></HeartHandshake>
                                        <span className="">Solicitar atendimento!</span>
                                    </div>)}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}