import { Button } from "@mui/material";
import { TextField, Box, Select, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import { InputAddForm } from "../../../type";
import {resolverForAddForm} from "../../../yupGlobal";
function FormAddProduct(props: any) {
    const hiddentAddForm = props.hiddentAddForm;
    const getPayLoadFromAddForm=props.getPayLoadFromAddForm;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputAddForm>(resolverForAddForm);

  const onSubmit = (payloadAddForm:InputAddForm) => {
    getPayLoadFromAddForm(payloadAddForm)
    
    hiddentAddForm()
  };
  const handleCancel = () => {
    hiddentAddForm()
  };

  return (
    <div className="wrap w-screen h-screen">
      <div className="w-[448px] h-[500px]  fixed bottom-[50%] left-[50%] -translate-x-[50%] translate-y-[50%]  pl-[30px] pr-[30px] bg-white rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="h-[50px] flex items-center justify-between">
            <h1>ADD Production</h1>
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
                {...register("title" , {
                    required: true 
                })}
                name="title"
                placeholder="title"
                fullWidth
              />
              {errors.title&&<p>invalidation</p>}
              <h1>Description</h1>
              <TextField
                {...register("description")}
                placeholder="Description"
                fullWidth
              />
               {errors.description&&<p>invalidation</p>}
              <h1>Price</h1>
              <TextField {...register("price")} placeholder="Price" fullWidth />
              {errors.price&&<p>invalidation</p>}
              <h1>Stock</h1>
              <TextField {...register("stock")} placeholder="Stock" fullWidth />
              {errors.stock&&<p>invalidation</p>}
              <h1>Status</h1>
              <Select fullWidth defaultValue={0} {...register("status")}>
                <MenuItem value={1} >On</MenuItem>
                <MenuItem value={0}>Off</MenuItem>
              </Select>
              {errors.status&&<p>invalidation</p>}
            </Box>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormAddProduct;
