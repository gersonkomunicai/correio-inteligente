import { ChartColumnIncreasing, Lock, LucideIcon, Mail, Settings, SquareCheck, TrendingUp } from "lucide-react";

export interface MenuItems {
    id: string;
    label: string;
    text: string;
    icon: LucideIcon;
}

export const menuItems: MenuItems[] = [
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

