import { useState, useEffect } from "react";
import { getDataProfile } from "../../services/PostService";

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        imageUrl: 'https://via.placeholder.com/600x400', // URL de la imagen del post
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        imageUrl: 'https://via.placeholder.com/600x400', // URL de la imagen del post
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        imageUrl: 'https://via.placeholder.com/600x400', // URL de la imagen del post
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // Agrega más posts aquí...
];

export default function Post() {
    const [profileData, setProfileData] = useState(() => {
        // Intenta recuperar los datos del localStorage
        const savedData = localStorage.getItem('profileData');
        return savedData ? JSON.parse(savedData) : null;
    });


    const obtenerData = async () => {
        const data = await getDataProfile();
        setProfileData(data)
        console.log(data)
        localStorage.setItem('profileData', JSON.stringify(data));
    }
    useEffect(() => {
        if (!profileData) {
            obtenerData(); // Solo hace la consulta si no hay datos almacenados
        }
        // Configura el timer para hacer la consulta cada 1 hora (en milisegundos)
        const intervalId = setInterval(() => {
            obtenerData(); // Realiza la consulta cada 1 hora
        }, 60 * 60 * 1000); // 1 hora = 60 * 60 * 1000 milisegundos

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, [profileData]);

    console.log(profileData.posts.data)

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        {profileData.name}
                    </p>
                </div>
                <div>{profileData.posts.data ? (
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {profileData.posts.data.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                {/* Imagen del post */}
                                <img src={post.full_picture} alt='' className="w-full h-48 object-cover rounded-lg" />
                                {(!post.video_buying_eligibility || post.video_buying_eligibility.lenght === 0) ? (
                                    <div class="fb-video" data-href={post.link} 
                                    data-allowfullscreen="true" data-width="500"></div>
                                ) : (
                                    <></>
                                )
                                }
                                <div className="flex items-center gap-x-4 text-xs mt-4">
                                    <time dateTime={post.created_time} className="text-gray-500">
                                        {post.created_time}
                                    </time>
                                    {/* <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a> */}
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.link}>
                                            <span className="absolute inset-0" />
                                            ''
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.message}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img alt="" src={post.icon} className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            {/* <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a> */}
                                        </p>
                                        <p className="text-gray-600"></p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}</div>

            </div>
        </div>
    );
}
