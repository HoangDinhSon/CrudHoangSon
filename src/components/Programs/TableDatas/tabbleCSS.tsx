import {
  TableRow,
  TableCell,
  styled,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

const StyleTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#EFEFEF",
    color: theme.palette.common.black,
    padding: "14px 18px ",
    lineHeight:"100%",
    boxSizing: "border-box",
    fontSize:"12px",
    fontFamily:"Exo",
    fontWeight:"bold",

  },
  [`&.${tableCellClasses.body}`]: {
   
  },
  [`&.${tableCellClasses.root}`]: {
    fontFamily:"Exo",
    color:"#181818"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  
   
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
    padding:"8px",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },

}));


export {StyleTableCell, StyledTableRow }