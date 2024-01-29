import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaCar } from "react-icons/fa6";
import { TbSum } from "react-icons/tb"

export default function ClientPay2() {
  return (
    <>
                    <div className="w-full border-t-2 h-44 flex">
              <div className="w-[50%] flex flex-col items-center justify-between px-2 py-1 border-r-2">
                <span className="flex items-center h-14 gap-5">
                  <b>Типы оплаты</b>
                  <button className="w-[117px] h-10 rounded-md border-2 flex items-center justify-center bg-[#e5e9ebac]">
                    <img
                      className="w-7"
                      src="https://s3-alpha-sig.figma.com/img/724d/d3de/f3bcd898a91a1562128c7fff2daa2afe?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=COh4UXPLyrZLzb2CWunJzcxkLwGLxpVBf8yCWI~gh0pjCSXSZ11dMAOxDXTwl9oQpGStC4MV3y2hS60tK9NQ~TIdHQ2c~gpDKDZz9L~SPRYxVB9PqAKKwxmOZ7x1~Y3rqsV8G8ib2YQC7hdH8NESgN-RMSZ9kUrLytoW6cvwHXlvpiDvr0mBumB~v3wSWkby6O9b591SRltmMja14C2TSA0g3GYoQ0GmEU1tYfeVZ2DQRXKC~ynZdmx5Lp~mtqhtYZqpC7iaUeBCmCyFo811RO8mb8460M046ySBxOd6vFPp636KylW3AlALI6l4xed3qUCTAuHiDLi6inN6sLQIWw__"
                      alt=""
                    />
                  </button>
                  <button className="w-[117px] h-10 rounded-md border-2 flex items-center justify-center bg-[#e5e9ebac]">
                    <img
                      className="w-12"
                      src="https://s3-alpha-sig.figma.com/img/7f1d/0dbc/cfefd3d50bb1756d2abead27733f1be2?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S7ppdSktvpQ8rFSWnMwqgpWKZFdcj3fy4lrjgp1FFg192hn7MF0HBrJx6wFabTaR5k4~18bTUigQbBuj-bU4Xy~X4GC8M2VUxMw9yrAxfalmsQ6jE1af9YaG-wD5IFw0jmShm3amewTyPEg8Ej8lqu6dpniSGODYVc4wusMaocZvy228YgiwENCT2x9G1VmUFDWii4cWDYKMQGtO2YFCzhZLBd97qZmHWspmP6MouB4WyDUBhWd7g8HwmbaXVBQIHes~YAQcCHK1VmjrJnp05iJR48bEoTI2-X7Baogu2Bzbu7Yow8u-fpctNEoKOFM~nLlk0qDFicrVprUJjfBmkw__"
                      alt=""
                    />
                  </button>
                  <button className="w-[117px] h-10 rounded-md border-2 flex items-center justify-center bg-[#e5e9ebac]">
                    <img
                      className="w-20"
                      src="https://api.logobank.uz/media/logos_png/Uzum-01.png"
                      alt=""
                    />
                  </button>
                  <button className="w-[117px] h-10 rounded-md border-2 flex items-center justify-center bg-[#e5e9ebac]">
                    <img
                      className="w-7"
                      src="https://cdn-icons-png.freepik.com/512/925/925065.png"
                      alt=""
                    />
                  </button>
                </span>
                <span className="flex items-center">
                  <b className="w-[122px]">Курьер</b>
                  <select className="w-[530px] h-8 border-2 rounded-md px-3">
                    <option>Курьер</option>
                    <option>Choshtepa</option>
                    <option>Olmazor</option>
                    <option>Chilonzor</option>
                    <option>Mirzo Ulug`bek</option>
                    <option>Novza</option>
                  </select>
                </span>
                <span className="flex items-center">
                  <b className="w-[122px]">Оператор</b>
                  <select className="w-[530px] h-8 border-2 rounded-md px-3">
                    <option>Курьер</option>
                    <option>Choshtepa</option>
                    <option>Olmazor</option>
                    <option>Chilonzor</option>
                    <option>Mirzo Ulug`bek</option>
                    <option>Novza</option>
                  </select>
                </span>
              </div>
              <div className="w-[50%] flex flex-col items-center justify-between px-2 py-1">
                <span className="flex items-center h-10 justify-between w-[85%]">
                  <p className="flex items-center text-blue-500 gap-3">
                    <RiMoneyDollarCircleFill />
                    Сумма заказа
                  </p>
                  <b>2 00 00 000</b>
                </span>
                <span className="flex items-center h-10 justify-between w-[85%] border-b-2">
                  <p className="flex items-center text-blue-500 gap-3">
                    <FaCar />
                    Сумма доставки
                  </p>
                  <b>10 000 so`m</b>
                </span>
                <span className="flex items-center h-10 justify-between w-[85%]">
                  <p className="flex items-center text-blue-500 gap-3">
                    <TbSum />
                    Итого
                  </p>
                  <b>10 000 so`m</b>
                </span>
              </div>
            </div>
    </>
  )
}
