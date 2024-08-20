import { FC } from 'react';
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { cyan } from '@mui/material/colors';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { HowItWorksComp } from '../../components/how-it-works';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';
import { MyLink } from '../../components/link';

export const CentralHeatingRepair: FC = () => {
  return (
    <>
      <div className="flex flex-col px-5 md:px-20 relative bg-indigo-950 text-white">
        <div className="flex flex-col select-none my-0 w-full pt-8 lg:w-1/2 items-center z-10">
          <div className='w-full text-4xl font-bold my-10 text-center italic font-serif' style={{ textShadow: 'rgba(255, 255, 255, 0.7) 1px 2.5px 6px' }}>
            We Take Pride In Our Workmanship
          </div>
          <FormGroup>
            <FormControlLabel
              className='my-2'
              checked={true}
              onChange={() => { }}
              control={<Checkbox sx={{ '&.Mui-checked': { color: cyan['A400'] } }} />}
              label={<div>
                <div className='font-bold'>Price by the job - not by the hour</div>
                <div className='text-sm'>We will give you a quote before starting work,<br />ensuring you a complete peace of mind</div>
              </div>}
            />
            <FormControlLabel
              className='my-2'
              checked={true}
              onChange={() => { }}
              control={<Checkbox sx={{ '&.Mui-checked': { color: cyan['A400'] } }} />}
              label={<div>
                <div className='font-bold'>Same Day Services</div>
                <div className='text-sm'>If you require our services fast, we will<br />to be there on the same day!</div>
              </div>}
            />
            <FormControlLabel
              className='my-2'
              checked={true}
              onChange={() => { }}
              control={<Checkbox sx={{ '&.Mui-checked': { color: cyan['A400'] } }} />}
              label={<div>
                <div className='font-bold'>12 - Month Guarantee</div>
                <div className='text-sm'>We offer 12 - month parts and labour guarantee<br />on all our work</div>
              </div>}
            />
            <FormControlLabel
              className='my-2'
              checked={true}
              onChange={() => { }}
              control={<Checkbox sx={{ '&.Mui-checked': { color: cyan['A400'] } }} />}
              label={<div>
                <div className='font-bold'>Upfront Fixed Pricing</div>
                <div className='text-sm'>We provide an upfront quote before proceeding<br />with no hidden fees!</div>
              </div>}
            />
          </FormGroup>
          <div className="w-full mx-auto my-2 text-end font-serif italic px-2 lg:px-10">
            <MyLink className='font-serif text-yellow-200 hover:text-yellow-300 before:bg-yellow-200' to='/book'>Book a visit online now</MyLink>
          </div>
        </div>
        <div className="absolute right-0 overflow-hidden h-full top-0 w-1/2 bg-no-repeat bg-cover bg-center bg-[url('/public/media/images/main-Header.png')]" />
      </div>
      <div className="flex flex-col px-10 pb-5 bg-green-50 lg:px-20">
        <div className='text-4xl font-bold text-center text-green-950 font-serif italic mt-10 mb-4 leading-loose' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          Central Heating Repairs
        </div>
        <ul className="mb-3 list-disc ml-8">
          <li>Are you struggling with the central heating system?</li>
          <li>Does your central heating system require necessary repairs?</li>
          <li>Looking for central heating engineers near you?</li>
        </ul>
        <p className="text-lg mb-3">
          If your central heating system develops an issue, we are here to help.
          We provide emergency central heating repair services for both domestic and commercial needs.<br />
          Our engineers will diagnose the faults in your central heating system and assist you so that everything gets back to normal.
          We can diagnose and repair all types of heating systems, including:-
        </p>
        <ul className="mb-3 list-disc ml-8">
          <li>Combi Boiler</li>
          <li>Regular Boiler - Conventional</li>
          <li>System Boiler - Pressurised system</li>
          <li>Programmers - Thermostats</li>
        </ul>
      </div>
      <div className="flex flex-col px-10 lg:px-20">
        <div className='text-4xl font-bold text-center text-blue-950 font-serif italic mt-10 mb-4 leading-loose' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          Our Commitment to Quality heating solutions
        </div>
        <p className="text-lg mb-3">
          We make every effort to be there for you when you need us the most because of this.
          Our quick response times and effective service guarantee that your heating issues are resolved quickly.<br />
          Our experienced and reliable engineers are here to address your concerns, provide reliable solutions, and restore the functionality of your heating system.
        </p>
      </div>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}