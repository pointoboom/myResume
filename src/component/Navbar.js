function Navbar() {
  return (
    <div className="navbar flex justify-end flex-row  pr-[40px] text-[20px] p-[30px] font-semibold">
      <a href="#aboutme" className="">
        About
      </a>
      <a href="#passion" className="ml-[40px]">
        Passion
      </a>
      <a href="#portfolio" className="ml-[40px]">
        Portfolio
      </a>
      <a href="#contactme" className="ml-[40px]">
        Contact Me
      </a>
    </div>
  );
}
export default Navbar;
