import Footer from "../../components/Pages/Home/Footer";
import FadeInOnScroll from "../../scripts/fadeInOnScroll";
import imagem from "../../assets/img1.png"
import ModalPages from "../../components/ModalPages";

export default function Sobre() {
  return (
    <>
      <section className="bg-f4 text-gray-600 body-font mt-[100px] lg:mt-[120px]">
        <ModalPages text="Sobre" description="Somos uma equipe focada em solucionar seus problemas e necessidades utilizando aplicações web." />
        <FadeInOnScroll>
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Bem-vindo(a) à VH Web Solutions,</h1>
              <p className="leading-relaxed text-justify">
              Somos uma equipe de desenvolvimento cujo principal objetivo é resolver problemas e atender às necessidades daqueles que buscam estabelecer uma presença online ou simplificar suas vidas pessoais e profissionais por meio de automação. Oferecemos uma variedade de serviços, incluindo sistemas personalizados e automatizados, bots para Discord e desenvolvimento de sites. Com a intenção de fornecer aos clientes total liberdade para personalizar suas aplicações de acordo com suas preferências, implementamos um sólido processo de criação em nossos serviços. Isso nos permite compreender os objetivos do contratante e criar soluções completamente personalizáveis.<br></br>
              Para atender a essa ampla gama de demandas, empregamos tecnologias modernas e flexíveis que tornam essa liberdade uma realidade. Além disso, nossa equipe está em constante aprendizado para proporcionar ainda mais flexibilidade na concepção e construção de sistemas com qualidade e segurança. Estamos disponíveis para responder a perguntas, ouvir sugestões e discutir possíveis colaborações. Basta nos contatar por e-mail, WhatsApp ou por meio do formulário de contato em nosso site.
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
