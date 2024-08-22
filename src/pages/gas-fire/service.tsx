import { FC } from 'react';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { HowItWorksComp } from '../../components/how-it-works';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';
import { LandingPage } from '../../components/landing';

export const GasFireService: FC = () => {
  return (
    <>
      <LandingPage />
      <div className="flex flex-col px-10 pb-5 bg-green-50 lg:px-20">
        <div className='text-4xl font-bold text-center text-green-950 font-serif italic mt-10 mb-4 leading-loose' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          Gas Fire Service
        </div>
        <p className="text-base mb-3 indent-4 leading-8">
          Gas fireplace servicing is essential to ensure that your fireplace operates safely and efficiently.
          AF Boiler Solutions offers a professional service that can help identify potential hazards, such as carbon monoxide leaks, and fix any problems before they become bigger and more costly to repair.
          Regular maintenance can also extend the lifespan of your fireplace and help it perform better.
        </p>
        <p className="text-base mb-3 indent-4 leading-8">
          If you&apos;re looking for a reliable and experienced gas fireplace servicing provider, look no further than AF Boiler Solutions.
        </p>
        <p className="text-base mb-3 indent-4 leading-8">
          Our team of experts are highly experienced <b><u>Gas Safe</u> Registered</b> engineers.
          We use the latest diagnostic tools and techniques to perform a thorough and effective service.
        </p>
        <p className="text-base mb-3 indent-4 leading-8">
          During a servicing appointment, we&apos;ll test your fireplace to make sure it&apos;s working safely and efficiently.
          Our technicians will thoroughly inspect your fireplace and chimney for any signs of damage or wear.
          We&apos;ll clean out any soot, or other debris that has accumulated over time, and make any necessary repairs to ensure that your fireplace is in top shape.
        </p>
      </div>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}