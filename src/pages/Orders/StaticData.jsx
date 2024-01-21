import { personalData } from "../../components/data";

export default function StaticData() {
 

  return (
    <div className="bg-[#DCE9F9] w-[100%] h-screen flex justify-center overflow-y-scroll py-5 ">
      <div className="bg-white w-[97%] h-[1200px] flex flex-col items-center gap-5 rounded-md">
        <div className="w-[95%] border-b-2 flex items-center h-[5%]">
          <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
            Курьер в пути
          </p>
          <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
            Новый
          </p>
          <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
            Оператор принял
          </p>
          <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
            Загатовка
          </p>
          <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
            Завершен
          </p>
          <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
            Все заказы
          </p>
        </div>
        <div className="w-[95%] h-[90%] border-2 rounded-md">
          <div className="border-b-2 w-full h-12 flex justify-between">
            <span className="flex items-center w-14 h-full justify-center">
              <input type="checkbox" className="w-5" />
            </span>
            <b className="w-12 h-full flex items-center justify-center">№</b>
            <b className=" px-1 w-[224px] h-full flex items-center justify-center">
              Клиент
            </b>
            <b className=" px-1 w-[104px] h-full flex items-center justify-center">
              Ид.заказа
            </b>
            <b className=" px-1 w-[120px] h-full flex items-center justify-center">
              Таймер
            </b>
            <b className=" px-1 w-[88px] h-full flex items-center justify-center">
              Курьер
            </b>
            <b className=" px-1 w-[224px] h-full flex items-center justify-center">
              Филиал
            </b>
            <b className=" px-1 w-[136px] h-full flex items-center justify-center">
              Тип доставки
            </b>
            <b className=" px-1 w-32 h-full flex items-center justify-center">
              Цена заказа
            </b>
            <b className=" px-1 w-36 h-full flex items-center justify-center">
              Адресс клиента
            </b>
            <span className="w-12 h-full"></span>
          </div>
          {personalData.map((data) => {
            return (
              <div
                key={data.id}
                className="border-b-2 w-full h-16 flex justify-between"
              >
                <span className="flex items-center w-14 h-full justify-center">
                  <input type="checkbox" className="w-5" />
                </span>
                <b className="w-12 h-full flex items-center justify-center">
                  1
                </b>
                <span className="px-1 w-[224px] h-full flex flex-col justify-center items-center gap-1">
                  <p>{data.name}</p>
                  <p className="text-blue-500">{data.number}</p>
                </span>
                <p className="px-1 w-[104px] h-full flex items-center justify-center">
                  {data.id}
                </p>
                <span className="px-1 w-[120px] h-full flex items-center justify-center">
                  <p className="bg-[#38D9B933] px-2 py-1 rounded-md text-green-500">
                    {data.timer}
                  </p>
                </span>
                <b className="px-1 w-[88px] h-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="2"
                    viewBox="0 0 14 2"
                    fill="none"
                  >
                    <path d="M14 0.5H0V1.5H14V0.5Z" fill="#6E8BB7" />
                  </svg>
                </b>
                <span className="px-1 w-[224px] h-full flex flex-col justify-center items-center gap-1">
                  <p>{data.branch}</p>
                  <p className="text-blue-500">{data.phone}</p>
                </span>
                <span className="px-1 w-[136px] h-full flex items-center justify-center capitalize">
                  <p className="bg-[#F8DD4E4D] px-2 py-1 rounded-md text-[#D29404]">
                    {data.type}
                  </p>
                </span>
                <p className="px-1 w-32 h-full flex items-center justify-center">
                  {data.price}$
                </p>
                <p className="px-1 w-36 h-full flex items-center">
                  {data.clientAddress}
                </p>
                <span className="w-12 h-full flex items-center justify-center">
                  <button className="border-2 p-1 rounded-md">
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
