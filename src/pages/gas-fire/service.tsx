import { FC } from 'react';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { HowItWorksComp } from '../../components/how-it-works';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';

export const GasFireService: FC = () => {
  return (
    <>
      <div className='w-full text-4xl my-10 text-center font-bold leading-loose'>
        Gas Fire Service
      </div>
      <p className="text-base mb-3 leading-8">
        Gas fireplace servicing is essential to ensure that your fireplace operates safely and efficiently.
        AF Boiler Solutions offers a professional service that can help identify potential hazards, such as carbon monoxide leaks, and fix any problems before they become bigger and more costly to repair.
        Regular maintenance can also extend the lifespan of your fireplace and help it perform better.<br />
        If you&apos;re looking for a reliable and experienced gas fireplace servicing provider, look no further than AF Boiler Solutions.<br />
        Our team of experts are highly experienced <b><u>Gas Safe</u> Registered</b> engineers.
        We use the latest diagnostic tools and techniques to perform a thorough and effective service.<br />
        During a servicing appointment, we&apos;ll test your fireplace to make sure it&apos;s working safely and efficiently.
        Our technicians will thoroughly inspect your fireplace and chimney for any signs of damage or wear.
        We&apos;ll clean out any soot, or other debris that has accumulated over time, and make any necessary repairs to ensure that your fireplace is in top shape.
      </p>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}