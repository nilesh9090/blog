import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {  ImSun } from 'react-icons/im'
import { BsMoonStars } from 'react-icons/bs'
import Image from 'next/image'
import { useTheme } from 'next-themes'




const Navbar = (props) => {
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
        
    }, [])
    const { systemTheme, theme, setTheme } = useTheme();
    const renderThemeChanger = () => {
        if (!mounted) return null;
        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme != "dark") {
            return (
                <BsMoonStars className="w-8 h-8 text-gray-600 absolute top-5  md:right-16 right-4" role="button" onClick={() => setTheme('dark')} />
            )
        }
        else {
            return (
                <ImSun className="w-8 h-8 text-yellow-500 absolute top-5  md:right-16 right-4" role="button" onClick={() => setTheme('light')} />
            )
        }
    };


    return (
        <>
            <header className='bg-gray-200 shadow backdrop-blur-sm dark:bg-comp-bg dark:text-white sticky top-0 z-50'>
                <div className='xl:container xl:mx-auto flex flex-col items-center px-6 sm:flex-row text-center justify-start py-3'>
                    <div className='shrink w-80  '>
                        <Link href={'/'}>
                            <a className='font-bold text-2xl flex items-center gap-4 uppercase'><Image src={'/powermycode.jpg'} className='rounded-full' width={40} height={40} alt={'Powermycode'}/><h1>Power My Code</h1></a>
                        </Link>
                    </div>
                    <ul className='flex gap-5'>
                        <Link href={'/'}><li className='cursor-pointer hover:scale-105 '>Home</li></Link>
                        <Link href={'/blogs'}><li className='cursor-pointer hover:scale-105 '>Blogs</li></Link>
                    </ul>
                    
                </div>
                {renderThemeChanger()}
            </header>
        </>
    )
}

export default Navbar