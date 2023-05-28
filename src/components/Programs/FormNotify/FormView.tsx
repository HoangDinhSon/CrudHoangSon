import { Button } from "@mui/material";
import { TextField, Box, Select, MenuItem, styled } from "@mui/material";
import { ReactHTMLElement } from "react";

function FormView(props: any) {
  const hiddenViewForm = props.hiddenViewForm;
  const idAndStatusForView = props.idAndStatusForView;
  const displayEditForm = props.displayEditForm;

  const handleCancel = () => {
    hiddenViewForm();
  };
  const handleHiddenWhenClickSpace = () => {
    hiddenViewForm();
  };
  const handleEdit = () => {
    displayEditForm(idAndStatusForView.id, idAndStatusForView.status);
    hiddenViewForm();
  };

  return (
    <div className="wrap_form_view  ">
      <div
        className="w-screen h-[screen] bg-black opacity-10  fixed  top-0 bottom-0 "
        onClick={handleHiddenWhenClickSpace}
      ></div>
      <div className="w-[448px] h-screen overflow-auto  fixed z-[2] right-0 top-0 pl-[30px] pr-[30px] bg-white rounded-sm mobile:w-full">
        <form>
          <div className="h-[50px] flex items-center justify-between">
            <h1>Station Details</h1>
            <div>
              <Button
                sx={{
                  width: "77px",
                  backgroundColor: "grey",
                  color: "#004744",
                  marginRight: "7px",
                  ":hover": { backgroundColor: "grey" },
                }}
                onClick={handleCancel}
              >
                C<span className="lowercase">lose</span>
              </Button>
              <Button
                sx={{
                  width: "66px",
                  backgroundColor: "#004744",
                  color: "white",
                  ":hover": { backgroundColor: "#004744" },
                }}
                onClick={handleEdit}
              >
                E<span className="lowercase">dit</span>
              </Button>
            </div>
          </div>
          <div>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <h1>Title</h1>
              <TextField
                name="title"
                defaultValue={idAndStatusForView?.title}
                disabled
              />
              <h1>Description</h1>
              <TextField
                disabled
                defaultValue={idAndStatusForView?.description}
              />
              <h1>Price</h1>
              <TextField disabled defaultValue={idAndStatusForView?.price} />
              <h1>Stock</h1>
              <TextField disabled defaultValue={idAndStatusForView?.stock} />
              <h1>Status</h1>
              <Select disabled defaultValue={idAndStatusForView.status ? 1 : 0}>
                <MenuItem value={1}>On</MenuItem>
                <MenuItem value={0}>Off</MenuItem>
              </Select>
            </Box>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormView;
