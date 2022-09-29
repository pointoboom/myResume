function Navbar() {
  return (
    <>
      <div className="navbar sm:hidden flex justify-end flex-row  pr-[40px] text-[20px] p-[30px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>

      <div className="navbar hidden sm:flex justify-end flex-row  pr-[40px] text-[20px] p-[30px] font-semibold">
        <div className="flex flex-row justify-center items-center">
          <a href="#aboutme" className="">
            About
          </a>
          <a href="#passion" className="ml-[40px]">
            Passion
          </a>
          <a href="#portfolio" className="ml-[40px]">
            Portfolio
          </a>
          <a
            href="#contactme"
            className="ml-[40px] text-white border-2 rounded-[10px] bg-[#608AF5] p-[10px]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </>
  );
}
export default Navbar;
