
import { useDispatch, useSelector } from "react-redux";
import mac from "../../public/mac.png"
import { useEffect, useState } from "react";
import { signIn } from "../components/loginReducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";


export default function Login() {
  const selector = useSelector((store) => store.login)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const handleLog = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && password.trim().length >= 8) {
      if(!checkbox) {
        // Dispatch if checkbox not checked  
        dispatch(signIn({ title: name, password: password }));
        navigate('/dashboard')
      } else {
        // Save to localStorage if checkbox checked
        localStorage.setItem('login', JSON.stringify({
          name,
          password  
        }));
  
        dispatch(signIn({ title: name, password: password }));
        navigate('/dashboard')
      }
    } else {
      toast.error('Password must be at least 8 characters',4);
    }
  };
  useEffect(() => {
    const savedLogin = JSON.parse(localStorage.getItem('login'));
  
    if(savedLogin) {
      dispatch(signIn(savedLogin));
    }
  }, []);
  console.log(checkbox);
  

  console.log(selector);
  return (
    <>
      <ToastContainer />
      <div className="h-screen max-w-[1920px] bg-gradient-radial mx-auto my-0 flex items-center justify-center">
        <div className="flex w-full h-full shadow-2xl">
          <div className="w-[50%] h-full bg-radial flex flex-col items-center justify-center relative">
            <h1 className="absolute text-white font-semibold text-5xl top-[5%] left-[5%]">Delever</h1>
            <img src={mac} className="w-[800px]" alt="" />
          </div>
          <div className="w-[50%] h-full bg-white flex flex-col items-center justify-center gap-5">
            <h2 className="w-5/6 text-4xl text-[#001A49] font-bold">
              Вход в платформу
            </h2>
            <form onSubmit={handleLog} className="flex flex-col w-5/6 h-[55%] p-2 relative justify-between">
              <label className="text-base font-bold text-black">
                Имя пользователья*
              </label>
              <span className="absolute top-[20.5%] left-4   text-[#6E8BB7]">
                <FaUserAlt />
              </span>
              <input
                type="text"
                placeholder="Введите имя"
                className="border-2 rounded-md w-full h-12 pl-7 font-semibold outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="text-base font-bold text-black">
                Имя пользователья*
              </label>
              <span className="absolute top-[54.5%] left-3 text-[#6E8BB7] text-2xl">
                <IoMdLock />
              </span>
              <input
                type="password"
                placeholder="Введите имя"
                className="border-2 rounded-md w-full h-12 pl-7 font-semibold outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="flex">
                <input type="checkbox" value={checkbox} onClick={() => setCheckbox(!checkbox)} />
                <p>Запомнить меня</p>
              </span>
              <button className="bg-blue-500 rounded-lg text-white h-12">
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
