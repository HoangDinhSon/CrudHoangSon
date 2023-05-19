// import {makeStyles} from "@material-ui/core/styles";

import { Pagination  } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
// dùng type khác với interface chỗ nào nhỉ
import "./StylesFooter.css";


function Footer(props:any) {
  const [perRowPage, setPerRowPage] = useState(10);
  const [pageNumberPagination , setPageNumber]= useState(1);
  const pageNumber= props.pageNumber;
  const rowPerPage= props.rowPerPage;

  const handleSelectInput = (e: any, value: any) => {
    setPerRowPage(e.target.value);
    rowPerPage(e.target.value)
  };
 const  handlePageNumber =(e:any, value:any)=>{
    setPageNumber( value);
    pageNumber(value)
    
 }

 

  return (
    <div className="wrap w-full h-[76px] p-[15px] text-[#666666]  fixed bottom-0 flex justify-between items-center">
      <div className="leftFooter text-[13px] ">
        <p>Showing 1 to 10 of 32,316 entries</p>
      </div>
      <div className="rightFooter text-[12px] flex justify-end items-center">
        <div className="rowPerPage">
          <FormControl>
            <Select
              sx={{
                height: "38px",
                width: "132px",
                fontSize: "12px",
                fontFamily: "Exo",
              }}
              value={perRowPage}
              onChange={handleSelectInput}
            >
              <MenuItem
                sx={{
                  fontSize: "12px",
                  fontFamily: "Exo",
                }}
                value={10}
              >
                10 per page
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: "12px",
                  fontFamily: "Exo",
                }}
                value={15}
              >
                15 per page
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: "12px",
                  fontFamily: "Exo",
                }}
                value={20}
              >
                20 per page
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="NavigationPage h-[38px] ml-[15px] ">
          <ThemeProvider
            theme={createTheme({
              components: {
                MuiPaginationItem: {
                  defaultProps: {
                    components: {
                      previous: ArrowBackRoundedIcon,
                      next: ArrowBackRoundedIcon,
                    },
                  },
                },
              },
            })}
          >
            <Pagination
              sx={{
                lineHeight: "38px",
              }}
              style={{
                fontFamily: "Exo",
                fontSize: "12px",
              }}
              // variant="outlined"
              count={3} // kiểm tra giá trị
              shape="rounded"
              onChange ={handlePageNumber}
            />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default Footer;
