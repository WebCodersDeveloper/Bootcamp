
export default function Clientzakaz({clientId} ) {
  return (
    <div className="rounded-md bg-white w-[95%] h-96 flex flex-col items-center justify-around">
      <div className="flex h-[15%] w-[97%] border-b-2">
        <button className="border-b-[3px] px-3 font-semibold border-transparent hover:border-[#4094F7] hover:text-[#4094F7] focus-within:border-[#4094F7] focus-within:text-[#4094F7]">Текущие заказы</button>
        <button className="border-b-[3px] px-3 font-semibold border-transparent hover:border-[#4094F7] hover:text-[#4094F7] focus-within:border-[#4094F7] focus-within:text-[#4094F7]">История заказов</button>
      </div>
      <div className="rounded-md border-2 w-[97%] h-[72%] overflow-hidden">
        <div className="flex items-center w-full h-12">
            <b className="w-[88px] h-full flex items-center justify-center">ID</b>
            <b className="w-32 h-full flex items-center justify-center">Дата создание</b>
            <b className="w-[304px] h-full flex items-center justify-start pl-4">Дата создание</b>
            <b className="w-32 h-full flex items-center justify-center pl-4">Сумма</b>
            <b className="w-56 h-full flex items-center justify-center pl-4">Оператор</b>
            <b className="w-32 h-full flex items-center justify-center pl-4">Филиал</b>
            <b className="w-[136px] h-full flex items-center justify-center pl-4">Тип доставки</b>
            <b className="w-40 h-full flex items-center justify-center pl-4">Источник</b>
        </div>
        <div className="w-full rounded-md bg-[#d7edff80] h-5"></div>
        <div className="flex items-center w-full h-[69px] border-b-2">
            <b className="w-[88px] h-full flex items-center justify-center">ID</b>
            <b className="w-32 h-full flex items-center justify-center">Дата создание</b>
            <b className="w-[304px] h-full flex items-center justify-start pl-4">Дата создание</b>
            <b className="w-32 h-full flex items-center justify-center pl-4">Сумма</b>
            <b className="w-56 h-full flex items-center justify-center pl-4">Оператор</b>
            <b className="w-32 h-full flex items-center justify-center pl-4">Филиал</b>
            <b className="w-[136px] h-full flex items-center justify-center pl-4">Тип доставки</b>
            <b className="w-40 h-full flex items-center justify-center pl-4">Источник</b>
        </div>
        <div className="flex items-center w-full h-[69px] border-b-2">
            <b className="w-[88px] h-full flex items-center justify-center">ID</b>
            <b className="w-32 h-full flex items-center justify-center">Дата создание</b>
            <b className="w-[304px] h-full flex items-center justify-start pl-4">Дата создание</b>
            <b className="w-32 h-full flex items-center justify-center pl-4">Сумма</b>
            <b className="w-56 h-full flex items-center justify-center pl-4">Оператор</b>
            <b className="w-32 h-full flex items-center justify-center pl-4">Филиал</b>
            <b className="w-[136px] h-full flex items-center justify-center pl-4">Тип доставки</b>
            <b className="w-40 h-full flex items-center justify-center pl-4">Источник</b>
        </div>
        <div className="flex items-center w-full h-[69px] border-b-2">
            <b className="w-[88px] h-full flex items-center justify-center">ID</b>
            <b className="w-32 h-full flex items-center justify-center">Дата создание</b>
            <b className="w-[304px] h-full flex items-center justify-start pl-4">Дата создание</b>
            <b className="w-32 h-full flex items-center justify-center pl-4">Сумма</b>
            <b className="w-56 h-full flex items-center justify-center pl-4">Оператор</b>
            <b className="w-32 h-full flex items-center justify-center pl-4">Филиал</b>
            <b className="w-[136px] h-full flex items-center justify-center pl-4">Тип доставки</b>
            <b className="w-40 h-full flex items-center justify-center pl-4">Источник</b>
        </div>
      </div>
    </div>
  );
}
