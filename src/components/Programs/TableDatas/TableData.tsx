import {
  TableContainer,
  TableBody,
  Table,
  TableHead,
  TableRow,
} from "@mui/material";
import TableDetail from "./TableDetail";
import {StyleTableCell  } from "./tabbleCSS";



function TableData() {
  
  return (
    <div className="Wrap">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyleTableCell sx= {{width:"29px",}}>ID</StyleTableCell>
              <StyleTableCell  sx= {{width:"181px",}}   >Name</StyleTableCell>
              <StyleTableCell  sx= {{width:"306px",}} >Description</StyleTableCell>
              <StyleTableCell  sx= {{width:"306px",}} >State</StyleTableCell>
              <StyleTableCell  sx= {{width:"306px",}} >Number of stations</StyleTableCell>
              <StyleTableCell  sx= {{width:"133px",}} >Enabled</StyleTableCell>
              <StyleTableCell  sx= {{width:"20px", paddingRight:"0",}} >Action</StyleTableCell>
              <StyleTableCell  sx= {{width:"20px",}} >{"sua"}</StyleTableCell>
              <StyleTableCell  sx= {{width:"",}} >{""}</StyleTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           <TableDetail/>
           <TableDetail/>
           <TableDetail/>
           <TableDetail/>
           <TableDetail/>
           <TableDetail/>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableData;
