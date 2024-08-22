import { FC } from 'react';
import { WhyChooseUsComp } from '../components/why-choose-us';
import { HowItWorksComp } from '../components/how-it-works';
import { OfferLinksComp } from '../components/offer-links';
import { EnquireToday } from '../components/enquire-today';
import { MyLink } from '../components/link';
import { LandingPage } from '../components/landing';

export const HomePage: FC = () => {
  return (
    <>
      <LandingPage />
      <div className="flex flex-col px-10 bg-slate-300">
        <div className="text-3xl font-bold text-center font-serif italic my-10 text-cyan-800" style={{ textShadow: '0.5px 2.5px 6px cyan' }}>Breakdowns</div>
        <p className="text-lg mb-3">
          We know how stressful it can be when your appliance stops working, not to mention the inconvenience of having no heating, hot water or cooking facilities.<br />
          We specialise in complex fault finding, diagnostics and repairs to get it back up and running again.
          We can professionally diagnose the issue and repair several types of appliances such as Cookers, Range cookers, Gas fires, Combi Boilers, System Boilers, Back boilers, and Regular Boilers.
        </p>
        <div className="w-full mx-auto font-serif text-end italic pb-5 px-2 lg:px-10">
          <MyLink className='text-pink-500 hover:text-pink-700 before:bg-pink-700' to='./boiler/repair'>Find out more about Boiler Repairs</MyLink><br />
          <MyLink className='text-pink-500 hover:text-pink-700 before:bg-pink-700' to='./gas-cooker-oven/cooker-oven-repair'>Range Cooker Repairs</MyLink><br />
          <MyLink className='text-pink-500 hover:text-pink-700 before:bg-pink-700' to='./gas-fire/repair'>Gas Fire Repairs</MyLink>
        </div>
      </div>
      <div className="flex flex-col px-10">
        <div className="text-3xl font-bold text-center font-serif italic my-10 text-cyan-800" style={{ textShadow: '0.5px 2.5px 6px pink' }}>Installation</div>
        <p className="text-lg mb-3">
          AF Boiler Solutions are experts at installation of all makes and models of appliances, whether that would be a cooker, shower, boiler, radiator, gas fire, whatever it is,
          look no further than AF Boiler Solutions, we do it all.<br />
          Give us a call so that our expert engineers can attend to your needs and offer a competitive quote, without compromising on the quality of workmanship.<br /><br />
          You&apos;ll find everything under one roof at AF Boiler Solutions.
        </p>
      </div>
      <div className="flex flex-col px-10 bg-red-50">
        <div className="text-3xl font-bold text-center my-10 underline" style={{ textShadow: '0.5px 2.5px 6px cadetblue' }}>Plumbing Issue</div>
        <p className="text-lg mb-3">
          <b>Plumbing Services:</b> Can attend to emergencies, such as leaky tap, burst pipes, severe leaks, broken toilet, or any other plubing issues that require immediate attention.
          Our team are at hand for a quick response and offer efficient resolution which is essential to minimise damage and resotre normalcy to the plubing system.
        </p>
        <p className="text-lg mb-3">
          <b>Plumbing fixtures Replacement:</b> Installing new fixtures such as electric shower, thermostatic shower, bath taps, basine taps, sink taps.
        </p>
        <p className="text-lg mb-3">
          With a simple touch of a button, you can connect with our team of experienced engineers who have the expertise to diagnose and fix the problem promptly and are ready to assist you.
        </p>
        <p className="text-lg mb-3">
          By reaching out to AF Boiler Solutions, you can expect professional and reliable service from start to finish.
          We strive to exceed your expectations and ensure that your plumbing issues are resolved efficiently and effectively.
        </p>
      </div>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}