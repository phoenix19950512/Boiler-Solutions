import { FC } from 'react';
import { LandingPage } from '../../common/Loader/Main/landingpage';
import { WeTakeProvide } from '../../common/Loader/Main/we-take-pride';
import { HowItWorksComp } from '../../common/Loader/Main/how-it-works';
import { OfferLinksComp } from '../../common/Loader/Main/offer-links';
import { WhyChooseUsComp } from '../../common/Loader/Main/why-choose-us';
import { EnquireToday } from '../../common/Loader/Main/enquire-today';
import { ImageSlider } from '../../common/Image Slider';


export const BoilerInstall: FC = () => {
  return (
    <>
      <LandingPage title={<>Looking for a Boiler?<br />Need Help on Deciding?</>} subtitle={['Dont\'t worry our boiler experts will advise on the best boilers available for your property', 'Need a repair? Book online now']} />
      <WeTakeProvide />
      <div className="flex w-full min-h-60">
        <ImageSlider />
      </div>
      <div className="flex flex-col px-10 md:px-20">
        <div className='w-full text-4xl font-bold mb-10 mt-14 text-purple-800 text-center italic font-serif' style={{ textShadow: 'rgba(107, 33, 68, 0.7) 1px 2.5px 6px' }}>
          Gas Boilers Professionally Installed
        </div>
        <p className="text-lg mb-3">
          We have an expert team of Gas Safe registered engineers ready to install your new or replacement boiler.
          AF Boiler Solutions are proud to offer a full range of top-quality and professional boiler services.
          Our reputation for being reliable, honest, and competitively priced is stellar and our workmanship is always highly rated.
        </p>
        <div className="text-center font-bold mb-3">
          <button type='button' className='bg-primary px-5 py-3 rounded text-white duration-300 hover:opacity-80'>Request Callback</button>
        </div>
      </div>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}