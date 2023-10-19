import { useState } from 'react';
import Footer from '../../components/Pages/Home/Footer';
import ModalPages from '../../components/ModalPages';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const Contato = () => {
    const [mensagem, setMensagem] = useState({
        nome: '',
        telefone: '',
        email: '',
        contexto: 'Página de Contato',
        mensagem: ''
    });

    const initialFormData = {
        nome: '',
        telefone: '',
        email: '',
        contexto: 'Página de Contato',
        mensagem: ''
    };

    const resetForm = () => {
        setMensagem(initialFormData);
    };

    const isValidFormData = () => {
        return mensagem.nome && mensagem.telefone && mensagem.email && mensagem.mensagem;
    };

    const fetchMensagem = async (event: any) => {
        event.preventDefault();

        if (isValidFormData()) {
            try {
                const response = await axios.post(
                    'https://www.apimensagem.com.br/mensagem/adicionar',
                    mensagem,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log('Status da resposta:', response.status);
                toast.success("Mensagem enviada com sucesso!");
                resetForm();
            } catch (error) {
                toast.error("Ocorreu algum erro durante o envio da mensagem, tente novamente mais tarde.");
                console.error('Erro ao enviar a mensagem:', error);
            }
        } else {
            toast.error("Preencha todos os campos obrigatórios.");
        }
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setMensagem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <>
            <section className="text-gray-600 body-font relative mt-[100px] lg:mt-[120px]" id="contato">
                <ModalPages
                    text="Contato"
                    description="Nos contate para tirar suas dúvidas e enviar sugestões."
                />
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Entre em Contato</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Envie uma mensagem para nosso Whatsapp, Instagram, Linkedin ou se preferir envie um email:</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="nome" className="leading-7 text-sm text-gray-600">Nome</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        value={mensagem.nome}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="sobrenome" className="leading-7 text-sm text-gray-600">Sobrenome</label>
                                    <input
                                        type="text"
                                        id="sobrenome"
                                        name="sobrenome"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="telefone" className="leading-7 text-sm text-gray-600">Telefone</label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        name="telefone"
                                        value={mensagem.telefone}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={mensagem.email}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="mensagem" className="leading-7 text-sm text-gray-600">Mensagem</label>
                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        value={mensagem.mensagem}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    onClick={fetchMensagem}
                                    className="flex mx-auto text-white bg-vh border-0 py-2 px-8 focus:outline-none hover:bg-vh2 duration-[200ms] rounded text-lg"
                                >
                                    Enviar
                                </button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <a className="text-indigo-500">vhwebsolutions@gmail.com</a>
                                <p className="leading-normal my-5">Vitor e Henrique,
                                    <br />Florianópolis, Santa Catarina.
                                </p>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contato;
