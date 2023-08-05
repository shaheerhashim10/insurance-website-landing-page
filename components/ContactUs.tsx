import { blimone } from '@/app/fonts';
import classNames from 'classnames';
import React from 'react';
import Button from './Button';
import Link from 'next/link';

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className="mt-36 flex justify-between w-[66rem]">
      <div className="flex flex-col ">
        <span className={classNames(blimone.className, 'text-6xl')}>
          Need numbers?
        </span>
        <div className="flex mt-11">
          <div className="flex justify-center items-center w-[83px] h-[42px] text-[#1F283D] bg-white rounded-[131px]">
            Travel
          </div>
          <div className="flex justify-center items-center ml-[13px] w-[83px] h-[42px] bg-[#1F283D] rounded-[131px]">
            Health
          </div>
          <div className="flex justify-center items-center ml-[13px] w-[83px] h-[42px] bg-[#1F283D] rounded-[131px]">
            CASCO
          </div>
          <div className="flex justify-center items-center ml-[13px] w-[83px] h-[42px] bg-[#1F283D] rounded-[131px]">
            Mortgage
          </div>
          <div className="flex justify-center items-center ml-[13px] w-[83px] h-[42px] bg-[#1F283D] rounded-[131px]">
            Fire
          </div>
        </div>

        <div className="flex mt-[38px] justify-between">
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
        </div>
        <Button className="mt-9 bg-[#FF6476] rounded-[130px] w-[467px] h-[63px] text-lg">
          {' '}
          Calculate{' '}
        </Button>
      </div>

      <div className="flex flex-col w-[350px]">
        <div className="">
          <span className="block text-xl font-semibold">
            Insurance services
          </span>
          <div className="flex justify-between mt-7 leading-5 text-[15px] text-[#5D667B]">
            <Link href={''}>Medical expenses</Link>
            <Link href={''}>Family health insurance</Link>
          </div>
          <div className="flex justify-between mt-[21px] w-[280px] leading-5 text-[15px] text-[#5D667B]">
            <Link href={''}>Vehicle damage</Link>
            <Link href={''}>Property loss</Link>
            <Link href={''}>Fire</Link>
          </div>
        </div>

        <div className="mt-[35px]">
          <span className="block text-xl font-semibold">Company</span>
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
        </div>

        <div className="mt-[35px]">
          <span className="block text-xl font-semibold">Bonus</span>
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
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
