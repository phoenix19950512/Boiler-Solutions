import { FC } from "react";
import { MyLink } from "./link";
import CheckboxTwo from "../../../components/CheckboxTwo";

export const WeTakeProvide: FC = () => {

  return (
    <div className="flex flex-col relative">
      <div className='w-full text-4xl font-bold mb-10 mt-14 text-purple-800 text-center italic font-serif' style={{ textShadow: 'rgba(107, 33, 68, 0.7) 1px 2.5px 6px' }}>
        We Take Pride In Our Workmanship
      </div>
      <div className="flex flex-col sm:flex-row w-fit mx-auto justify-center">
        <div className="flex mr-3 flex-col">
          <CheckboxTwo className="mb-6">
            <div>
              <div className='font-bold'>Price by the job - not by the hour</div>
              <div className='text-sm'>We will give you a quote before starting work,<br />ensuring you a complete peace of mind</div>
            </div>
          </CheckboxTwo>
          <CheckboxTwo>
            <div>
              <div className='font-bold'>Same Day Services</div>
              <div className='text-sm'>If you require our services fast, we will<br />to be there on the same day!</div>
            </div>
          </CheckboxTwo>
        </div>
        <div className="flex ml-3 flex-col">
          <CheckboxTwo className="mb-6">
            <div>
              <div className='font-bold'>12 - Month Guarantee</div>
              <div className='text-sm'>We offer 12 - month parts and labour guarantee<br />on all our work</div>
            </div>
          </CheckboxTwo>
          <CheckboxTwo>
            <div>
              <div className='font-bold'>Upfront Fixed Pricing</div>
              <div className='text-sm'>We provide an upfront quote before proceeding<br />with no hidden fees!</div>
            </div>
          </CheckboxTwo>
        </div>
      </div>
      <div className="w-full mx-auto my-2 text-end font-serif italic px-2 lg:px-10">
        <MyLink className='font-serif text-meta-7 hover:text-meta-1 before:bg-meta-7' to='/book'>Book a visit online now</MyLink>
      </div>
    </div>
  )
}