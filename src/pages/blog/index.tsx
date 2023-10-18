import ModalPages from "../../components/ModalPages";
import FadeInOnScroll from "../../scripts/fadeInOnScroll";
import Image from "../../assets/blog/sistemas-automaticos.png"
import Image2 from "../../assets/blog/voce-conhece-react.png"
import Image3 from "../../assets/blog/construtor-site-codigo.png"
import Footer from "../../components/Pages/Home/Footer";
import Post from "../../components/Post";

export default function Blog() {
    return (
        <>
            <section className="mt-[100px] lg:mt-[120px]">
                <ModalPages
                    text="Blog"
                    description="Somos uma equipe apaixonada por tecnologia, dedicada a criar soluções digitais inovadoras para impulsionar o seu negócio."
                />
                <FadeInOnScroll>
                    <div className="flex flex-wrap py-10 lg:px-[12rem] items-center justify-between">
                        <Post
                            title="Sistemas Automatizados: Simplificando Sua Vida!"
                            description="Você já se perguntou como a tecnologia pode tornar sua vida mais fácil e eficiente? Bem, os sistemas automatizados são a resposta!"
                            date="18/10/2023"
                            url="sistemas-automatizados"
                            image={Image}
                        />
                        <Post
                            title="Você já ouviu falar do React?"
                            description="O React é uma poderosa tecnologia que impulsiona muitos dos aplicativos e sites que você utiliza diariamente. Mas, o que isso significa para o seu negócio?"
                            date="18/10/2023"
                            url="voce-ja-ouviu-falar-do-react"
                            image={Image2}
                        />
                        <Post
                            title="Código Puro vs. Construtores de Sites: A Beleza da Programação"
                            description="Ao criar um site, muitos optam pela praticidade dos construtores de sites, mas há algo genuinamente mágico em construir um site a partir do zero com código puro."
                            date="18/10/2023"
                            url="codigo-puro-vs-construtores-de-sites"
                            image={Image3}
                        />
                    </div>
                </FadeInOnScroll>
            </section>
            <Footer />
        </>
    )
}
