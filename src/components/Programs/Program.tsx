
import {
  IconMenu,
  MyIconUserBody,
  MyIconUserCircle,
  MyIconUserHeader,
} from "../../myIconMui";

function Program() {
  return (
    <div className="Wrap font-[Exo]">
      <div className="w-full h-[50] bg-[#E5E5E5] flex justify-between ">
        <div className="header-left  flex ">
          <div className="inline-block  ">
            <IconMenu
              sx={{
                width: 24,
                height: 24,
              }}
            />
          </div>
          <h1 className="leading-[50px] text-[20px]">Programs</h1>
        </div>
        <div className="header-right flex items-center text-xs mr-[24px] ">
          <div className="text-right  ">
            <h1 className="text-[#004744]">Sam Rabera</h1>
            <p className="text-[#5c5c5c] ">Oraganisation Name</p>
          </div>
          <div className="relative w-[29px] h-[29px] ml-[8px] flex justify-center">
            <MyIconUserCircle
              sx={{
                margin: "auto",
              }}
            />
            <div className="w-[13px] h-[15px] flex flex-col items-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  ">
              <MyIconUserHeader
                sx={{
                  width: 8,
                  height: 8,
                }}
              />
              <MyIconUserBody
                sx={{
                  width: 14,
                  height: 8,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
