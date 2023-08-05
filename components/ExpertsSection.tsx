import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { blinker } from '@/app/fonts';
import classNames from 'classnames';

type Props = {};

const ExpertsSection = (props: Props) => {
  return (
    <div className="flex h-[565px] justify-between mt-[75px]">
      <span
        className={classNames(
          'flex items-center text-[73px] leading-[92px] font-light w-[192px]',
          blinker.className
        )}
      >
        Our expert say
      </span>
      <div className="flex items-center">
        <div className="flex flex-col ml-28 mt-8">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.5056 40.7081C31.6091 40.7279 40.6263 31.7428 40.6461 20.6393C40.666 9.53579 31.6808 0.518563 20.5773 0.498756C9.47383 0.478948 0.456599 9.46406 0.436791 20.5676C0.416984 31.6711 9.4021 40.6883 20.5056 40.7081ZM21.9571 18.8912L22.988 8.80122L18.0246 8.79237L19.0702 18.886L9.45212 16.0305L8.73442 20.8649L17.9509 21.6698L12.0103 29.9639L16.5136 32.4423L20.4299 23.251L24.7185 32.4569L29.0787 29.9943L23.0664 21.6789L32.387 20.9071L31.6865 16.0702L21.9571 18.8912Z"
              fill="#D9D9D9"
            />
          </svg>
          <p className="w-[362px] mt-3">
            Participate in the{' '}
            <span className="underline text-[#84D7E9]">loyalty program</span>.
            Pay for the service online to get bonuses for our other services. We
            have a lot of bonuses!
          </p>

          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            className="mt-12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.5056 40.7081C31.6091 40.7279 40.6263 31.7428 40.6461 20.6393C40.666 9.53579 31.6808 0.518563 20.5773 0.498756C9.47383 0.478948 0.456599 9.46406 0.436791 20.5676C0.416984 31.6711 9.4021 40.6883 20.5056 40.7081ZM21.9571 18.8912L22.988 8.80122L18.0246 8.79237L19.0702 18.886L9.45212 16.0305L8.73442 20.8649L17.9509 21.6698L12.0103 29.9639L16.5136 32.4423L20.4299 23.251L24.7185 32.4569L29.0787 29.9943L23.0664 21.6789L32.387 20.9071L31.6865 16.0702L21.9571 18.8912Z"
              fill="#D9D9D9"
            />
          </svg>
          <p className="w-[362px] mt-3">
            We offer a choice of low dedactibles and include no cost value-added
            services
          </p>

          <div className="mt-8">
            <Button className="w-[329px] h-[63px] rounded-[131px] border-[5px] border-solid border-[#FF6476]">
              Choose a fund
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/expert-s2.jpg"
          className="rounded-[339px] expert-shadow"
          width={301}
          height={565}
          alt={''}
        />
      </div>
    </div>
  );
};

export default ExpertsSection;
