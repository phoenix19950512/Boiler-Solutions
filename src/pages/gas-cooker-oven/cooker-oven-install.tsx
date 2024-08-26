import { FC } from 'react';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { HowItWorksComp } from '../../components/how-it-works';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';
import { WeTakeProvide } from '../../components/we-take-pride';
import { LandingPage } from '../../components/landingpage';

export const CookerOvenInstallation: FC = () => {
  return (
    <>
      <LandingPage title={<>Gas Cooker &amp; Oven Installations</>} subtitle={['', 'Need a Repair? Book online now']} />
      <WeTakeProvide />
      <div className="flex flex-col px-10 md:px-20">
        <div className='text-4xl font-bold text-center text-green-950 font-serif italic mt-10 mb-4 leading-loose' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          Gas Cooker & Oven Installations
        </div>
        <p className="text-base mb-3 leading-8">
          AF Boiler Solutions are dedicated to providing our customers with a friendly service of the highest quality.
        </p>
        <p className="text-base mb-3 indent-4 leading-8">
          Our Gas Safe registered engineers are committed to safely and responsibly installing cookers and ovens of various makes and models in our clients&apos; homes.
          Our team of experts work tirelessly to ensure that cooker and oven installation is completed meticulously, ensuring they&apos;re fitted to the safest possible standards every single time.
          Once the installation process is complete, we will run extensive checks on your new appliance.
          This enables us to make sure that your new cooker or oven is fully functioning and completely safe to use.
        </p>
        <p className="text-base mb-3 indent-4 leading-8">
          AF Boiler Solutions engineers are more than capable of fitting ovens and cookers of various brands,
          from <u className='text-red-500'>Beko</u>, <u className='text-red-500 mr-1'>Hotpoint</u>
          and <u className='text-red-500'>Rangemaster</u> to <u className='text-red-500'>Flavel</u>,
          <u className='text-red-500 ml-1'>Indesit</u> and <u className='text-red-500'>Currys Essentials</u>,
          no job is too big or small for our team of skilled specialists.
          Regardless of the brand, your new appliance will be expertly installed with absolute precision and with your safety in mind.
        </p>
        <p className="text-base mb-3 indent-4 leading-8">
          If you require pipe modification to install cooker we can do it for you.
        </p>
      </div>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}