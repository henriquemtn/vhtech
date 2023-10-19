import ModalPages from "../../../components/ModalPages";
import FadeInOnScroll from "../../../scripts/fadeInOnScroll";
import Image from "../../../assets/produtos/auto/pedidos.png"
import Image2 from "../../../assets/produtos/app/agenda-tarefas.png"
import Image3 from "../../../assets/produtos/app/analitics.png"
import Image4 from "../../../assets/produtos/app/chatbot.png"
import Footer from "../../../components/Pages/Home/Footer";
import ModalProdutos from "../../../components/ModalProdutos";

export default function ProdutosAuto() {
    return (
        <>
            <section className="mt-[100px] lg:mt-[120px]">
                <ModalPages
                    text="Automatização"
                    description="Simplificamos tarefas e processos com automações eficientes e intuitivas."
                />
                <FadeInOnScroll>
                    <div className="flex flex-wrap py-10 lg:px-[12rem] items-center justify-between">
                        <ModalProdutos 
                        subtitle="Automatização"
                        title="Gerador de relatórios"
                        description="Se preocupe mais em realizar suas tarefas, este aplicativo irá lhe fornecer um relatório semanal, com encaminhamento personalizado."
                        image={Image2}
                        preco="400,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Automatização"
                        title="Assistente de Pedidos"
                        description="Concentre todos seus pedidos em um lugar só, o Assistente de Pedidos auxiliará no controle de pedidos e mensagens."
                        image={Image}
                        preco="1800,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Automatização"
                        title="Gerenciador de despesas"
                        description="Sistema que permite gerenciar suas despesas, com segurança e flexibilidade. Com funcionalidades como: metas, comparação com meses anteriores, entre muitas outras."
                        image={Image3}
                        preco="400,00"
                        url="/#"
                        />
                        <ModalProdutos 
                        subtitle="Automatizações"
                        title="Chatbot"
                        description="Usar um sistema de chat na sua aplicação pode facilitar muito a comunicação com os clientes. Este sistema conta com um chatbot totalmente personalizavel para o seu negócio."
                        image={Image4}
                        preco="800,00"
                        url="/#"
                        />
                        
                    </div>
                </FadeInOnScroll>
            </section >
            <Footer />
        </>
    )
}
