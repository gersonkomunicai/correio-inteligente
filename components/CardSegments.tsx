interface CardSegmentsProps {
    className?: string
    image: string
    title?: string
    subtitle?: string
}
export default ({image, className, title, subtitle}: CardSegmentsProps) => {
    return (
        <div className={`flex ${className} flex-col bg-linear-to-b from-correio-inteligente-900 to-transparent w-100 h-120 rounded-lg`}>
            <h2 className="text-center text-correio-inteligente-200 p-3 text-lg font-medium">{title}</h2>
            <p className="text-center text-gray-700 p-3 text-sm">{subtitle}</p>
            <div className="w-full flex items-end justify-center h-auto">
                <img src={image} className="rounded-b-md" alt="" />
            </div>
        </div>
    )
}