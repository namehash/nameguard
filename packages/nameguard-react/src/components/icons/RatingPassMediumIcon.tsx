import * as React from "react";

export const RatingPassMediumIcon = (props) => (
  <svg
    fill="none"
    height="56"
    viewBox="0 0 54 56"
    width="54"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <filter
      id="a"
      colorInterpolationFilters="sRGB"
      filterUnits="userSpaceOnUse"
      height="58"
      width="58"
      x="-2"
      y="-1"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        result="hardAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      />
      <feMorphology
        in="SourceAlpha"
        operator="erode"
        radius="1"
        result="effect1_dropShadow_1495_11655"
      />
      <feOffset dy="2" />
      <feGaussianBlur stdDeviation="2" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
      />
      <feBlend
        in2="BackgroundImageFix"
        mode="normal"
        result="effect1_dropShadow_1495_11655"
      />
      <feColorMatrix
        in="SourceAlpha"
        result="hardAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      />
      <feMorphology
        in="SourceAlpha"
        operator="erode"
        radius="1"
        result="effect2_dropShadow_1495_11655"
      />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="3" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        in2="effect1_dropShadow_1495_11655"
        mode="normal"
        result="effect2_dropShadow_1495_11655"
      />
      <feBlend
        in="SourceGraphic"
        in2="effect2_dropShadow_1495_11655"
        mode="normal"
        result="shape"
      />
    </filter>
    <g clipRule="evenodd" fillRule="evenodd" filter="url(#a)">
      <path
        d="m10.2424 8.06992c.0857.00112.1716.00165.2576.00165 5.3945 0 10.2893-2.10438 13.9216-5.54432 1.4462-1.36967 3.7109-1.36967 5.1572 0 3.6323 3.43994 8.527 5.54432 13.9215 5.54432.086 0 .1719-.00053.2576-.00165l.028 2.24988c-.095.0012-.1903.0018-.2856.0018-5.9925 0-11.4351-2.34071-15.4687-6.16068-.5785-.54787-1.4843-.54787-2.0628 0-4.0336 3.81997-9.4762 6.16068-15.4688 6.16068-.0953 0-.1905-.0006-.2856-.0018-.65471-.0081-1.23903.4093-1.44354 1.0314-.82509 2.5095-1.27084 5.1895-1.27084 7.9705 0 11.8842 8.12818 21.8661 19.12628 24.6968.2453.0631.5025.0631.7478 0 10.9981-2.8307 19.1262-12.8126 19.1262-24.6968 0-2.781-.4457-5.461-1.2708-7.9705-.2045-.6221-.7888-1.0395-1.4436-1.0314l-.028-2.24988c1.6369-.02033 3.0978 1.02346 3.6091 2.57848.8987 2.7336 1.3834 5.6506 1.3834 8.6733 0 12.9359-8.8477 23.7955-20.8155 26.8758-.6131.1578-1.2563.1578-1.8695 0-11.9677-3.0803-20.8154-13.9399-20.8154-26.8758 0-3.0227.48468-5.9397 1.3834-8.6733.51128-1.55502 1.97217-2.59881 3.609-2.57848z"
        fill="#fff"
      />
      <path
        d="m28.0316 4.1609c-.5785-.54787-1.4844-.54787-2.0628 0-4.0337 3.81998-9.4762 6.1607-15.4688 6.1607-.0953 0-.1905-.0006-.2856-.0018-.65473-.0081-1.23905.4093-1.44356 1.0314-.82509 2.5095-1.27084 5.1895-1.27084 7.9705 0 11.8842 8.1282 21.8661 19.1263 24.6967.2452.0632.5025.0632.7477 0 10.9981-2.8306 19.1263-12.8125 19.1263-24.6967 0-2.781-.4457-5.461-1.2708-7.9705-.2045-.6221-.7888-1.0395-1.4436-1.0314-.095.0012-.1903.0018-.2856.0018-5.9925 0-11.4351-2.34072-15.4687-6.1607z"
        fill="#059669"
      />
      <path
        d="m34.2206 20.372c.4815-.6741.3254-1.611-.3487-2.0925-.6742-.4815-1.611-.3254-2.0925.3488l-6.4708 9.0591-3.2479-3.2479c-.5858-.5858-1.5356-.5858-2.1214 0-.5857.5857-.5857 1.5355 0 2.1213l4.5 4.5c.3118.3118.745.4706 1.1844.4342s.8406-.2642 1.0969-.623z"
        fill="#fff"
      />
    </g>
  </svg>
);