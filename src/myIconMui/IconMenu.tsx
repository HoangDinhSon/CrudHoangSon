import { SvgIcon, SvgIconProps } from "@mui/material";

const YourIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      role="img"
      viewBox="0 0 77 50"
      fill="none"
      {...props}
      sx={{
        width: "77px",
        height: "50px",
      }}
    >
      <g filter="url(#filter0_d_40_624)">
        <rect
          x="15"
          y="9"
          width="32"
          height="32"
          rx="5"
          fill="currentColor"
          fillOpacity="0.2"
          shapeRendering="crispEdges"
        ></rect>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.1499 20.9833C25.1499 20.7071 25.3738 20.4833 25.6499 20.4833H36.3166C36.5927 20.4833 36.8166 20.7071 36.8166 20.9833C36.8166 21.2594 36.5927 21.4833 36.3166 21.4833H25.6499C25.3738 21.4833 25.1499 21.2594 25.1499 20.9833Z"
          fill="currentColor"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.1499 24.9833C25.1499 24.7071 25.3738 24.4833 25.6499 24.4833H36.3166C36.5927 24.4833 36.8166 24.7071 36.8166 24.9833C36.8166 25.2594 36.5927 25.4833 36.3166 25.4833H25.6499C25.3738 25.4833 25.1499 25.2594 25.1499 24.9833Z"
          fill="currentColor"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.1499 28.9833C25.1499 28.7071 25.3738 28.4833 25.6499 28.4833H36.3166C36.5927 28.4833 36.8166 28.7071 36.8166 28.9833C36.8166 29.2594 36.5927 29.4833 36.3166 29.4833H25.6499C25.3738 29.4833 25.1499 29.2594 25.1499 28.9833Z"
          fill="currentColor"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_40_624"
          x="-15"
          y="-21"
          width="92"
          height="92"
          filterUnits="userSpaceOnUse"
          colorInterpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="15"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.516667 0 0 0 0 0.516667 0 0 0 0 0.516667 0 0 0 0.25 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_40_624"
          ></feBlend>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_40_624"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </SvgIcon>
  );
};

export default YourIcon;
