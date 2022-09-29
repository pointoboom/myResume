import git from "../Img/git-Vector.svg";
import ig from "../Img/ig-Vector.svg";
import mail from "../Img/mail-Vector.svg";
import tel from "../Img/tel-Vector.svg";
function ContactMe() {
  return (
    <div
      id="contactme"
      className="flex flex-col justify-center items-center p-[50px]"
    >
      <div className="flex flex-row justify-center items-center mb-[50px]">
        <span className="text-[50px] mr-[10px] text-[#14279B]">Contact</span>
        <span className="text-[50px] font-semibold text-[#002265]">Me</span>
      </div>
      <div className="flex flex-row justify-center items-center ">
        <img src={git} alt="" />
        <img src={ig} alt="" />
        <img src={mail} alt="" />
        <img src={tel} alt="" />
      </div>
    </div>
  );
}

export default ContactMe;
