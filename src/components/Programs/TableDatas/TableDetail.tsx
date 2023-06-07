import { MyIconSwitchOff, MyIconSwitchOn } from "../../../myIconMui";
import { StyledTableRow, StyleTableCell } from "./tabbleCSS";
function TableDetail(props: any) {
  const product = props.product;
  const index = props.ordinalNumber;

  const displayFromDelete = props.displayFromDelete;
  const displayEditForm = props.displayEditForm;
  const displayAndPutDataForFormView = props.displayAndPutDataForFormView;

  const handleDelete = (id: number) => {
    displayFromDelete(id);
  };
  const handleEdit = (id: number) => {
    displayEditForm(id, product.status);
  };
  const handleViewForm = (id: number) => {
    displayAndPutDataForFormView(
      id,
      product.status,
      product.title,
      product.price,
      product.description,
      product.stock
    );
  };
  return (
      <StyledTableRow>
        <StyleTableCell sx={{ width: "29px" }}>{index + 1}</StyleTableCell>
        <StyleTableCell sx={{ width: "181px" }}>{product.title}</StyleTableCell>
        <StyleTableCell
          sx={{
            width: {xs : "500px", sm : "700px"},
          }}
          style= {{ width: "700px"}}
        >
          {product.description}
        </StyleTableCell>

        <StyleTableCell sx={{ width: "30px" }}>{product.price}</StyleTableCell>
        <StyleTableCell sx={{ width: "30px" }}>{product.stock}</StyleTableCell>

        <StyleTableCell sx={{ width: "50px" }}>
          {product.status ? <MyIconSwitchOn /> : <MyIconSwitchOff />}
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
          onClick={() => {
            handleViewForm(product.id);
          }}
        >
          View
        </StyleTableCell>

        <StyleTableCell
          sx={{ paddingLeft: "0", cursor: "pointer"  }}
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
          sx={{ cursor: "pointer" }} // width: "47px",
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
