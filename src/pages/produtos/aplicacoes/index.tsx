import ModalPages from "../../../components/ModalPages";
import FadeInOnScroll from "../../../scripts/fadeInOnScroll";
import Image from "../../../assets/produtos/app/analytics.png"
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
                    description="Desenvolvemos aplicativos personalizados para atender às suas necessidades."
                />
                <FadeInOnScroll>
                    <div className="flex flex-wrap py-10 lg:px-[12rem] items-center justify-between">
                        <ModalProdutos 
                        subtitle="Pronta entrega"
                        title="Agenda de tarefas"
                        description="Aplicativo que permite a criação e gerenciamento de tarefas. Com sistema de notificação, tarefas personalizaveis, metas, e muitas outras funcionalidades."
                        image={Image2}
                        preco="400,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Pronta entrega"
                        title="Analytics"
                        description="Aplicativo que permite analisar seu website com precisão."
                        image={Image}
                        preco="1800,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Pronta entrega"
                        title="Gerenciador de despesas"
                        description="Sistema que permite gerenciar suas despesas, com segurança e flexibilidade. Com funcionalidades como: metas, comparação com meses anteriores, entre muitas outras."
                        image={Image3}
                        preco="400,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Pronta entrega"
                        title="Social"
                        description="Aplicativo social, que permite você incluir apenas pessoas selecionadas para fazer parte de sua rede, é recomendado para melhorar comunicação interna em empresas."
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
