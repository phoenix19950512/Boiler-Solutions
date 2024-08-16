import { FC } from 'react';
import { WhyChooseUsComp } from '../components/why-choose-us';
import { OfferLinksComp } from '../components/offer-links';
import { EnquireToday } from '../components/enquire-today';

export const PowerFlushing: FC = () => {
  return (
    <>
      <div className='w-full text-4xl my-10 text-center font-bold leading-loose'>
        Revitalise Your Central Heating System with Professional Power Flushing from £399* subject to system type & survey
      </div>
      <p className="text-base mb-3 leading-8">
        Is your central heating system showing signs of inefficiency, slow heating, or uneven distribution of warmth?
        It&apos;s time to bring back its optimal performance with our professional central heating powerflushing services.
        We specialise in revitalizing heating systems, removing sludge, debris, and blockages that hinder performance.
        Don&apos;t let a sluggish central heating system compromise your comfort and increase your energy bills.
        Experience the benefits of central heating powerflushing with AF Boiler Solutions Contact us to schedule a consultation and take the first step toward a revitalized heating system.<br />
        Choose AF Boiler Solutions for expert central heating powerflushing services that restore your system&apos;s efficiency, enhance heat distribution, and extend its lifespan.
        Contact us now and Restore your central heating system to full health with AF Boiler Solutions power flushing experts.
      </p>
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}