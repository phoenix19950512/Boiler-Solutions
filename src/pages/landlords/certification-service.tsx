import { FC } from 'react';
import { LandingPage } from '../../common/Loader/Main/landingpage';
import { WeTakeProvide } from '../../common/Loader/Main/we-take-pride';
import { OfferLinksComp } from '../../common/Loader/Main/offer-links';
import { WhyChooseUsComp } from '../../common/Loader/Main/why-choose-us';
import { EnquireToday } from '../../common/Loader/Main/enquire-today';
import { ImageSlider } from '../../common/Image Slider';

export const LandLordsCertificationServices: FC = () => {
  return (
    <>
      <LandingPage title={<>Landloords Gas<br />Safety Certificates</>} subtitle={['Whatever the problem with your Plumbing, Gas, or Boiler', 'We can help']} />
      <WeTakeProvide />
      <div className="flex w-full min-h-60">
        <ImageSlider />
      </div>
      <div className="flex flex-col px-10 md:px-20">
        <div className='text-4xl font-bold text-center text-green-950 font-serif italic mt-10 mb-4 leading-loose' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          Do you need a Landlords gas safety check
        </div>
        <p className="text-base mb-3 leading-8">
          Then look no further than AF Boiler Solutions.
          We are a trusted, local and independent family run business with many years&apos; experience and we offer comprehensive and detailed gas safety checks across Leicester and the surrounding areas.
          We ensure your property remains safe with an in-depth gas safety check from our Gas Safe Registered engineers.
        </p>
        <p className="text-base mb-3 indent-4 leading-8">
          All appliances that use gas need to be annually checked and certified by a trained, Gas Safe Registered professional - we can carry out one-off or annual safety checks at your property.
        </p>
        <p className="text-base mb-3 indent-4 leading-8">
          As a Landlord, you are responsible for the safety of your tenants and have a legal responsibility to ensure that each of your properties has a current Gas Safety Certificate.
          We offer landlords full certification services for their properties and carry out detailed gas safety inspections.
        </p>
      </div>
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}