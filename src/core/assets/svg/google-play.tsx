import { SVGProps } from "react";

const GooglePlayIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="21"
    height="24"
    viewBox="0 0 21 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transition: "all 0.3s ease-in" }}
    {...props}
  >
    <path
      d="M11.1925 11.52L14.8888 7.82375L2.95 1.11375C2.15875 0.68625 1.4175 0.62625 0.7675 1.09375L11.1925 11.52ZM15.5188 15.8475L19.3612 13.6863C20.1112 13.2663 20.5225 12.6713 20.5225 12.0112C20.5225 11.3525 20.1112 10.7562 19.3625 10.3362L15.8838 8.3825L11.9675 12.2975L15.5188 15.8475ZM0.125 2.0025C0.0449999 2.24875 0 2.52375 0 2.825V21.2062C0 21.6825 0.105 22.0925 0.295 22.4187L10.4163 12.2963L0.125 2.0025ZM11.1925 13.0713L1.1275 23.1375C1.32 23.2112 1.5275 23.25 1.74625 23.25C2.13625 23.25 2.5425 23.135 2.95625 22.905L14.525 16.4088L11.1925 13.0713Z"
      fill="black"
    />
  </svg>
);
export default GooglePlayIcon;
