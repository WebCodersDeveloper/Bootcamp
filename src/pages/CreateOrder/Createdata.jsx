import { useState } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { IoClose, IoPrint } from "react-icons/io5";
import { food } from "../../components/data";
import { FaClosedCaptioning, FaEquals, FaMinus, FaPlus } from "react-icons/fa6";

export default function Createdata() {
  const [secondPhone, setSecondPhone] = useState(false);
  const [addBtnShow, setaddBtnShow] = useState(true);
  const [selectValue, setselectValue] = useState("");
  const [count, setCount] = useState(1);

  console.log(selectValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="w-full h-16 border flex justify-between items-center pl-4 bg-[#e5e9eb73] relative">
        <div className="flex items-center h-full gap-2">
          <button className="h-full w-[77px] text-[#6E8BB7] focus-within:border-[#4094F7] focus-within:text-[#4094F7] border-b-[3px] transition-all border-transparent hover:border-[#4094F7] hover:text-[#4094F7]">
            Основное
          </button>
          <button className="h-full w-[187px] text-[#6E8BB7] border-b-[3px] focus-within:border-[#4094F7] focus-within:text-[#4094F7] transition-all border-transparent hover:border-[#4094F7] hover:text-[#4094F7]">
            История изменений
          </button>
        </div>
        <button className="px-3 w-[105px] h-full flex items-center justify-center gap-2 text-black hover:bg-[#4094F7] hover:text-white">
          <IoPrint />
          Печать
        </button>
      </div>
      <div className="bg-[#DCE9F9] w-[100%] h-screen flex justify-center overflow-y-scroll py-5 ">
        <div className="flex flex-col w-[96%] h-[10000px] gap-10">
          <div className="flex gap-10">
            <div className="bg-white w-[662px] max-h-[310px] pb-2 rounded-md flex flex-col items-center">
              <h2 className="w-full px-4 py-2 border-b-2">Клиент</h2>
              <div className="flex flex-col w-[96%] py-2">
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Тип клиента</b>
                  <select className="w-[510px] h-8 px-2 border-2 outline-none rounded-md">
                    <option>Тип клиента</option>
                    <option value="premium">Premium</option>
                    <option value="standart">Standard</option>
                    <option value="basic">Basic</option>
                  </select>
                </span>
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Имя</b>
                  <input
                    type="text"
                    placeholder="Введите имя"
                    className="w-[510px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Фамилия</b>
                  <input
                    type="text"
                    placeholder="Фамилия"
                    className="w-[510px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Телефон</b>
                  <input
                    type="text"
                    placeholder="Телефон"
                    className="w-[460px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                  {addBtnShow && (
                    <button
                      onClick={() => {
                        setaddBtnShow(!addBtnShow);
                        setSecondPhone(!secondPhone);
                      }}
                      className="w-7 h-7 rounded-md flex items-center justify-center bg-[#4094F71A] text-[#4094F7] text-base"
                    >
                      <IoMdAdd />
                    </button>
                  )}
                </span>
                {secondPhone && (
                  <span className="flex items-center py-1 gap-3">
                    <b className="w-24 text-[#48535B]">Телефон 2</b>
                    <input
                      type="text"
                      placeholder="Телефон 2"
                      className="w-[460px] h-8 px-2 border-2 outline-none rounded-md"
                    />
                    <button
                      onClick={() => {
                        setaddBtnShow(!addBtnShow);
                        setSecondPhone(!secondPhone);
                      }}
                      className="w-7 h-7 rounded-md flex items-center justify-center bg-[#FEE8E6] text-[#F76659] text-base"
                    >
                      <IoMdRemove />
                    </button>
                  </span>
                )}
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Описание</b>
                  <input
                    type="text"
                    placeholder="Описание"
                    className="w-[460px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
              </div>
            </div>
            <div className="bg-white w-[662px] rounded-md flex flex-col items-center pb-2 gap-2">
              <h2 className="w-full px-4 py-2 border-b-2">Доставка</h2>
              <div className="flex flex-wrap w-[96%] py-2 gap-8">
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Тип клиента</b>
                  <select className="w-[191px] h-8 px-2 border-2 outline-none rounded-md">
                    <option>Тип доставки</option>
                    <option value="food">Еда</option>
                    <option value="goods">Товары</option>
                    <option value="package">Посылка </option>
                  </select>
                </span>
                <span className="flex items-center py-1 ">
                  <b className="w-24 text-[#48535B]">Тариф</b>
                  <select className="w-[191px] h-8 px-2 border-2 outline-none rounded-md">
                    <option>Тариф</option>
                    <option value="food">Еда</option>
                    <option value="goods">Товары</option>
                    <option value="package">Посылка </option>
                  </select>
                </span>
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Адрес</b>
                  <input
                    type="text"
                    placeholder="Адрес или обьект"
                    className="w-[518px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.07306925311!2d69.201237675913!3d41.28551417131307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1706051648080!5m2!1sen!2s"
                width="600"
                height="350"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="flex flex-wrap w-[96%] py-2 gap-8">
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Филиал</b>
                  <input
                    type="text"
                    placeholder="Филиал"
                    className="w-[518px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Дом</b>
                  <input
                    type="text"
                    placeholder="Дом"
                    className="w-[191px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Квартира</b>
                  <input
                    type="text"
                    placeholder="Квартира"
                    className="w-[191px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Этаж</b>
                  <input
                    type="text"
                    placeholder="Этаж"
                    className="w-[518px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-[350px] bg-white rounded-md flex flex-col items-center">
            <h2 className="w-full px-4 py-3 border-b-2">Продукты</h2>
            <div className="w-[97%] h-[92px] flex items-center gap-5">
              <span className="flex  flex-col w-[384px] h-full justify-around">
                <b>Наименование</b>
                <select
                  value={selectValue}
                  onChange={(e) => setselectValue(e.target.value)}
                  className="cursor-pointer h-8 px-2 py-1 rounded-md border-2 outline-none focus-within:border-blue-500"
                >
                  {food.map((foodItem) => {
                    return (
                      <option key={foodItem.id} value={foodItem.name}>
                        {foodItem.name}
                      </option>
                    );
                  })}
                </select>
              </span>
              <span className="flex  flex-col h-full justify-around">
                <b>Цена</b>
                <p className="w-40 h-8 rounded-md border-2 flex items-center">
                  {food.map((item) => {
                    if (item.name === selectValue) {
                      return (
                        <span
                          className="w-full h-8 rounded-md border-2 border-blue-500 flex items-center pl-2"
                          key={item.id}
                        >
                          {item.price} so`m
                        </span>
                      );
                    }
                  })}
                </p>
              </span>
              <span className="mt-10 text-blue-500 text-xl">
                <IoMdClose />
              </span>
              <span className="mt-10 flex items-center rounded-md overflow-hidden">
                <button
                  onClick={handleDecrement}
                  className="h-8 w-8 border-2 rounded-l-md flex items-center justify-center text-blue-500 outline-none"
                >
                  <FaMinus />
                </button>
                <p className="w-14 h-8 flex items-center justify-center border-y-2">
                  {count}
                </p>
                <button
                  onClick={handleIncrement}
                  className="h-8 w-8 border-2 rounded-r-md flex items-center justify-center text-blue-500 outline-none"
                >
                  <FaPlus />
                </button>
              </span>
              <span className="mt-10 text-blue-500 text-xl">
                <FaEquals />
              </span>
              <span className="flex  flex-col h-full justify-around">
                <b>Общая стоимость</b>
                <p className="w-40 h-8 rounded-md border-2 flex items-center">
                  {food.map((item) => {
                    if (item.name === selectValue) {
                      let all = item.price * count;
                      return (
                        <span
                          className="w-full h-8 rounded-md border-2 border-blue-500 flex items-center pl-2"
                          key={item.id}
                        >
                          {all} so`m
                        </span>
                      );
                    }
                  })}
                </p>
              </span>
              <span className="flex  flex-col h-full justify-around">
                <b>Описание</b>
                <input
                  type="text"
                  placeholder="Описание"
                  className="w-[305px] pl-2 py-1 h-8 border-2 rounded-md outline-none focus-within:border-blue-500"
                />
              </span>
              <button className="mt-10 w-7 h-7 rounded-md flex items-center justify-center bg-[#FEE8E6] text-[#F76659] text-base">
                <IoClose />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
