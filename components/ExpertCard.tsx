import Image from 'next/image';
import React from 'react';
import Button from './Button';

export type ExpertCardProps = {
  name: string;
  image: string;
  designation: string;
  intro: string;
};

function ExpertCard({ name, image, designation, intro }: ExpertCardProps) {
  return (
    <div className="flex w-[792px] h-[502px] bg-[#0D1D30] rounded-[58px]">
      <div className="ps-[75px] py-[43px]">
        <Image
          src={image}
          className="rounded-[754px]"
          width={192}
          height={417}
          alt={''}
        />
      </div>

      <div className="flex flex-col w-[321px] ml-[73px] pt-[65px]">
        <span className="text-[32px] font-semibold leading-7">{name}</span>
        <span className="text-[#667999] pt-5 pb-7">{designation}</span>
        <p className="leading-5">{intro}</p>
        <Button className="h-[60px] rounded-[105px] bg-[#84D7E9] mt-[63px] text-black text-lg">
          Get a consultation
        </Button>
      </div>
    </div>
  );
}

export default ExpertCard;
