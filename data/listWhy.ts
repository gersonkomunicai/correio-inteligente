'use client'

import { Lock, LucideIcon, Mail } from "lucide-react";

interface MenuItems {
    id: string;
    label: string;
    text: string;
    icon: LucideIcon;
}

const menuItems: MenuItems[] = [
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

]