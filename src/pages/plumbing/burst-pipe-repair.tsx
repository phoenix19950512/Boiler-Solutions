import { FC } from 'react';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';
import { HowItWorksComp } from '../../components/how-it-works';

export const BurstPipeRepairs: FC = () => {
  return (
    <>
      <div className='w-full text-4xl my-10 text-center font-bold leading-loose'>
        Burst Pipe Repairs
      </div>
      <p className="text-base mb-3 leading-8">
        <b>Emergency Plumbing Services:</b> Plumbing emergencies, such as burst pipes, or severe leaks, require immediate attention. Quick response and efficient resolution are essential to minimise damage and restore normalcy to the plumbing system.<br />
        When disaster strikes, you can count on our team of highly skilled and licensed plumbers to come to your rescue.
        AF Boiler Solutions emergency plumbing services are available 24/7, ensuring that help is just a phone call away.
        We prioritise your peace of mind and work tirelessly to resolve your plumbing issues promptly, minimising damage and restoring functionality to your plumbing system.
      </p>
      <div className='w-full text-lg my-5 text-center font-bold leading-loose'>
        Experienced and Reliable: Our Commitment to Quality Plumbing
      </div>
      <p className="text-base mb-3 leading-8">
        AF Boiler Solutions Home Services&apos; approach to burst pipe repair revolves around efficiency, transparency, and top-notch quality.
        Our engineers arrive fully equipped to assess the situation, identify the affected area, and provide a comprehensive upfront quote.
        We emphasise keeping you informed throughout the process, ensuring no hidden surprises upon completion.
      </p>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}