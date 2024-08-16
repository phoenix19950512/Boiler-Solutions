import { FC } from 'react';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { HowItWorksComp } from '../../components/how-it-works';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';

export const CentralHeatingRepairReplace: FC = () => {
  return (
    <>
      <div className='w-full text-4xl font-serif my-10 text-center'>
        AF Boiler Solutions: Professional Heating Services
      </div>
      <p className="text-lg mb-3">
        We specialise in the repair and installation of radiators, ensuring your home remains warm and comfortable.<br />
        Our team can quickly diagnose and fix any issues with your radiator, restoring its performance efficiently.<br />
        With extensive experience in all types of domestic heating systems, we can assist with a wide range of heating problems:<br />
      </p>
      <ul className="mb-3 list-disc ml-8">
        <li>Whether you need a leaking valve fixed, a faulty thermostatic valve replaced, or an upgrade of thermostatic valve throughout your house</li>
        <li>We can perform a power flush on your entire heating system</li>
        <li>Remove a blockage from a single radiator - if a full flush isn't necessary. We will diagnose the issue and provide expert advice on the required work</li>
        <li>If some radiators are slow to heat, we can balance the entire system to improve its efficiency</li>
      </ul>
      <p className="text-lg font-bold mb-3">
        Our experts have the skills and knowledge to handle it all.
      </p>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}