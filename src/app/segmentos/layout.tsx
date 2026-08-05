import Cta from "../../../components/Cta"
import Footer from "../../../components/Footer"
import Navbar from "../../../components/Navbar"

export default function SegmentosLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-auto">
            <Navbar />
            {children}
            {/* <Cta className="flex h-200 p-10 items-center justify-center bg-correio-inteligente-200" /> */}

        </div>
    )
}
