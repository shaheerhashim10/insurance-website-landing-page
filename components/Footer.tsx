import Link from 'next/link';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex justify-between mt-36 pb-14">
      <div className="flex">
        <svg
          width="41"
          height="41"
          viewBox="0 0 41 41"
          className="animate-spin-slow"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.1338 3.30378C28.1108 1.4853 24.5702 0.439453 20.7854 0.439453C15.9198 0.439453 11.4579 2.16785 7.98024 5.04416L13.854 10.0618C15.8408 8.74537 18.2235 7.97872 20.7854 7.97872C22.6948 7.97872 24.5048 8.40464 26.1255 9.16664L31.1338 3.30378Z"
            fill="white"
          />
          <path
            d="M10.3831 27.595C9.01775 25.5846 8.21993 23.1575 8.21993 20.5442C8.21993 17.9895 8.98232 15.6128 10.292 13.6294L4.53179 8.70875C2.10986 12.0291 0.680664 16.1197 0.680664 20.5442C0.680664 25.4602 2.44514 29.9642 5.37533 33.4573L10.3831 27.595Z"
            fill="white"
          />
          <path
            d="M9.06252 36.8793L13.9876 31.1139C15.9472 32.3768 18.2807 33.1096 20.7854 33.1096C24.0479 33.1096 27.0201 31.8662 29.2538 29.8274L35.0139 34.748C31.3747 38.3935 26.3434 40.6489 20.7854 40.6489C16.4108 40.6489 12.3626 39.2517 9.06252 36.8793Z"
            fill="white"
          />
          <path
            d="M30.1622 12.1794L35.0872 6.41414C38.6751 10.0454 40.8901 15.0361 40.8901 20.5442C40.8901 24.2787 39.8718 27.7755 38.0978 30.7719L32.2234 25.7538C32.9474 24.1666 33.3508 22.4025 33.3508 20.5442C33.3508 17.3318 32.1454 14.401 30.1622 12.1794Z"
            fill="white"
          />
        </svg>
        <div className="flex items-center ml-5">
          Darcy&apos;s insurance products
        </div>
      </div>
      <Link className="underline capitalize" href={''}>
        Privacy Policy
      </Link>
    </div>
  );
};

export default Footer;
