
import { useParams } from 'react-router';
import Sidebar from '../Dashboard/Sidebar';
import ClientBody from './ClientBody';
import ClientTop from './ClientTop';

export default function Client({params}) {
  // const clientId = params;
  const clientId = useParams(params);
  // console.log(clientId);
  
  return (
    <>
      <div className="max-w-[1920px] h-screen flex my-0 mx-auto">
        <Sidebar />
        <div className="flex flex-col w-full">
          <ClientTop />
          <ClientBody clientId={clientId} />
        </div>
      </div>
    </>
  );
}
