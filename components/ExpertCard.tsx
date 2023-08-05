import Image from 'next/image';
import React from 'react';
import Button from './Button';

type Props = {};

function ExpertCard({}: Props) {
  return (
    <div className="flex w-[792px] h-[502px] bg-[#0D1D30] rounded-[58px]">
      <div className="ps-[75px] py-[43px]">
        <Image
          src="/expert1.jpg"
          className="rounded-[754px]"
          width={192}
          height={417}
          alt={''}
        />
      </div>

      <div className="flex flex-col w-[321px] ml-[73px] pt-[65px]">
        <span className="text-[32px] font-semibold leading-7">
          Georgia Darcy
        </span>
        <span className="text-[#667999] pt-5 pb-7">The agency founder</span>
        <p className="leading-5">
          With over twenty years of industry experience, Darcy&apos;s insurance
          products&apos; has learned a lot. The one thing we know for sure is
          that we&apos;re all about you. If you find searching for insurance
          frustrating we are here to help.
        </p>
        <Button className="h-[60px] rounded-[105px] bg-[#84D7E9] mt-[63px] text-black text-lg">
          Get a consultation
        </Button>
      </div>
    </div>
  );
}

export default ExpertCard;
