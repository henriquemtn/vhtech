import ModalPages from "../../../components/ModalPages";
import FadeInOnScroll from "../../../scripts/fadeInOnScroll";
import Image from "../../../assets/produtos/app/pagamentos.png"
import Image2 from "../../../assets/produtos/app/agenda-tarefas.png"
import Image3 from "../../../assets/produtos/app/analitics.png"
import Image4 from "../../../assets/produtos/app/social.png"
import Footer from "../../../components/Pages/Home/Footer";
import ModalProdutos from "../../../components/ModalProdutos";

export default function ProdutosApp() {
    return (
        <>
            <section className="mt-[100px] lg:mt-[120px]">
                <ModalPages
                    text="Aplicações"
                    description="Somos uma equipe apaixonada por tecnologia, dedicada a criar soluções digitais inovadoras para impulsionar o seu negócio."
                />
                <FadeInOnScroll>
                    <div className="flex flex-wrap py-10 lg:px-[12rem] items-center justify-between">
                        <ModalProdutos 
                        subtitle="Pronta entrega"
                        title="Agenda de tarefas"
                        description="descrição da agenda de tarefas"
                        image={Image2}
                        preco="400,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Pronta entrega"
                        title="Pagamento"
                        description="descrição pagamento"
                        image={Image}
                        preco="1800,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Pronta entrega"
                        title="Gerenciador de despesas"
                        description="descrição do Gerenciador de despesas"
                        image={Image3}
                        preco="400,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Pronta entrega"
                        title="Social"
                        description="descrição do Social"
                        image={Image4}
                        preco="1400,00"
                        url="/#"
                        />
                        
                    </div>
                </FadeInOnScroll>
            </section >
            <Footer />
        </>
    )
}
