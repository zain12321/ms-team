import React from 'react'
import { BsPencil, BsEmojiSmile } from 'react-icons/bs'
import { TbQuestionMark, TbDropCircle, TbFilePencil } from 'react-icons/tb'
import {IoAttachOutline} from 'react-icons/io5'
import { RiFileGifLine, RiBuilding2Fill } from 'react-icons/ri'
import { AiOutlineFileImage } from 'react-icons/ai'
import { BiAward } from 'react-icons/bi'
import { MdTimer } from 'react-icons/md'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import {} from 'react-icons'
import {} from 'react-icons'

function Icons() {
  return (
    <div  className='pt-[6px] pl-4 flex'>
       <p className='flex items-center text-[#616161] '><span className='text-[15px] pr-[2px]'>A</span> 
       <BsPencil className='h-4 w-4'/>
        </p>
        <div className='flex space-x-2 pl-4'>
            <TbQuestionMark className='h-5 w-5 text-[#616161]'/>
            <IoAttachOutline className='h-5 w-5 text-[#616161] rotate-10'/>
            <TbDropCircle className='h-5 w-5 text-[#616161]'/>
            <BsEmojiSmile className='h-5 w-5 text-[#616161]'/>
            <RiFileGifLine className='h-5 w-5 text-[#616161]'/>
            <AiOutlineFileImage className='h-5 w-5 text-[#616161]'/>
            <BiAward className='h-5 w-5 text-[#616161]'/>
            <MdTimer className='h-5 w-5 text-[#616161]'/>
            <RiBuilding2Fill className='h-5 w-5 text-[#616161]'/>
            <TbFilePencil className='h-5 w-5 text-[#616161]'/>
            <HiOutlineDotsHorizontal className='h-5 w-5 text-[#616161]'/>
        </div>
    </div>
  )
}

export default Icons