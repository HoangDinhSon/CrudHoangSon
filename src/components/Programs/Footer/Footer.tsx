// import {makeStyles} from "@material-ui/core/styles";
import { Pagination, PaginationItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { createSvgIcon } from "@mui/material";
import { useEffect, useState } from "react";
import { VALUE_ROW_PER_PAGE } from "../../../const";
import "./StylesFooter.css";

function Footer(props: any) {
  const [perRowPage, setPerRowPage] = useState(VALUE_ROW_PER_PAGE);
  const [pageNumberPagination, setPageNumberPagination] = useState(1);

  const pageNumber = props.pageNumber;
  const rowPerPage = props.rowPerPage;
  const listProducts = props.listProducts;
  const handlePagination = props.handlePagination;

  const handleSelectInput = (e: any, value: any) => {
    setPerRowPage(e.target.value);
    setPageNumberPagination(
      Math.ceil(
        (perRowPage * pageNumberPagination - perRowPage / 2) / e.target.value
      )
    );
  };
  const handlePageNumber = (e: any, value: any) => {
    setPageNumberPagination(value);
  };
  useEffect(() => {
    handlePagination(perRowPage, pageNumberPagination);
    rowPerPage(perRowPage);
    pageNumber(pageNumberPagination);
  }, [perRowPage, pageNumberPagination]);

  useEffect(() => {
    if (pageNumberPagination > Math.ceil(listProducts.length / perRowPage)) {
      setPageNumberPagination(pageNumberPagination - 1);
    }
  }, [listProducts.length]);
  const next = createSvgIcon(
    <path d="M0 0h24v24H0V0z" fill="none"/>,
    "next"
  );

  return (
    <div className="wrap w-full h-[50px] p-[15px] z-5 text-[#666666]  fixed bottom-0 flex justify-between items-center">
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
                value={5}
              >
                5 per page
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
          <Pagination
            renderItem={(item) => (
              <PaginationItem
                sx={{
                  fontFamily: "Exo",
                  fontSize: "12px",
                  height: "36px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#D9D9D9",
                  margin: "0",
                  borderRadius: 0,
                  color: "black",
                  borderLeftWidth: 0,
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  ":focus": {
                    backgroundColor: "#004744",
                    color: "white",
                  },
                }}
                components={{
                  // previous:next,
                  // next:"Next",
                }}
                {...item}
              />
            )}
            style={{
              fontFamily: "Exo",
              fontSize: "12px",
              height: "38px",
              borderWidth: "1px",
              borderColor: "#D9D9D9",
            }}
            // variant="outlined"
            count={Math.ceil(listProducts.length / perRowPage)} // kiểm tra giá trị
            shape="rounded"
            onChange={handlePageNumber}
            page={pageNumberPagination}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
