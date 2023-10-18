import ModalPages from "../../components/ModalPages";
import FadeInOnScroll from "../../scripts/fadeInOnScroll";
import Image from "../../assets/img1.png"
import Image2 from "../../assets/img2.png"
import Image3 from "../../assets/img3.png"
import Footer from "../../components/Pages/Home/Footer";

export default function Servicos() {
  return (
    <>
    <section className="mt-[100px] lg:mt-[120px]">
      <ModalPages
        text="Serviços"
        description="Somos uma equipe apaixonada por tecnologia, dedicada a criar soluções digitais inovadoras para impulsionar o seu negócio."
      />
      <FadeInOnScroll>
        <div className="flex flex-wrap py-10 lg:px-[12rem] items-center justify-between">
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
    <Footer />
    </>
  )
}
