interface CardSegmentsProps {
    className?: string
    image: string
}
export default ({image, className}: CardSegmentsProps) => {
    return (
        <div className={`flex ${className} flex-col bg-linear-to-b from-correio-inteligente-900 to-correio-inteligente-800 w-100 h-auto rounded-lg`}>
            <h2 className="text-center text-correio-inteligente-200 p-3 text-lg font-medium">Aliquam nec condimentum diam, eget ultricies mauris.</h2>
            <p className="text-center text-gray-700 p-3 text-sm">Aliquam vulputate feugiat lorem, eget consequat ipsum auctor et. Vivamus interdum purus vel quam porta ultrices. Suspendisse vel justo nibh. Morbi tempus interdum metus, et malesuada justo tempor ut. Nam et facilisis felis. Quisque blandit nisl quis ex placerat luctus a sed diam.</p>
            <div className="w-full flex justify-center h-auto">
                <img src={image} className="rounded-b-md" alt="" />
            </div>
        </div>
    )
}