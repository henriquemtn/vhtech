import imagem from '../../../../assets/slider.png'
import FadeInOnScroll from '../../../../scripts/fadeInOnScroll';

export default function Etapas() {

    const containerStyle = {
        background: `url(${imagem}) center/cover`,
    };

    return (
        <section className="w-full justify-between p-10 md:px-20 lg:px-48" style={containerStyle}>
            <FadeInOnScroll>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col justify-start md:justify-center">
                        <p className="text-xl text-white font-medium">Processo de criação</p>
                        <p className="text-base text-gray-200  mt-4">
                        Entender a criação de um projeto é compreender um processo multifacetado que se inicia com uma conversa inicial para explorar suas ideias e necessidades. Nessa etapa, procuramos obter uma visão abrangente do seu projeto, permitindo-nos preparar um orçamento que esteja alinhado com suas expectativas.<br /><br />
                        Após o acordo inicial, formalizamos nosso compromisso por meio de um contrato abrangente, que delineia todos os detalhes, prazos e custos. Em seguida, nossa equipe entra na fase de planejamento e organização, onde estrategicamente projetamos o caminho para concretizar sua visão. Uma vez criado, você recebe o material para feedbacks e ajustes, garantindo que seu projeto seja refinado para atender exatamente às suas necessidades. Finalmente, com tudo pronto, seu projeto é entregue e fica disponível na internet, acessível de qualquer dispositivo. Este é o resultado de trabalho árduo e colaboração eficaz, transformando sua visão em realidade. Seja qual for o seu projeto, estamos aqui para torná-lo uma presença online eficaz e impressionante.<br /><br />
                        </p>
                    </div>
                </div>
            </FadeInOnScroll>
        </section>
    )
}