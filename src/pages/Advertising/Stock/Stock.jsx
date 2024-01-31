/* eslint-disable react/prop-types */
import { FaCar, FaCheck, } from "react-icons/fa6";
import { IoMdClose, IoMdRefresh } from "react-icons/io";
import { MdEdit } from "react-icons/md";
// import { Link } from "react-router-dom";

export default function Stock({handleShow, filteredPersonalData}) {
  return (
    <>
      <div className="bg-[#DCE9F9] border  h-screen flex justify-center overflow-y-scroll py-5 ">
        <div className="w-[95%] h-[1400px] flex flex-col items-center gap-5 rounded-md">
          <div className="bg-white w-[90%] h-[90%] flex items-center justify-center  rounded-md relative">
            <div className="border-2 rounded-md w-[95%] h-[95%]">
              <div className="border-b-2 w-full h-12 flex justify-between">
                <b className="h-full w-[776px] flex items-center pl-8 ">
                  Название
                </b>
                <b className="h-full w-[200px] flex items-center justify-center ">
                    Начало акции
                </b>
                <b className="h-full w-[200px] flex items-center justify-center ">
                    Конец акции
                </b>
                <b className="h-full w-[240px] flex items-center justify-center ">
                  Статус
                </b>
                <span className="w-12 h-full"></span>
              </div>
              {filteredPersonalData.map((data) => {
                return (
                  <div
                    to={data.id}
                    key={data.id}
                    className="border-b-2 w-full h-16 flex justify-between relative pr-1"
                  >
                    <p className="h-full w-[776px] flex items-center pl-8">
                      {data.name}
                    </p>
                    <p className="h-full w-[240px] flex items-center justify-center">
                      {data.number}
                    </p>
                    <span className="h-full w-[240px] flex items-center justify-center">
                      <p className="w-36 h-7 rounded-md bg-[#4094F726] flex items-center justify-center capitalize text-[#4094F7]">
                        {data.type}
                      </p>
                    </span>
                    <span className="w-12 h-full flex items-center justify-center">
                      <button
                        onClick={() => handleShow(data.id)}
                        className="border-2 p-1 rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M6.66671 9.99992C6.66671 10.4419 6.49111 10.8659 6.17855 11.1784C5.86599 11.491 5.44207 11.6666 5.00004 11.6666C4.55801 11.6666 4.13409 11.491 3.82153 11.1784C3.50897 10.8659 3.33337 10.4419 3.33337 9.99992C3.33337 9.55789 3.50897 9.13397 3.82153 8.82141C4.13409 8.50885 4.55801 8.33325 5.00004 8.33325C5.44207 8.33325 5.86599 8.50885 6.17855 8.82141C6.49111 9.13397 6.66671 9.55789 6.66671 9.99992ZM11.6667 9.99992C11.6667 10.4419 11.4911 10.8659 11.1786 11.1784C10.866 11.491 10.4421 11.6666 10 11.6666C9.55801 11.6666 9.13409 11.491 8.82153 11.1784C8.50897 10.8659 8.33337 10.4419 8.33337 9.99992C8.33337 9.55789 8.50897 9.13397 8.82153 8.82141C9.13409 8.50885 9.55801 8.33325 10 8.33325C10.4421 8.33325 10.866 8.50885 11.1786 8.82141C11.4911 9.13397 11.6667 9.55789 11.6667 9.99992ZM15 11.6666C15.4421 11.6666 15.866 11.491 16.1786 11.1784C16.4911 10.8659 16.6667 10.4419 16.6667 9.99992C16.6667 9.55789 16.4911 9.13397 16.1786 8.82141C15.866 8.50885 15.4421 8.33325 15 8.33325C14.558 8.33325 14.1341 8.50885 13.8215 8.82141C13.509 9.13397 13.3334 9.55789 13.3334 9.99992C13.3334 10.4419 13.509 10.8659 13.8215 11.1784C14.1341 11.491 14.558 11.6666 15 11.6666Z"
                            fill="#4094F7"
                          />
                        </svg>
                      </button>
                    </span>
                    {data.isEdit === true && (
                      <div className="z-30 w-64 h-64 bg-[#fff] flex flex-col rounded-md justify-between absolute left-[75%] shadow-xl">
                        <button className="w-full py-2 flex items-center justify-between px-3">
                          <span className="w-8 h-8 rounded-md text-xl bg-[#FDF5CA] text-[#D29404] flex items-center justify-center">
                            <IoMdRefresh />
                          </span>
                          <p className="text-black text-sm font-medium">
                            Повторить выставить счет
                          </p>
                        </button>
                        <button className="w-full py-2 flex items-center justify-between px-3">
                          <span className="w-8 h-8 rounded-md text-xl bg-[#F6EBFD] text-[#C479F3] flex items-center justify-center">
                            <FaCar />
                          </span>
                          <p className="text-black text-sm font-medium">
                            Курьер отменил
                          </p>
                        </button>
                        <button className="w-full py-2 flex items-center justify-between px-3">
                          <span className="w-8 h-8 rounded-md text-xl bg-[#E3EFFE] text-[#4094F7] flex items-center justify-center">
                            <MdEdit />
                          </span>
                          <p className="text-black text-sm font-medium">
                            Изменить
                          </p>
                        </button>
                        <button className="w-full py-2 flex items-center justify-between px-3">
                          <span className="w-8 h-8 rounded-md text-xl bg-[#FEE8E6] text-[#F76659] flex items-center justify-center">
                            <IoMdClose />
                          </span>
                          <p className="text-black text-sm font-medium">
                            Отменено
                          </p>
                        </button>
                        <button className="w-full py-2 flex items-center justify-between px-3">
                          <span className="w-8 h-8 rounded-md text-xl bg-[#DDF6F1] text-[#1AC19D] flex items-center justify-center">
                            <FaCheck />
                          </span>
                          <p className="text-black text-sm font-medium">
                            Завершить
                          </p>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
