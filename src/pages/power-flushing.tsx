import { FC } from 'react';
import { LandingPage } from '../common/Loader/Main/landingpage';
import { WeTakeProvide } from '../common/Loader/Main/we-take-pride';
import { OfferLinksComp } from '../common/Loader/Main/offer-links';
import { WhyChooseUsComp } from '../common/Loader/Main/why-choose-us';
import { EnquireToday } from '../common/Loader/Main/enquire-today';
import { ImageSlider } from '../common/Image Slider';

export const PowerFlushing: FC = () => {
  return (
    <>
      <LandingPage title={<>Central Heating Powerflushing</>} subtitle={['Whatever the problem with your Plumbing, Gas, or Boiler', 'We can help']} />
      <WeTakeProvide />
      <div className="flex w-full min-h-60">
        <ImageSlider />
      </div>
      <div className="flex flex-col px-10 md:px-20">
        <div className='text-4xl font-bold text-center text-green-950 font-serif italic mt-10 mb-4 leading-loose' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          Revitalise Your Central Heating System with Professional Power Flushing from £399* subject to system type & survey
        </div>
        <p className="text-base mb-3 indent-4 leading-8">
          Is your central heating system showing signs of inefficiency, slow heating, or uneven distribution of warmth?
          It&apos;s time to bring back its optimal performance with our professional central heating powerflushing services.
          We specialise in revitalizing heating systems, removing sludge, debris, and blockages that hinder performance.
          Don&apos;t let a sluggish central heating system compromise your comfort and increase your energy bills.
          Experience the benefits of central heating powerflushing with AF Boiler Solutions Contact us to schedule a consultation and take the first step toward a revitalized heating system.
        </p>
        <p className="text-base mb-3 indent-4 leading-8">
          Choose AF Boiler Solutions for expert central heating powerflushing services that restore your system&apos;s efficiency, enhance heat distribution, and extend its lifespan.
          Contact us now and Restore your central heating system to full health with AF Boiler Solutions power flushing experts.
        </p>
      </div>
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}