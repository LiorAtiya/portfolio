import { IService } from '@/type'
import React, { FC } from 'react'


const ServiceCard: FC<IService> = ({Icon,title,about}) => {
    
    const createMarkup = () => {
        return {
            __html: about,
        }
    }
    
    return (
        <div className='flex p-2 space-x-4 item-center'>
            <Icon className='w-12 h-12 text-green'/>
            <div>
                <h4 className='font-bold'>{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        </div>
    )
}

export default ServiceCard
