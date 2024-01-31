
import { bannerData } from "../../../components/data";

export default function Banner() {
  return (
    <>
    <div className="bg-[#DCE9F9] border  h-screen flex justify-center overflow-y-scroll py-5 ">
      <div className="w-[95%] h-[1400px] flex flex-col items-center gap-5 rounded-md">
        <div className="bg-white w-[90%] h-[90%] flex items-center justify-center  rounded-md relative">
          <div className="border-2 rounded-md w-[95%] h-[95%]">
            <div className="border-b-2 w-full h-12 flex justify-between">
              <b className="h-full w-[260px] flex items-center pl-8 ">
                Изображение
              </b>
              <b className="h-full w-[450px] flex items-center justify-center ">
                Hазвание на узбекском
              </b>
              <b className="h-full w-[450px] flex items-center justify-center ">
                Hазвание на русском
              </b>
              <b className="h-full w-[250px] flex items-center justify-center ">
                Статус
              </b>
              <span className="w-12 h-full"></span>
            </div>
            {bannerData.map((banner) => (
                <div key={banner.id} className="border-b-2 w-full h-24 flex justify-between items-center">
                  <img  className="pl-8 w-28" src={`../../../../public/${banner.img}`} alt={banner.nameRu} />
                  <p className="h-full w-[450px] flex items-center justify-center ">{banner.nameUz}</p>
                  <p className="h-full w-[450px] flex items-center justify-center ">{banner.nameRu}</p>
                  <span className="h-full w-[250px] flex items-center justify-center "><p className="bg-[#4094F726] px-5 py-[2px] text-[#4094F7] rounded-md">{banner.status}</p></span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
