import { Button } from "@mui/material";
import { TextField, Box, Select, MenuItem } from "@mui/material";
function FormEdit() {


  
  return (
    <div className="wrap w-screen h-screen">
      <div className="w-[448px] h-[500px]  fixed bottom-[50%] left-[50%] -translate-x-[50%] translate-y-[50%]  pl-[30px] pr-[30px] bg-slate-400 rounded-2xl">
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
            <TextField fullWidth/>
            <h1>Desription</h1>
            <TextField fullWidth />
            <h1>Price</h1>
            <TextField fullWidth />
            <h1>Stock</h1>
            <TextField fullWidth />
            <h1>Status</h1>
            <Select fullWidth value={1}>
              <MenuItem value={1}>On</MenuItem>
              <MenuItem value={0}>Off</MenuItem>
            </Select>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default FormEdit;
