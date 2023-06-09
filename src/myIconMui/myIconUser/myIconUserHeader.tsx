import { SvgIcon } from "@mui/material";

function MyIconUserHeader(props: any) {
  return (
    <SvgIcon
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.99998 1.83334C2.80336 1.83334 1.83331 2.80339 1.83331 4.00001C1.83331 5.19663 2.80336 6.16668 3.99998 6.16668C5.1966 6.16668 6.16665 5.19663 6.16665 4.00001C6.16665 2.80339 5.1966 1.83334 3.99998 1.83334ZM0.833313 4.00001C0.833313 2.25111 2.25108 0.833344 3.99998 0.833344C5.74888 0.833344 7.16665 2.25111 7.16665 4.00001C7.16665 5.74891 5.74888 7.16668 3.99998 7.16668C2.25108 7.16668 0.833313 5.74891 0.833313 4.00001Z"
        fill="white"
      />
    </SvgIcon>
  );
}

export default MyIconUserHeader;
