import fillIcon from "../../assets/fillIcon.svg";
import searchIconbody from "../../assets/searchIcon/searchIconbody.svg";
import searchIconheader from "../../assets/searchIcon/searchIconheader.svg";
import { Button, OutlinedInput } from "@mui/material";
function Search() {
  return (
    <div className="Wrap h-[70px] py-[19px] px-[15px]  flex justify-between font-[Exo]">
      <div className="search w-[400px] h-8 flex items-center">
        <div className="relative">
          <div className=" absolute top-[50%] -translate-y-[50%] left-2 ">
            <div className="relative w-[15px] h-[15px]">
              <img src={searchIconbody} alt="" />
              <img
                src={searchIconheader}
                alt=""
                className="absolute bottom-0 right-0"
              />
            </div>
          </div>
          <OutlinedInput
            placeholder="   Search programs"
            color="success"
            size="small"
            className="h-[32px] w-[202px]"
            sx={{
              outline: "none",
            }}
          />
        </div>

        <div className="ml-[7px] relative">
          <Button
            className="h-[32px] w-[100px] "
            sx={{
              height: 32,
              backgroundColor: "#EFEFEF",
              color: "black",
              fontFamily: "Exo",
              lineHeight: 20,
              fontSize: 12,
            }}
          >
            <img src={fillIcon} alt="" className=" mr-2" />
            Station
          </Button>
          <img src="" alt="" />
        </div>
      </div>

      <div className="add-station">
        <Button
          className="w-[103px] h-[32px] "
          sx={{
            padding: 0,
            fontSize: 12,
            backgroundColor: "#004744",
            fontFamily: "Exo",
            color: "white",
          }}
        >
          + Add Station
        </Button>
      </div>
    </div>
  );
}

export default Search;
