import Clienown from "./Clienown";
import Clientzakaz from './Clientzakaz';


export default function ClientBody({ clientId }) {
  // console.log(clientId);
  return (
    <>
      <div className="bg-[#DCE9F9] w-[100%] h-screen flex justify-center overflow-y-scroll py-5 ">
        <Clienown clientId={clientId}/>
        {/* <Clientzakaz clientId={clientId}/> */}
      </div>
    </>
  );
}
