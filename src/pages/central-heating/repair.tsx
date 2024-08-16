import { FC } from 'react';
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { common } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { HowItWorksComp } from '../../components/how-it-works';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';

export const CentralHeatingRepair: FC = () => {
  return (
    <>
      <div className='w-full text-4xl font-serif my-10 text-center'>
        We Take Pride In Our Workmanship
      </div>
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
      <p className="text-xl font-bold mb-3">
        Central Heating Repairs
      </p>
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
      <p className="text-xl font-bold mb-3">
        Our Commitment to Quality heating solutions
      </p>
      <p className="text-lg mb-3">
        We make every effort to be there for you when you need us the most because of this.
        Our quick response times and effective service guarantee that your heating issues are resolved quickly.<br />
        Our experienced and reliable engineers are here to address your concerns, provide reliable solutions, and restore the functionality of your heating system.
      </p>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}