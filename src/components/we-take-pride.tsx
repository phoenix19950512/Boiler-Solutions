import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { FC } from "react";
import { MyLink } from "./link";

export const WeTakeProvide: FC = () => {

  return (
    <div className="flex flex-col relative">
      <div className='w-full text-4xl font-bold mb-10 mt-14 text-purple-800 text-center italic font-serif' style={{ textShadow: 'rgba(107, 33, 68, 0.7) 1px 2.5px 6px' }}>
        We Take Pride In Our Workmanship
      </div>
      <div className="flex flex-col sm:flex-row w-fit mx-auto justify-center">
        <div className="flex mr-3">
          <FormGroup>
            <FormControlLabel
              className='my-2'
              checked={true}
              onChange={() => { }}
              control={<Checkbox />}
              label={<div>
                <div className='font-bold'>Price by the job - not by the hour</div>
                <div className='text-sm'>We will give you a quote before starting work,<br />ensuring you a complete peace of mind</div>
              </div>}
            />
            <FormControlLabel
              className='my-2'
              checked={true}
              onChange={() => { }}
              control={<Checkbox />}
              label={<div>
                <div className='font-bold'>Same Day Services</div>
                <div className='text-sm'>If you require our services fast, we will<br />to be there on the same day!</div>
              </div>}
            />
          </FormGroup>
        </div>
        <div className="flex ml-3">
          <FormGroup>
            <FormControlLabel
              className='my-2'
              checked={true}
              onChange={() => { }}
              control={<Checkbox />}
              label={<div>
                <div className='font-bold'>12 - Month Guarantee</div>
                <div className='text-sm'>We offer 12 - month parts and labour guarantee<br />on all our work</div>
              </div>}
            />
            <FormControlLabel
              className='my-2'
              checked={true}
              onChange={() => { }}
              control={<Checkbox />}
              label={<div>
                <div className='font-bold'>Upfront Fixed Pricing</div>
                <div className='text-sm'>We provide an upfront quote before proceeding<br />with no hidden fees!</div>
              </div>}
            />
          </FormGroup>
        </div>
      </div>
      <div className="w-full mx-auto my-2 text-end font-serif italic px-2 lg:px-10">
        <MyLink className='font-serif text-purple-500 hover:text-purple-800 before:bg-purple-500' to='/book'>Book a visit online now</MyLink>
      </div>
    </div>
  )
}