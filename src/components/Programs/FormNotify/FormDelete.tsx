import { Button } from "@mui/material";


function FormDelete(props: any) {
  const hiddenFormDelete = props.hiddenFormDelete;
  const deletePoduct= props.deletePoduct;
  const handleConfirm = () => {
    deletePoduct();
    hiddenFormDelete();
  };
  const handleDelete = () => {
    hiddenFormDelete();
  };
  return (
    <div className="w-screen h-scrren  bg-slate-400">
      <div className="wrap  w-[378px] h-[190px] pt-[41px] pl-[34px] pb-[32px] pr-[30px] fixed bottom-[50%] left-[50%] bg-white -translate-x-[50%] translate-y-[50%] ">
        <div className=" ">
          <h1 className="text-[20px]">Delete Station?</h1>
          <p className="text-[12px] mb-[24px]">
            This action is not reversible, all child-organisation data will be
            deleted.
          </p>
          <div className="pl-[116px]">
            <Button
              sx={{
                height: "26px",
                width: "94px",
                backgroundColor: "grey",
                fontSize: "14px",
                color: "#004744",
                fontFamily: "Exo",
              }}
              onClick={handleDelete}
            >
              C <span className="lowercase">ancel</span>
            </Button>
            <Button
              sx={{
                fontFamily: "Exo",
                height: "26px",
                width: "94px",
                backgroundColor: "#004744",
                fontSize: "14px",
                color: "white",
                marginLeft: "10px",
              }}
              onClick={handleConfirm}
            >
              C <span className="lowercase">onfirm</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormDelete;
