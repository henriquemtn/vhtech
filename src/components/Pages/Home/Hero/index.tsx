import Button from '../../../Button'
import imagem from '../../../../assets/slider.png'
import FadeInOnScroll from '../../../../scripts/fadeInOnScroll'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CustomProps {
    text: string,
    description: string,
    buttonText: string,
}

export default function Hero({ text, description, buttonText }: CustomProps) {

    const notify = () => toast("Essa função ainda está em testes, novidades em breve!");

    const containerStyle = {
        background: `url(${imagem}) center/cover`,
    };

    return (
        <div className="flex flex-col justify-center items-center w-full h-[875px] relative lg:mb-0" >
            <div className="bg-gray-500 w-full h-[557px] md:rounded-[10px] lg:mx-[150px] flex-col justify-center mb-32" style={containerStyle}>
                <FadeInOnScroll>
                    <div className="flex flex-col mt-16 md:mt-20 px-2 md:items-start items-center justify-center md:justify-start md:ml-10 ms:ml-20 md:z-10 mb-6">
                        <h1 className="text-center md:text-start font-bold text-3xl md:text-4xl text-white mb-4 md:max-w-[550px] lg:max-w-[750px]">{text}</h1>
                        <p className="text-[14px] text-center md:text-start text-white mb-4 max-w-[350px] md:max-w-[550px] lg:max-w-[750px]">{description}</p>
                        <a href="/sobre">
                            <Button text={buttonText} fontType="regular" fontSize="16" px="12" py="2" w='100px' />
                        </a>
                    </div>
                    <div className='flex flex-row gap-7 ms:mt-2 px-2 text-white md:items-start items-center text-center sm:text-start justify-center md:justify-start md:ml-10 ms:ml-20 ms:z-10'>
                        <div>
                            <p>1200+</p>
                            <p>Premium product</p>
                        </div>
                        <div>
                            <p>4500+</p>
                            <p>Premium product</p>
                        </div>
                        <div>
                            <p>240+</p>
                            <p>Aware Winning</p>
                        </div>
                    </div>
                </FadeInOnScroll>
                <div className="w-full ds:h-[220px] flex justify-center absolute px-6 ds:px-12 bottom-[-22em] mm:bottom-[-15em] md:bottom-[-10em] lg:bottom-[-12rem] ds:bottom-[6em]">
                    <div className="bg-white w-full h-full flex flex-col shadow-md ds:flex-row justify-around items-center p-12 gap-7">
                        <FadeInOnScroll>
                            <div className='flex flex-col justify-around gap-4'>
                                <div className='flex flex-col justify-start'>
                                    <h1 className='text-[#454545] text-base lg:text-xl text-start'>Nos conte um pouco</h1>
                                    <p className='text-vh font-medium text-xl lg:text-3xl text-start'>Do que o seu negócio precisa?</p>
                                    <div className="bg-gray-200 h-[1px] w-1/3 mt-4" />
                                </div>
                                <div className='flex flex-col ds:flex-row justify-around items-start ds:items-center gap-7'>
                                    <div className='flex flex-col gap-2'>
                                        <p>1. Você está procurando um site? </p>
                                        <select name="automacao" className='bg-gray-200 p-2 w-full max-w-md'>
                                            <option value="sim">Sim</option>
                                            <option value="nao">Não</option>
                                            <option value="naosei">Não tenho certeza</option>
                                        </select>
                                    </div>
                                    <div className="bg-gray-200 h-[1px] w-2/3 ds:h-[62px] ds:w-[1px]" />
                                    <div className='flex flex-col gap-2'>
                                        <p>2. Para impulsionar o seu negócio, gostaria de alguma automação?</p>
                                        <select name="viagem" className='bg-gray-200 p-2 w-full max-w-md'>
                                            <option value="sim">Sim</option>
                                            <option value="nao">Não</option>
                                            <option value="naosei">Não tenho certeza</option>
                                        </select>
                                    </div>
                                    <div className="bg-gray-200 h-[1px] w-2/3 ds:h-[62px] ds:w-[1px]" />
                                    <div className='flex flex-col gap-2'>
                                        <p>3. Seu negócio precisa de algum sistema?</p>
                                        <select name="viagem" className='bg-gray-200 p-2 w-full max-w-md'>
                                            <option value="sim">Sim</option>
                                            <option value="nao">Não</option>
                                            <option value="naosei">Não tenho certeza</option>
                                        </select>
                                    </div>
                                    <a onClick={notify}>
                                        <Button text="Começar" fontType="regular" fontSize="16" px="12" py="2" w='100px' />
                                    </a>
                                </div>
                            </div>
                        </FadeInOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
