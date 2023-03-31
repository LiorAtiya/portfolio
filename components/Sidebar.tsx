import React, { useState, useEffect } from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Sidebar() {

    const { theme, setTheme } = useTheme()

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    // useEffect(() => {
    //     if (theme)
    //         setTheme('light');
    // }, []);

    return (
        <div>
            <Image
                src='/images/avatar.png'
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
                <a href='https://github.com/LiorAtiya' target="_blank">
                    <AiFillGithub className='w-8 h-8 cursor-pointer' />
                </a>
                <a href='https://www.linkedin.com/in/lior-atiya-136925163/' target="_blank">
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
            </div>
            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200'
                style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Israel</span>
                </div>
                <div className='flex items-center justify-center space-x-2'>
                    <AiOutlineMail size='20' />
                    <p className='my-2'>Lior4007@gmail.com</p>
                </div>
                <div className='flex items-center justify-center space-x-2'>
                    <AiOutlinePhone size='20' />
                    <p>+972-509883345</p>
                </div>
            </div>
            <button onClick={() => window.open('mailto:lior4007@gmail.com')}
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none">Email me</button>
            {

                theme === 'dark' ?
                    (
                        <button onClick={changeTheme}
                            className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">Light UI
                        </button>
                    )
                    :
                    (
                        <button onClick={changeTheme}
                            className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">Dark UI
                        </button>
                    )
            }
        </div>
    )
}
