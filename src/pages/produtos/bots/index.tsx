import ModalPages from "../../../components/ModalPages";
import FadeInOnScroll from "../../../scripts/fadeInOnScroll";
import Image from "../../../assets/produtos/bots/discord.png"
import Image2 from "../../../assets/produtos/bots/discord.png"
import Image3 from "../../../assets/produtos/bots/discord.png"
import Image4 from "../../../assets/produtos/bots/discord.png"
import Footer from "../../../components/Pages/Home/Footer";
import ModalProdutos from "../../../components/ModalProdutos";

export default function ProdutosBots() {
    return (
        <>
            <section className="mt-[100px] lg:mt-[120px]">
                <ModalPages
                    text="Bots"
                    description="Torne seu servidor no Discord mais inteligente e interativo com nossos bots."
                />
                <FadeInOnScroll>
                    <div className="flex flex-wrap py-10 lg:px-[12rem] items-center justify-between">
                        <ModalProdutos 
                        subtitle="Bot para Discord"
                        title="Agendamento de reunião"
                        description="Auxilia no planejamento e lembrete de reuniões."
                        image={Image2}
                        preco="150,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Bot para Discord"
                        title="Perfil customizado do servidor"
                        description="Torne seu servidor mais interativo com níveis de interação, perfils customizados e mais."
                        image={Image}
                        preco="150,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Bot para Discord"
                        title="Card Collection"
                        description="Colecione, venda e troque cartas de seus personagens e artistas favoritos."
                        image={Image3}
                        preco="150,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Bot para Discord"
                        title="Tradutor em tempo real"
                        description="Auxilia na comunicação por chat em diferentes linguagens."
                        image={Image4}
                        preco="150,00"
                        url="/#"
                        />
                        
                    </div>
                </FadeInOnScroll>
            </section >
            <Footer />
        </>
    )
}
