'use client';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ExpertCard from './ExpertCard';
import classNames from 'classnames';
import { blimone } from '@/app/fonts';

type Props = {};

const ExpertsCarousel = (props: Props) => {
  return (
    <div className="flex justify-between mt-[130px]">
      <ExpertCard />

      <div className="flex items-center">
        <div className="pb-[120px] pr-4">
          <svg
            width="41"
            height="41"
            className="animate-spin-slow"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.8005 40.2716C31.904 40.2914 40.9213 31.3063 40.9411 20.2028C40.9609 9.09927 31.9758 0.0820399 20.8723 0.0622322C9.76875 0.0424245 0.751521 9.02754 0.731713 20.131C0.711905 31.2346 9.69702 40.2518 20.8005 40.2716ZM22.252 18.4547L23.283 8.3647L18.3195 8.35584L19.3651 18.4495L9.74704 15.594L9.02935 20.4284L18.2459 21.2333L12.3052 29.5274L16.8085 32.0058L20.7248 22.8145L25.0135 32.0204L29.3736 29.5578L23.3613 21.2424L32.6819 20.4706L31.9815 15.6337L22.252 18.4547Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>

        <div
          className={classNames(
            'text-[65px] leading-[55px] w-[192px] flex flex-col',
            blimone.className
          )}
        >
          <span>Our experts say</span>
        </div>
      </div>
    </div>
  );
};

export default ExpertsCarousel;