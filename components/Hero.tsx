import { AnimationWrapper } from '@/app/AnimationWrapper';
import { blimone } from '@/app/fonts';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="mt-20 flex">
      <div className="w-[595px]">
        <AnimationWrapper
          motionProps={{
            initial: {
              translateX: -120,
              opacity: 0,
            },
            transition: { type: 'spring', duration: 1, delay: 0.2 },
            whileInView: { translateX: 0, opacity: 1 },
            as: 'div',
          }}
        >
          <span
            className={classNames(
              blimone.className,
              'text-[177px] font-bold leading-[168px]'
            )}
          >
            Darcy's insurance products
          </span>
        </AnimationWrapper>
      </div>

      <div className="flex flex-col ml-28 mt-8">
        <AnimationWrapper
          motionProps={{
            initial: {
              opacity: 0,
            },
            transition: { type: 'spring', duration: 2, delay: 0.22 },
            whileInView: { opacity: 1 },
            as: 'div',
          }}
        >
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin-slow"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.5056 40.7081C31.6091 40.7279 40.6263 31.7428 40.6461 20.6393C40.666 9.53579 31.6808 0.518563 20.5773 0.498756C9.47383 0.478948 0.456599 9.46406 0.436791 20.5676C0.416984 31.6711 9.4021 40.6883 20.5056 40.7081ZM21.9571 18.8912L22.988 8.80122L18.0246 8.79237L19.0702 18.886L9.45212 16.0305L8.73442 20.8649L17.9509 21.6698L12.0103 29.9639L16.5136 32.4423L20.4299 23.251L24.7185 32.4569L29.0787 29.9943L23.0664 21.6789L32.387 20.9071L31.6865 16.0702L21.9571 18.8912Z"
              fill="#D9D9D9"
            />
          </svg>
        </AnimationWrapper>
        <AnimationWrapper
          motionProps={{
            initial: {
              y: 15,
              opacity: 0,
            },
            transition: { type: 'spring', duration: 1, delay: 0.25 },
            whileInView: { y: 0, opacity: 1 },
            as: 'div',
          }}
        >
          <p className="w-52 mt-3">
            Our plans are saving policyholders 30% - 60% on premiums
          </p>
        </AnimationWrapper>
        <AnimationWrapper
          motionProps={{
            initial: {
              y: 15,
              opacity: 0,
            },
            transition: { type: 'spring', duration: 1, delay: 0.27 },
            whileInView: { y: 0, opacity: 1 },
            as: 'div',
          }}
        >
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            className="mt-12 animate-spin-slow"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.5056 40.7081C31.6091 40.7279 40.6263 31.7428 40.6461 20.6393C40.666 9.53579 31.6808 0.518563 20.5773 0.498756C9.47383 0.478948 0.456599 9.46406 0.436791 20.5676C0.416984 31.6711 9.4021 40.6883 20.5056 40.7081ZM21.9571 18.8912L22.988 8.80122L18.0246 8.79237L19.0702 18.886L9.45212 16.0305L8.73442 20.8649L17.9509 21.6698L12.0103 29.9639L16.5136 32.4423L20.4299 23.251L24.7185 32.4569L29.0787 29.9943L23.0664 21.6789L32.387 20.9071L31.6865 16.0702L21.9571 18.8912Z"
              fill="#D9D9D9"
            />
          </svg>
        </AnimationWrapper>

        <AnimationWrapper
          motionProps={{
            initial: {
              y: 15,
              opacity: 0,
            },
            transition: { type: 'spring', duration: 1, delay: 0.29 },
            whileInView: { y: 0, opacity: 1 },
            as: 'div',
          }}
        >
          <p className="w-52 mt-3">
            We offer a choice of low dedactibles and include no cost value-added
            services
          </p>
        </AnimationWrapper>
        <AnimationWrapper
          motionProps={{
            initial: {
              y: 15,
              opacity: 0,
            },
            transition: { type: 'spring', duration: 1, delay: 0.3 },
            whileInView: { y: 0, opacity: 1 },
            as: 'div',
          }}
        >
          <div className="hero-div-gradient mt-9 px-4 py-8">
            <svg
              width="19"
              height="63"
              viewBox="0 0 19 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.4553 54.4715L10.2584 61.6685C9.81674 62.1101 9.1007 62.1101 8.65906 61.6685L1.46212 54.4715C1.02048 54.0299 1.02048 53.3139 1.46212 52.8722C1.90376 52.4306 2.6198 52.4306 3.06144 52.8722L8.32783 58.1386V0.554682H10.5896V58.1386L15.856 52.8722C16.2976 52.4306 17.0137 52.4306 17.4553 52.8722C17.897 53.3139 17.897 54.0299 17.4553 54.4715Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.7219 52.6057C18.3107 53.1945 18.3107 54.1493 17.7219 54.7381L10.5249 61.935C9.93606 62.5239 8.98134 62.5239 8.39249 61.935L1.19555 54.7381C0.606693 54.1493 0.606693 53.1945 1.19555 52.6057C1.7844 52.0168 2.73912 52.0168 3.32797 52.6057L7.95085 57.2285V0.177734H10.9666V57.2285L15.5894 52.6057C16.1783 52.0168 17.133 52.0168 17.7219 52.6057ZM17.1887 54.205C17.4832 53.9106 17.4832 53.4332 17.1887 53.1388C16.8943 52.8444 16.417 52.8444 16.1225 53.1388L10.2126 59.0487V0.931661H8.70477V59.0487L2.79487 53.1388C2.50044 52.8444 2.02308 52.8444 1.72865 53.1388C1.43423 53.4332 1.43423 53.9106 1.72865 54.205L8.92559 61.4019C9.22002 61.6964 9.69738 61.6964 9.99181 61.4019L17.1887 54.205Z"
                fill="white"
              />
            </svg>
          </div>
        </AnimationWrapper>
      </div>
      <AnimationWrapper
        motionProps={{
          initial: {
            y: 30,
            opacity: 0,
          },
          transition: { type: 'tween', duration: 1.5, delay: 0.5 },
          whileInView: { y: 0, opacity: 1 },
          as: 'div',
        }}
      >
        <Image
          src="/ballon.jpeg"
          className="ml-6 rounded-[123px] hero-shadow"
          width={246}
          height={518}
          alt={''}
        />
      </AnimationWrapper>
    </div>
  );
};

export default Hero;
