import { reviews } from "../../../components/data";
import { GoKebabHorizontal } from "react-icons/go";
export default function Reviews() {
  return (
    <>
      <div className="bg-[#DCE9F9] border  h-screen flex justify-center overflow-y-scroll py-5 ">
        <div className="w-[95%] h-[1400px] flex flex-col items-center gap-5 rounded-md">
          <div className="bg-white w-[95%] h-[90%] flex items-center justify-center  rounded-md relative">
            <div className="border-2 rounded-md w-[95%] h-[95%]">
              <div className="border-b-2 w-full h-12 flex justify-between">
                <b className="h-full w-[740px] flex items-center pl-8 ">
                  Название
                </b>
                <b className="h-full w-[230px] flex items-center justify-center ">
                  Тип
                </b>
                <b className="h-full w-[250px]  flex items-center justify-center ">
                  Статус
                </b>
                <span className="w-12 h-full"></span>
              </div>
              {reviews.map((item) => (
                <div
                  key={item.id}
                  className="border-b-2 w-full h-24 flex justify-between items-center"
                >
                  <p className="h-full w-[740px] flex items-center pl-8 ">
                    {item.text}
                  </p>
                  <span className={`h-full w-[200px] flex items-center justify-center ${item.emoji === 'fa-solid fa-thumbs-up' ? 'text-green-500' : 'text-red-500'}`}>
                    <i className={item.emoji}></i>
                  </span>
                  <span className="h-full w-[250px] flex items-center justify-center ">
                    <p className="bg-[#4094F726] px-5 py-[2px] text-[#4094F7] rounded-md">
                      {item.status}
                    </p>
                  </span>
                  <span className="w-12 h-full flex items-center justify-center text-[#4094F7]">
                    <button className="border-2 p-1 rounded-md">
                    <GoKebabHorizontal />
                    </button>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
