import { FC } from 'react';
import {
  Alert,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { common } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { FreeAskQuestions } from '../../../components/freequestions';
import { FreeAskQuestionType } from '../../../models/free-ask-question';  
import { WhyChooseUsComp } from '../../../components/why-choose-us';
import { HowItWorksComp } from '../../../components/how-it-works';
import { OfferLinksComp } from '../../../components/offer-links';
  
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
      <div className='w-full text-4xl font-serif my-10 text-center'>We Take Pride In Our Workmanship</div>
      {/* <div className="flex flex-col">
        <div className="flex w-96 bg-white p-1">
          <input type="text" className="flex flex-1 px-3 py-2 text-xl text-black border-0 focus-visible:outline-none" placeholder='Your post code : le17' />
          <div className="flex">
            <button className='bg-purple-700 px-3 border border-purple-900 hover:bg-purple-800 duration-300' onClick={() => navigate('book')}>
              <HiArrowRight />
            </button>
          </div>
        </div>
      </div> */}
      <div className="flex my-auto w-full">
        <div className="flex flex-col m-auto mb-0 select-none">
          <FormGroup>
            <FormControlLabel
              className='my-2'
              checked={true}
              onChange={() => { }}
              control={<Checkbox sx={{ color: common.white, '&.Mui-checked': { color: common.white } }} />}
              label={<div>
                <div className='font-bold'>Price by the job - not by the hour</div>
                <div className='text-sm'>We will give you a quote before starting work,<br />ensuring you a complete peace of mind</div>
              </div>}
            />
            <FormControlLabel
              className='my-2'
              checked={true}
              onChange={() => { }}
              control={<Checkbox sx={{ color: common.white, '&.Mui-checked': { color: common.white } }} />}
              label={<div>
                <div className='font-bold'>Same Day Services</div>
                <div className='text-sm'>If you require our services fast, we will<br />to be there on the same day!</div>
              </div>}
            />
          </FormGroup>
        </div>
        <div className="flex flex-col m-auto mb-0 select-none">
          <FormGroup>
            <FormControlLabel
              className='my-2'
              checked={true}
              onChange={() => { }}
              control={<Checkbox sx={{ color: common.white, '&.Mui-checked': { color: common.white } }} />}
              label={<div>
                <div className='font-bold'>12 - Month Guarantee</div>
                <div className='text-sm'>We offer 12 - month parts and labour guarantee<br />on all our work</div>
              </div>}
            />
            <FormControlLabel
              className='my-2'
              checked={true}
              onChange={() => { }}
              control={<Checkbox sx={{ color: common.white, '&.Mui-checked': { color: common.white } }} />}
              label={<div>
                <div className='font-bold'>Upfront Fixed Pricing</div>
                <div className='text-sm'>We provide an upfront quote before proceeding<br />with no hidden fees!</div>
              </div>}
            />
          </FormGroup>
        </div>
      </div>
      <div className="w-full font-serif text-end text-blue-400 hover:underline italic">
        <Link to='./book'>Book a visit online now</Link>
      </div>
      <div className="text-3xl font-bold text-center my-10">Expert in Gas Boiler Repairs</div>
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
      <div>
        <Alert variant="filled" severity="error">
          Don&apos;t let boilder issues Disrupt your Life any longer<br />
          Experience the Convenience and Expertise of AF Boiler Solutions:
        </Alert>
      </div>
      <div className="my-3">
        <FreeAskQuestions questions={questions1} />
      </div>
      <HowItWorksComp />
      <div className="text-2xl font-bold mt-10 mb-3">Call out cost</div>
      <div className="ml-2">
        Get an instant price quote and book the job at the same time by using our online tool.
        <Link className='italic text-blue-400 mx-2 hover:underline' to='#'>Get Instant Price and book online now.</Link>
        Or, if you prefer, complete the process over the phone or through our <Link className='italic text-blue-400 hover:underline' to='#'>Callback</Link> feature.
        <p className="my-5 font-bold">How it Works:</p>
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
      </div>
      <div className="text-2xl font-bold mt-10 mb-3">Guarantee</div>
      <div className="ml-2">
        All boiler parts we supply are covered by a minimum 12 month guarantee which means that if they fail within that time we&apos;ll replace them completely free of charge.
      </div>
      <OfferLinksComp />
      <WhyChooseUsComp />
      <div className="text-2xl font-bold my-8">Frequently Asked Questions</div>
      <div>
        <FreeAskQuestions questions={questions2} />
      </div>
      <div className="text-lg font-bold mt-10 mb-3">Enquire today</div>
      <div className="mb-3">
        For a no obligation quote please call us today on <Link className='text-blue-400 hover:underline' to='tel:+441316699993'>0131 669 9993</Link> or complete the form below.
      </div>
      <div className="mb-3">
        <b>We repair and service every make and model of boiler including </b>
        Alpha - Ariston - Biasi - Baxi - Chaffoteaux - Forroli - Gledhill - Glowworm - Halstead - Heatline - Main - Ideal - Potterton - Ravenheat - Range - Remeha - Sime - Vaillant - Vokera - Viessmann - Worcester ... and many more.
      </div>
      <div className="mb-3"><img className='m-auto' src="/media/images/logo.png" alt="Logo" style={{ height: '45px' }} /></div>
    </>
  )
}