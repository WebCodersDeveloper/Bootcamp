import { useState } from "react";

import {  IoPrint } from "react-icons/io5";


import ClientHome from "../../components/CreateData/ClientHome";
import ClientInfo from "../../components/CreateData/ClientInfo";
import ClientPay from "../../components/CreateData/ClientPay";
import ClientPay2 from "../../components/CreateData/ClientPay2";
// import Stopwatch from "./Stopwatch";

export default function Createdata() {
  const [BtnShow, setBtnShow] = useState(true);
  const [selectValue, setselectValue] = useState("");
  const [selectValue2, setselectValue2] = useState("");
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

// client Information
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [typeClient, setTypeClient] = useState("");

  // client Map Information
  const [typeProduct, setTypeProduct] = useState("")
  const [rate, setRate] = useState("");
  const [adress, setAdress] = useState("");
  const [barnch, setBranch] = useState("");
  const [dom, setDom] = useState("");
  const [kvr, setKvr] = useState("");
  const [etaj, setEtaj] = useState("");


  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleIncrement2 = () => {
    setCount2(count2 + 1);
  };

  const handleDecrement2 = () => {
    if (count2 > 1) {
      setCount2(count2 - 1);
    }
  };

  
  const handleAdd = () => {
    if (showFirst === false && showSecond === false) {
      setShowFirst(!showFirst);
    } else if (showSecond === false && showFirst === true) {
      setShowSecond(!showSecond);
      setBtnShow(!BtnShow);
    } else if (showSecond === true && showFirst === false) {
      setShowFirst(!showFirst);
      setBtnShow(!BtnShow);
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
        <div className="flex flex-col w-[96%] h-[1300px] gap-10">
          <div className="flex gap-10">
            <ClientInfo
              name={name}
              setName={setName}
              lastName={lastName}
              setLastName={setLastName}
              phone={phone}
              setPhone={setPhone}
              phone2={phone2}
              setPhone2={setPhone2}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              typeClient={typeClient}
              setTypeClient={setTypeClient}
            />
            <ClientHome />
          </div>
          <div className="w-full h-[410px] bg-white rounded-md flex flex-col items-center gap-4">
            <h2 className="w-full px-4 py-3 border-b-2">Продукты</h2>
            <ClientPay
              selectValue={selectValue}
              setselectValue={setselectValue}
              selectValue2={selectValue2}
              setselectValue2={setselectValue2}
              handleAdd={handleAdd}
              handleDecrement={handleDecrement}
              handleDecrement2={handleDecrement2}
              handleIncrement={handleIncrement}
              handleIncrement2={handleIncrement2}
              showFirst={showFirst}
              setShowFirst={setShowFirst}
              setBtnShow={setBtnShow}
              
              setShowSecond={setShowSecond}
              showSecond={showSecond}
              count={count}
              count2={count2}
              BtnShow={BtnShow}
            />
            <ClientPay2 />
          </div>
        </div>
      </div>
      {/* <Stopwatch /> */}
    </>
  );
}
