function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center py-[100px] ">
      <div className="text-[50px] font-semibold mb-[60px] ">About Me</div>
      <div className="flex flex-row justify-center  py-[30px] pl-[200px]">
        <div className="">
          <div className=" text-[30px] font-semibold mb-[10px]">Education </div>
          <div className="text-[15px] font-semibold">
            <div>Bachelor's degree of Computer Engineering</div>
            <div> - 2009-2012 - Khonkaen University</div>
            <div> - GPA: 2.52</div>
          </div>
        </div>
        <div className="border-[2px] border-blue-700 h-[150px] mx-[20px]"></div>
        <div className="">
          <div className=" text-[30px] font-semibold mb-[10px]">Experince</div>
          <div className="text-[15px] font-semibold">
            <div>System Engineer</div>
            <div> - Project Engineer at J.F. Advanced Med</div>
            <div> - Duration: 9 Years</div>
            <div>
              - Job Description: :Implement Server/Storage/Network
              System(Vmware)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
