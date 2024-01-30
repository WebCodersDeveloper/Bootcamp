import { FaSave } from "react-icons/fa";
import {  FaArrowLeft,  FaChevronRight,  FaFolder } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ClientTop() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full h-16 flex justify-between items-center pl-4">
          <div className="flex h-full items-center gap-4">
            <span className="text-[#b4babd]">
                <FaArrowLeft />
            </span>
            <Link to="/clients" className="text-[#6E7C87] flex items-center gap-3">
                <FaFolder className="text-[#D5DADD]"/>
                <p>Клиенты</p>
                <FaChevronRight className="text-[#D5DADD]"/>
            </Link>
            <span className="text-[#6E7C87] flex items-center gap-3">
                <FaFolder className="text-[#4094F7]"/>
                <p>София Андианова</p>
            </span>
          </div>
          <div className="h-full flex">
            <button className="border-l-2  w-[130px] h-full flex items-center justify-center gap-1">
                <span className="text-[#F76659]">
                    <IoIosCloseCircle />
                </span>
              <p className="text-[#F76659]">Отменить</p>
            </button>
            <Link
              to="createorder"
              className="border-l-2 transition-all w-[130px] h-full flex items-center text-[#4094F7] justify-center gap-1 hover:bg-[#4094F7] hover:text-white"
            >
              <FaSave />
              <p>Сохранить</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-16 border flex justify-between items-center pl-4 bg-[#e5e9eb73] relative">
        <div className="flex gap-5 h-full items-center">
          <Link className="hover:text-[#4094F7] px-3 flex py-2 h-full border-b-[3px] border-transparent hover:border-[#4094F7] items-center font-semibold focus-within:text-[#4094F7] focus-within:border-[#4094F7]">
            О клиенте
          </Link>
          <Link className="hover:text-[#4094F7] px-3 flex py-2 h-full border-b-[3px] border-transparent hover:border-[#4094F7] items-center font-semibold focus-within:text-[#4094F7] focus-within:border-[#4094F7]">
            Заказы
          </Link>
        </div>
        <div className="px-5 flex items-center gap-2"></div>
      </div>
    </>
  );
}
