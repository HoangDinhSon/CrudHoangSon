import SwitchOff from "../../../assets/Switch.svg";
import SwitchOn from "../../../assets/SwitchOn.svg";
import { StyledTableRow, StyleTableCell } from "./tabbleCSS";

function TableDetail() {
  return (
    <StyledTableRow>
      <StyleTableCell sx={{ width: "29px" }}>1</StyleTableCell>
      <StyleTableCell sx={{ width: "181px" }}>Programs</StyleTableCell>
      <StyleTableCell sx={{ width: "306px" }}>Run Time</StyleTableCell>
      <StyleTableCell sx={{ width: "306px" }}>Idle</StyleTableCell>
      <StyleTableCell sx={{ width: "306px" }}>12</StyleTableCell>
      <StyleTableCell sx={{ width: "133px" }}>
        <img src={SwitchOff} />
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
        }}
      >
        View
      </StyleTableCell>
      <StyleTableCell
        sx={{ width: "15px", paddingLeft: "0" }}
        style={{
          color: "#004744",
          fontWeight: "500",
        }}
      >
        EDIT
      </StyleTableCell>

      <StyleTableCell
        sx={{ width: "47px" }}
        style={{
          color: "#7C7B7B;",
        }}
      >
        DELETE
      </StyleTableCell>
    </StyledTableRow>
  );
}

export default TableDetail;
