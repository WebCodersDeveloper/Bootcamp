import SideBarSecond from "./SideBarSecond";
import StaticData from "./StaticData";
import TopBarSecond from "./TopBarSecond";

export default function Orders() {
    return (
      <div className='max-w-[1920px] h-screen flex my-0 mx-auto'>
          <SideBarSecond />
          <div className='flex flex-col w-full'>
              <TopBarSecond />
              <StaticData />
          </div>
      </div>
    )
  }
  