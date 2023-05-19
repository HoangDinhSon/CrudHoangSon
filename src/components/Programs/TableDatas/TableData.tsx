import {
  TableContainer,
  TableBody,
  Table,
  TableHead,
  TableRow,
} from "@mui/material";
import TableDetail from "./TableDetail";
import { StyleTableCell } from "./tabbleCSS";

function TableData(props: any) {
  //vào
  const listProducts = props.listProducts;
  const valuePageNumber = props.valuePageNumber;
  const valueRowPerPage = props.valueRowPerPage;

  //ra
  const pageNumber = props.pageNumber;
  const rowPerPage = props.rowPerPage;
  //

  return (
    <div className="Wrap">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyleTableCell sx={{ width: "29px" }}>STT</StyleTableCell>
              <StyleTableCell sx={{ width: "181px" }}>Title</StyleTableCell>
              <StyleTableCell sx={{ width: "306px" }}>
                Description
              </StyleTableCell>
              <StyleTableCell sx={{ width: "306px" }}>Price </StyleTableCell>
              <StyleTableCell sx={{ width: "306px" }}> Stock</StyleTableCell>
              <StyleTableCell sx={{ width: "133px" }}>Status</StyleTableCell>
              <StyleTableCell sx={{ width: "20px", paddingRight: "0" }}>
                View
              </StyleTableCell>
              <StyleTableCell sx={{ width: "20px" }}>{"sua"}</StyleTableCell>
              <StyleTableCell sx={{ width: "" }}>{""}</StyleTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listProducts
              .slice(
                (valuePageNumber - 1) * valueRowPerPage + 1,
                (valuePageNumber - 1) * valueRowPerPage + 1 + valueRowPerPage
              )
              .map((product: any, index: number) => {
                return (
                  <TableDetail
                    key={product.id}
                    product={product}
                    index={index}
                  />
                );
              })}
            <div className="w-full h-[76px]" ></div>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableData;
