import Ellipse from "../../assets/headerIconUser/Ellipse.svg";
import peopleVector from "../../assets/headerIconUser/Peoples/peopleVector.svg";
import peopleVector2 from "../../assets/headerIconUser/Peoples/peopleVector2.svg";
import HeaderIconBar from "../../assets/HeaderIconBar.svg";


function Program(props:any){
  return (
    <div className="Wrap font-[Exo]">
      <div className="w-full h-[50] bg-[#E5E5E5] flex justify-between ">
        <div className="header-left  flex ">
          <div className="inline-block  ">
            <img src={HeaderIconBar} alt="icon header " />
          </div>
          <h1 className="leading-[50px] text-[20px]">Programs</h1>
        </div>
        <div className="header-right flex items-center text-xs mr-[24px] ">
          <div className="text-right  ">
            <h1 className="text-[#004744]">Sam Rabera</h1>
            <p className="text-[#5c5c5c] ">Oraganisation Name</p>
          </div>
          <div className="relative w-[29px] h-[29px] ml-[8px]">
            <img src={Ellipse} alt="" />
            <div className="w-[13px] h-[15px] flex flex-col items-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  ">
              <img src={peopleVector2} alt="" />
              <img src={peopleVector} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
