import React from 'react';
import Image from 'next/image';
import SecondaryButton from './SecondaryButton';
import classNames from 'classnames';
import { giorgioSans } from '@/app/fonts';
import Button from './Button';
import { AnimationWrapper } from '@/app/AnimationWrapper';

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="flex flex-col mt-[168px]">
      <div className="flex justify-between">
        <AnimationWrapper
          motionProps={{
            initial: {
              x: 15,
              y: 15,
              opacity: 0,
            },
            transition: { type: 'spring', duration: 1, delay: 0.25 },
            whileInView: { x: 0, y: 0, opacity: 1 },
            as: 'div',
          }}
        >
          <div className="relative h-[402px] w-[552px]">
            <Image
              src="/room1.jpeg"
              className="rounded-[58px] object-cover"
              layout="fill"
              alt={''}
            />
            <AnimationWrapper
              motionProps={{
                initial: {
                  opacity: 0,
                },
                transition: { type: 'spring', duration: 0.7, delay: 0.3 },
                whileInView: { opacity: 1 },
                as: 'div',
              }}
            >
              <SecondaryButton className="w-[269px] h-[80px]">
                Home insurance
              </SecondaryButton>
            </AnimationWrapper>
          </div>
        </AnimationWrapper>
        <AnimationWrapper
          motionProps={{
            initial: {
              height: 0,
              opacity: 0,
            },
            transition: { duration: 3, delay: 0.27 },
            whileInView: { height: 196, opacity: 1 },
            as: 'div',
          }}
        >
          <Image
            src="/tube2.png"
            className="rounded-[188px]"
            width={196}
            height={401}
            alt={''}
          />
        </AnimationWrapper>

        <AnimationWrapper
          motionProps={{
            initial: {
              x: 15,
              y: 15,
              opacity: 0,
            },
            transition: { type: 'spring', duration: 1, delay: 0.35 },
            whileInView: { x: 0, y: 0, opacity: 1 },
            as: 'div',
          }}
        >
          <div className="flex flex-col bg-[#0D1D30] w-[379px] h-[402px] rounded-[58px]  ps-9 pt-7">
            <div
              className={classNames(
                'text-[70px] font-bold font-sans leading-[64px]',
                giorgioSans.className
              )}
            >
              Best choice
            </div>
            <div className="w-[300px] mt-7 font-bold leading-5">
              Not all insurance are the same. That&apos;s why agency knows that
              your insurance should be customized to fit your situation.
            </div>
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
              <Button className="w-[304px] h-[62px] bg-[#FF6476] font-medium text-[18px] rounded-[502px] mt-[103px]">
                View all services
              </Button>
            </AnimationWrapper>
          </div>
        </AnimationWrapper>
      </div>
      <div className="flex justify-between mt-[38px]">
        <AnimationWrapper
          motionProps={{
            initial: {
              opacity: 0,
            },
            transition: { type: 'spring', duration: 2, delay: 0.36 },
            whileInView: { opacity: 1 },
            as: 'div',
          }}
        >
          <div className="relative w-[379px] h-[254px] rounded-[58px]">
            <Image
              src="/car.jpg"
              className="rounded-[58px] object-contain"
              width={379}
              height={254}
              alt={'car'}
            />
            <AnimationWrapper
              motionProps={{
                initial: {
                  y: 20,
                  opacity: 0,
                },
                transition: { type: 'spring', duration: 1.7, delay: 0.3 },
                whileInView: { y: 0, opacity: 1 },
                as: 'div',
              }}
            >
              <SecondaryButton className="w-[251px] h-[80px]">
                Vehicle damage
              </SecondaryButton>
            </AnimationWrapper>
          </div>
        </AnimationWrapper>

        <AnimationWrapper
          motionProps={{
            initial: {
              opacity: 0,
            },
            transition: { type: 'spring', duration: 2, delay: 0.38 },
            whileInView: { opacity: 1 },
            as: 'div',
          }}
        >
          <div className="relative w-[379px] h-[254px] rounded-[58px]">
            <Image
              src="/house.jpg"
              className="rounded-[58px] object-contain"
              width={379}
              height={254}
              alt={''}
            />
            <AnimationWrapper
              motionProps={{
                initial: {
                  y: 20,
                  opacity: 0,
                },
                transition: { type: 'spring', duration: 1.7, delay: 0.32 },
                whileInView: { y: 0, opacity: 1 },
                as: 'div',
              }}
            >
              <SecondaryButton className="w-[251px] h-[80px]">
                Mortgage insurance
              </SecondaryButton>
            </AnimationWrapper>
          </div>
        </AnimationWrapper>

        <AnimationWrapper
          motionProps={{
            initial: {
              opacity: 0,
            },
            transition: { type: 'spring', duration: 2, delay: 0.42 },
            whileInView: { opacity: 1 },
            as: 'div',
          }}
        >
          <div className="relative w-[379px] h-[254px] rounded-[58px]">
            <Image
              src="/medicines.jpg"
              className="rounded-[58px] object-contain"
              width={379}
              height={254}
              alt={''}
            />
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
              <SecondaryButton className="w-[251px] h-[80px]">
                Medical expenses
              </SecondaryButton>
            </AnimationWrapper>
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default Products;
