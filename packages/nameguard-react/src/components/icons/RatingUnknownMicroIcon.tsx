import React from "react";

export const RatingUnknownMicroIcon = (
  props: React.SVGProps<SVGSVGElement>,
  isInteractive = false,
) => {
  return (
    <div className="group/unknown">
      <div
        className={isInteractive ? "group-hover/unknown:hidden block" : "block"}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M7.005 10.5001H7V10.5051M5.58594 4.67929C6.36699 3.99587 7.63332 3.99587 8.41437 4.67929C9.19541 5.36271 9.19541 6.47075 8.41437 7.15416C8.27842 7.27311 8.12778 7.37136 7.96755 7.4489C7.47043 7.68949 7.00015 8.11444 7.00015 8.66673M7 0.80957C5.56634 2.16732 3.63042 3.00007 1.5 3.00007C1.46615 3.00007 1.43235 2.99986 1.3986 2.99944C1.13993 3.78618 1 4.6268 1 5.5001C1 9.22778 3.54955 12.36 7 13.2481C10.4505 12.36 13 9.22778 13 5.5001C13 4.6268 12.8601 3.78618 12.6014 2.99944C12.5677 2.99986 12.5339 3.00007 12.5 3.00007C10.3696 3.00007 8.43366 2.16732 7 0.80957Z"
            stroke="#AFAFAF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={
          isInteractive ? "group-hover/unknown:block hidden" : "hidden"
        }
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.34381 0.446536C7.15098 0.263915 6.84902 0.263915 6.65619 0.446536C5.31168 1.71985 3.4975 2.50007 1.5 2.50007C1.46822 2.50007 1.43649 2.49987 1.40481 2.49948C1.18656 2.49677 0.99178 2.63593 0.92361 2.84327C0.648582 3.67978 0.5 4.57309 0.5 5.5001C0.5 9.46144 3.20937 12.7887 6.87537 13.7323C6.95713 13.7533 7.04288 13.7533 7.12463 13.7323C10.7906 12.7887 13.5 9.46144 13.5 5.5001C13.5 4.57309 13.3514 3.67978 13.0764 2.84327C13.0082 2.63593 12.8134 2.49677 12.5952 2.49948C12.5635 2.49987 12.5318 2.50007 12.5 2.50007C10.5025 2.50007 8.68832 1.71985 7.34381 0.446536ZM5.82926 5.05558C6.4218 4.53711 7.40665 4.53711 7.99918 5.05558C8.55257 5.53979 8.55257 6.29366 7.99918 6.77788C7.8984 6.86606 7.78557 6.93991 7.66381 6.99884C7.14322 7.25078 6.47322 7.76819 6.41789 8.56094C6.41547 8.54098 6.41422 8.52067 6.41422 8.50006V8.66673C6.41422 8.63093 6.41547 8.59567 6.41789 8.56094C6.44792 8.80837 6.65869 9.00006 6.91422 9.00006C7.19036 9.00006 7.41422 8.7762 7.41422 8.50006V8.66673C7.41422 8.41485 7.64859 8.11716 8.09944 7.89897C8.29813 7.80281 8.48658 7.68017 8.65769 7.53045C9.6664 6.64783 9.6664 5.18563 8.65769 4.303C7.68813 3.45464 6.14032 3.45464 5.17075 4.303C4.96294 4.48484 4.94188 4.80072 5.12372 5.00854C5.30556 5.21636 5.62144 5.23742 5.82926 5.05558ZM7.41407 10.5001C7.41407 10.7762 7.19021 11.0001 6.91407 11.0001C6.63793 11.0001 6.41407 10.7762 6.41407 10.5001C6.41407 10.2239 6.63793 10.0001 6.91407 10.0001C7.19021 10.0001 7.41407 10.2239 7.41407 10.5001Z"
            fill="#9CA3AF"
          />
        </svg>
      </div>
    </div>
  );
};
