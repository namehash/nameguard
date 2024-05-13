import * as React from "react";

export const RatingPassMediumIcon = (
  isNotInteractive: boolean,
  ...props: React.SVGProps<SVGSVGElement>
) => (
  <div className="group">
    <div className={isNotInteractive ? "block" : "group-hover:hidden block"}>
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M7 11.7496L9.25 13.9996L13 8.7496M10 1.71387C7.8495 3.75049 4.94563 4.99962 1.75 4.99962C1.69922 4.99962 1.64852 4.9993 1.59789 4.99867C1.2099 6.17878 1 7.43971 1 8.74966C1 14.3412 4.82432 19.0395 10 20.3716C15.1757 19.0395 19 14.3412 19 8.74966C19 7.43971 18.7901 6.17878 18.4021 4.99867C18.3515 4.9993 18.3008 4.99962 18.25 4.99962C15.0544 4.99962 12.1505 3.75049 10 1.71387Z"
          stroke="#059669"
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
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5157 1.1698C10.2265 0.895873 9.77353 0.895873 9.48428 1.1698C7.46752 3.07977 4.74624 4.25011 1.75 4.25011C1.70233 4.25011 1.65473 4.24981 1.60721 4.24922C1.27984 4.24515 0.987669 4.4539 0.885415 4.76491C0.472873 6.01968 0.25 7.35963 0.25 8.75015C0.25 14.6922 4.31406 19.6831 9.81306 21.0984C9.93569 21.13 10.0643 21.13 10.1869 21.0984C15.6859 19.6831 19.75 14.6922 19.75 8.75015C19.75 7.35963 19.5271 6.01968 19.1146 4.76491C19.0123 4.4539 18.7202 4.24515 18.3928 4.24922C18.3453 4.24981 18.2977 4.25011 18.25 4.25011C15.2538 4.25011 12.5325 3.07977 10.5157 1.1698ZM13.6103 9.18593C13.8511 8.84887 13.773 8.38046 13.4359 8.1397C13.0989 7.89894 12.6305 7.97701 12.3897 8.31407L9.1543 12.8436L7.53033 11.2197C7.23744 10.9268 6.76256 10.9268 6.46967 11.2197C6.17678 11.5126 6.17678 11.9874 6.46967 12.2803L8.71967 14.5303C8.87556 14.6862 9.09215 14.7656 9.31186 14.7474C9.53157 14.7293 9.73216 14.6153 9.8603 14.4359L13.6103 9.18593Z"
          fill="#059669"
        />
      </svg>
    </div>
  </div>
);
