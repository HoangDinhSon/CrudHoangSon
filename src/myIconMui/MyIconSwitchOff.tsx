import { SvgIcon, SvgIconProps } from "@mui/material";

function MyIconSwitchOff(props:any) {
  return (
    <SvgIcon
      width="25"
      height="14"
      viewBox="0 0 25 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="25"
        height="13.3333"
        rx="6.66667"
        fill="#044744"
        fill-opacity="0.2"
      />
      <circle cx="6.66666" cy="6.66667" r="5" fill="white" />
    </SvgIcon>
  );
}

export default MyIconSwitchOff;
