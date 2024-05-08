import * as React from "react";

export const RatingPassLargeIcon = (props) => (
  <>
    <div className="hidden lg:block">
      <svg
        fill="none"
        height="71"
        viewBox="0 0 68 71"
        width="68"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
        <filter
          id="a"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="74"
          width="74"
          x="-3"
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
            result="effect1_dropShadow_1176_4994"
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
            result="effect1_dropShadow_1176_4994"
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
            result="effect2_dropShadow_1176_4994"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            in2="effect1_dropShadow_1176_4994"
            mode="normal"
            result="effect2_dropShadow_1176_4994"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_1176_4994"
            mode="normal"
            result="shape"
          />
        </filter>
        <g filter="url(#a)">
          <path
            clipRule="evenodd"
            d="m35.3752 5.78614c-.7713-.73048-1.9791-.73048-2.7504 0-5.3781 5.09326-12.6348 8.21416-20.6248 8.21416-.1271 0-.254-.0008-.3808-.0024-.873-.0108-1.65208.5458-1.92476 1.3752-1.10011 3.346-1.69444 6.9193-1.69444 10.6273 0 15.8454 10.8375 29.1545 25.5015 32.9287.327.0842.67.0842.997 0 14.664-3.7742 25.5015-17.0833 25.5015-32.9287 0-3.708-.5943-7.2813-1.6944-10.6273-.2727-.8294-1.0518-1.386-1.9248-1.3752-.1267.0016-.2537.0024-.3808.0024-7.99 0-15.2467-3.1209-20.6248-8.21416zm8.2523 21.37636c.642-.8988.4338-2.1479-.465-2.79-.8989-.642-2.148-.4338-2.79.465l-8.6277 12.0789-4.3306-4.3306c-.781-.7811-2.0474-.7811-2.8284 0-.7811.781-.7811 2.0474 0 2.8284l6 6c.4157.4157.9933.6275 1.5792.579s1.1208-.3523 1.4625-.8307z"
            fill="#059669"
            fillRule="evenodd"
          />
          <g fill="#fff">
            <path
              clipRule="evenodd"
              d="m11.6565 10.9981c.1143.0015.2288.0022.3435.0022 7.1926 0 13.7189-2.80581 18.5619-7.39236 1.9283-1.82621 4.9479-1.82621 6.8762 0 4.843 4.58655 11.3693 7.39236 18.5619 7.39236.1147 0 .2292-.0007.3435-.0022l.0373 2.9998c-.1267.0016-.2537.0024-.3808.0024-7.99 0-15.2467-3.1209-20.6248-8.21416-.7713-.73048-1.9791-.73048-2.7504 0-5.3781 5.09326-12.6348 8.21416-20.6248 8.21416-.1271 0-.254-.0008-.3808-.0024-.873-.0108-1.65208.5458-1.92476 1.3752-1.10011 3.346-1.69444 6.9193-1.69444 10.6273 0 15.8454 10.8375 29.1545 25.5015 32.9287.327.0842.67.0842.997 0 14.664-3.7742 25.5015-17.0833 25.5015-32.9287 0-3.708-.5943-7.2813-1.6944-10.6273-.2727-.8294-1.0518-1.386-1.9248-1.3752l-.0373-2.9998c2.1824-.0271 4.1303 1.3646 4.812 3.438 1.1983 3.6447 1.8445 7.534 1.8445 11.5643 0 17.2477-11.7968 31.727-27.7537 35.834-.8175.2105-1.6751.2105-2.4926 0-15.9569-4.107-27.7537-18.5863-27.7537-35.834 0-4.0303.64623-7.9196 1.84452-11.5643.6817-2.0734 2.62954-3.4651 4.81198-3.438zm31.1565 15.5842.0007-.0011zm-1.6277-1.1622c.0003-.0005.0006-.0009.001-.0013zm-9.4405 11.4963 8.6277-12.0789c.642-.8988 1.8911-1.107 2.79-.465.8988.6421 1.107 1.8912.465 2.79l-10 14c-.3417.4784-.8766.7822-1.4625.8307s-1.1635-.1633-1.5792-.579l-6-6c-.7811-.781-.7811-2.0474 0-2.8284.781-.7811 2.0474-.7811 2.8284 0z"
              fillRule="evenodd"
            />
            <path d="m43.6275 27.1625c.642-.8988.4338-2.1479-.465-2.79-.8989-.642-2.148-.4338-2.79.465l-8.6277 12.0789-4.3306-4.3306c-.781-.7811-2.0474-.7811-2.8284 0-.7811.781-.7811 2.0474 0 2.8284l6 6c.4157.4157.9933.6275 1.5792.579s1.1208-.3523 1.4625-.8307z" />
          </g>
        </g>
      </svg>
    </div>
    <div className="block lg:hidden">
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
    </div>
  </>
);
