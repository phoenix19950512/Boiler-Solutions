import { FC } from 'react';
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { common } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { WhyChooseUsComp } from '../components/why-choose-us';
import { HowItWorksComp } from '../components/how-it-works';
import { OfferLinksComp } from '../components/offer-links';
import { EnquireToday } from '../components/enquire-today';

export const HomePage: FC = () => {
  return (
    <>
      <div className='w-full text-4xl font-serif my-10 text-center'>We Take Pride In Our Workmanship</div>
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
      <div className="w-full font-serif text-blue-400 hover:underline italic">
        <Link to='./book'>Book a visit online now</Link>
      </div>
      <div className="text-3xl font-bold text-center my-10 underline">Breakdowns</div>
      <p className="text-lg mb-3">
        We know how stressful it can be when your appliance stops working, not to mention the inconvenience of having no heating, hot water or cooking facilities.<br />
        We specialise in complex fault finding, diagnostics and repairs to get it back up and running again.
        We can professionally diagnose the issue and repair several types of appliances such as Cookers, Range cookers, Gas fires, Combi Boilers, System Boilers, Back boilers, and Regular Boilers.
      </p>
      <div className="w-full font-serif text-blue-400 hover:underline italic">
        <Link to='./boiler/repair'>Find out more about Boiler Repairs</Link>
      </div>
      <div className="w-full font-serif text-blue-400 hover:underline italic">
        <Link to='./gas-cooker-oven/cooker-oven-repair'>Range Cooker Repairs</Link>
      </div>
      <div className="w-full font-serif text-blue-400 hover:underline italic">
        <Link to='./gas-fire/repair'>Gas Fire Repairs</Link>
      </div>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <EnquireToday />
    </>
  )
}