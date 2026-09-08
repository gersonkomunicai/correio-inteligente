import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
    return (
        <section className="relative min-h-[720px] overflow-hidden bg-[#061C1C]">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="
                    absolute
                    -right-40
                    top-1/2
                    h-[600px]
                    w-[600px]
                    -translate-y-1/2
                    rounded-full
                    bg-[#0DDE98]/10
                    blur-[140px]
                " />

                <div className="
                    absolute
                    left-1/3
                    top-0
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-emerald-400/5
                    blur-[120px]
                " />

                {/* Grid */}
                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.035]
                    "
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                rgba(255,255,255,0.8) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                rgba(255,255,255,0.8) 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>


            <div className="
                relative
                mx-auto
                flex
                min-h-[720px]
                max-w-7xl
                items-center
                px-6
                py-24
                lg:px-8
                ">

                <div className="
                    grid
                    w-full
                    items-center
                    gap-16
                    lg:grid-cols-2
                    lg:gap-20
                    ">

                    <Reveal direction="left">
                        {/* TEXT */}
                        <div className="max-w-2xl">
                            <Image src={"/Iso.png"} alt={""} width={100} height={100} />
                            <h1 className="
                                text-5xl
                                font-semibold
                                leading-[1.05]
                            tracking-[-0.04em]
                            text-[#EDEDEE]
                            sm:text-6xl
                            lg:text-7xl">
                                Comunicação em escala.
                                <br />

                                <span className="text-[#0DDE98]">
                                    Direto pelo WhatsApp.
                                </span>
                            </h1>

                            <p className="
                            mt-7
                            max-w-xl
                            text-lg
                            leading-8
                            text-white/60
                            sm:text-xl
                        ">
                                Automatize campanhas, notificações e cobranças
                                através da API Oficial do WhatsApp Business,
                                com segurança, rastreabilidade e alta performance.
                            </p>


                            {/* CTA */}
                            <div className="
                            mt-9
                            flex
                            flex-col
                            gap-3
                            sm:flex-row
                        ">
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=5584994146984&text=Quero+mais+informa%C3%A7%C3%B5es+sobre+o+Correio+Inteligente.&type=phone_number&app_absent=0" className="
                                group
                                inline-flex
                                h-12
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                bg-[#0DDE98]
                                px-6
                                font-medium
                                text-[#061C1C]
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-[#20E5A4]
                                hover:shadow-[0_10px_40px_rgba(13,222,152,0.2)]
                            ">
                                    Falar com um especialista

                                    <span className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                ">
                                        →
                                    </span>
                                </a>


                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=5584994146984&text=Quero+mais+informa%C3%A7%C3%B5es+sobre+o+Correio+Inteligente.&type=phone_number&app_absent=0" className="
                                inline-flex
                                h-12
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-white/10
                                bg-white/[0.03]
                                px-6
                                font-medium
                                text-white/80
                                backdrop-blur-sm
                                transition-all
                                duration-300
                                hover:border-white/20
                                hover:bg-white/[0.06]
                                hover:text-white
                            ">
                                    Conhecer a plataforma
                                </a>

                            </div>


                            {/* Trust */}
                            <div className="
                            mt-10
                            flex
                            items-center
                            gap-3
                            text-sm
                            text-white/40
                        ">
                                <div className="flex -space-x-2">
                                    <div className="h-7 w-7 rounded-full border-2 border-[#061C1C] bg-white/20" />
                                    <div className="h-7 w-7 rounded-full border-2 border-[#061C1C] bg-white/20" />
                                    <div className="h-7 w-7 rounded-full border-2 border-[#061C1C] bg-white/20" />
                                </div>

                                <span>
                                    Infraestrutura preparada para grandes volumes
                                </span>
                            </div>

                        </div>
                    </Reveal>


                    {/* VISUAL */}
                    <div className="relative">

                        {/* Glow atrás do dashboard */}
                        <div className="
                            absolute
                            inset-0
                            rounded-full
                            bg-[#0DDE98]/10
                            blur-[100px]
                        " />


                        {/* Dashboard */}
                        <div className="
                            relative
                            rotate-[-2deg]
                            rounded-2xl
                            border
                            border-white/10
                            bg-[#0A2929]/80
                            p-2
                            shadow-2xl
                            backdrop-blur-xl
                        ">

                            <div className="
                                rounded-xl
                                border
                                border-white/10
                                bg-[#071F1F]
                                p-6
                            ">

                                {/* Header */}
                                <div className="
                                    flex
                                    items-center
                                    justify-between
                                    border-b
                                    border-white/10
                                    pb-5
                                ">

                                    <div>
                                        <p className="text-sm text-white/40">
                                            Visão geral
                                        </p>

                                        <p className="
                                            mt-1
                                            text-lg
                                            font-medium
                                            text-white
                                        ">
                                            Comunicação
                                        </p>
                                    </div>

                                    <div className="
                                        rounded-lg
                                        border
                                        border-[#0DDE98]/20
                                        bg-[#0DDE98]/10
                                        px-3
                                        py-1.5
                                        text-xs
                                        text-[#0DDE98]
                                    ">
                                        ● Operacional
                                    </div>

                                </div>


                                {/* Stats */}
                                <div className="
                                    grid
                                    grid-cols-2
                                    gap-3
                                    py-6
                                ">

                                    <div className="
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/[0.02]
                                        p-4
                                    ">
                                        <p className="text-xs text-white/40">
                                            Mensagens enviadas
                                        </p>

                                        <p className="
                                            mt-2
                                            text-2xl
                                            font-semibold
                                            text-white
                                        ">
                                            1.284.532
                                        </p>

                                        <p className="
                                            mt-1
                                            text-xs
                                            text-[#0DDE98]
                                        ">
                                            +18,4%
                                        </p>
                                    </div>


                                    <div className="
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/[0.02]
                                        p-4
                                    ">
                                        <p className="text-xs text-white/40">
                                            Taxa de entrega
                                        </p>

                                        <p className="
                                            mt-2
                                            text-2xl
                                            font-semibold
                                            text-white
                                        ">
                                            88,4%
                                        </p>

                                        <p className="
                                            mt-1
                                            text-xs
                                            text-[#0DDE98]
                                        ">
                                            Excelente
                                        </p>
                                    </div>

                                </div>


                                {/* Chart */}
                                <div className="
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/[0.02]
                                    p-5
                                ">

                                    <div className="
                                        mb-5
                                        flex
                                        items-center
                                        justify-between
                                    ">
                                        <span className="
                                            text-sm
                                            text-white/50
                                        ">
                                            Volume de mensagens
                                        </span>

                                        <span className="
                                            text-xs
                                            text-white/30
                                        ">
                                            Últimos 7 dias
                                        </span>
                                    </div>


                                    <div className="
                                        flex
                                        h-32
                                        items-end
                                        gap-2
                                    ">

                                        {[35, 48, 42, 65, 55, 82, 96].map(
                                            (height, index) => (
                                                <div
                                                    key={index}
                                                    className="
                                                        flex-1
                                                        rounded-t
                                                        bg-[#0DDE98]/60
                                                        transition-all
                                                        duration-500
                                                        hover:bg-[#0DDE98]
                                                    "
                                                    style={{
                                                        height: `${height}%`,
                                                    }}
                                                />
                                            )
                                        )}

                                    </div>

                                </div>


                                {/* Activity */}
                                <div className="mt-4 space-y-2">
                                    {[
                                        "Campanha concluída",
                                        "12.482 mensagens entregues",
                                        "Automação executada",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                rounded-lg
                                                border
                                                border-white/5
                                                bg-white/[0.02]
                                                px-4
                                                py-3
                                            "
                                        >
                                            <div className="
                                                flex
                                                h-6
                                                w-6
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-[#0DDE98]/10
                                                text-xs
                                                text-[#0DDE98]
                                            ">
                                                ✓
                                            </div>
                                            <span className="
                                                text-sm
                                                text-white/60
                                            ">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Floating card */}
                        <div className="
                            absolute
                            -bottom-8
                            -left-8
                            hidden
                            rounded-xl
                            border
                            border-white/10
                            bg-[#0A2929]/90
                            p-4
                            shadow-2xl
                            backdrop-blur-xl
                            sm:block
                        ">
                            <div className="
                                flex
                                items-center
                                gap-3
                            ">
                                <div className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-[#0DDE98]/10
                                    text-[#0DDE98]
                                ">
                                    ✓
                                </div>
                                <div>
                                    <p className="
                                        text-xs
                                        text-white/40
                                    ">
                                        Última campanha
                                    </p>

                                    <p className="
                                        text-sm
                                        font-medium
                                        text-white
                                    ">
                                        88,4% entregues
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}