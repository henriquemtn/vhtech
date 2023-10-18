import { useState } from "react";
import logo from '../../assets/logo.png'

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);

    const toggleSubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };

    return (
        <div className='flex flex-col justify-center items-center w-full z-20 mx-[18rem]'>
            <nav className="w-full bg-white py-4 shadow-md z-40 fixed top-0 left-0 right-0">
                <div className="justify-between px-4 mx-auto lg:max-w-[98rem] ms:items-center ms:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 ms:block">
                            <a href="/">
                                <div className="flex flex-row justify-center items-center">
                                    <img src={logo} alt="logo" className="h-[55px]" />             
                                </div>
                            </a>
                            <div className="ms:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center lg:ml-6 pb-3 mt-8 ms:block ms:pb-0 ms:mt-0 transition-all duration-1000 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 ms:flex ms:space-x-6 ms:space-y-0">
                                <li className="text-[#000] hover:text-s7green">
                                    <a href="/">Home</a>
                                </li>
                                <li className="text-[#000] hover:text-s7green">
                                    <a href="/sobre">Sobre</a>
                                </li>
                                <li className="text-[#000] hover:text-s7green">
                                    <a href="/servicos">Serviços</a>
                                </li>
                                <li className="text-[#000] hover:text-s7green cursor-pointer">
                                    <div className="flex gap-1">
                                        <a href="/produtos">
                                            Produtos
                                        </a>
                                        <a onClick={toggleSubmenu}>▾</a>
                                    </div>
                                    {showSubmenu && (
                                        <ul className="ms:absolute mt-3 ms:p-2 rounded-b-md  mb-12 bg-white">
                                            <li className="ms:mb-3"><a href="/produtos/aplicacoes">Aplicações</a></li>
                                            <li className="ms:mb-3"><a href="/produtos/bots">Bots</a></li>
                                            <li className="ms:mb-3"><a href="/produtos/automatizacoes">Automatizações</a></li>
                                        </ul>
                                    )}
                                </li>
                                <li className="text-[#000] hover:text-s7green">
                                    <a href="/projetos">Projetos</a>
                                </li>
                                <li className="text-[#000] hover:text-s7green">
                                    <a href="/blog">Blog</a>
                                </li>
                                <li className="text-[#000] hover:text-s7green">
                                    <a href="/contato">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`flex-3 justify-self-center pb-3 mt-8 ms:block ms:pb-0 ms:mt-0 ${navbar ? "block" : "hidden"
                        }`}>
                        <div className="text-vh2 flex gap-1">
                            <span>Já é cliente?</span>
                            <a href="#" className="underline">Faça login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}