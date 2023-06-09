import { TableRow, TableCell, styled } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

// style for table Cell
const StyleTableCell: any = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#EFEFEF",
    color: theme.palette.common.black,
    padding: "14px 7px",
    lineHeight: "100%",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    padding:"14px 7px ",
   
  },
  [`&.${tableCellClasses.root}`]: {
    color: "#181818",
    fontSize: "12px",
    
  },
}));
// style for table row
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
   
  },
  "&:nth-of-type(odd)": {
    
  },
  // hide last border
  "&:last-child td, &:last-child th": {
 
  },
}));

export { StyleTableCell, StyledTableRow };
