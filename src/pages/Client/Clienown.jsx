// import { TbCurrencyDollarOff, TbSum } from "react-icons/tb";
// import { FaDollarSign } from "react-icons/fa6";
// import { MdLocalGroceryStore } from "react-icons/md";
// import { personalData } from "./../../components/data";

// export default function Clienown({ clientId }) {
//   const currentClientData = personalData;
//   const foundClient = currentClientData.find((item) => item.id === clientId.id);
//   console.log(foundClient);

//   return (
//     <>
//       <div className="flex flex-col w-[96%] h-[1300px] gap-10">
//         <div className="w-[97%]  h-[1400px] flex flex-col items-center gap-5 rounded-md">
//           <div className="flex justify-between w-full">
//             <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-8">
//               <span className="flex flex-col pl-">
//                 <b className="text-[#4094F7] text-xl font-bold">420 000 сум</b>
//                 <p className="text-[#6E8BB7] text-sm">Общая сумма заказов</p>
//               </span>
//               <span className="p-4 bg-[#4094f726] rounded-md text-4xl text-[#4094F7]">
//                 <TbSum />
//               </span>
//             </div>
//             <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-10">
//               <span className="flex flex-col">
//                 <b className="text-[#4094F7] text-2xl font-bold">27 500 сум</b>
//                 <p className="text-[#6E8BB7] text-sm">Средний чек</p>
//               </span>
//               <span className="p-4 bg-[#4094f726] rounded-md text-4xl text-[#4094F7]">
//                 <FaDollarSign />
//               </span>
//             </div>
//             <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-10">
//               <span className="flex flex-col">
//                 <b className="text-[#4094F7] text-2xl font-bold">16</b>
//                 <p className="text-[#6E8BB7] text-sm">Количество заказов</p>
//               </span>
//               <span className="p-4 bg-[#4094f726] rounded-md text-4xl text-[#4094F7]">
//                 <MdLocalGroceryStore />
//               </span>
//             </div>
//             <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-10">
//               <span className="flex flex-col">
//                 <b className="text-[#4094F7] text-2xl font-bold">23 500 сум</b>
//                 <p className="text-[#6E8BB7] text-sm">LTV</p>
//               </span>
//               <span className="p-4 bg-[#4094f726] rounded-md text-4xl text-[#4094F7]">
//                 <TbCurrencyDollarOff />
//               </span>
//             </div>
//           </div>
//           <div className="w-full h-64 bg-white rounded-md flex flex-col items-center py-2">
//             <h1 className="w-full h-[15%] border-b-2 flex items-center pl-5 font-semibold text-xl">
//               Клиент
//             </h1>
//             <div className="flex w-[97%] h-[85%]">
//               <div className="flex flex-col items-center w-[15%] h-full justify-center gap-5">
//                 <img
//                   src="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png"
//                   className="rounded-full border w-24"
//                   alt=""
//                 />
//                 <p className="text-[#4094F7] font-medium">Изменить фото</p>
//               </div>
//               {foundClient.map((client) => (
//                 <div
//                   key={client.id}
//                   className="flex flex-col w-[85%] h-full justify-around"
//                 >
                  // <span className="flex items-center w-full">
                  //   <b className="text-[#48535B] w-24">Имя</b>
                  //   <input
                  //     type="text"
                  //     value={client.name}
                  //     className="h-10 rounded-md border w-full pl-5 outline-none focus-within:border-[#4094F7]"
                  //   />
                  // </span>
                  // <span className="flex items-center w-full">
                  //   <b className="text-[#48535B] w-24">Фамилия</b>
                  //   <input
                  //     type="text"
                  //     className="h-10 rounded-md border w-full pl-5 outline-none focus-within:border-[#4094F7]"
                  //   />
                  // </span>
                  // <span className="flex items-center w-full">
                  //   <b className="text-[#48535B] w-24">Телефон</b>
                  //   <input
                  //     type="text"
                  //     className="h-10 rounded-md border w-full pl-5 outline-none focus-within:border-[#4094F7]"
                  //   />
                  // </span>
                  // <span className="flex items-center w-full">
                  //   <b className="text-[#48535B] text-sm w-24">Тип aклиента</b>
                  //   <select className="h-10 rounded-md border w-full pl-5 outline-none focus-within:border-[#4094F7]">
                  //     <option value="VIP">VIP</option>
                  //     <option value="Standard">Standard</option>
                  //     <option value="Basic">Basic</option>
                  //   </select>
                  // </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import { TbCurrencyDollarOff, TbSum } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa6";
