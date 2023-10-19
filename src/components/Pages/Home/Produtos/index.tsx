import Topper from "../Topper";
import Image from "../../../../assets/produtos/apps.png";
import Image2 from "../../../../assets/produtos/automatizacao.png";
import Image3 from "../../../../assets/produtos/bots.png";
import FadeInOnScroll from "../../../../scripts/fadeInOnScroll";
import { HiOutlineArrowSmRight } from 'react-icons/hi';

export default function HomeProdutos() {
    return (
        <section className="w-full">
            <Topper url="/produtos" title="Produtos" description="Confira alguns de nossos produtos em destaque." buttonText="Ver todos os Produtos" />
            <FadeInOnScroll>
            <div className="flex flex-wrap items-center justify-between mt-6">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <img src={Image} alt="imagem" className="w-full h-auto" />
                            <p className="text-vh text-base mt-1">Personalizado</p>
                            <h1 className="text-xl font-medium">Aplicações</h1>
                            <p>Sistemas personalizados para solucionar problemas diários.</p>
                            <a href="/produtos/aplicacoes" className="cursor-pointer flex justify-end items-center gap-1 text-base font-medium text-vh2">
                                Saiba mais
                                <HiOutlineArrowSmRight className="mt-[2px]" />
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <img src={Image2} alt="imagem" className="w-full h-auto" />
                            <p className="text-vh text-base mt-1">Personalizado</p>
                            <h1 className="text-xl font-medium">Automatizações</h1>
                            <p>Sistemas automatizados para facilitar tarefas diárias.</p>
                            <a href="/produtos/automatizacoes" className="cursor-pointer flex justify-end items-center gap-1 text-base font-medium text-vh2">
                                Saiba mais
                                <HiOutlineArrowSmRight className="mt-[2px]" />
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <img src={Image3} alt="imagem" className="w-full h-auto" />
                            <p className="text-vh text-base mt-1">Personalizado</p>
                            <h1 className="text-xl font-medium">Bots</h1>
                            <p>Bots de Discord para impulsionar seu servidor.</p>
                            <a href="/produtos/bots" className="cursor-pointer flex justify-end items-center gap-1 text-base font-medium text-vh2">
                                Saiba mais
                                <HiOutlineArrowSmRight className="mt-[2px]" />
                            </a>
                        </div>
            </div>
            </FadeInOnScroll>
        </section>
    );
}
