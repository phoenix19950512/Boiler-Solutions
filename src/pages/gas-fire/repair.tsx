import { FC } from 'react';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { HowItWorksComp } from '../../components/how-it-works';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';

export const GasFireRepairs: FC = () => {
  return (
    <>
      <div className="flex flex-col px-10 pb-5 bg-green-50 lg:px-20">
        <div className='text-4xl font-bold text-center text-green-950 font-serif italic mt-10 mb-4 leading-loose' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          Gas Fire Repair Service
        </div>
        <p className="text-base mb-3 indent-4 leading-8">
          As well as keeping you warm, your gas fire adds a cosy focal point to any room so when it breaks down you need an AF Boiler Solutions gas engineer who can help fix it quickly.
          Our <u className='text-red-500'>heating engineers</u> are highly experienced and familiar with repairing a vast range of gas fires; they&apos;ll quickly identify any faults and rectify them for you.
          If this can&apos;t be done at the first visit, we&apos;ll arrange to come back and fit any parts required.
        </p>
      </div>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}