import { MdLocalGroceryStore } from "react-icons/md";
import { personalData } from "./../../components/data";

export default function Clienown({ clientId }) {
  const currentClientData = personalData;
  const foundClient = currentClientData.find((item) => item.id === clientId.id);
  console.log(foundClient);

  return (
    <>
      <div className="flex flex-col w-[96%] h-[1300px] gap-10">
        <div className="w-[97%]  h-[1400px] flex flex-col items-center gap-5 rounded-md">
          <div className="flex justify-between w-full">
            <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-8">
              <span className="flex flex-col pl-">
                <b className="text-[#4094F7] text-xl font-bold">420 000 сум</b>
                <p className="text-[#6E8BB7] text-sm">Общая сумма заказов</p>
              </span>
              <span className="p-4 bg-[#4094f726] rounded-md text-4xl text-[#4094F7]">
                <TbSum />
              </span>
            </div>
            <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-10">
              <span className="flex flex-col">
                <b className="text-[#4094F7] text-2xl font-bold">27 500 сум</b>
                <p className="text-[#6E8BB7] text-sm">Средний чек</p>
              </span>
              <span className="p-4 bg-[#4094f726] rounded-md text-4xl text-[#4094F7]">
                <FaDollarSign />
              </span>
            </div>
            <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-10">
              <span className="flex flex-col">
                <b className="text-[#4094F7] text-2xl font-bold">16</b>
                <p className="text-[#6E8BB7] text-sm">Количество заказов</p>
              </span>
              <span className="p-4 bg-[#4094f726] rounded-md text-4xl text-[#4094F7]">
                <MdLocalGroceryStore />
              </span>
            </div>
            <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-10">
              <span className="flex flex-col">
                <b className="text-[#4094F7] text-2xl font-bold">23 500 сум</b>
                <p className="text-[#6E8BB7] text-sm">LTV</p>
              </span>
              <span className="p-4 bg-[#4094f726] rounded-md text-4xl text-[#4094F7]">
                <TbCurrencyDollarOff />
              </span>
            </div>
          </div>
          <div className="w-full h-64 bg-white rounded-md flex flex-col items-center py-2">
            <h1 className="w-full h-[15%] border-b-2 flex items-center pl-5 font-semibold text-xl">
              Клиент
            </h1>
            <div className="flex w-[97%] h-[85%]">
              <div className="flex flex-col items-center w-[15%] h-full justify-center gap-5">
                <img
                  src="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png"
                  className="rounded-full border w-24"
                  alt=""
                />
                <p className="text-[#4094F7] font-medium">Изменить фото</p>
              </div>
              {foundClient ? (
                <div
                  key={foundClient.id}
                  className="flex flex-col w-[85%] h-full justify-around"
                >
                  <span className="flex items-center w-full">
                    <b className="text-[#48535B] w-24">Имя</b>
                    <input
                      type="text"
                      value={foundClient.name.split(' ')[0]}
                      className="h-10 rounded-md border w-full pl-5 outline-none focus-within:border-[#4094F7]"
                    />
                  </span>
                  <span className="flex items-center w-full">
                    <b className="text-[#48535B] w-24">Фамилия</b>
                    <input
                      type="text"
                      value={foundClient.name.split(' ')[1]}
                      className="h-10 rounded-md border w-full pl-5 outline-none focus-within:border-[#4094F7]"
                    />
                  </span>
                  <span className="flex items-center w-full">
                    <b className="text-[#48535B] w-24">Телефон</b>
                    <input
                      type="text"
                      value={foundClient.number}
                      className="h-10 rounded-md border w-full pl-5 outline-none focus-within:border-[#4094F7]"
                    />
                  </span>
                  <span className="flex items-center w-full">
                    <b className="text-[#48535B] text-sm  w-28 ml-[-15px]">Тип aклиента</b>
                    <select value={foundClient.typeClient} className="h-10 rounded-md border w-full pl-5 outline-none focus-within:border-[#4094F7]">
                      <option value="VIP">VIP</option>
                      <option value="Standard">Standard</option>
                      <option value="Basic">Basic</option>
                    </select>
                  </span>
                </div>
              ) : (
                <p>Клиент не найден</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
