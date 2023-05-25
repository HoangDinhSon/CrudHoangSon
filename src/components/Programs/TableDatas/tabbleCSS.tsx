import { TableRow, TableCell, styled } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

// style for table Cell
const StyleTableCell: any = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#EFEFEF",
    color: theme.palette.common.black,
    padding: "14px 4px",
    lineHeight: "100%",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    padding:"14px 4px ",
   
  },
  [`&.${tableCellClasses.root}`]: {
    fontFamily: "Exo",
    color: "#181818",
    fontSize: "12px",
    boxSizing: "border-box",
  },
}));
// style for table row
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
    padding: "5px",
  },
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
    padding: "5px",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export { StyleTableCell, StyledTableRow };
