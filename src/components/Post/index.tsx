import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

interface CustomProps {
    title: string,
    description: string,
    date: string,
    url: string,
    image: string,
}

export default function Post({ title, description, date, url, image }: CustomProps) {
    const navigate = useNavigate();
    
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 p-4  min-h-[410px]">
            <img src={image} alt="imagem" className="w-full h-auto" />
            <h1 className="text-base font-medium mt-2">{title}</h1>
            <p className="min-h-[80px]">{description}</p>
            <div className="flex justify-between">
                <p className="text-vh2">Postado: {date}</p>
                <a onClick={() => navigate(`/blog/${url}`)} className="cursor-pointer flex items-center gap-1 text-base font-medium text-[#242424]">
                    Ver mais
                    <HiOutlineArrowSmRight className="mt-[2px]" />
                </a>
            </div>
        </div>
    )
}
