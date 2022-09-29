function AboutMe() {
  return (
    <div
      className="flex flex-col justify-center items-center py-[100px] bg-emerald-100 "
      id="aboutme"
    >
      <div className="flex flex-row justify-center items-center">
        <span className="text-[50px] mb-[60px] mr-[10px] text-[#14279B] ">
          About
        </span>
        <span className="text-[50px] font-semibold mb-[60px] text-[#002265] ">
          Me
        </span>
      </div>

      <div className="flex flex-col sm:flex-row justify-center  py-[30px] pl-[100px] sm:pl-[200px]">
        <div>
          <div className=" text-[40px] font-semibold mb-[10px] text-[#002265]">
            Education
          </div>
          <div className="text-[20px] font-semibold">
            <div>Bachelor's degree of Computer Engineering</div>
            <div> - 2009-2012 - Khonkaen University</div>
            <div> - GPA: 2.52</div>
          </div>
        </div>
        <div className="border-[2px] border-blue-700 sm:h-[150px] mx-[20px]"></div>
        <div>
          <div className=" text-[40px] font-semibold mb-[10px] text-[#002265]">
            Experince
          </div>
          <div className="text-[20px] font-semibold">
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
