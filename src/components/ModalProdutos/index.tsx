import { HiOutlineArrowSmRight } from 'react-icons/hi'

interface CustomProps {
    subtitle: string,
    title: string,
    description: string,
    image: string,
    url: string,
    preco: string,
}

export default function ModalProdutos({ title, subtitle, description, image, url, preco }: CustomProps) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/4 p-4 min-h-[420px]">
            <img src={image} alt="imagem" className="w-full h-auto" />
            <p className="text-vh text-base mt-1">{subtitle}</p>
            <h1 className="text-xl font-medium">{title}</h1>
            <p>{description}</p>
            <div className='flex justify-between mt-2'>
                <p>R$ {preco}</p>
                <a href={url} className="cursor-pointer flex justify-end items-center gap-1 text-base font-medium text-vh2">
                    Comprar
                    <HiOutlineArrowSmRight className="mt-[2px]" />
                </a>
            </div>
        </div>
    )
}
