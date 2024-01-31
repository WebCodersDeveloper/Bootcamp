/* eslint-disable react/prop-types */
import { IoMdAdd, IoMdRefresh } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdAdd, MdCloseFullscreen } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

export default function AdvTop({
    searchQuery,
    handleSearchChange,
    showSearchFilter,
    setShowSearchFilter,
    searchData,
    handleToggle,
    setShowFilter,
    showFilter
}) {


  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full h-16 flex justify-between items-center pl-4">
          <h2 className="text-xl font-bold text-[#303940]">Delever</h2>
          <div className="h-full flex">
            <button className="border-l-2 text-[#4094F7]  w-[180px] h-full flex items-center justify-center gap-1">
              <IoMdRefresh />
              <p className="">Обновить Telegram</p>
            </button>
            <Link className="border-l-2 transition-all w-[130px] h-full flex items-center text-[#1AC19D] justify-center gap-1 hover:bg-[#1AC19D] hover:text-white">
              <IoMdAdd />
              <p>Добавить</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-16 border flex justify-between items-center pl-4 bg-[#e5e9eb73] relative">
        <input
          type="text"
          placeholder="Поиск"
          className="w-96 border-2 pl-8 py-1 outline-none rounded-md"
          value={searchQuery}
          onChange={handleSearchChange}
          onClick={() => setShowSearchFilter(!showSearchFilter)}
        />
        {showSearchFilter && (
          <div className="z-20 w-96 border-2 rounded-md bg-[#f2f7f9d2] flex flex-col items-center absolute top-[95%] left-[1%]">
            {searchData.map((search) => {
              return (
                <span
                  key={search.id}
                  className="flex items-center justify-between px-3 h-14 w-[100%] border-b-2"
                >
                  <p>{search.name}</p>
                  <button
                    className={`${
                      search.isTrue ? "bg-blue-500" : "bg-gray-200"
                    } relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={() => handleToggle(search.id)}
                  >
                    <span
                      className={`${
                        search.isTrue ? "translate-x-7" : "translate-x-0"
                      } inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                    />
                  </button>
                </span>
              );
            })}
            <button
              onClick={() => setShowSearchFilter(!showSearchFilter)}
              className="bg-blue-500 w-full py-1 flex items-center justify-center text-white text-xl rounded-b-md"
            >
              <MdCloseFullscreen />
            </button>
          </div>
        )}
        <span className="absolute left-[1.5%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_4634_805)">
              <path
                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                fill="#B0BABF"
              />
            </g>
            <defs>
              <clipPath id="clip0_4634_805">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <div className="px-5 flex items-center gap-2">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="w-28 h-full flex items-center justify-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.54169 4.67492C5.47503 7.15825 8.33336 10.8333 8.33336 10.8333L8.33336 14.9999C8.33336 15.9166 9.08336 16.6666 10 16.6666C10.9167 16.6666 11.6667 15.9166 11.6667 14.9999V10.8333C11.6667 10.8333 14.525 7.15825 16.4584 4.67492C16.8834 4.12492 16.4917 3.33325 15.7917 3.33325L4.20003 3.33325C3.50836 3.33325 3.11669 4.12492 3.54169 4.67492Z"
                fill="#303940"
              />
            </svg>
            Фильтр
          </button>
          {showFilter && (
            <div className="w-[564px] h-32 border-2 rounded-md bg-[#F7F9FB] flex  items-center justify-center absolute top-[95%] left-[50%]">
              <div className="w-[95%] h-[80%] flex flex-wrap gap-x-4">
                <select className="w-[292px] h-10 rounded-md flex items-center px-2 outline-none border-2">
                  <option>Тип доставки</option>
                  <option value="On foot">Пешком</option>
                  <option value="Bike">Велосипед</option>
                  <option value="In car">В машине</option>
                </select>
                <select className="w-[160px] h-10 rounded-md flex items-center px-2 outline-none border-2">
                  <option value="Pickup">Самовывоз</option>
                  <option value="Delivery">Доставка</option>
                </select>
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className="bg-[#F7665926] w-8 h-8 rounded-md flex items-center justify-center text-red-500 mt-1"
                >
                  <IoCloseSharp />
                </button>
                <button className="w-[180px] h-10 flex items-center justify-center gap-1 bg-[#38D9B9] rounded-md text-white text-sm font-semibold">
                  {" "}
                  <span className="text-lg fonb">
                    <MdAdd />
                  </span>{" "}
                  Добавить филтер
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
