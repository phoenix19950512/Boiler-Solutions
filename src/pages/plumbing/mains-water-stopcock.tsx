import { FC } from 'react';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';

export const MainsWaterStopcock: FC = () => {
  return (
    <>
      <div className='w-full text-4xl my-10 text-center font-bold leading-loose'>
        Stopcock Replacement & Repair Services
      </div>
      <p className="text-base mb-3 leading-8">
        The Mains Water Stopcock is the most critical valve in your home.
        This stopcock is under constant high pressure and serves as the primary water shut-off inside your property.
        Unfortunately, these taps can break, fail to shut off completely, or become challenging to turn.
        Regardless of the issue, our team can address the problem.
        We'll assess whether a simple repair will suffice or if the stopcock needs to be replaced.
        Our technicians are happy to provide a professional evaluation and complete any necessary work.
      </p>
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}