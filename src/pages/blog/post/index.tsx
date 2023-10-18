import { useParams } from 'react-router-dom';
import { postData } from '../../../data/data';

export default function PostPage() {
    const { post } = useParams<{ post: string }>();
    const postInfo = postData.find((item) => item.id === post);

    if (!postInfo) {
        return <div className='mt-[100px] lg:mt-[120px]'>Post não encontrado :(</div>;
    }

    const { title, image,} = postInfo;

    return (
        <section className="text-gray-600 body-font mt-20">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={image} />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10"> 
                        <div className="p-2">
                            <h1 className='text-xl md:text-2xl'>{title}</h1>
                            <div className='mt-2' dangerouslySetInnerHTML={{ __html: postInfo.description }}></div>
                            <a href='/blog' className="text-indigo-500 inline-flex items-center">Ver mais postagens
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
