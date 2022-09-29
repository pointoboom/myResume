import port1 from "../Img/port1.svg";
function Portfolio() {
  return (
    <div id="portfolio" className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center">
        <span className="text-[50px] mr-[10px] text-[#14279B]">My</span>
        <span className="text-[50px] font-semibold text-[#002265]">
          Portfolio
        </span>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="box-card border-2 rounded-[15px] w-[350px] h-[300px]  m-[50px] flex flex-col justify-around items-center">
          <img className="w-[300px] h-[200px]" src={port1} alt="" />
          <div className=" text-[30px] font-semibold">Order Management</div>
        </div>
        <div className="box-card border-2 rounded-[15px] w-[350px] h-[300px]  m-[50px] flex flex-col justify-around items-center">
          <img className="w-[300px] h-[200px]" src={port1} alt="" />
          <div className=" text-[30px] font-semibold">Feedback Webapp</div>
        </div>
        <div className="box-card border-2 rounded-[15px] w-[350px] h-[300px]  m-[50px] flex flex-col justify-evenly items-center">
          <img className="w-[300px] h-[200px]" src={port1} alt="" />
          <div className=" text-[30px] font-semibold">Product Dashboard</div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
