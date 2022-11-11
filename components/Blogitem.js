import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Blogitem = (props) => {

    let src = '/blog/' + props.src;
    return (
        <>

            <div className="p-4 md:w-1/2 lg:w-1/3   ">
                <div className="h-full border-1 border-gray-100 bg-gray-100 shadow dark:border-dark-bg-2 dark:bg-dark-bg-2 dark:text-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <Link href={src}>
                        <a>
                            <Image className="lg:h-48 cursor-pointer md:h-36 w-full object-cover object-center" width={500} height={300} src={props.img} alt="blog" />
                        </a>
                    </Link>
                    <div className="p-6">
                        <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 dark:text-gray-200 mb-1">{props.date}</h3>
                        <h2 className="title-font text-lg font-medium text-gray-900 dark:text-gray-50 mb-3">{props.title}</h2>
                        <p className="leading-relaxed mb-3">{props.desc}</p>
                        <div className="flex items-center flex-wrap ">
                            <Link href={src}>
                                <a className="text-primary inline-flex items-center md:mb-2 lg:mb-0">Read More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogitem