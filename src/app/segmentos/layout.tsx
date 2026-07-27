import Navbar from "../../../components/Navbar"

export default function SegmentosLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
