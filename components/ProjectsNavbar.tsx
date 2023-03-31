import { Category } from '@/type'
import React, { FC, useState } from 'react'

const NavItem: FC<{ value: Category | 'all' , handlerFilterCategory:Function, active:string }> = ({ value, handlerFilterCategory, active }) => {
    
    let className = 'capitalize cursor-pointer hover:text-green'
    if(active === value)
        className += ' text-green'
        
    return (
        <li onClick={() => handlerFilterCategory(value)}
        className={className}>
            {value}
        </li>
    )
}


const ProjectsNavbar: FC<{handlerFilterCategory: Function, active:string}> = (props) => {
    return (
        <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
            <NavItem value='all' {...props}/>
            <NavItem value='javascript' {...props}/>
            <NavItem value='python' {...props}/>
            <NavItem value='java' {...props}/>
            <NavItem value='c++' {...props}/>
            <NavItem value='c' {...props}/>
        </div>
    )
}

export default ProjectsNavbar