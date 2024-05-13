import * as React from "react";

export const RatingUnknownMediumIcon = (
  className = "",
  isNotInteractive = false,
) => (
  <div className="group">
    <div className={isNotInteractive ? "block" : "group-hover:hidden block"}>
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0075 16.2501H10V16.2576M7.87891 7.51894C9.05048 6.49381 10.95 6.49381 12.1215 7.51894C13.2931 8.54406 13.2931 10.2061 12.1215 11.2312C11.9176 11.4097 11.6917 11.557 11.4513 11.6734C10.7056 12.0342 10.0002 12.6717 10.0002 13.5001M10 1.71436C7.8495 3.75098 4.94563 5.00011 1.75 5.00011C1.69922 5.00011 1.64852 4.99979 1.59789 4.99916C1.2099 6.17927 1 7.4402 1 8.75015C1 14.3417 4.82432 19.04 10 20.3721C15.1757 19.04 19 14.3417 19 8.75015C19 7.4402 18.7901 6.17927 18.4021 4.99916C18.3515 4.99979 18.3008 5.00011 18.25 5.00011C15.0544 5.00011 12.1505 3.75098 10 1.71436Z"
          stroke="#AFAFAF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className={isNotInteractive ? "hidden" : "group-hover:block hidden"}>
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5157 1.1698C10.2265 0.895873 9.77353 0.895873 9.48428 1.1698C7.46752 3.07977 4.74624 4.25011 1.75 4.25011C1.70233 4.25011 1.65473 4.24981 1.60721 4.24922C1.27984 4.24515 0.987669 4.4539 0.885415 4.76491C0.472873 6.01968 0.25 7.35963 0.25 8.75015C0.25 14.6922 4.31406 19.6831 9.81306 21.0984C9.93569 21.13 10.0643 21.13 10.1869 21.0984C15.6859 19.6831 19.75 14.6922 19.75 8.75015C19.75 7.35963 19.5271 6.01968 19.1146 4.76491C19.0123 4.4539 18.7202 4.24515 18.3928 4.24922C18.3453 4.24981 18.2977 4.25011 18.25 4.25011C15.2538 4.25011 12.5325 3.07977 10.5157 1.1698ZM8.24389 8.08337C9.13269 7.30567 10.61 7.30567 11.4988 8.08337C12.3289 8.80969 12.3289 9.9405 11.4988 10.6668C11.3476 10.7991 11.1784 10.9099 10.9957 10.9983C10.2148 11.3762 9.20983 12.1523 9.12683 13.3414C9.1232 13.3115 9.12133 13.281 9.12133 13.2501V13.5001C9.12133 13.4464 9.1232 13.3935 9.12683 13.3414C9.17188 13.7126 9.48803 14.0001 9.87133 14.0001C10.2855 14.0001 10.6213 13.6643 10.6213 13.2501V13.5001C10.6213 13.1223 10.9729 12.6757 11.6492 12.3484C11.9472 12.2042 12.2299 12.0203 12.4865 11.7957C13.9996 10.4717 13.9996 8.27844 12.4865 6.9545C11.0322 5.68195 8.71047 5.68195 7.25613 6.9545C6.9444 7.22726 6.91282 7.70109 7.18558 8.01281C7.45834 8.32454 7.93216 8.35613 8.24389 8.08337ZM10.6211 16.2501C10.6211 16.6643 10.2853 17.0001 9.8711 17.0001C9.45689 17.0001 9.1211 16.6643 9.1211 16.2501C9.1211 15.8359 9.45689 15.5001 9.8711 15.5001C10.2853 15.5001 10.6211 15.8359 10.6211 16.2501Z"
          fill="#AFAFAF"
        />
      </svg>
    </div>
  </div>
);
