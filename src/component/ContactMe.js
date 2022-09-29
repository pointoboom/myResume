import git from "../Img/git-Vector.svg";
import ig from "../Img/ig-Vector.svg";
import mail from "../Img/mail-Vector.svg";
import tel from "../Img/tel-Vector.svg";
function ContactMe() {
  return (
    <div className="flex flex-col justify-center items-center p-[50px]">
      <div className="text-[50px] font-semibold mb-[50px]">
        <div>Contact Me</div>
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
