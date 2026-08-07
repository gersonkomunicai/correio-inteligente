import Cta from "../../../components/Cta"
import Navbar from "../../../components/Navbar"

export default function SegmentosLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-auto">
            <Navbar />
            {children}
        </div>
    )
}
