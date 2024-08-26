import { FC } from 'react';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { HowItWorksComp } from '../../components/how-it-works';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';
import { WeTakeProvide } from '../../components/we-take-pride';
import { LandingPage } from '../../components/landingpage';

export const CookerOvenRepair: FC = () => {
  return (
    <>
      <LandingPage title={<>Range Master - Range Cookers Gas Cooker &amp; Oven Repairs</>} subtitle={['', 'Need a Repair? Book online now']} />
      <WeTakeProvide />
      <div className="flex flex-col px-10 md:px-20">
        <div className='text-4xl font-bold text-center text-green-950 font-serif italic mt-10 mb-4 leading-loose' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          Gas Cooker & Oven Repairs
        </div>
        <p className="text-base mb-3 leading-8">
          Are you experiencing problems with your gas cooker?
        </p>
        <p className="text-base mb-3 indent-4 leading-8">
          Whatever is wrong with your gas cooker, we are sure our engineer will be able to help!
        </p>
        <p className="text-base mb-3 indent-4 leading-8">
          AF Boiler Solutions are highly qualified and experienced gas safe engineers and will be able to identify faults on most gas cookers quickly and efficiently and it is our aim to carry out repairs during our first visit.
          To enable our engineers to carry out the necessary repairs on their first visit, they carry the most common parts which are needed to carry out gas cooker repairs.
          However, should the engineer not have the required part, he will place an order with their trusted suppliers and arrange a convenient time to return to your property to complete the job.
        </p>
        <p className="text-base mb-3 indent-4 leading-8">
          To give you piece of mind, all our engineers are Gas Safe Registered.
        </p>
        <p className="text-base mb-3 indent-4 leading-8">
          This means that they are fully trained and experienced, so any work we carry out will be certified as safe.
          With nearly 20 years experience in the industry, you can be certain that you are in safe hands.
        </p>
        <p className="text-base mb-3 indent-4 leading-8">
          You will find that our charges are very competitive.
          Please give us a call to discuss the problem with your gas cooker and we will arrange a convenient time to visit and provide you with a quote to carry out the repairs.
        </p>
      </div>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}