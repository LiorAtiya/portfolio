import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Sidebar() {

    const { theme, setTheme } = useTheme()

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <div>
            <Image
                src='https://int.nyt.com/newsgraphics/2020/these-people-are-not-real/top/stills/top-v4-1024-00000.jpg'
                alt='avatar'
                className='mx-auto border rounded-full'
                height='128'
                width='128'
                layout='intrinsic'
                quality='100'
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-Nunito'>
                <b>Lior Atiya</b></h3>
            <h3 className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>Software Developer</h3>
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
                <a href=''>
                    <AiFillGithub className='w-8 h-8 cursor-pointer' />
                </a>
                <a href=''>
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
            </div>
            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200'
                style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Israel</span>
                </div>
                <p className='my-2'>Lior4007@gmail.com</p>
                <p className='my-2'>+972-509883345</p>
            </div>
            <button onClick={() => window.open('mailto:lior4007@gmail.com')}
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none">Email me</button>
            <button onClick={changeTheme}
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">Toggle Theme</button>
        </div>
    )
}
