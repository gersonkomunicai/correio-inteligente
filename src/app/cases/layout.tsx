import Cta from "../../../components/Cta"
import Navbar from "../../../components/Navbar"

export default function CasesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
            <Cta className="flex h-200 p-10 items-center justify-center bg-correio-inteligente-200" />
        </div>
    )
}
