import * as React from "react";

export const RatingPassSmallIcon = (
  props: React.SVGProps<SVGSVGElement>,
  isInteractive = false,
) => (
  <div className="ng-group">
    <div
      className={isInteractive ? "group-hover:ng-hidden ng-block" : "ng-block"}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M6.5 9.62483L8.375 11.4998L11.5 7.12483M9 1.26172C7.20792 2.9589 4.78802 3.99984 2.125 3.99984C2.08269 3.99984 2.04043 3.99958 1.99825 3.99906C1.67491 4.98248 1.5 6.03325 1.5 7.12488C1.5 11.7845 4.68693 15.6997 9 16.8098C13.3131 15.6997 16.5 11.7845 16.5 7.12488C16.5 6.03325 16.3251 4.98248 16.0018 3.99906C15.9596 3.99958 15.9173 3.99984 15.875 3.99984C13.212 3.99984 10.7921 2.9589 9 1.26172Z"
          stroke="#059669"
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
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.42976 0.807926C9.18872 0.57965 8.81128 0.57965 8.57024 0.807926C6.8896 2.39957 4.62187 3.37484 2.125 3.37484C2.08527 3.37484 2.04561 3.3746 2.00601 3.3741C1.7332 3.37072 1.48972 3.54467 1.40451 3.80385C1.06073 4.84949 0.875 5.96612 0.875 7.12488C0.875 12.0766 4.26171 16.2357 8.84421 17.4151C8.94641 17.4414 9.05359 17.4414 9.15579 17.4151C13.7383 16.2357 17.125 12.0766 17.125 7.12488C17.125 5.96612 16.9393 4.84949 16.5955 3.80385C16.5103 3.54467 16.2668 3.37072 15.994 3.3741C15.9544 3.3746 15.9147 3.37484 15.875 3.37484C13.3781 3.37484 11.1104 2.39957 9.42976 0.807926ZM12.0086 7.48803C12.2092 7.20715 12.1442 6.8168 11.8633 6.61617C11.5824 6.41554 11.192 6.4806 10.9914 6.76148L8.29525 10.5361L6.94194 9.18281C6.69786 8.93874 6.30214 8.93874 6.05806 9.18281C5.81398 9.42689 5.81398 9.82262 6.05806 10.0667L7.93306 11.9417C8.06297 12.0716 8.24346 12.1378 8.42655 12.1226C8.60964 12.1075 8.7768 12.0125 8.88358 11.863L12.0086 7.48803Z"
          fill="#059669"
        />
      </svg>
    </div>
  </div>
);
