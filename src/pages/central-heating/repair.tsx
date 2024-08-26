import { FC } from 'react';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { HowItWorksComp } from '../../components/how-it-works';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';
import { WeTakeProvide } from '../../components/we-take-pride';
import { LandingPage } from '../../components/landingpage';

export const CentralHeatingRepair: FC = () => {
  return (
    <>
      <LandingPage title={<>Reliable and Efficient<br />Heating Services</>} subtitle={['What ever the problem with your Plumbing, Gas, or Boiler', 'We can help']} />
      <WeTakeProvide />
      <div className="flex flex-col px-10 md:px-20">
        <div className='text-4xl font-bold text-center text-green-950 font-serif italic mt-10 mb-4 leading-loose' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          Central Heating Repairs
        </div>
        <ul className="mb-3 list-disc ml-8">
          <li>Are you struggling with the central heating system?</li>
          <li>Does your central heating system require necessary repairs?</li>
          <li>Looking for central heating engineers near you?</li>
        </ul>
        <p className="text-lg mb-3">
          If your central heating system develops an issue, we are here to help.
          We provide emergency central heating repair services for both domestic and commercial needs.<br />
          Our engineers will diagnose the faults in your central heating system and assist you so that everything gets back to normal.
          We can diagnose and repair all types of heating systems, including:-
        </p>
        <ul className="mb-3 list-disc ml-8">
          <li>Combi Boiler</li>
          <li>Regular Boiler - Conventional</li>
          <li>System Boiler - Pressurised system</li>
          <li>Programmers - Thermostats</li>
        </ul>
      </div>
      <div className="flex flex-col px-10 lg:px-20">
        <div className='text-4xl font-bold text-center text-blue-950 font-serif italic mt-10 mb-4 leading-loose' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          Our Commitment to Quality heating solutions
        </div>
        <p className="text-lg mb-3">
          We make every effort to be there for you when you need us the most because of this.
          Our quick response times and effective service guarantee that your heating issues are resolved quickly.<br />
          Our experienced and reliable engineers are here to address your concerns, provide reliable solutions, and restore the functionality of your heating system.
        </p>
      </div>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}