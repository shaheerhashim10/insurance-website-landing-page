import React from 'react';
import Button from './Button';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="mt-16 font-semibold">
      <div className="flex justify-between pt-16">
        <div className="flex flex-col justify-center">
          <svg
            width="41"
            height="41"
            className="align-middle animate-spin-slow"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.1338 2.86433C28.1108 1.04585 24.5702 0 20.7854 0C15.9198 0 11.4579 1.7284 7.98024 4.60471L13.854 9.62232C15.8408 8.30591 18.2235 7.53927 20.7854 7.53927C22.6948 7.53927 24.5048 7.96518 26.1255 8.72719L31.1338 2.86433Z"
              fill="#FF6D7F"
            />
            <path
              d="M10.3831 27.1556C9.01775 25.1452 8.21993 22.7181 8.21993 20.1047C8.21993 17.55 8.98232 15.1734 10.292 13.1899L4.53179 8.26929C2.10986 11.5896 0.680664 15.6803 0.680664 20.1047C0.680664 25.0208 2.44514 29.5247 5.37533 33.0178L10.3831 27.1556Z"
              fill="#FF6D7F"
            />
            <path
              d="M9.06252 36.4398L13.9876 30.6744C15.9472 31.9374 18.2807 32.6702 20.7854 32.6702C24.0479 32.6702 27.0201 31.4267 29.2538 29.3879L35.0139 34.3085C31.3747 37.954 26.3434 40.2094 20.7854 40.2094C16.4108 40.2094 12.3626 38.8123 9.06252 36.4398Z"
              fill="#FF6D7F"
            />
            <path
              d="M30.1622 11.74L35.0872 5.97468C38.6751 9.6059 40.8901 14.5966 40.8901 20.1047C40.8901 23.8393 39.8718 27.3361 38.0978 30.3325L32.2234 25.3143C32.9474 23.7272 33.3508 21.9631 33.3508 20.1047C33.3508 16.8924 32.1454 13.9616 30.1622 11.74Z"
              fill="#FF6D7F"
            />
          </svg>
        </div>
        <div className="flex">
          <nav className="flex list-none  pt-5 text-base capitalize">
            <li className="pl-9">Home</li>
            <li className="pl-9">
              <div className="flex">
                <span> Services</span>
                <svg
                  width="15"
                  height="10"
                  className="mt-2 ml-1"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.373 2.51074L12.596 0.73372L7.26496 6.06479L1.93389 0.73372L0.156869 2.51074L7.26496 9.61883L14.373 2.51074Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
            </li>
            <li className="pl-9">About us</li>
            <li className="pl-9">Blog</li>
            <li className="pl-9">Career</li>
          </nav>
        </div>
        <div className="flex">
          <Button className="w-48 h-[3.3rem] text-black rounded-[3.3rem] text-base">
            Contact us
          </Button>
          <div className="flex ml-12">
            <div className="flex flex-col justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 25"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33203 22.3682C5.73633 22.7197 6.29004 22.7637 6.67676 22.377L9.39258 19.6611C9.77051 19.2832 9.75293 18.6943 9.38379 18.3164L8.0918 17.0244L10.0078 15.1084C10.377 14.7393 10.377 14.1416 9.99902 13.7637L8.25 12.0059C10.6318 10.8193 11.9678 8.8418 11.9678 6.5127C11.9678 3.2168 9.30469 0.553711 6 0.553711C2.68652 0.553711 0.0322266 3.20801 0.0322266 6.5127C0.0322266 8.87695 1.37695 10.9951 3.52148 11.9619V20.2061C3.52148 20.5225 3.61816 20.8828 3.89062 21.1201L5.33203 22.3682ZM6 20.8037L5.05078 19.8545V10.8018C3.04688 10.3623 1.61426 8.60449 1.61426 6.5127C1.61426 4.0957 3.56543 2.14453 6 2.14453C8.43457 2.14453 10.377 4.0957 10.377 6.5127C10.377 8.58691 8.93555 10.3711 6.73828 10.8545V12.7617L8.42578 14.4492L6.62402 16.2158V17.8066L7.81055 18.9756L6 20.8037ZM6 6.56543C6.86133 6.56543 7.56445 5.8623 7.56445 5.00098C7.56445 4.13965 6.86133 3.43652 6 3.43652C5.12988 3.43652 4.43555 4.13086 4.43555 5.00098C4.43555 5.8623 5.13867 6.56543 6 6.56543Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center">Login</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
