import FadeInOnScroll from "../../../../scripts/fadeInOnScroll";
import Button from "../../../Button";

interface CustomProps {
    title: string,
    description: string,
    buttonText: string,
    url: string,
}

export default function Topper({ buttonText, title, description, url }: CustomProps) {
    return (
        <div className="w-full justify-between">
            <FadeInOnScroll>
            <div className="flex flex-col md:flex-row justify-between p-8 md:p-0">
            <div className="flex flex-col justify-start md:justify-center">
                <p className="text-3xl text-vh font-bold">{title}</p>
                <p className="text-base text-gray-800 mt-2 font-medium">{description}</p>
            </div>
                <a href={url} className="mt-6">
                    <Button text={buttonText} fontType="regular" fontSize="16" px="12" py="2" w="220px"/>
                </a>
            </div>
            <div className="h-[2px] w-full bg-gray-200  mt-5" />
            </FadeInOnScroll>
        </div>
    )
}
