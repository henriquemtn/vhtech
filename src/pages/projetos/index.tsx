import ModalPages from "../../components/ModalPages";
import FadeInOnScroll from "../../scripts/fadeInOnScroll";
import Image from "../../assets/projetos/sea7.png";
import Image2 from "../../assets/projetos/daterra.png";
import Image3 from "../../assets/projetos/alecrim.png";
import Footer from "../../components/Pages/Home/Footer";
import { HiOutlineArrowSmRight } from 'react-icons/hi'

export default function Projetos() {

    return (
        <>
            <section className="mt-[100px] lg:mt-[120px]">
                <ModalPages
                    text="Projetos"
                    description="Veja nossos projetos anteriores – sites e sistemas personalizados."
                />
                <FadeInOnScroll>
                    <div className="flex flex-wrap py-10 lg:px-[12rem] items-center justify-between">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4 min-h-[320px]">
                            <img src={Image} alt="imagem" className="w-full h-auto shadow-md" />
                            <h1 className="text-xl mt-2 font-medium">Sea7 Group</h1>
                            <a href="https://www.sea7.com.br/" className="cursor-pointer flex justify-end items-center gap-1 text-base font-medium text-vh2">
                                Ver site
                                <HiOutlineArrowSmRight className="mt-[2px]" />
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4 min-h-[320px]">
                            <img src={Image2} alt="imagem" className="w-full h-auto shadow-md" />
                            <h1 className="text-xl mt-2 font-medium">Restaurante daTerra</h1>
                            <a href="https://www.restaurantedaterra.com.br/" className="cursor-pointer flex justify-end items-center gap-1 text-base font-medium text-vh2">
                                Ver site
                                <HiOutlineArrowSmRight className="mt-[2px]" />
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4 min-h-[320px]">
                            <img src={Image3} alt="imagem" className="w-full h-auto shadow-md" />
                            <h1 className="text-xl mt-2 font-medium">Alecrim Sabores do Mundo</h1>
                            <a href="https://alecrim.vercel.app/" className="cursor-pointer flex justify-end items-center gap-1 text-base font-medium text-vh2">
                                Ver site
                                <HiOutlineArrowSmRight className="mt-[2px]" />
                            </a>
                        </div>
                    </div>
                </FadeInOnScroll>
            </section>
            <Footer />
        </>
    )
}
