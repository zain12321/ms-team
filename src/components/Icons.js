import React from 'react';
import { BsPencil, BsEmojiSmile } from 'react-icons/bs';
import { TbQuestionMark, TbDropCircle, TbFilePencil } from 'react-icons/tb';
import { RiFileGifLine, RiBuilding2Fill } from 'react-icons/ri';
import { AiOutlineFileImage } from 'react-icons/ai';
import { BiAward } from 'react-icons/bi';
import { MdTimer } from 'react-icons/md';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoAttachOutline } from 'react-icons/io5';

function Icons() {
	return (
		<div className="pt-[6px] pl-1 flex items-center space-x-[8px]">
			<p className="flex items-center text-[#616161] mt-[3px]">
				<span className="text-[12px] pr-[2px]">A</span>
				<BsPencil className="h-4 w-4 " />
			</p>
			<TbQuestionMark className="h-5 w-5 mt-[3px] text-[#616161] cur" />

			<IoAttachOutline className="h-6 mt-[3px] w-6 text-[#616161] rotate-10 cur" />
			<div className="flex space-x-[13px] ">
				<TbDropCircle className="h-5 w-5 text-[#616161] cur" />
				<BsEmojiSmile className="h-5 w-5 text-[#616161] cur" />
				<RiFileGifLine className="h-5 w-5 text-[#616161] cur" />
				<AiOutlineFileImage className="h-5 w-5 text-[#616161] cur" />

				<BiAward className="h-5 w-5 text-[#616161] cur" />
					
			<MdTimer className="h-5 w-5 text-[#616161] cur" />
				<RiBuilding2Fill className="h-5 w-5 text-[#616161] cur" />
			<div className='flex space-x-[9px] bottom-ico'>
			
				<TbFilePencil className="h-5 w-5 text-[#616161] cur" />
				<HiOutlineDotsHorizontal className="h-5 w-5 text-[#616161] cur" />
			</div>
		
			</div>
		</div>
	);
}

export default Icons;
