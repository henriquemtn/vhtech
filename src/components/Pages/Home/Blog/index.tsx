import Image from "../../../../assets/blog/sistemas-automaticos.png";
import Image2 from "../../../../assets/blog/voce-conhece-react.png";
import Image3 from "../../../../assets/blog/construtor-site-codigo.png";
import Topper from "../Topper";
import FadeInOnScroll from "../../../../scripts/fadeInOnScroll";
import Post from "../../../Post";

export default function HomeBlog() {

    return (
        <section>
            <Topper  url="/blog" title="Blog" description="Fique por dentro, nosso Blog é atualizado semanalmente com novidades." buttonText="Ver todas as Postagens" />
            <FadeInOnScroll>
                <div className="flex flex-wrap items-center justify-between mt-6">
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
    )
}
