import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { AnimationWrapper } from '@/app/AnimationWrapper';

export type ExpertCardProps = {
  name: string;
  image: string;
  designation: string;
  intro: string;
};

function ExpertCard({ name, image, designation, intro }: ExpertCardProps) {
  return (
    <div className="flex w-[792px] h-[502px] bg-[#0D1D30] rounded-[58px]">
      <AnimationWrapper
        motionProps={{
          initial: {
            y: 20,
            opacity: 0,
          },
          transition: { type: 'spring', duration: 1.7, delay: 0.35 },
          whileInView: { y: 0, opacity: 1 },
          as: 'div',
        }}
      >
        <div className="ps-[75px] py-[43px]">
          <Image
            src={image}
            className="rounded-[754px]"
            width={192}
            height={417}
            alt={''}
          />
        </div>
      </AnimationWrapper>
      <div className="flex flex-col w-[321px] ml-[73px] pt-[65px]">
        <div className="text-[32px] font-semibold leading-7">
          <AnimationWrapper
            motionProps={{
              initial: {
                y: -20,
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1.7, delay: 0.35 },
              whileInView: { y: 0, opacity: 1 },
              as: 'span',
            }}
          >
            {name}
          </AnimationWrapper>
        </div>

        <div className="text-[#667999] pt-5 pb-7">
          <AnimationWrapper
            motionProps={{
              initial: {
                y: -20,
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1.7, delay: 0.4 },
              whileInView: { y: 0, opacity: 1 },
              as: 'div',
            }}
          >
            {designation}
          </AnimationWrapper>
        </div>

        <AnimationWrapper
          motionProps={{
            initial: {
              y: -20,
              opacity: 0,
            },
            transition: { type: 'spring', duration: 1.7, delay: 0.5 },
            whileInView: { y: 0, opacity: 1 },
            as: 'div',
          }}
        >
          <p className="leading-5">{intro}</p>
        </AnimationWrapper>

        <Button className="h-[60px] rounded-[105px] bg-[#84D7E9] mt-[63px] text-black text-lg">
          <AnimationWrapper
            motionProps={{
              initial: {
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1.7, delay: 0.1 },
              whileInView: { opacity: 1 },
              as: 'span',
            }}
          >
            Get a consultation
          </AnimationWrapper>
        </Button>
      </div>
    </div>
  );
}

export default ExpertCard;
