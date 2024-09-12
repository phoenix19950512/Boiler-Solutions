import { FC } from 'react';
import { LandingPage } from '../../common/Loader/Main/landingpage';
import { WeTakeProvide } from '../../common/Loader/Main/we-take-pride';
import { HowItWorksComp } from '../../common/Loader/Main/how-it-works';
import { OfferLinksComp } from '../../common/Loader/Main/offer-links';
import { WhyChooseUsComp } from '../../common/Loader/Main/why-choose-us';
import { EnquireToday } from '../../common/Loader/Main/enquire-today';
import { ImageSlider } from '../../common/Image Slider';

export const ToiletRepairs: FC = () => {
  return (
    <>
      <LandingPage title={<>Toilet Repairs</>} subtitle={['Whatever the problem with your Plumbing, Gas, or Boiler', 'We can help']} />
      <WeTakeProvide />
      <div className="flex w-full min-h-60">
        <ImageSlider />
      </div>
      <div className="flex flex-col px-10 md:px-20">
        <div className='text-4xl font-bold text-center text-green-950 font-serif italic mt-10 mb-4 leading-loose' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          Reliable Toilet Repair Services
        </div>
        <p className="text-base mb-3 leading-8">
          From fixing faulty flush mechanisms to addressing leaks that can lead to water damage, we have the mastery and tools to handle a wide range of toilet repairs.
          We pride ourselves on delivering prompt and dependable solutions, ensuring your toilet returns to optimal performance in no time.<br />
          Regarding reliable and professional plumbing services, look no further than AF Boiler Solutions Repair Services.
          We&apos;re a trusted name in the industry, dedicated to providing top-notch toilet repairs for residential and commercial properties.
          With a focus on efficiency, quality workmanship, and customer satisfaction, AF Boiler Solutions Home Services has earned its reputation as a go-to plumbing service provider.
        </p>
      </div>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}