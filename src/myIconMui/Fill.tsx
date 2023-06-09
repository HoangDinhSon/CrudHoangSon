import { SvgIcon } from "@mui/material";

function Fill(props: any) {
  const width = props.width;
  const height = props.height;
  const className = props.className;
  return (
    <SvgIcon
      viewBox="0 0 14 13"
      width={width || 14}
      height={height || 23}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.545805 0.790953C0.627425 0.613617 0.80479 0.5 1.00001 0.5H13C13.1952 0.5 13.3726 0.613617 13.4542 0.790953C13.5358 0.968289 13.5068 1.17691 13.3798 1.3252L8.70001 6.79074V12C8.70001 12.1728 8.61073 12.3334 8.46392 12.4247C8.31712 12.5159 8.1336 12.5248 7.97862 12.4483L5.57862 11.2631C5.40801 11.1789 5.30001 11.0051 5.30001 10.8148V6.79074L0.620209 1.3252C0.49324 1.17691 0.464186 0.968289 0.545805 0.790953ZM2.08637 1.5L6.1798 6.28073C6.25737 6.37132 6.30001 6.48666 6.30001 6.60593V10.5041L7.70001 11.1954V6.60593C7.70001 6.48666 7.74264 6.37132 7.82021 6.28073L11.9136 1.5H2.08637Z"
        fill="#004744"
      />
    </SvgIcon>
  );
}

export default Fill;
