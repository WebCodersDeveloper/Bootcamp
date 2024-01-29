

export default function ClientHome() {
  return (
    <>
      <div className="bg-white w-[662px] rounded-md flex flex-col items-center pb-2 gap-2">
        <h2 className="w-full px-4 py-2 border-b-2">Доставка</h2>
        <div className="flex flex-wrap w-[96%] py-2 gap-8">
          <span className="flex items-center py-1 gap-3">
            <b className="w-28 text-[#48535B]">Тип доставки</b>
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
    </>
  );
}
