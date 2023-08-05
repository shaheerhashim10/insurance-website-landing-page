import React from 'react';
import Image from 'next/image';
import SecondaryButton from './SecondaryButton';
import classNames from 'classnames';
import { giorgioSans } from '@/app/fonts';
import Button from './Button';

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="flex flex-col mt-[168px]">
      <div className="flex justify-between">
        <div className="relative h-[402px] w-[552px]">
          <Image
            src="/room1.jpeg"
            className="rounded-[58px] object-cover"
            layout="fill"
            alt={''}
          />
          <SecondaryButton className="w-[269px] h-[80px]">
            Home insurance
          </SecondaryButton>
        </div>
        <div>
          <Image
            src="/tube2.png"
            className="rounded-[188px]"
            width={196}
            height={401}
            alt={''}
          />
        </div>
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
          <div>
            <Button className="w-[304px] h-[62px] bg-[#FF6476] font-medium text-[18px] rounded-[502px] mt-[103px]">
              View all services
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[38px]">
        <div className="relative w-[379px] h-[254px] rounded-[58px]">
          <Image
            src="/car.jpg"
            className="rounded-[58px] object-contain"
            width={379}
            height={254}
            alt={'car'}
          />
          <SecondaryButton className="w-[251px] h-[80px]">
            Vehicle damage
          </SecondaryButton>
        </div>
        <div className="relative w-[379px] h-[254px] rounded-[58px]">
          <Image
            src="/house.jpg"
            className="rounded-[58px] object-contain"
            width={379}
            height={254}
            alt={''}
          />
          <SecondaryButton className="w-[251px] h-[80px]">
            Mortgage insurance
          </SecondaryButton>
        </div>
        <div className="relative w-[379px] h-[254px] rounded-[58px]">
          <Image
            src="/medicines.jpg"
            className="rounded-[58px] object-contain"
            width={379}
            height={254}
            alt={''}
          />
          <SecondaryButton className="w-[251px] h-[80px]">
            Medical expenses
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Products;
