import Image from 'next/image';
import React from 'react';

interface Props {
    title:string,
    image:string,
    percent:string
}

const SkillCard = ({title, image, percent}: Props) => {
  return (
    <div className='p-6 hover:bg-red-600 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900'>
        <Image src={`${image}`} alt={title} width={80} height={80} className='object-cover mx-auto' />
        <h1 className='text-white mt-[1rem] text-[18px] font-[600]'>{title}</h1>
        <div className='bg-black mt-[1rem] rounded-lg p-2 opacity-40 text-white'>{percent}</div>
    </div>
  )
}

export default SkillCard
