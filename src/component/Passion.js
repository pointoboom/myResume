import tailwind from "../Img/tailwind.svg";
import react from "../Img/react.svg";
import vue from "../Img/vue.svg";
import js from "../Img/javascript-logo.svg";
import nodeJs from "../Img/nodejs.svg";
import mongoDB from "../Img/mongodb.svg";
import firebaseLogo from "../Img/firebase-logo.svg";

function Passion() {
  return (
    <div className="flex flex-col justify-center items-center  py-[50px]">
      <div>
        <div className="text-[50px] font-semibold ">My Passion</div>
      </div>

      <div className="flex flex-row  px-[100px] ">
        <div className="box-card border-2 rounded-[15px] w-[350px] h-[300px]  m-[50px] flex flex-col justify-evenly items-center">
          <div className="flex flex-row justify-center items-center">
            <img className="w-[100px] h-[100px] " src={tailwind} alt="" />
            <img className="w-[100px] h-[100px] " src={react} alt="" />
            <img className="w-[100px] h-[100px] " src={vue} alt="" />
          </div>

          <div className=" text-[30px] font-semibold">Front-End Developer</div>
          <div className="text-[20px] font-semibold">
            Vue,React,Tailwind,ChakraUI
          </div>
        </div>
        <div className="box-card  border-2 rounded-[15px]  w-[350px] m-[50px] flex flex-col justify-evenly items-center">
          <div className="flex flex-row justify-evenly items-center">
            <img className="w-[100px] h-[100px] " src={js} alt="" />
            <img className="w-[100px] h-[100px] " src={nodeJs} alt="" />
          </div>
          <div className=" text-[30px] font-semibold">Back-End Developer</div>
          <div className="text-[20px] font-semibold">Javascript,NodeJs</div>
        </div>
        <div className="box-card  border-2 rounded-[15px]  w-[350px] m-[50px] flex flex-col justify-evenly items-center">
          <div className="flex flex-row justify-evenly items-center">
            <img className="w-[100px] h-[100px] " src={mongoDB} alt="" />
            <img className="w-[100px] h-[100px] " src={firebaseLogo} alt="" />
          </div>
          <div className=" text-[30px] font-semibold">Database</div>
          <div className="text-[20px] font-semibold">MongoDB,Firebase</div>
        </div>
      </div>
    </div>
  );
}
export default Passion;