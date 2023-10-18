import Topper from "../Topper";
import Image from "../../../../assets/projetos/sea7.png";
import Image2 from "../../../../assets/projetos/daterra.png";
import Image3 from "../../../../assets/projetos/alecrim.png";
import FadeInOnScroll from "../../../../scripts/fadeInOnScroll";

export default function HomeProjetos() {
    return (
        <section className="w-full">
            <Topper url="/projetos" title="Projetos" description="Fique por dentro, nosso Blog é atualizado semanalmente com novidades." buttonText="Ver todos os Projetos" />
            <FadeInOnScroll>
                <div className="flex flex-wrap items-center justify-between mt-6">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4 min-h-[320px]">
                        <img src={Image} alt="imagem" className="w-full h-auto" />
                        <h1 className="text-xl font-medium">Sea7 Group</h1>
                        <p className="min-h-[100px]">Sites responsivos e otimizados.</p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4 min-h-[320px]">
                        <img src={Image2} alt="imagem" className="w-full h-auto" />
                        <h1 className="text-xl font-medium">Restaurante daTerra</h1>
                        <p className="min-h-[100px]">Sistemas personalizados e exclusivos para seu negócio!</p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4 min-h-[320px]">
                        <img src={Image3} alt="imagem" className="w-full h-auto" />
                        <h1 className="text-xl font-medium">Alecrim Sabores do Mundo</h1>
                        <p className="min-h-[100px]">Manutenção semanal para sites já existentes.</p>
                    </div>
                </div>
            </FadeInOnScroll>
        </section>
    );
}
