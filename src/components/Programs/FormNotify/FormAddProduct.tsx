import { Button } from "@mui/material";
import { TextField, Box, Select, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import { InputAddForm } from "../../../type";
import { resolverForAddForm } from "../../../yupGlobal";
function FormAddProduct(props: any) {
  const hiddentAddForm = props.hiddentAddForm;
  const getPayLoadFromAddForm = props.getPayLoadFromAddForm;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputAddForm>(resolverForAddForm);

  const onSubmit = (payloadAddForm: InputAddForm) => {
    getPayLoadFromAddForm(payloadAddForm);
    hiddentAddForm();
  };
  const handleCancel = () => {
    hiddentAddForm();
  };

  return (
    <div className="wrap_form_delete ">
      <div className="w-screen h-[screen] bg-black opacity-10  fixed top-0 bottom-0 "></div>
      <div className="w-[448px]  h-screen  overflow-auto  fixed z-[2] right-0 top-0  pl-[30px] pr-[30px] bg-white rounded-sm mobile:w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="h-[50px] flex items-center justify-between">
            <h1>ADD Production</h1>
            <div>
              <Button
                sx={{
                  width: "85px",
                  backgroundColor: "grey",
                  color: "#004744",
                  ":hover": {
                    backgroundColor: "grey",
                  },
                }}
                onClick={handleCancel}
              >
                C<span className="lowercase">ancel</span>
              </Button>

              <Button
                sx={{
                  width: "72px",
                  backgroundColor: "#004744",
                  color: "white",
                  marginLeft: "7px",
                  ":hover": {
                    backgroundColor: "#004744",
                  },
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
                {...register("title", {
                  required: true,
                })}
                name="title"
                placeholder="title"
              />
              {errors.title && <p>invalidation</p>}
              <h1>Description</h1>
              <TextField
                {...register("description")}
                placeholder="Description"
              />
              {errors.description && <p>invalidation</p>}
              <h1>Price</h1>
              <TextField {...register("price")} placeholder="Price" />
              {errors.price && <p>invalidation</p>}
              <h1>Stock</h1>
              <TextField {...register("stock")} placeholder="Stock" />
              {errors.stock && <p>invalidation</p>}
              <h1>Status</h1>
              <Select defaultValue={0} {...register("status")}>
                <MenuItem value={1}>On</MenuItem>
                <MenuItem value={0}>Off</MenuItem>
              </Select>
              {errors.status && <p>invalidation</p>}
            </Box>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormAddProduct;
