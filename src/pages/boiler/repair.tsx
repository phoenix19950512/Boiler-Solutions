import { FC } from 'react';
import {
  Alert,
  Button,
} from "@mui/material";
import { Link } from 'react-router-dom';
import { FreeAskQuestions } from '../../components/freequestions';
import { FreeAskQuestionType } from '../../models/free-ask-question';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { HowItWorksComp } from '../../components/how-it-works';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';
import { LandingPage } from '../../components/landing';

export const BoilerRepaire: FC = () => {
  const questions1: FreeAskQuestionType[] = [
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
  const questions2: FreeAskQuestionType[] = [
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
      <LandingPage />
      <div className="flex flex-col px-10 pb-5 bg-green-50 lg:px-20">
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
          <Button variant="contained" color="secondary">Request Callback</Button>
        </div>
        <div className='mb-3'>
          <Alert variant="filled" severity="error">
            Don&apos;t let boilder issues Disrupt your Life any longer<br />
            Experience the Convenience and Expertise of AF Boiler Solutions:
          </Alert>
        </div>
        <FreeAskQuestions questions={questions1} />
      </div>
      <HowItWorksComp />
      <div className="flex flex-col px-10 lg:px-20">
        <div className="text-3xl font-bold text-center mt-10 mb-3">Call out cost</div>
        <div className="ml-2">
          Get an instant price quote and book the job at the same time by using our online tool.
          <Link className='italic text-blue-600 mx-2 hover:underline' to='/book'>Get Instant Price and book online now.</Link>
          Or, if you prefer, complete the process over the phone or through our <Link className='italic text-blue-600 hover:underline' to='#'>Callback</Link> feature.
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
      <div className="flex flex-col px-10 lg:px-20 pb-5 bg-cyan-50">
        <div className="text-2xl font-bold my-8 font-serif italic text-cyan-950" style={{ textShadow: '0 3px 6px rgba(34, 211, 238, 0.75)' }}>Frequently Asked Questions</div>
        <FreeAskQuestions questions={questions2} />
      </div>
      <EnquireToday />
    </>
  )
}