import HomeBlog from "./components/Pages/Home/Blog";
import Etapas from "./components/Pages/Home/Etapas";
import Footer from "./components/Pages/Home/Footer";
import Hero from "./components/Pages/Home/Hero";
import HomeProdutos from "./components/Pages/Home/Produtos";
import HomeServicos from "./components/Pages/Home/Servicos";

export default function App() {
  return (
    <>
      <div className="w-full md:px-20 ss:px-[12rem] md:mt-0 lg:mt-12">
        <Hero
          text="Soluções para o seu Negócio"
          description="Dedicados a impulsionar o seu negócio para novos patamares de sucesso digital. Abraçamos desafios com entusiasmo, sempre comprometidos em entregar resultados excepcionais que superem as expectativas dos nossos clientes."
          buttonText="Saiba mais" />
      </div>
      <div className="bg-gray-50 py-8 flex w-full flex-col items-center justify-between md:px-20 ss:px-[12rem] mb-20 ds:mt-0 md:mt-[14rem] sm:mt-[18rem] mt-[22rem] ">
        <HomeBlog />
      </div>
      <div className="flex w-full flex-col items-center justify-between md:px-20 ss:px-[12rem] gap-20  mb-10">
        <HomeServicos />
      </div>
      <Etapas />
      <div className="py-8 flex w-full flex-col items-center justify-between md:px-20 ss:px-[12rem] gap-20">
        <HomeProdutos />
      </div>
      <Footer />
    </>
  )
}
