import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { FC } from "react";
import { MyLink } from "./link";
import { cyan } from "@mui/material/colors";
import { ImageSlider } from "./image-slider";

export const LandingPage: FC = () => {
  return (

    <div className="flex flex-col lg:flex-row relative bg-indigo-950 text-white">
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
      <div className="flex w-full lg:w-1/2 items-center">
        <ImageSlider />
      </div>
    </div>
  )
}