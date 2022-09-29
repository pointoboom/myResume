import Profile from "../Img/Profile.jpg";

function Introduction() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-evenly items-center  px-[100px] pt-[50px]  ">
      <div className=" flex flex-col justify-center   ">
        <div className=" mb-[30px] text-[30px] sm:text-[50px] text-[#002265] ">
          <div className="font-semibold">Hi!</div>
          <div className="font-extrabold ">I'm Poonyawee Rattanapit</div>
          <div className="font-extrabold ">a Fullstack Developer</div>
        </div>
        <div className="w-[300px] sm:w-[700px] text-[15px] sm:text-[35px] mb-[100px] ">
          Fullstack Developer based in Bangkok, Thailand I’am coding with a
          clean and beautiful problem solving in mind
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <img
          className=" rounded-full sm:w-[400px] sm:h-[400px] "
          src={Profile}
          alt="Profilepicture"
        />
      </div>
    </div>
  );
}
export default Introduction;
