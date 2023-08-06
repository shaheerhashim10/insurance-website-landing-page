import { blimone } from '@/app/fonts';
import classNames from 'classnames';
import React from 'react';
import Button from './Button';
import Link from 'next/link';
import { AnimationWrapper } from '@/app/AnimationWrapper';

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className="mt-36 flex justify-between w-[66rem]">
      <div className="flex flex-col ">
        <AnimationWrapper
          motionProps={{
            initial: {
              translateX: -120,
              translateY: 40,
              opacity: 0,
            },
            transition: { type: 'spring', duration: 1, delay: 0.2 },
            whileInView: { translateX: 0, translateY: 0, opacity: 1 },
            as: 'div',
          }}
        >
          <span className={classNames(blimone.className, 'text-6xl')}>
            Need numbers?
          </span>
        </AnimationWrapper>

        <div className="flex mt-11">
          <AnimationWrapper
            motionProps={{
              initial: {
                translateX: -120,
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1, delay: 0.25 },
              whileInView: { translateX: 0, opacity: 1 },
              as: 'div',
            }}
          >
            <div className="flex justify-center items-center w-[83px] h-[42px] text-[#1F283D] bg-white rounded-[131px]">
              Travel
            </div>
          </AnimationWrapper>

          <AnimationWrapper
            motionProps={{
              initial: {
                translateX: -120,
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1, delay: 0.3 },
              whileInView: { translateX: 0, opacity: 1 },
              as: 'div',
            }}
          >
            <div className="flex justify-center items-center ml-[13px] w-[83px] h-[42px] bg-[#1F283D] rounded-[131px]">
              Health
            </div>
          </AnimationWrapper>

          <AnimationWrapper
            motionProps={{
              initial: {
                translateX: -120,
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1, delay: 0.33 },
              whileInView: { translateX: 0, opacity: 1 },
              as: 'div',
            }}
          >
            <div className="flex justify-center items-center ml-[13px] w-[83px] h-[42px] bg-[#1F283D] rounded-[131px]">
              CASCO
            </div>
          </AnimationWrapper>

          <AnimationWrapper
            motionProps={{
              initial: {
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1, delay: 0.35 },
              whileInView: { opacity: 1 },
              as: 'div',
            }}
          >
            <div className="flex justify-center items-center ml-[13px] w-[110px]  h-[42px] bg-[#1F283D] rounded-[131px]">
              Mortgage
            </div>
          </AnimationWrapper>
          <AnimationWrapper
            motionProps={{
              initial: {
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1, delay: 0.37 },
              whileInView: { opacity: 1 },
              as: 'div',
            }}
          >
            <div className="flex justify-center items-center ml-[13px] w-[83px] h-[42px] bg-[#1F283D] rounded-[131px]">
              Fire
            </div>
          </AnimationWrapper>
        </div>

        <div className="flex mt-[38px] justify-between">
          <AnimationWrapper
            motionProps={{
              initial: {
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1, delay: 0.39 },
              whileInView: { opacity: 1 },
              as: 'div',
            }}
          >
            <div className="flex flex-col">
              <label>Enter the country</label>
              <input
                className="font-medium w-[231px] h-[50px] rounded-[130px] p-6 bg-[#1F283D] mt-3"
                type="text"
                id="country"
                name="country"
                placeholder="Australia"
              />
            </div>
          </AnimationWrapper>

          <AnimationWrapper
            motionProps={{
              initial: {
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1, delay: 0.41 },
              whileInView: { opacity: 1 },
              as: 'div',
            }}
          >
            <div className="flex flex-col">
              <label>Choose travel dates</label>
              <input
                className="font-medium text-[##5D667B] w-[231px] h-[50px] rounded-[130px] p-6 bg-[#1F283D] mt-3"
                type="text"
                id="date"
                name="date"
                placeholder="11 Apr-20 Apr"
              />
            </div>
          </AnimationWrapper>
        </div>
        <AnimationWrapper
          motionProps={{
            initial: {
              opacity: 0,
            },
            transition: { type: 'tween', duration: 2, delay: 0.43 },
            whileInView: { opacity: 1 },
            as: 'div',
          }}
        >
          <Button className="mt-9 bg-[#FF6476] rounded-[130px] w-[500px] h-[63px] text-lg">
            {' '}
            Calculate{' '}
          </Button>
        </AnimationWrapper>
      </div>

      <div className="flex flex-col w-[350px]">
        <div className="">
          <AnimationWrapper
            motionProps={{
              initial: {
                y: -20,
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1, delay: 0.37 },
              whileInView: { y: 0, opacity: 1 },
              as: 'div',
            }}
          >
            <span className="block text-xl font-semibold">
              Insurance services
            </span>
          </AnimationWrapper>

          <AnimationWrapper
            motionProps={{
              initial: {
                y: -20,
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1, delay: 0.4 },
              whileInView: { y: 0, opacity: 1 },
              as: 'div',
            }}
          >
            <div className="flex justify-between mt-7 leading-5 text-[15px] text-[#5D667B]">
              <Link href={''}>Medical expenses</Link>
              <Link href={''}>Family health insurance</Link>
            </div>
          </AnimationWrapper>
          <AnimationWrapper
            motionProps={{
              initial: {
                y: -20,
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1, delay: 0.43 },
              whileInView: { y: 0, opacity: 1 },
              as: 'div',
            }}
          >
            <div className="flex justify-between mt-[21px] w-[280px] leading-5 text-[15px] text-[#5D667B]">
              <Link href={''}>Vehicle damage</Link>
              <Link href={''}>Property loss</Link>
              <Link href={''}>Fire</Link>
            </div>
          </AnimationWrapper>
        </div>

        <div className="mt-[35px]">
          <AnimationWrapper
            motionProps={{
              initial: {
                y: -20,
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1, delay: 0.45 },
              whileInView: { y: 0, opacity: 1 },
              as: 'div',
            }}
          >
            <span className="block text-xl font-semibold">Company</span>
          </AnimationWrapper>
          <AnimationWrapper
            motionProps={{
              initial: {
                y: -20,
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1, delay: 0.45 },
              whileInView: { y: 0, opacity: 1 },
              as: 'div',
            }}
          >
            <div className="flex mt-7 leading-5 text-[15px] text-[#5D667B]">
              <Link href={''}>About us</Link>

              <Link href={''} className="ml-[13px]">
                Career
              </Link>

              <Link href={''} className="ml-[13px]">
                Help
              </Link>

              <Link href={''} className="ml-[13px]">
                Blog
              </Link>
            </div>
          </AnimationWrapper>
        </div>

        <div className="mt-[35px]">
          <AnimationWrapper
            motionProps={{
              initial: {
                y: -20,
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1, delay: 0.53 },
              whileInView: { y: 0, opacity: 1 },
              as: 'div',
            }}
          >
            <span className="block text-xl font-semibold">Bonus</span>
          </AnimationWrapper>

          <AnimationWrapper
            motionProps={{
              initial: {
                y: -20,
                opacity: 0,
              },
              transition: { type: 'spring', duration: 1, delay: 0.55 },
              whileInView: { y: 0, opacity: 1 },
              as: 'div',
            }}
          >
            <div className="flex mt-7 leading-5 text-[15px] text-[#5D667B]">
              <Link href={''} className="">
                Gift certificate
              </Link>
              <Link href={''} className="ml-[15px]">
                Affiliate Program
              </Link>
              <Link href={''} className="ml-[15px]">
                Trainings
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
