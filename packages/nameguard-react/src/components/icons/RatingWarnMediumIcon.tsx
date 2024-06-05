import * as React from "react";

export const RatingWarnMediumIcon = (
  props: React.SVGProps<SVGSVGElement>,
  isInteractive = false,
) => (
  <div className="ng-group">
    <div
      className={isInteractive ? "group-hover:ng-hidden ng-block" : "ng-block"}
    >
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M10 8.00009V11.7501M10 1.71436C7.8495 3.75098 4.94563 5.00011 1.75 5.00011C1.69922 5.00011 1.64852 4.99979 1.59789 4.99916C1.2099 6.17927 1 7.4402 1 8.75015C1 14.3417 4.82432 19.04 10 20.3721C15.1757 19.04 19 14.3417 19 8.75015C19 7.4402 18.7901 6.17927 18.4021 4.99916C18.3515 4.99979 18.3008 5.00011 18.25 5.00011C15.0544 5.00011 12.1505 3.75098 10 1.71436ZM10 14.7501H10.0075V14.7576H10V14.7501Z"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div
      className={isInteractive ? "group-hover:ng-block ng-hidden" : "ng-hidden"}
    >
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
          d="M9.48428 1.1698C9.77353 0.895873 10.2265 0.895873 10.5157 1.1698C12.5325 3.07977 15.2538 4.25011 18.25 4.25011C18.2977 4.25011 18.3453 4.24981 18.3928 4.24922C18.7202 4.24515 19.0123 4.4539 19.1146 4.76491C19.5271 6.01968 19.75 7.35963 19.75 8.75015C19.75 14.6922 15.6859 19.6831 10.1869 21.0984C10.0643 21.13 9.93569 21.13 9.81306 21.0984C4.31406 19.6831 0.25 14.6922 0.25 8.75015C0.25 7.35963 0.472873 6.01968 0.885415 4.76491C0.987669 4.4539 1.27984 4.24515 1.60721 4.24922C1.65473 4.24981 1.70233 4.25011 1.75 4.25011C4.74624 4.25011 7.46752 3.07977 9.48428 1.1698ZM10 7.25009C10.4142 7.25009 10.75 7.58588 10.75 8.00009V11.7501C10.75 12.1643 10.4142 12.5001 10 12.5001C9.58579 12.5001 9.25 12.1643 9.25 11.7501V8.00009C9.25 7.58588 9.58579 7.25009 10 7.25009ZM10 14.0001C9.58579 14.0001 9.25 14.3359 9.25 14.7501V14.7576C9.25 15.1718 9.58579 15.5076 10 15.5076H10.0075C10.4217 15.5076 10.7575 15.1718 10.7575 14.7576V14.7501C10.7575 14.3359 10.4217 14.0001 10.0075 14.0001H10Z"
          fill="#F59E0B"
        />
      </svg>
    </div>
  </div>
);
