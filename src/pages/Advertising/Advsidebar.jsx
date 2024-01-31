import { useState } from "react";
import { FaHackerNews } from "react-icons/fa6";
import { IoIosPhotos } from "react-icons/io";
import { MdDiscount, MdMenuOpen, MdReviews } from "react-icons/md";


export default function Advsidebar() {
    const [sidebar, setSidebar] = useState(true);
  return (
    <div className={`border ${sidebar ? 'w-64' : 'w-16'} transition-all h-screen flex flex-col items-center justify-center`}>
        <div className='w-[90%] h-[95%] flex flex-col gap-y-5'>
            <div className="w-full flex items-center justify-between h-16">
                <h1 className="text-[#0974E9] font-bold text-4xl">{sidebar ? 'Delever' : 'D'}</h1>
                <button onClick={() =>  setSidebar(!sidebar)} className="text-2xl text-[#5B77A0]"><MdMenuOpen /></button>
            </div>
            <div className="flex flex-col gap-2">
                <button className="rounded-md w-full h-10 hover:bg-[#4094F7] focus-within:bg-[#4094F7] flex items-center pl-5 text-lg transition-all hover:text-white focus-within:text-white">{sidebar ? 'Акции' : <MdDiscount />}</button>
                <button className="rounded-md w-full h-10 hover:bg-[#4094F7] focus-within:bg-[#4094F7] flex items-center pl-5 text-lg transition-all hover:text-white focus-within:text-white">{sidebar ? 'Баннеры' : <IoIosPhotos />}</button>
                <button className="rounded-md w-full h-10 hover:bg-[#4094F7] focus-within:bg-[#4094F7] flex items-center pl-5 text-lg transition-all hover:text-white focus-within:text-white">{sidebar ? 'Отзывы' : <MdReviews />}</button>
                <button className="rounded-md w-full h-10 hover:bg-[#4094F7] focus-within:bg-[#4094F7] flex items-center pl-5 text-lg transition-all hover:text-white focus-within:text-white">{sidebar ? 'Рассылка' : <FaHackerNews />}</button>
            </div>
        </div>
    </div>
  )
}
