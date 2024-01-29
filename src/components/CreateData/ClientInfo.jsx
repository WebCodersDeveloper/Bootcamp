/* eslint-disable react/prop-types */
import { useState } from "react";
import InputMask from "react-input-mask";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
export default function ClientInfo({
  name,
  setName,
  lastName,
  setLastName,
  phone,
  setPhone,
  phone2,
  setPhone2,
  userInfo,
  setUserInfo,
  typeClient,
  setTypeClient,
}) {
  const [secondPhone, setSecondPhone] = useState(false);
  const [addBtnShow, setaddBtnShow] = useState(true);

  return (
    <>
      <div className="bg-white w-[662px] max-h-[310px] pb-2 rounded-md flex flex-col items-center">
        <h2 className="w-full px-4 py-2 border-b-2">Клиент</h2>
        <div className="flex flex-col w-[96%] py-2">
          <span className="flex items-center py-1 gap-3">
            <b className="w-24 text-[#48535B]">Тип клиента</b>
            <select
              value={typeClient}
              onChange={(e) => setTypeClient(e.target.value)}
              className="w-[510px] h-8 px-2 border-2 outline-none rounded-md"
            >
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите имя"
              className="w-[510px] h-8 px-2 border-2 outline-none rounded-md"
            />
          </span>
          <span className="flex items-center py-1 gap-3">
            <b className="w-24 text-[#48535B]">Фамилия</b>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Фамилия"
              className="w-[510px] h-8 px-2 border-2 outline-none rounded-md"
            />
          </span>
          <span className="flex items-center py-1 gap-3">
            <b className="w-24 text-[#48535B]">Телефон</b>
            <InputMask
              // eslint-disable-next-line no-nonoctal-decimal-escape
              mask="+\9\98 99 999 99 99"
              placeholder="+998 XX XXX XX XX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              <InputMask
                // eslint-disable-next-line no-nonoctal-decimal-escape
                mask="+\9\98 99 999 99 99"
                placeholder="+998 XX XXX XX XX"
                value={phone2}
                onChange={(e) => setPhone2(e.target.value)}
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
              value={userInfo}
              onChange={(e) => setUserInfo(e.target.value)}
              type="text"
              placeholder="Описание"
              className="w-[460px] h-8 px-2 border-2 outline-none rounded-md"
            />
          </span>
        </div>
      </div>
    </>
  );
}
