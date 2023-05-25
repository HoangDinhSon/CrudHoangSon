import { SvgIcon } from "@mui/material";

function MyIconSearchHeader(props:any) {
  return (
    <SvgIcon
      width="5"
      height="5"
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.72036 0.720391C0.915622 0.525129 1.2322 0.525129 1.42747 0.720391L4.2559 3.54882C4.45116 3.74409 4.45116 4.06067 4.2559 4.25593C4.06064 4.45119 3.74406 4.45119 3.54879 4.25593L0.72036 1.4275C0.525098 1.23224 0.525098 0.915653 0.72036 0.720391Z"
        fill="#747474"
      />
    </SvgIcon>
  );
}

export default MyIconSearchHeader;
