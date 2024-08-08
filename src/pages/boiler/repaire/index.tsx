import { FC } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { Alert, Button } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { common } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { QuestionAnswer, Schedule, Build } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const BoilerRepaire: FC = () => {
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
              control={<Checkbox sx={{ color: common.white, '&.Mui-checked': { color: common.white } }} />}
              label={<div>
                <div className='font-bold'>Price by the job - not by the hour</div>
                <div className='text-sm'>We will give you a quote before starting work,<br />ensuring you a complete peace of mind</div>
              </div>}
            />
            <FormControlLabel
              className='my-2'
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
              control={<Checkbox sx={{ color: common.white, '&.Mui-checked': { color: common.white } }} />}
              label={<div>
                <div className='font-bold'>12 - Month Guarantee</div>
                <div className='text-sm'>We offer 12 - month parts and labour guarantee<br />on all our work</div>
              </div>}
            />
            <FormControlLabel
              className='my-2'
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
        <Accordion>
          <AccordionSummary
            expandIcon={<HiChevronDown className="text-white" />}
            aria-controls="panel1-content"
            className="font-bold"
            id="panel1-header"
          >
            Trusted Professionals
          </AccordionSummary>
          <AccordionDetails>
            Fully qualified an dapproved members of the Gas Safe Register, with over 15 years of experience in fast, effective boiler and central heating repairs.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<HiChevronDown className="text-white" />}
            aria-controls="panel2-content"
            className="font-bold"
            id="panel2-header"
          >
            Convenient Scheduling
          </AccordionSummary>
          <AccordionDetails>
            We offer 2-4 hour arrival slots - no need to wait around all day. We also offer same day appointments for your convenience, so that you can get your boilder issues resolved quickly.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<HiChevronDown className="text-white" />}
            aria-controls="panel3-content"
            className="font-bold"
            id="panel3-header"
          >
            Specialists in repairing
          </AccordionSummary>
          <AccordionDetails>
            All makes and models of Combi, System, and Regular boilers, regardless of age.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<HiChevronDown className="text-white" />}
            aria-controls="panel4-content"
            className="font-bold"
            id="panel4-header"
          >
            Comprehensive Warranty
          </AccordionSummary>
          <AccordionDetails>
            All boiler repairs come with a full 12-month parts and labour guarantee.
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="text-2xl font-bold mt-10 mb-3">How it works</div>
      <div className="ml-2">
        <p className="mb-3">
          We are fully qualified and Gas Safe Registered with an Excellent First-Time Fix Rate, so you can rely on us to get your boiler issues resolved in no time.
        </p>
        <div className="mb-3">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              width: 'fit-content',
              margin: 'auto',
              '& > :not(style)': {
                m: 1,
                width: 275,
              },
            }}
          >
            <Paper className="text-center px-6 py-2">
              <QuestionAnswer sx={{ fontSize: 120 }} />
              <p className="text-lg font-bold my-2">STEP 1:</p>
              <p className="text-lg mb-2">Answer a few questions regarding your boiler</p>
            </Paper>
            <Paper className="text-center px-6 py-2">
              <Schedule sx={{ fontSize: 120 }} />
              <p className="text-lg font-bold my-2">STEP 2:</p>
              <p className="text-lg mb-2">Schedule your repair visit</p>
            </Paper>
            <Paper className="text-center px-6 py-2">
              <Build sx={{ fontSize: 120 }} />
              <p className="text-lg font-bold my-2">STEP 3:</p>
              <p className="text-lg mb-2">An engineer will visit to diagnose and repair the isuue</p>
            </Paper>
          </Box>
        </div>
      </div>
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
      <div className="text-4xl font-bold mt-10 mb-3 text-center">We offer range of services:</div>
      <div className="flex text-lg font-bold mb-3 mx-auto w-fit">
        <Link to='/'>
          <img src="/media/images/home.png" alt="Home" className='w-20 h-20' />
        </Link>
        <Link to='/boilers'>
          <img src="/media/images/boilers.png" alt="Home" className='w-20 h-20 ml-2' />
        </Link>
        <Link to='/central-heating'>
          <img src="/media/images/central-heating.png" alt="Home" className='w-20 h-20 ml-2' />
        </Link>
        <Link to='/gas-fires'>
          <img src="/media/images/gas-fires.png" alt="Home" className='w-20 h-20 ml-2' />
        </Link>
        <Link to='/plumbing'>
          <img src="/media/images/plumbing.png" alt="Home" className='w-20 h-20 ml-2' />
        </Link>
        <Link to='/radiators'>
          <img src="/media/images/radiators.png" alt="Home" className='w-20 h-20 ml-2' />
        </Link>
      </div>
      <div className="text-lg font-bold mb-3"></div>
    </>
  )
}