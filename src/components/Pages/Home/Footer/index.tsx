import FadeInOnScroll from "../../../../scripts/fadeInOnScroll"

export default function Footer() {
    return (
        <>
            <footer className="text-gray-600 body-font bg-gray-50">
                <FadeInOnScroll>
                    <div className="container px-12 pt-10 pb-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                            <div className="flex flex-row title-font font-medium items-center md:justify-start justify-center text-gray-900">
                                <a href="/">
                                    <div className="flex flex-col justify-center items-center">
                                        <h1 className="text-[24px] text-vh font-bold">VH</h1>
                                    </div>
                                </a>
                                <p className="ml-2 text-[12px] text-vh2 font-medium">Web Solutions</p>
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                                Somos uma equipe apaixonada por tecnologia, dedicada a criar soluções digitais inovadoras para impulsionar o seu negócio.
                            </p>
                        </div>
                        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SERVIÇOS</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a href='/projetos' className="text-gray-600 hover:text-gray-800">Saiba mais</a>
                                    </li>
                                </nav>
                            </div>                          
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PRODUTOS</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Aplicações</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Bot's</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Automatizações</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PROJETOS</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a href="/servicos" className="text-gray-600 hover:text-gray-800">Ver todos os projetos</a>
                                    </li>

                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTATO</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Entre em contato</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Whatsapp</a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                </FadeInOnScroll>
                <div className="bg-vh" >
                    <FadeInOnScroll>
                        <div className="container mx-auto py-12 px-12 flex flex-wrap flex-col sm:flex-row">
                            <p className="text-white text-sm text-center sm:text-left">Todos os direitos reservados VH Web Solutions © 2023.
                            </p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <a className="text-white" href="https://www.linkedin.com/company/vh-web-solutions/about/">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-white" href="https://www.twitter.com/">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-white" href="https://www.instagram.com/vhwebsolutions/">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </FadeInOnScroll>
                </div>
            </footer >
        </>
    )
}