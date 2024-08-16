import { FC } from 'react';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';

export const LandLordsCertificationServices: FC = () => {
  return (
    <>
      <div className='w-full text-4xl my-10 text-center font-bold leading-loose'>
        Do you need a Landlords gas safety check
      </div>
      <p className="text-base mb-3 leading-8">
        Then look no further than AF Boiler Solutions.
        We are a trusted, local and independent family run business with many years&apos; experience and we offer comprehensive and detailed gas safety checks across Leicester and the surrounding areas.
        We ensure your property remains safe with an in-depth gas safety check from our Gas Safe Registered engineers.<br />
        All appliances that use gas need to be annually checked and certified by a trained, Gas Safe Registered professional - we can carry out one-off or annual safety checks at your property.<br />
        As a Landlord, you are responsible for the safety of your tenants and have a legal responsibility to ensure that each of your properties has a current Gas Safety Certificate.
        We offer landlords full certification services for their properties and carry out detailed gas safety inspections.
      </p>
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}