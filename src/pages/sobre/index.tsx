import Footer from "../../components/Pages/Home/Footer";
import FadeInOnScroll from "../../scripts/fadeInOnScroll";
import imagem from "../../assets/img1.png"
import ModalPages from "../../components/ModalPages";

export default function Sobre() {
  return (
    <>
      <section className="bg-f4 text-gray-600 body-font mt-[100px] lg:mt-[120px]">
        <ModalPages text="Sobre" description="Somos uma equipe apaixonada por tecnologia, dedicada a criar soluções digitais inovadoras para impulsionar o seu negócio." />
        <FadeInOnScroll>
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Bem-vindo(a) à VH Web Solutions,</h1>
              <p className="leading-relaxed text-justify">
                Somos uma equipe apaixonada por tecnologia, dedicada a criar soluções digitais inovadoras para impulsionar o seu negócio. Com uma vasta experiência no mercado, estamos prontos para enfrentar desafios e entregar resultados excepcionais, sempre com foco na satisfação dos nossos clientes. Nossa missão é tornar a sua presença online única e impactante. Acreditamos que cada empresa é única, e é por isso que nos dedicamos a desenvolver sistemas personalizados e sites sob medida, de acordo com as necessidades e objetivos específicos de cada cliente. Entendemos a importância da primeira impressão. Por isso, criamos interfaces atraentes e funcionais, garantindo que seus clientes tenham uma experiência memorável ao interagir com o seu site. Além disso, sabemos que a manutenção contínua é essencial para garantir o bom funcionamento dos sistemas e sites. Nossa equipe está sempre à disposição para oferecer suporte técnico ágil e eficiente, garantindo que você esteja sempre um passo à frente da concorrência.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src={imagem} />
            </div>
          </div>
        </FadeInOnScroll>
      </section>
      <Footer />
    </>
  )
}
