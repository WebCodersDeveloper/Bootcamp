import Sidebar from "../Dashboard/Sidebar";
import TopBarSecond from "../Orders/TopBarSecond";
import ClientData from "./ClientData";

export default function Clients() {
  return (
    <>
      <div className="max-w-[1920px] h-screen flex my-0 mx-auto">
        <Sidebar />
        <div className="flex flex-col w-full">
          <TopBarSecond />
          <ClientData />
        </div>
      </div>
    </>
  );
}
