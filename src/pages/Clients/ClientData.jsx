import { useState } from "react";
import { personalData, searchFilter } from "../../components/data";
import { MdCloseFullscreen, MdEdit } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FaCar, FaCheck } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { IoMdClose, IoMdRefresh } from "react-icons/io";
export default function ClientData() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState(searchFilter);
  const [showSearchFilter, setShowSearchFilter] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPersonalData = personalData.filter((data) =>
    data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = (id) => {
    setSearchData((prevSearchData) => {
      const updatedSearchData = prevSearchData.map((item) => {
        if (item.id === id) {
          console.log(item.isTrue, id);
          return {
            ...item,
            isTrue: !item.isTrue,
          };
        }
        return item;
      });
      return updatedSearchData;
    });
  };

  const handleShow = (id) => {
    personalData.map((item) => {
      if (item.id === id) {
        item.isEdit = !item.isEdit;
      }
      console.log(item.isEdit);
    });
    return personalData;
  };

  return (
    <>
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

      <div className="bg-[#DCE9F9] w-[100%] h-screen flex justify-center overflow-y-scroll py-5 ">
        <div className="w-[97%]  h-[1400px] flex flex-col items-center gap-5 rounded-md">
          <div className="flex justify-between w-[95%]">
            <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-10">
              <span className="flex flex-col">
                <b className="text-[#4094F7] text-2xl font-bold">24</b>
                <p className="text-[#6E8BB7] text-sm">Филиалы</p>
              </span>
              <span className="p-5 bg-[#4094f726] rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M29.2149 7.43636V2.86136C29.2149 2.22922 28.7041 1.71851 28.072 1.71851H3.92915C3.29701 1.71851 2.78629 2.22922 2.78629 2.86136V7.43636C2.18987 7.47208 1.71487 7.9685 1.71487 8.57565V13.2792C1.71258 14.1437 1.88761 14.9994 2.22915 15.7935C2.38272 16.1578 2.57201 16.5006 2.78629 16.8256V29.1471C2.78629 29.7756 3.29701 30.2899 3.92915 30.2899H28.072C28.7041 30.2899 29.2149 29.7792 29.2149 29.1471V16.8256C29.4325 16.4998 29.6191 16.1543 29.772 15.7935C30.1113 14.9971 30.2863 14.1506 30.2863 13.2792V8.57565C30.2863 7.9685 29.8113 7.47208 29.2149 7.43636ZM5.35772 4.28993H26.6434V7.43279H5.35772V4.28993ZM18.2863 27.7221H13.7149V24.0042H18.2863V27.7221ZM26.6434 27.7221H20.572V22.8614C20.572 22.2292 20.0613 21.7185 19.4291 21.7185H12.572C11.9399 21.7185 11.4292 22.2292 11.4292 22.8614V27.7221H5.35772V19.0721C5.46129 19.1221 5.56844 19.1721 5.67915 19.2149C6.47558 19.5506 7.32201 19.7185 8.19344 19.7185C9.06487 19.7185 9.90772 19.5506 10.7077 19.2149C11.2006 19.0078 11.6649 18.7435 12.0899 18.4256C12.097 18.4221 12.1042 18.4221 12.1113 18.4256C12.5376 18.7449 13.0019 19.01 13.4934 19.2149C14.2899 19.5506 15.1363 19.7185 16.0077 19.7185C16.8792 19.7185 17.722 19.5506 18.522 19.2149C19.0149 19.0078 19.4791 18.7435 19.9042 18.4256C19.9113 18.4221 19.9184 18.4221 19.9256 18.4256C20.3519 18.7449 20.8162 19.01 21.3077 19.2149C22.1041 19.5506 22.9506 19.7185 23.822 19.7185C24.6934 19.7185 25.5363 19.5506 26.3363 19.2149C26.4434 19.1685 26.5506 19.1221 26.6577 19.0721V27.7221H26.6434ZM27.7149 13.2792C27.7149 15.4149 25.9649 17.1471 23.8113 17.1471C22.3542 17.1471 21.0827 16.3578 20.4113 15.1864C20.3077 15.0078 20.122 14.8971 19.9149 14.8971H19.8934C19.6899 14.8971 19.5006 15.0078 19.397 15.1864C19.0544 15.7839 18.5596 16.2801 17.9631 16.6245C17.3665 16.9689 16.6894 17.1492 16.0006 17.1471C14.547 17.1471 13.2792 16.3614 12.6077 15.1935C12.5006 15.0114 12.3077 14.8971 12.097 14.8971C11.8863 14.8971 11.6899 15.0114 11.5863 15.1935C11.2417 15.7888 10.7463 16.2828 10.15 16.6257C9.55378 16.9687 8.87771 17.1485 8.18987 17.1471C6.03629 17.1471 4.28629 15.4149 4.28629 13.2792V10.0221C4.28629 10.0114 4.29344 10.0042 4.30415 10.0042H27.697C27.7077 10.0042 27.7149 10.0114 27.7149 10.0221V13.2792Z"
                    fill="#4094F7"
                  />
                </svg>
              </span>
            </div>
            <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-10">
              <span className="flex flex-col">
                <b className="text-[#4094F7] text-2xl font-bold">110,823</b>
                <p className="text-[#6E8BB7] text-sm">Клиенты</p>
              </span>
              <span className="p-5 bg-[#4094f726] rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M14.6667 10.6667C14.6667 11.7276 14.2452 12.745 13.4951 13.4951C12.7449 14.2453 11.7275 14.6667 10.6667 14.6667C9.6058 14.6667 8.58839 14.2453 7.83824 13.4951C7.08809 12.745 6.66667 11.7276 6.66667 10.6667C6.66667 9.60582 7.08809 8.58841 7.83824 7.83826C8.58839 7.08811 9.6058 6.66669 10.6667 6.66669C11.7275 6.66669 12.7449 7.08811 13.4951 7.83826C14.2452 8.58841 14.6667 9.60582 14.6667 10.6667ZM25.3333 10.6667C25.3333 11.192 25.2299 11.7121 25.0289 12.1974C24.8278 12.6827 24.5332 13.1237 24.1618 13.4951C23.7903 13.8665 23.3494 14.1612 22.8641 14.3622C22.3788 14.5632 21.8586 14.6667 21.3333 14.6667C20.808 14.6667 20.2879 14.5632 19.8026 14.3622C19.3173 14.1612 18.8763 13.8665 18.5049 13.4951C18.1335 13.1237 17.8388 12.6827 17.6378 12.1974C17.4368 11.7121 17.3333 11.192 17.3333 10.6667C17.3333 9.60582 17.7548 8.58841 18.5049 7.83826C19.2551 7.08811 20.2725 6.66669 21.3333 6.66669C22.3942 6.66669 23.4116 7.08811 24.1618 7.83826C24.9119 8.58841 25.3333 9.60582 25.3333 10.6667ZM19.9067 25.3334C19.968 24.8974 20 24.4534 20 24C20.0031 21.9052 19.2983 19.8707 18 18.2267C19.0134 17.6416 20.1631 17.3335 21.3333 17.3335C22.5035 17.3335 23.6531 17.6415 24.6666 18.2266C25.68 18.8117 26.5216 19.6533 27.1068 20.6667C27.6919 21.6802 28 22.8298 28 24V25.3334H19.9067ZM10.6667 17.3334C12.4348 17.3334 14.1305 18.0357 15.3807 19.286C16.631 20.5362 17.3333 22.2319 17.3333 24V25.3334H4V24C4 22.2319 4.70238 20.5362 5.95262 19.286C7.20286 18.0357 8.89856 17.3334 10.6667 17.3334Z"
                    fill="#4094F7"
                  />
                </svg>
              </span>
            </div>
            <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-10">
              <span className="flex flex-col">
                <b className="text-[#4094F7] text-2xl font-bold">110,823</b>
                <p className="text-[#6E8BB7] text-sm">Подписчики</p>
              </span>
              <span className="p-5 bg-[#4094f726] rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_88_4935)">
                    <path
                      d="M16.0001 29.3333C17.4667 29.3333 18.6667 28.1333 18.6667 26.6666H13.3334C13.3334 28.1333 14.5201 29.3333 16.0001 29.3333ZM24.0001 21.3333V14.6666C24.0001 10.5733 21.8134 7.14665 18.0001 6.23998V5.33331C18.0001 4.22665 17.1067 3.33331 16.0001 3.33331C14.8934 3.33331 14.0001 4.22665 14.0001 5.33331V6.23998C10.1734 7.14665 8.00007 10.56 8.00007 14.6666V21.3333L6.28007 23.0533C5.44007 23.8933 6.02674 25.3333 7.2134 25.3333H24.7734C25.9601 25.3333 26.5601 23.8933 25.7201 23.0533L24.0001 21.3333Z"
                      fill="#4094F7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_88_4935">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-10">
              <span className="flex flex-col">
                <b className="text-[#4094F7] text-2xl font-bold">75</b>
                <p className="text-[#6E8BB7] text-sm">Курьеры</p>
              </span>
              <span className="p-5 bg-[#4094f726] rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_88_4943)">
                    <path
                      d="M25.2267 8.01335C24.96 7.22669 24.2133 6.66669 23.3333 6.66669H8.66667C7.78667 6.66669 7.05333 7.22669 6.77333 8.01335L4.14667 15.5734C4.05333 15.8534 4 16.1467 4 16.4534V26C4 27.1067 4.89333 28 6 28C7.10667 28 8 27.1067 8 26V25.3334H24V26C24 27.0934 24.8933 28 26 28C27.0933 28 28 27.1067 28 26V16.4534C28 16.16 27.9467 15.8534 27.8533 15.5734L25.2267 8.01335ZM8.66667 21.3334C7.56 21.3334 6.66667 20.44 6.66667 19.3334C6.66667 18.2267 7.56 17.3334 8.66667 17.3334C9.77333 17.3334 10.6667 18.2267 10.6667 19.3334C10.6667 20.44 9.77333 21.3334 8.66667 21.3334ZM23.3333 21.3334C22.2267 21.3334 21.3333 20.44 21.3333 19.3334C21.3333 18.2267 22.2267 17.3334 23.3333 17.3334C24.44 17.3334 25.3333 18.2267 25.3333 19.3334C25.3333 20.44 24.44 21.3334 23.3333 21.3334ZM6.66667 14.6667L8.36 9.57335C8.54667 9.04002 9.05333 8.66669 9.62667 8.66669H22.3733C22.9467 8.66669 23.4533 9.04002 23.64 9.57335L25.3333 14.6667H6.66667Z"
                      fill="#4094F7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_88_4943">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
          <div className="bg-white w-[95%] h-[90%] flex items-center justify-center  rounded-md relative">
            <div className="border-2 rounded-md w-[95%] h-[95%]">
            <div className="border-b-2 w-full h-12 flex justify-between">
              <b className="h-full w-[776px] flex items-center pl-8 ">
                Название
              </b>
              <b className="h-full w-[240px] flex items-center justify-center ">
                Номер телефона
              </b>
              <b className="h-full w-[240px] flex items-center justify-center ">
                Статус
              </b>
              <span className="w-12 h-full"></span>
            </div>
            {filteredPersonalData.map((data) => {
              return (
                <div
                  key={data.id}
                  className="border-b-2 w-full h-16 flex justify-between relative"
                >
                  <p className="h-full w-[776px] flex items-center pl-8">{data.name}</p>
                  <p className="h-full w-[240px] flex items-center justify-center">{data.number}</p>
                  <span className="h-full w-[240px] flex items-center justify-center">
                    <p className="w-36 h-7 rounded-md bg-[#4094F726] flex items-center justify-center capitalize text-[#4094F7]">{data.type}</p>
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
