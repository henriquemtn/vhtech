import ModalPages from "../../components/ModalPages";
import FadeInOnScroll from "../../scripts/fadeInOnScroll";
import Image from "../../assets/produtos/pagamentos.png"
import Image2 from "../../assets/produtos/agenda-tarefas.png"
import Image3 from "../../assets/produtos/analitics.png"
import Footer from "../../components/Pages/Home/Footer";
import { HiOutlineArrowSmRight } from 'react-icons/hi';

export default function Produtos() {
    return (
        <>
            <section className="mt-[100px] lg:mt-[120px]">
                <ModalPages
                    text="Produtos"
                    description="Somos uma equipe apaixonada por tecnologia, dedicada a criar soluções digitais inovadoras para impulsionar o seu negócio."
                />
                <FadeInOnScroll>
                    <div className="flex flex-wrap py-10 lg:px-[12rem] items-center justify-between">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <img src={Image} alt="imagem" className="w-full h-auto" />
                            <p className="text-vh text-base mt-1">Personalizado</p>
                            <h1 className="text-xl font-medium">Aplicações</h1>
                            <p>Manutenção semanal para sites já existentes.</p>
                            <a href="/produtos/aplicacoes" className="cursor-pointer flex justify-end items-center gap-1 text-base font-medium text-vh2">
                                Saiba mais
                                <HiOutlineArrowSmRight className="mt-[2px]" />
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <img src={Image2} alt="imagem" className="w-full h-auto" />
                            <p className="text-vh text-base mt-1">Personalizado</p>
                            <h1 className="text-xl font-medium">Automatizações</h1>
                            <p>Manutenção semanal para sites já existentes.</p>
                            <a href="/produtos/automatizacoes" className="cursor-pointer flex justify-end items-center gap-1 text-base font-medium text-vh2">
                                Saiba mais
                                <HiOutlineArrowSmRight className="mt-[2px]" />
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <img src={Image3} alt="imagem" className="w-full h-auto" />
                            <p className="text-vh text-base mt-1">Personalizado</p>
                            <h1 className="text-xl font-medium">Bots</h1>
                            <p>Manutenção semanal para sites já existentes.</p>
                            <a href="/produtos/bots" className="cursor-pointer flex justify-end items-center gap-1 text-base font-medium text-vh2">
                                Saiba mais
                                <HiOutlineArrowSmRight className="mt-[2px]" />
                            </a>
                        </div>
                    </div>
                </FadeInOnScroll>
            </section >
            <Footer />
        </>
    )
}
