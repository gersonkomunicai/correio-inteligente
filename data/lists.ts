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

export interface MenuPricing {
    id: string;
    plan: string;
    value: string;
    differentials: string[],
    mostSaled?: boolean,
    href: string
}

export const menuPricing: MenuPricing[] = [
    {
        id: 'basic',
        plan: 'Starter',
        value: '0,42',
        differentials: [
            'Envios de 10.000 mensagens mensais.',
            '1 canal',
            '1 usuário',
            'Campanhas ilimitadas',
            'Agendamento de mensagens',
            'Relatórios básicos',
            'Suporte por e-mail',
            'Estrutura de disparo em até 48h úteis',
        ],
        href: 'https://wa.me/5584994146984?text=Quero%20contratar%20um%20plano%20de%2010.000%20mensagens.'
    },
    {
        id: 'pro',
        plan: 'Professional',
        value: '0,40',
        differentials: [
            'Envios de 20.000 mensagens mensais.',
            '2 canais de Whatsapp',
            'Até 3 usuários',
            'Campanhas ilimitadas',
            'Agendamento de mensagens',
            'API',
            'Suporte via Whatsapp',
            'Estrutura de disparo em até 48h úteis',

        ],
        href: 'https://wa.me/5584994146984?text=Quero%20contratar%20um%20plano%20de%2020.000%20mensagens.'
    },
    {
        id: 'advanced',
        plan: 'Avançado',
        value: '0,39',
        differentials: [
            'Envios de 30.000 mensagens mensais.',
            'Até 5 canais de Whatsapp',
            'Usuários ilimitados',
            'Agendamento de mensagens',
            'API/Webhook',
            'Suporte prioritário',
            'SLA reduzido',
            'Estrutura de disparo em até 36h úteis'
        ],
        href: 'https://wa.me/5584994146984?text=Quero%20contratar%20um%20plano%20de%2030.000%20mensagens.'
    },
    {
        id: 'personalizado',
        plan: 'Personalizado',
        value: '0,29*',
        differentials: [
            'Mais de 30.000 mensagens.',
            'Nunc accumsan fermentum tristique.',
            'Cras consectetur odio leo, a finibus tortor porttitor at.',
            'Duis ullamcorper massa ac nunc placerat auctor.'
        ],
        href: 'https://wa.me/5584994146984?text=Quero%20contratar%20um%20plano%20de%20mensagens%20ilimitadas.'
    }
]
export const menuWhy: MenuWhy[] = [
    {
        id: 'send',
        label: 'Envio em larga escala',
        text: 'Acione milhares de contatos simultaneamente, sem perder ritmo na sua operação.',
        icon: Mail
    },
    {
        id: 'security',
        label: 'Segurança e confiabilidade',
        text: 'Infraestrutura própria e dedicada a proteger o número da sua empresa do risco de bloqueio.',
        icon: Lock
    },
    {
        id: 'api',
        label: 'API Oficial do Whatsapp',
        text: 'Conformidade com as diretrizes da Meta e a estabilidade de quem opera pela via oficial.',
        icon: SquareCheck
    },
    {
        id: 'automation',
        label: 'Automação Inteligente',
        text: 'Programe o envio, acompanhe o resultado e ajuste o alcance da sua operação.',
        icon: Settings
    },
    {
        id: 'despacho',
        label: 'Visibilidade total do envio',
        text: 'Acompanhamento em tempo real de cada mensagem, do envio à leitura.',
        icon: TrendingUp
    },
    {
        id: 'high',
        label: 'Alta taxa de entrega',
        text: 'Números selecionados estrategicamente para que a mensagem realmente chegue ao cliente.',
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

