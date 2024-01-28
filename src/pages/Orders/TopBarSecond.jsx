import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

export default function TopBarSecond() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-16 flex justify-between items-center pl-4">
        <h2 className="text-xl font-bold text-[#303940]">Delever</h2>
        <div className="h-full flex">
          <button className="border-l-2  w-[130px] h-full flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_4634_791)">
                <path
                  d="M2.5 14.5499V17.0832C2.5 17.3166 2.68333 17.4999 2.91667 17.4999H5.45C5.55833 17.4999 5.66667 17.4582 5.74167 17.3749L14.8417 8.28322L11.7167 5.15822L2.625 14.2499C2.54167 14.3332 2.5 14.4332 2.5 14.5499ZM17.2583 5.86655C17.5833 5.54155 17.5833 5.01655 17.2583 4.69155L15.3083 2.74155C14.9833 2.41655 14.4583 2.41655 14.1333 2.74155L12.6083 4.26655L15.7333 7.39155L17.2583 5.86655Z"
                  fill="#4094F7"
                />
              </g>
              <defs>
                <clipPath id="clip0_4634_791">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-[#4094F7]">Действия</p>
          </button>
          <Link to='createorder' className="border-l-2 transition-all w-[130px] h-full flex items-center text-[#1AC19D] justify-center gap-1 hover:bg-[#1AC19D] hover:text-white">
            <IoMdAdd />
            <p>Добавить</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
