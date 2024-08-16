import { FC } from 'react';
import {
  Button,
} from "@mui/material";
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { HowItWorksComp } from '../../components/how-it-works';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';

export const BoilerInstall: FC = () => {
  return (
    <>
      <div className='w-full text-4xl font-serif my-10 text-center'>
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
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}