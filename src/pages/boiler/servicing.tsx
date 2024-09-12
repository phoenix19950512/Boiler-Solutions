import { FC } from 'react';
import { LandingPage } from '../../common/Loader/Main/landingpage';
import { WeTakeProvide } from '../../common/Loader/Main/we-take-pride';
import { HowItWorksComp } from '../../common/Loader/Main/how-it-works';
import { OfferLinksComp } from '../../common/Loader/Main/offer-links';
import { WhyChooseUsComp } from '../../common/Loader/Main/why-choose-us';
import { EnquireToday } from '../../common/Loader/Main/enquire-today';
import { ImageSlider } from '../../common/Image Slider';
import { AccordianItemType } from '../../models/accordian';
import Accordion from '../../components/Accordian';

export const BoilerService: FC = () => {
  const questions: AccordianItemType[] = [
    {
      title: 'When should I get my boiler serviced?',
      description: <>
        <li>We recommend having your boiler serviced once a year at the very least, to guarantee your boiler is running efficiently all year round.</li>
        <li>
          <b>Keep your warranty intact:</b> All new boilers these days come with warranties.
          Some with up to as much as 10 years.
          It is one of the requirements by the manufacturers to have a yearly boiler service to keep them valid. Don't let yours lapse.
        </li>
      </>
    },
    {
      title: <>What are the benefits of servicing your boiler?</>,
      description: <>
        <li>Saves money through fuel energy efficiency</li>
        <li>Prevents costly failures</li>
        <li>Avoids being left without heating in winter months</li>
        <li>Keeps the warranty valid for most manufacturers</li>
        <li>Ensures safety from dangers such as carbon monoxide poisoning</li>
        <li>Servicing your boiler at right intervals takes less time to do and doesn&apos;t cost as much as, upon breakdown</li>
      </>
    },
    {
      title: 'How long does it take to complete a boiler service?',
      description: 'A boiler service generally takes an hour, depending on the nature of the system.'
    },
    {
      title: 'Do you service gas fires and other gas appliances as well as boilers?',
      description: <>Yes, we do annual gas fire servicing and can work on other gas appliances too.<br />
        Please contact us about your specific gas appliance servicing for advice and a quote! </>
    }
  ];

  return (
    <>
      <LandingPage title={<>Boiler Servicing</>} subtitle={['We service all makes and models', 'Need a repair? Book online now']} />
      <WeTakeProvide />
      <div className="flex w-full min-h-60">
        <ImageSlider />
      </div>
      <div className="flex flex-col px-10 md:px-20">
        <div className='text-4xl font-bold text-center text-green-950 font-serif italic mt-10 mb-4' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          Boiler Service
        </div>
        <p className="text-lg mb-3">
          Having your boiler serviced regularly by our professional engineers ensures your boiler's efficiency and safety.
        </p>
        <p className="text-lg mb-3">
          Our fully qualified team with years of experience offers reliable and affordable service.&nbsp;
          Annual servicing of your gas boiler as recommended by the manufacturers ensures optimal performance and safety. An efficient boiler not only lowers your gas consumption and bills but is also more environmentally friendly.
        </p>
        <p className="text-lg mb-3">
          If we find a minor fault whilst conducting your boiler service, which can be fixed within a service timeframe, we will complete such repair at no additional cost.
        </p>
        <p className="text-lg mb-3">
          AF Boiler Solutions offers an annual boiler service for all makes and types of boilers at competitive rates.
        </p>
        <div className="text-center font-bold mb-3">
          <button type='button' className='bg-primary px-5 py-3 rounded text-white duration-300 hover:opacity-80'>Request Callback</button>
        </div>
      </div>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <div className='flex flex-col px-10 pb-5 lg:px-20'>
        <div className="text-2xl font-bold my-8 font-serif italic text-cyan-950" style={{ textShadow: '0 3px 6px rgba(34, 211, 238, 0.75)' }}>Frequently Asked Questions</div>
        <Accordion items={questions} />
      </div>
      <EnquireToday />
    </>
  )
}