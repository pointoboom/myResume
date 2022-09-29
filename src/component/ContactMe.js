import git from "../Img/git-Vector.svg";
import ig from "../Img/ig-Vector.svg";
import mail from "../Img/mail-Vector.svg";
import tel from "../Img/tel-Vector.svg";
function ContactMe() {
  const alertContact = (props) => {
    alert(props);
  };
  return (
    <div
      id="contactme"
      className="flex flex-col justify-center items-center p-[50px]"
    >
      <div className="flex flex-row justify-center items-center mb-[50px]">
        <span className="text-[50px] mr-[10px] text-[#14279B]">Contact</span>
        <span className="text-[50px] font-semibold text-[#002265]">Me</span>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center ">
        <a href="https://github.com/pointoboom" target="_blank">
          <img className="mb-[20px]" src={git} alt="gitprofile" />
        </a>
        <a href="https://www.instagram.com/pointo.boom/" target="_blank">
          <img className="mb-[20px]" src={ig} alt="igprofile" />
        </a>

        <img
          className="mb-[20px]"
          src={mail}
          alt=""
          onClick={() => {
            alertContact("pointoboom@gmail.com");
          }}
        />
        <img
          className="mb-[20px]"
          src={tel}
          alt=""
          onClick={() => {
            alertContact("0834134239");
          }}
        />
      </div>
    </div>
  );
}

export default ContactMe;
