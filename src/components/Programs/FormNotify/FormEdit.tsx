import { Button } from "@mui/material";
import { TextField, Box, Select, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import { InputEditForm } from "../../../type";
import {resolverForEditForm} from "../../../yupGlobal";
function FormEdit(props: any) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputEditForm>();

  const hiddenEditForm = props.hiddenEditForm;
  const productForEdit = props.productForEdit;
  const getProductAfterEdit = props.getProductAfterEdit;
  

  const handleCancel = () => {
    hiddenEditForm();
  };
  const onSubmit = (data: any) => {
    hiddenEditForm();
    getProductAfterEdit({...data ,status:(data.status=="1")?true:false});
  };

  return (
    <div className="wrap_form_edit">
      <div className="w-screen h-[screen] bg-black opacity-10  fixed top-0 bottom-0 " ></div>
      <div className="w-[448px] h-[500px]  fixed bottom-[50%] left-[50%] -translate-x-[50%] translate-y-[50%]  pl-[30px] pr-[30px] bg-white rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="h-[50px] flex items-center justify-between">
            <h1>Edit Production</h1>

            <div>
              <Button
                sx={{
                  height: "26px",
                  width: "94px",
                  backgroundColor: "grey",
                  fontSize: "14px",
                  color: "#004744",
                  fontFamily: "Exo",
                }}
                onClick={handleCancel}
              >
                C<span className="lowercase">ancel</span>
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
                type="submit"
              >
                S<span className="lowercase">ave</span>
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
                {...register("title")}
                name="title"
                defaultValue={productForEdit.title}
                fullWidth
              />
              <h1>Description</h1>
              <TextField
                {...register("description")}
                defaultValue={productForEdit.description}
                fullWidth
              />
              <h1>Price</h1>
              <TextField
                {...register("price")}
                defaultValue={productForEdit.price}
                fullWidth
              />
              <h1>Stock</h1>
              <TextField
                {...register("stock")}
                defaultValue={productForEdit.stock}
                fullWidth
              />
              <h1>Status</h1>
              <Select
                fullWidth
                defaultValue={productForEdit.status ? 1 :0}
                {...register("status")}
              >
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

export default FormEdit;
