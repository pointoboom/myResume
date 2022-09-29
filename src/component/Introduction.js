import image from "../Img/Image.svg";
function Introduction() {
  return (
    <div className=" font-semibold flex flex-row justify-evenly items-center  px-[100px] pt-[50px]">
      <div className=" flex flex-col justify-center ">
        <div className=" mb-[30px] text-[50px] ">
          <div>Hi!</div>
          <div>I'm Poonyawee Rattanapit</div>
          <div>a Fullstack Developer</div>
        </div>
        <div className="w-[700px] text-[35px] ">
          Front-End devel oper based in Bekasi, Indonesian I’am coding with a
          clean and beautiful problem solving in mind
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
export default Introduction;
