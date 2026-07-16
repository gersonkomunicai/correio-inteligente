'use client'

import { AtSign, Building, Globe, HeartHandshake, Smartphone, User } from "lucide-react"
import { useState } from "react"
import { LeadInput, leadSchema } from "@/lib/schemas/lead"
import { TbWorldWww } from "react-icons/tb"



export default function ContactForm() {
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [companyWebsite, setCompanyWebsite] = useState('')
    const [acceptsCommunication, setAcceptsCommunication] = useState(false)
    const [acceptsPrivacyPolicy, setAcceptsPrivacyPolicy] = useState(false)
    const [error, setError] = useState<Partial<Record<keyof LeadInput, string[]>>>()

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
            return
        }
        setError(undefined)
        const response = await fetch('/api/leads', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, company, email, phone, companyWebsite, acceptsCommunication, acceptsPrivacyPolicy })
        })


    }

    return (
        <div>
            <div className="flex flex-col justify-center">
                <h1 className="bg-linear-to-r font-bold from-correio-inteligente-900 to-correio-inteligente-800 bg-clip-text text-transparent">Pronto para escalar sua comunicação?</h1>
                <span className="text-xl pt-5 w-140 text-gray-100">Comece agora a enviar mensagens com mais eficiência, segurança e resultados.</span>
                <div className="flex flex-col rounded-2xl mt-5 w-130 p-3 bg-correio-inteligente-500">
                    <span className="text-xl font-bold text-gray-100">Junte-se a nós e transforme sua comunicação!</span>
                    <form onSubmit={HandleSubmit} className="flex pt-8 flex-col">
                        <label className="text-sm text-gray-100" htmlFor="">Nome Completo*</label>
                        <div className={`flex w-120 border rounded-xl p-1 items-center ${error?.name?.[0] ? 'border-red-500' : 'border-gray-100'}`}>
                            <User className="w-5 h-5 size-4 mr-2 text-gray-100"></User>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="text-gray-100 w-full  focus:outline-none " />
                        </div>
                        {error?.name?.[0] && (
                            <span className="text-red-500 text-xs">{error.name[0]}</span>
                        )}
                        <label className="text-gray-100 mt-4" htmlFor="">Empresa*</label>
                        <div className={`flex w-120 border rounded-xl p-1 items-center ${error?.company?.[0] ? 'border-red-500' : 'border-gray-100'}`}>
                            <Building className="w-5 h-5 size-4 mr-2 text-gray-100"></Building>
                            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className=" w-full text-gray-100 focus:outline-none " />
                        </div>
                        {error?.company?.[0] && (
                            <span className="text-red-500 text-xs">{error.company[0]}</span>
                        )}
                        <label className="text-gray-100 mt-4" htmlFor="">Insira seu email*</label>
                        <div className={`flex w-120 border rounded-xl p-1 items-center ${error?.email?.[0] ? 'border-red-500' : 'border-gray-100'}`}>
                            <AtSign className="w-5 h-5 size-4 mr-2 text-gray-100"></AtSign>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full text-gray-100 focus:outline-none " />
                        </div>
                        {error?.email?.[0] && (
                            <span className="text-red-500 text-xs">{error.email[0]}</span>
                        )}
                        <label className="text-gray-100 mt-4" htmlFor="">Celular*</label>
                        <div className={`flex w-120 border rounded-xl p-1 items-center ${error?.phone?.[0] ? 'border-red-500' : 'border-gray-100'}`}>
                            <Smartphone className="w-5 h-5 size-4 mr-2 text-gray-100"></Smartphone>
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full text-gray-100 focus:outline-none " />
                        </div>
                        {error?.phone?.[0] && (
                            <span className="text-red-500 text-xs">{error.phone[0]}</span>
                        )}
                        <label className="text-gray-100 mt-4" htmlFor="">Site da Empresa</label>
                        <div className={`flex w-120 border rounded-xl p-1 items-center ${error?.companyWebsite?.[0] ? 'border-red-500' : 'border-gray-100'}`}>
                            <Globe className="w-5 h-5 size-4 mr-2 text-gray-100"/>
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
                            <button type="submit" className="flex items-center rounded-xl text-correio-inteligente-200 hover:text-correio-inteligente-200 bg-linear-to-r from-correio-inteligente-900 to-60% to-correio-inteligente-800 transition-all duration-200 ease-in justify-center p-3 w-60 ">
                                <HeartHandshake className="size-4  w-4 h-4 mr-2"></HeartHandshake>
                                <span className="">Solicitar atendimento!</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}