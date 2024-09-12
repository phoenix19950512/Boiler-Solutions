import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LandingPage } from '../../common/Loader/Main/landingpage';
import { WeTakeProvide } from '../../common/Loader/Main/we-take-pride';
import { HowItWorksComp } from '../../common/Loader/Main/how-it-works';
import { OfferLinksComp } from '../../common/Loader/Main/offer-links';
import { WhyChooseUsComp } from '../../common/Loader/Main/why-choose-us';
import { EnquireToday } from '../../common/Loader/Main/enquire-today';
import { ImageSlider } from '../../common/Image Slider';
import Accordion from '../../components/Accordian';
import { AccordianItemType } from '../../models/accordian';


export const BoilerRepaire: FC = () => {
  const questions1: AccordianItemType[] = [
    {
      title: 'Trusted Professionals',
      description: 'Fully qualified an dapproved members of the Gas Safe Register, with over 15 years of experience in fast, effective boiler and central heating repairs.'
    },
    {
      title: 'Convenient Scheduling',
      description: 'We offer 2-4 hour arrival slots - no need to wait around all day. We also offer same day appointments for your convenience, so that you can get your boilder issues resolved quickly.',
    },
    {
      title: 'Specialists in repairing',
      description: 'All makes and models of Combi, System, and Regular boilers, regardless of age.'
    },
    {
      title: 'Comprehensive Warranty',
      description: 'All boiler repairs come with a full 12-month parts and labour guarantee.'
    }
  ];
  const questions2: AccordianItemType[] = [
    {
      title: 'I have a conventional System do you repair them?',
      description: <><b>Convenentional System:</b> You have a cylinder usually located in an airing cupboard; boiler generally tends to be either in the bedroom or even in any other part of the house.
        This type of system consists of 2 tanks in the loft, it has hot water temperature control on the cylinder and a room thermostat for the heating usually located in the hallway.<br /><br />
        Some conventional boilers don&apos;t have a programmer or temperature control for heating and hot water.<br /><br />
        We can carry out repairs on this kind of system, as well as enhance the same system to achieve optimal performance with minor modifications to suit your budget.</>
    },
    {
      title: <>What if my boiler can&apos;t be fixed?</>,
      description: <>If your Boiler is beyond economical repair, the best option is to replace with a modern boiler.In such cases, we&apos;ll conduct a survey for a replacement boiler and provide you with a quote.</>
    },
    {
      title: 'Do you offer fixed price repairs?',
      description: 'We will come and assess your breakdown and and offer you a fixed price quote.'
    },
    {
      title: 'Do you repair all makes/models of boiler?',
      description: 'We specialise in repairing almost all gas boilers.'
    }
  ];

  return (
    <>
      <LandingPage title={<>Broken Boiler?<br />Let us handle the repair</>} subtitle={['Whatever the problem with your Plumbing, Gas, or Boiler', 'We can help']} />
      <WeTakeProvide />
      <div className="flex w-full min-h-60">
        <ImageSlider />
      </div>
      <div className="flex flex-col px-10 md:px-20">
        <div className="text-4xl font-bold text-center my-10 font-serif italic">Expert in Gas Boiler Repairs</div>
        <p className="text-lg font-bold mb-3">
          At AF Boiler Solutions, we specialise in swift and reliable gas boiler repairs to ensure your system is back up and running in no time.
        </p>
        <p className="text-lg font-bold mb-3">
          Our seasoned engineers have extensive experience with all makes and models of boilers, so you can count on us to efficiently diagnose and fix any issue.
          We pride ourselves on offering affordable rates and transparent quotes, ensuring you know exactly what to expect:
        </p>
        <ul className="mb-3 list-disc ml-8">
          <li>Complex electrical faults: accurate diagnostics</li>
          <li>Leaking boiler that needs urgent attention</li>
          <li>Intermittent faults</li>
          <li>Components replacement</li>
          <li>Programmers: Room Thermostats</li>
        </ul>
        <p className="text-lg font-bold mb-3">
          Trust us for top-notch workmanship and outstanding service every time.
        </p>
        <div className="text-center font-bold mb-3">
          <button type='button' className='bg-primary px-5 py-3 rounded text-white duration-300 hover:opacity-80'>Request Callback</button>
        </div>
      </div>
      <div className="px-10 md:px-20 my-5 md:my-10">
        <div className="flex w-full mb-5 border-l-6 border-[#F87171] bg-[#F87171] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
          <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#F87171]">
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.50493 16H17.5023C18.6204 16 19.3413 14.9018 18.8354 13.9735L10.8367 0.770573C10.2852 -0.256858 8.70677 -0.256858 8.15528 0.770573L0.156617 13.9735C-0.334072 14.8998 0.386764 16 1.50493 16ZM10.7585 12.9298C10.7585 13.6155 10.2223 14.1433 9.45583 14.1433C8.6894 14.1433 8.15311 13.6155 8.15311 12.9298V12.9015C8.15311 12.2159 8.6894 11.688 9.45583 11.688C10.2223 11.688 10.7585 12.2159 10.7585 12.9015V12.9298ZM8.75236 4.01062H10.2548C10.6674 4.01062 10.9127 4.33826 10.8671 4.75288L10.2071 10.1186C10.1615 10.5049 9.88572 10.7455 9.50142 10.7455C9.11929 10.7455 8.84138 10.5028 8.79579 10.1186L8.13574 4.75288C8.09449 4.33826 8.33984 4.01062 8.75236 4.01062Z"
                fill="#FFF"
              ></path>
            </svg>
          </div>
          <div className="w-full">
            <h5 className="mb-3 font-semibold text-[#B45454]">
              Don&apos;t let boilder issues Disrupt your Life any longer<br />
              Experience the Convenience and Expertise of AF Boiler Solutions:
            </h5>
          </div>
        </div>
        <Accordion items={questions1} />
      </div>
      <HowItWorksComp />
      <div className="flex flex-col px-10 lg:px-20">
        <div className="text-3xl font-bold text-center mt-10 mb-3">Call out cost</div>
        <div className="ml-2">
          Get an instant price quote and book the job at the same time by using our online tool.
          <Link className='italic text-meta-5 mx-2 hover:underline' to='/book'>Get Instant Price and book online now.</Link>
          Or, if you prefer, complete the process over the phone or through our <Link className='italic text-meta-5 hover:underline' to='#'>Callback</Link> feature.
          <p className="text-xl my-5 font-bold">How it Works:</p>
          <p className='mb-3'>
            <b>Initial Assessment:</b> We evaluate your requirements over the phone.
            Occasionally, we may ask you to send pictures via WhatsApp for a more accurate assessment.
            Based on this evaluation, we will provide you with a quote.
          </p>
          <p className='mb-3'>
            <b>Fixed Price Quotes:</b> Our quotes are not based on an hourly rate.
            The price we provide is a fixed, one-time charge that includes both diagnostics and repair, if possible, during the same visit without requiring additional parts.
            If we have the necessary part in our van, we will give you a quote to complete the job at that time.
          </p>
          <p className='mb-3'>
            <b>Parts Required:</b> If your boiler cannot be fixed during the initial visit due to a more complex issue or the need for parts we don&apos;t have on hand, the engineer will provide you with a quote, usually on the same day, detailing the repair cost.
            Once you accept the quote over the phone, we will schedule a return visit immediately, aiming to return the next day.
          </p>
          <p className="text-xl font-bold mt-5 mb-3">Guarantee:</p>
          <p className="ml-2 mb-8">
            All boiler parts we supply are covered by a minimum 12 month guarantee which means that if they fail within that time we&apos;ll replace them completely free of charge.
          </p>
        </div>
      </div>
      <OfferLinksComp />
      <WhyChooseUsComp />
      <div className="flex flex-col px-10 lg:px-20 pb-5">
        <div className="text-2xl font-bold my-8 font-serif italic text-cyan-950" style={{ textShadow: '0 3px 6px rgba(34, 211, 238, 0.75)' }}>Frequently Asked Questions</div>
        <Accordion items={questions2} />
      </div>
      <EnquireToday />
    </>
  )
}