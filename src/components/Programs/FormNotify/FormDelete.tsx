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
    <div className="wrap_form_delete w-screen h-scrren  bg-slate-400 ">
      <div className="w-screen h-[screen] bg-black opacity-10  fixed top-0 bottom-0 " ></div>
      <div className="wrap  w-[378px] h-[190px] pt-[41px] pl-[34px] pb-[32px] pr-[30px] fixed bottom-[50%] left-[50%] bg-white -translate-x-[50%] translate-y-[50%] mobile:p-3 ">
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
                ":hover":{
                  backgroundColor: "grey"
                }
              }}
              onClick={handleDelete}
            >
              C <span className="lowercase">ancel</span>
            </Button>
            <Button
              sx={{
                height: "26px",
                width: "94px",
                backgroundColor: "#004744",
                fontSize: "14px",
                color: "white",
                marginLeft: "10px",
                ":hover":{
                  backgroundColor: "#004744"
                }
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
