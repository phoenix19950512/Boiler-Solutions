import { FC } from 'react';
import {
  Button,
} from "@mui/material";
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { HowItWorksComp } from '../../components/how-it-works';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';
import { WeTakeProvide } from '../../components/we-take-pride';
import { LandingPage } from '../../components/landingpage';

export const BoilerInstall: FC = () => {
  return (
    <>
      <LandingPage title={<>Looking for a Boiler?<br />Need Help on Deciding?</>} subtitle={['Dont\'t worry our boiler experts will advise on the best boilers available for your property', 'Need a repair? Book online now']} />
      <WeTakeProvide />
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
          <Button variant="contained" color="secondary">Request Callback</Button>
        </div>
      </div>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}