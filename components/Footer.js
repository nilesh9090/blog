import { ImInstagram, ImLinkedin, ImYoutube } from 'react-icons/im'
import logo from '../public/powermycode.jpg'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
    return (
        <>
            <footer className="text-gray-600 bg-gray-200 dark:bg-comp-bg dark:text-white body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-50">
                        <Image src={logo} alt="Nilesh" width={38} height={38} className=' text-white p-2 bg-yellow-500 rounded-full' />
                        <span className="ml-3 text-xl">Power My Code</span>
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Power My Code</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        {/* <Link href={'https://www.instagram.com/thisisnilesh_3/'}>
                            <a target={'_blank'} className="ml-3 text-gray-500">
                                <ImInstagram color='#888888' />
                            </a>
                        </Link>
                        <Link href={'https://github.com/Nilesh9106'}>
                            <a target={'_blank'} className="ml-3 text-gray-500">
                                <ImGithub color='#888888' />
                            </a>
                        </Link> */}
                        {/* <Link href={'https://www.youtube.com/channel/UCEoEup-QNJjuNVMvu8t8iKg'}>
                            <a target={'_blank'} className="ml-3 text-gray-500">
                                <ImYoutube  />
                            </a>
                        </Link> */}
                    </span>
                </div>
            </footer>
        </>
    )
}
