import * as React from "react";

export const PassShieldMedium = (props) => (
  <svg
    width="56"
    height="58"
    viewBox="0 0 56 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_dd_405_7379)">
      <path
        d="M25.2485 29.7485C25.5602 30.0599 25.9931 30.2185 26.4323 30.1822C26.8717 30.1458 27.2729 29.9179 27.5292 29.5591L26.5 31L25.2485 29.7485ZM30.0629 4.2505C28.9059 3.15478 27.0941 3.15478 25.9371 4.2505C22.1711 7.81709 17.0938 10.0002 11.5 10.0002C11.4109 10.0002 11.3219 9.99966 11.233 9.99855C9.92358 9.98229 8.75489 10.8173 8.34587 12.0613C7.4717 14.7202 7 17.5581 7 20.5003C7 33.0855 15.6078 43.6524 27.2522 46.6495C27.7428 46.7758 28.2573 46.7758 28.7478 46.6495C40.3922 43.6524 49 33.0855 49 20.5003C49 17.5581 48.5283 14.7202 47.6541 12.0613C47.2451 10.8173 46.0764 9.98229 44.767 9.99855C44.6781 9.99966 44.5891 10.0002 44.5 10.0002C38.9062 10.0002 33.8289 7.81709 30.0629 4.2505Z"
        fill="#059669"
        stroke="white"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_dd_405_7379"
        x="-1"
        y="0"
        width="58"
        height="58"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="1"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_405_7379"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_405_7379"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="1"
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_405_7379"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_405_7379"
          result="effect2_dropShadow_405_7379"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_405_7379"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
