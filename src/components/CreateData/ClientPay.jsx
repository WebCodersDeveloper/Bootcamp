/* eslint-disable react/prop-types */
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { food } from "../data";
import { FaEquals, FaMinus, FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function ClientPay({

    BtnShow,
    showFirst,
    count,
    count2,
    showSecond,
    selectValue,
    setselectValue,
    selectValue2,
    setselectValue2,
    handleAdd,
    handleDecrement,
    handleDecrement2,
    handleIncrement,
    handleIncrement2,
    setShowFirst,
    setShowSecond,
    setBtnShow
  }) {
  return (
    <>
      {showFirst && (
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
          <button
            onClick={() => {
              setShowFirst(!showFirst), setBtnShow(true);
            }}
            className="mt-10 w-7 h-7 rounded-md flex items-center justify-center bg-[#FEE8E6] text-[#F76659] text-base"
          >
            <IoClose />
          </button>
        </div>
      )}
      {showSecond && (
        <div className="w-[97%] h-[92px] flex items-center gap-5">
          <span className="flex  flex-col w-[384px] h-full justify-around">
            <b>Наименование</b>
            <select
              value={selectValue2}
              onChange={(e) => setselectValue2(e.target.value)}
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
                if (item.name === selectValue2) {
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
              onClick={handleDecrement2}
              className="h-8 w-8 border-2 rounded-l-md flex items-center justify-center text-blue-500 outline-none"
            >
              <FaMinus />
            </button>
            <p className="w-14 h-8 flex items-center justify-center border-y-2">
              {count2}
            </p>
            <button
              onClick={handleIncrement2}
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
                if (item.name === selectValue2) {
                  let all = item.price * count2;
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
          <button
            onClick={() => {
              setShowSecond(!showSecond), setBtnShow(true);
            }}
            className="mt-10 w-7 h-7 rounded-md flex items-center justify-center bg-[#FEE8E6] text-[#F76659] text-base"
          >
            <IoClose />
          </button>
        </div>
      )}
      {BtnShow && (
        <button
          onClick={() => handleAdd()}
          className="w-[97%] h-10 rounded-md border-dashed border-2 bg-[#6E8BB71A] flex items-center justify-center gap-1 text-[#6E8BB7]"
        >
          <IoMdAdd />
          Добавить продукт
        </button>
      )}
    </>
  );
}
