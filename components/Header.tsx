import React from 'react';
import Button from './Button';
import Link from 'next/link';
import { AnimationWrapper } from '@/app/AnimationWrapper';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="mt-16 font-semibold">
      <div className="flex justify-between pt-16">
        <div className="flex flex-col justify-center">
          <AnimationWrapper
            motionProps={{
              initial: {
                translateX: 30,
                opacity: 0,
              },
              transition: { type: 'srping', duration: 0.5, delay: 0.2 },
              whileInView: { translateX: 0, opacity: 1 },
              as: 'div',
            }}
          >
            <Button className="align-middle">
              <svg
                width="41"
                height="41"
                className="animate-spin-slow"
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
            </Button>
          </AnimationWrapper>
        </div>
        <div className="flex">
          <nav className="flex list-none  pt-5 text-base">
            <Link className="pl-9" href={''}>
              <AnimationWrapper
                motionProps={{
                  initial: {
                    translateX: 30,
                    opacity: 0,
                  },
                  transition: { type: 'srping', duration: 0.5, delay: 0.3 },
                  whileInView: { translateX: 0, opacity: 1 },
                  as: 'div',
                }}
              >
                Home
              </AnimationWrapper>
            </Link>
            <li className="pl-9">
              <div className="flex">
                <AnimationWrapper
                  motionProps={{
                    initial: {
                      translateX: 30,
                      opacity: 0,
                    },
                    transition: { type: 'srping', duration: 0.5, delay: 0.4 },
                    whileInView: { translateX: 0, opacity: 1 },
                    as: 'div',
                  }}
                >
                  <Link href={''}>Services</Link>
                  <Button className="ml-1">
                    <svg
                      width="15"
                      height="10"
                      viewBox="0 0 15 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.373 2.51074L12.596 0.73372L7.26496 6.06479L1.93389 0.73372L0.156869 2.51074L7.26496 9.61883L14.373 2.51074Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </Button>
                </AnimationWrapper>
              </div>
            </li>
            <Link href={''} className="pl-9">
              <AnimationWrapper
                motionProps={{
                  initial: {
                    translateX: 30,
                    opacity: 0,
                  },
                  transition: { type: 'srping', duration: 0.5, delay: 0.5 },
                  whileInView: { translateX: 0, opacity: 1 },
                  as: 'div',
                }}
              >
                About us
              </AnimationWrapper>
            </Link>
            <Link href={''} className="pl-9">
              <AnimationWrapper
                motionProps={{
                  initial: {
                    translateX: 30,
                    opacity: 0,
                  },
                  transition: { type: 'srping', duration: 0.5, delay: 0.6 },
                  whileInView: { translateX: 0, opacity: 1 },
                  as: 'div',
                }}
              >
                Blog
              </AnimationWrapper>
            </Link>
            <Link href={''} className="pl-9">
              <AnimationWrapper
                motionProps={{
                  initial: {
                    translateX: 30,
                    opacity: 0,
                  },
                  transition: { type: 'srping', duration: 0.5, delay: 0.7 },
                  whileInView: { translateX: 0, opacity: 1 },
                  as: 'div',
                }}
              >
                Career
              </AnimationWrapper>
            </Link>
          </nav>
        </div>
        <div className="flex">
          <AnimationWrapper
            motionProps={{
              initial: {
                opacity: 0,
              },
              animate: { pathLength: 1 },
              transition: { duration: 2, type: 'tween', delay: 0.8 },
              whileInView: { opacity: 1 },
              as: 'div',
            }}
          >
            <Button className="w-48 h-[3.3rem] bg-[#84D7E9] text-black rounded-[3.3rem] text-base">
              Contact us
            </Button>
          </AnimationWrapper>

          <div className="flex ml-12">
            <div className="flex flex-col justify-center">
              <AnimationWrapper
                motionProps={{
                  initial: {
                    opacity: 0,
                  },
                  animate: { pathLength: 1 },
                  transition: { duration: 2, type: 'tween', delay: 0.9 },
                  whileInView: { opacity: 1 },
                  as: 'div',
                }}
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.50308 21.8479L9.50307 21.8479C11.96 21.3103 13.9332 19.3351 14.4797 16.8845C14.8919 15.0397 14.5222 13.288 13.6463 11.8831L22.0341 3.50349C22.0341 3.50349 22.0342 3.50341 22.0343 3.5033C22.6312 2.90814 22.6304 1.94295 22.0343 1.34756C21.4387 0.75243 20.4734 0.751642 19.8779 1.34763L19.8776 1.34795L19.4979 1.72728L19.1589 1.38863C19.1589 1.38863 19.1588 1.38861 19.1588 1.38859C18.5632 0.793507 17.5978 0.79275 17.0024 1.38877C16.4057 1.98392 16.4064 2.94903 17.0023 3.54436L17.0023 3.54437L17.3406 3.88233L16.0281 5.19358L15.669 4.83477C15.669 4.83471 15.669 4.83466 15.6689 4.8346C15.0734 4.23846 14.1079 4.23916 13.5124 4.8343C12.9168 5.42931 12.9175 6.39412 13.512 6.98955L13.5124 6.98999L13.8713 7.34856L11.4848 9.7321C10.0812 8.86643 8.33419 8.50397 6.49505 8.91562C4.04654 9.46263 2.07353 11.4325 1.53541 13.8833L1.53542 13.8833C0.478019 18.7017 4.68174 22.9008 9.50308 21.8479ZM8.00971 11.7946C9.9884 11.7946 11.5975 13.403 11.5975 15.3787C11.5975 17.3542 9.98848 18.9623 8.00971 18.9623C6.03093 18.9623 4.4219 17.3542 4.4219 15.3787C4.4219 13.403 6.03101 11.7946 8.00971 11.7946Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.00526"
                  />
                </svg>
              </AnimationWrapper>
            </div>
            <div className="flex flex-col justify-center ml-4">
              <Link href={''}>
                <AnimationWrapper
                  motionProps={{
                    initial: {
                      opacity: 0,
                    },
                    animate: { pathLength: 1 },
                    transition: { duration: 2, type: 'tween', delay: 0.95 },
                    whileInView: { opacity: 1 },
                    as: 'div',
                  }}
                >
                  Login
                </AnimationWrapper>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
