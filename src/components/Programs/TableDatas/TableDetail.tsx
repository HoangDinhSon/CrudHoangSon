import {MyIconSwitchOff,MyIconSwitchOn} from "../../../myIconMui"
import SwitchOn from "../../../assets/SwitchOn.svg";
import { StyledTableRow, StyleTableCell } from "./tabbleCSS";

function TableDetail(props: any) {
  const product = props.product;
  const index = props.index;
  const displayFromDelete = props.displayFromDelete;
  const displayEditForm = props.displayEditForm;
  const displayAndPutDataForFormView=props.displayAndPutDataForFormView;
  // console.log("product.status ",product.status );
  
  const handleDelete = (id: number) => {
    displayFromDelete(id);
  };
  const handleEdit = (id: number) => {
    displayEditForm(id,product.status);
  };
  const handleViewForm =(id:number)=>{
    displayAndPutDataForFormView(id ,product.status, product.title,product.price, product.description, product.stock)
  }
  return (
    <StyledTableRow>
      <StyleTableCell sx={{ width: "29px" }}>{index + 1}</StyleTableCell>
      <StyleTableCell sx={{ width: "181px" }}>{product.title}</StyleTableCell>
      <StyleTableCell sx={{ width: "712px" }}>
        {product.description}
      </StyleTableCell>
      <StyleTableCell sx={{ width: "30px" }}>{product.price}</StyleTableCell>
      <StyleTableCell sx={{ width: "30px" }}>{product.stock}</StyleTableCell>

      <StyleTableCell sx={{ width: "133px" }}>
        {product.status ? <MyIconSwitchOn/> : <MyIconSwitchOff/>}
      </StyleTableCell>
      <StyleTableCell
        style={{
          color: "#004744",
          fontWeight: "500",
        }}
        sx={{
          width: "20px",
          paddingLeft: "20px",
          paddingRight: 0,
          cursor: "pointer",
        }}
        onClick={()=>{handleViewForm(product.id)}}
      >
        View
      </StyleTableCell>

      <StyleTableCell
        sx={{ width: "15px", paddingLeft: "0",cursor: "pointer", }}
        style={{
          color: "#004744",
          fontWeight: "500",
        }}
        onClick={() => {
          handleEdit(product.id);
        }}
      >
        EDIT
      </StyleTableCell>

      <StyleTableCell
        sx={{ width: "47px" ,cursor: "pointer",}}
        style={{
          color: "#7C7B7B",
        }}
        onClick={() => handleDelete(product.id)}
      >
        DELETE
      </StyleTableCell>
    </StyledTableRow>
  );
}

export default TableDetail;
