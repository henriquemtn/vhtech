import Topper from "../Topper";
import Image from "../../../../assets/img1.png"
import Image2 from "../../../../assets/img2.png"
import Image3 from "../../../../assets/img3.png"
import FadeInOnScroll from "../../../../scripts/fadeInOnScroll";

export default function HomeServicos() {
    return (
        <section className="w-full">
            <Topper url="/servicos" title="Serviços" description="Fique por dentro, nosso Blog é atualizado semanalmente com novidades." buttonText="Ver todos os Serviços" />
            <FadeInOnScroll>
            <div className="flex flex-wrap mt-6 items-center justify-between">
                <div className="w-full md:w-1/2 lg:w-1/3 p-4 min-h-[320px]">
                    <img src={Image} alt="imagem" className="w-full h-auto" />
                    <h1 className="text-xl font-medium">Criação de Sites</h1>
                    <p>Sites responsivos e otimizados.</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4 min-h-[320px]">
                    <img src={Image2} alt="imagem" className="w-full h-auto" />
                    <h1 className="text-xl font-medium">Sistemas Personalizados</h1>
                    <p>Sistemas personalizados e exclusivos para seu negócio!</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4 min-h-[320px]">
                    <img src={Image3} alt="imagem" className="w-full h-auto" />
                    <h1 className="text-xl font-medium">Manutenção</h1>
                    <p>Manutenção semanal para sites já existentes.</p>
                </div>
            </div>
            </FadeInOnScroll>
        </section>
    )
}
