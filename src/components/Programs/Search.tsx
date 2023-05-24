import { Fill, MyIconSeachBody, MyIconSearchHeader } from "../../myIconMui";
import { Button, OutlinedInput } from "@mui/material";
function Search(props: any) {
  const displayAddForm = props.displayAddForm;
  const getDataFromSearch = props.getDataFromSearch;
  const handleAddForm = () => {
    displayAddForm();
  };
  //Input
  const handleGetDataSearchBox = (e: any) => {
    getDataFromSearch(e.target.value);
  };
 

  return (
    <div className="Wrap h-[70px] py-[19px] px-[15px]  flex justify-between font-[Exo]">
      <div className="search w-[400px] h-8 flex items-center">
        <div className="relative">
          <div className=" absolute top-[50%] -translate-y-[50%] left-2 ">
            <div className="relative w-[15px] h-[15px]">
              <MyIconSeachBody
                sx={{
                  width: 14,
                  height: 14,
                  position: "absolute",
                  bottom: 2,
                  right: 2,
                }}
              />
              <MyIconSearchHeader
                sx={{
                  width: 5,
                  height: 5,
                  position: "absolute",
                  bottom: 1,
                  right: 0,
                }}
              />
            </div>
          </div>
          <OutlinedInput
            placeholder="   Search programs"
            color="success"
            size="small"
            className="h-[32px] w-[202px]"
            sx={{
              paddingLeft: "16px",
              outline: "none",
              fontFamily: "Exo",
              fontSize: 12,
            }}
            onChange={(e) => {
              handleGetDataSearchBox(e);
            }}
          />
        </div>

        <div className="ml-[7px] relative">
          <Button
            className="h-[32px] w-[100px] "
            sx={{
              backgroundColor: "#EFEFEF",
              color: "black",
              fontFamily: "Exo",
              fontSize: 12,
            }}
          >
            <Fill
              sx={{
                marginRight: "2px",
                height: "15px",
              }}
            />
            Station
          </Button>
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
            ":hover": {
              backgroundColor: "#004744",
            },
          }}
          onClick={handleAddForm}
        >
          + Add Station
        </Button>
      </div>
    </div>
  );
}

export default Search;
