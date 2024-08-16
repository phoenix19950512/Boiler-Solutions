import { FC } from 'react';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { HowItWorksComp } from '../../components/how-it-works';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';

export const GasFireRepairs: FC = () => {
  return (
    <>
      <div className='w-full text-4xl my-10 text-center font-bold leading-loose'>
        Gas Fire Repair Service
      </div>
      <p className="text-base mb-3 leading-8">
        As well as keeping you warm, your gas fire adds a cosy focal point to any room so when it breaks down you need an AF Boiler Solutions gas engineer who can help fix it quickly.
        Our <u className='text-red-500'>heating engineers</u> are highly experienced and familiar with repairing a vast range of gas fires; they&apos;ll quickly identify any faults and rectify them for you.
        If this can&apos;t be done at the first visit, we&apos;ll arrange to come back and fit any parts required.
      </p>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}