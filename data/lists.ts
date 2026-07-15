import { ChartColumnIncreasing, Lock, LucideIcon, Mail, Settings, SquareCheck, TrendingUp } from "lucide-react";


export interface MenuWhy {
    id: string;
    label: string;
    text: string;
    icon: LucideIcon;
}
export interface MenuWho {
    id: string;
    title: string;
    text: string;
    image: string;
}

export interface MenuDemonstration {
    id: string
    title: string;
    text: string;
} 
export const menuWhy: MenuWhy[] = [
    {
        id: 'send',
        label: 'Envio em larga escala',
        text: 'Dispare milhares de mensagens simultaneamente com alta performance',
        icon: Mail
    },
    {
        id: 'security',
        label: 'Segurança e confiabilidade',
        text: 'Infraestrutura robusta com baixo risco de bloqueios.',
        icon: Lock
    },
    {
        id: 'api',
        label: 'API Oficial do Whatsapp',
        text: 'Conformidade total com as regras da Meta.',
        icon: SquareCheck
    },
    {
        id: 'automation',
        label: 'Automação Inteligente',
        text: 'Programe envios e otimize sua operação.',
        icon: Settings
    },
    {
        id: 'despacho',
        label: 'Despacho imediato e confiável',
        text: 'Compartilhe documentos sensíveis diretamente pelo Whatsapp, com criptografia e controle total de acesso.',
        icon: TrendingUp
    },
    {
        id: 'high',
        label: 'Alta taxa de entrega',
        text: 'Acompanhe quem recebeu, abriu e acessou seus documentos em tempo real.',
        icon: ChartColumnIncreasing
    },

]

export const menuWho: MenuWho[] = [
    {
        id: 'orgaos',
        title: 'Órgãos públicos e prefeituras',
        text: 'Ideal para comunicação com cidadãos, envio de avisos oficiais, campanhas institucionais e notificações em massa com segurança e confiabilidade.',
        image: '/orgaospublicos.png'
    },
    {
        id: 'insituicoes',
        title: 'Instituições e serviços essenciais',
        text: 'Hospitais, clínicas e organizações que precisam garantir que informações importantes cheguem no tempo certo.',
        image: '/instituicoes.png'
    },
    {
        id: 'empresas',
        title: 'Empresas com grande base de clientes',
        text: 'Negócios que precisam escalar campanhas, cobranças e comunicações recorrentes.',
        image: '/empresas.png'
    },
    {
        id: 'equipes',
        title: 'Equipes de cobrança e relacionamento',
        text: 'Operações que dependem de contato rápido, direto e com alta taxa de entrega.',
        image: '/equipes.png'
    },
]

export const menuDemonstration: MenuDemonstration[] = [
    {
        id: 'atendimento',
        title: 'Atendimento Automatizado',
        text: 'Automatize respostas, encaminhamentos e processos internos.',
    },
    {
        id: 'integração',
        title: 'Integração entre Secretarias',
        text: 'Centralize setores como saúde, educação e administração.',
    },
    {
        id: 'protocolos',
        title: 'Protocolos Digitais',
        text: 'Organize solicitações e acompanhe atendimentos em tempo real.',
    },
    {
        id: 'relatorios',
        title: 'Relatórios Inteligentes',
        text: 'Tenha métricas completas sobre demandas e atendimentos.',
    },
    {
        id: 'comunicacao',
        title: 'Comunicação Moderna',
        text: 'Aproxime a população da gestão pública com tecnologia.',
    },
    {
        id: 'seguranca',
        title: 'Segurança de Dados',
        text: 'Proteção e armazenamento seguro das informações.',
    },
]
