import { FC } from 'react';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';
import { HowItWorksComp } from '../../components/how-it-works';

export const ToiletRepairs: FC = () => {
  return (
    <>
      <div className='w-full text-4xl my-10 text-center font-bold leading-loose'>
        Reliable Toilet Repair Services
      </div>
      <p className="text-base mb-3 leading-8">
        From fixing faulty flush mechanisms to addressing leaks that can lead to water damage, we have the mastery and tools to handle a wide range of toilet repairs.
        We pride ourselves on delivering prompt and dependable solutions, ensuring your toilet returns to optimal performance in no time.<br />
        Regarding reliable and professional plumbing services, look no further than AF Boiler Solutions Repair Services.
        We&apos;re a trusted name in the industry, dedicated to providing top-notch toilet repairs for residential and commercial properties.
        With a focus on efficiency, quality workmanship, and customer satisfaction, AF Boiler Solutions Home Services has earned its reputation as a go-to plumbing service provider.
      </p>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}