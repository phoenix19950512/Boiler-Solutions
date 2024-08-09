import { FC } from "react";
import { Link } from "react-router-dom";

export const OfferLinksComp: FC = () => {
  return <>
    <div className="text-4xl font-bold mt-10 mb-8 text-center">We offer range of services:</div>
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
  </>
}