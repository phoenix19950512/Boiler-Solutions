import { FC } from 'react';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';
import { WeTakeProvide } from '../../components/we-take-pride';
import { LandingPage } from '../../components/landingpage';

export const MainsWaterStopcock: FC = () => {
  return (
    <>
      <LandingPage title={<>Stopcock Installation &amp; Repairs</>} subtitle={['', 'Need a Repair? Book online now']} />
      <WeTakeProvide />
      <div className="flex flex-col px-10 md:px-20">
        <div className='text-4xl font-bold text-center text-green-950 font-serif italic mt-10 mb-4 leading-loose' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
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
      </div>
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}