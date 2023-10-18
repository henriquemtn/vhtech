import FadeInOnScroll from "../../scripts/fadeInOnScroll";
import imagem from "../../../src/assets/slider.png"

interface CustomProps {
    text: string,
    description: string,
}

export default function ModalPages({text, description}:CustomProps) {
    const containerStyle = {
        background: `url(${imagem}) center/cover`,
    };

    return (
        <section className="w-full p-10 md:px-20 lg:px-48" style={containerStyle}>
            <FadeInOnScroll>
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col justify-center">
                        <p className="text-2xl text-white text-center font-medium">{text}</p>
                        <p className="text-base text-gray-200 text-center mt-4">{description}</p>
                    </div>
                </div>
            </FadeInOnScroll>
        </section>
    )
}