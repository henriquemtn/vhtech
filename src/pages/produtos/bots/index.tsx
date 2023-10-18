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
                    description="Somos uma equipe apaixonada por tecnologia, dedicada a criar soluções digitais inovadoras para impulsionar o seu negócio."
                />
                <FadeInOnScroll>
                    <div className="flex flex-wrap py-10 lg:px-[12rem] items-center justify-between">
                        <ModalProdutos 
                        subtitle="Bot para Discord"
                        title="Agendamento de reunião"
                        description="descrição da agenda de tarefas"
                        image={Image2}
                        preco="150,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Bot para Discord"
                        title="Bot de nível"
                        description="descrição pagamento"
                        image={Image}
                        preco="150,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Bot para Discord"
                        title="Bot de tradução"
                        description="descrição do Gerenciador de despesas"
                        image={Image3}
                        preco="150,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Bot para Discord"
                        title="Bot de Piadas ou Curiosidades"
                        description="descrição do Chatbot"
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
