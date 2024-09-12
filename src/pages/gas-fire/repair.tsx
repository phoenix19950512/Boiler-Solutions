import { FC } from 'react';
import { LandingPage } from '../../common/Loader/Main/landingpage';
import { WeTakeProvide } from '../../common/Loader/Main/we-take-pride';
import { HowItWorksComp } from '../../common/Loader/Main/how-it-works';
import { OfferLinksComp } from '../../common/Loader/Main/offer-links';
import { WhyChooseUsComp } from '../../common/Loader/Main/why-choose-us';
import { EnquireToday } from '../../common/Loader/Main/enquire-today';
import { ImageSlider } from '../../common/Image Slider';

export const GasFireRepairs: FC = () => {
  return (
    <>
      <LandingPage title={<>Trusted Gas Fire Repairs</>} subtitle={['', 'Needs a Repair? Book online now']} />
      <WeTakeProvide />
      <div className="flex w-full min-h-60">
        <ImageSlider />
      </div>
      <div className="flex flex-col px-10 md:px-20">
        <div className='text-4xl font-bold text-center text-green-950 font-serif italic mt-10 mb-4 leading-loose' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          Gas Fire Repair Service
        </div>
        <p className="text-base mb-3 indent-4 leading-8">
          As well as keeping you warm, your gas fire adds a cosy focal point to any room so when it breaks down you need an AF Boiler Solutions gas engineer who can help fix it quickly.
          Our <u className='text-red-500'>heating engineers</u> are highly experienced and familiar with repairing a vast range of gas fires; they&apos;ll quickly identify any faults and rectify them for you.
          If this can&apos;t be done at the first visit, we&apos;ll arrange to come back and fit any parts required.
        </p>
      </div>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}