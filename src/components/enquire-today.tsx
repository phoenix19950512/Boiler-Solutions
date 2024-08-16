import { FC } from "react";
import { Link } from "react-router-dom";

export const EnquireToday: FC = () => {
  return <>
    <div className="text-lg font-bold mt-10 mb-3">Enquire today</div>
    <div className="flex mb-3">
      <div className="flex w-40">
        <img className='m-auto' src="/media/images/gas-safe-registered-logo.png" alt="Logo" style={{ height: '100px', maxWidth: 'none' }} />
      </div>
      <div className="flex flex-col">
        <p className="mb-3">
          For a no obligation quote please call us today on <Link className='text-blue-400 hover:underline' to='tel:+441316699993'>0131 669 9993</Link> or complete the form below.
        </p>
        <b>We repair and service every make and model of boiler including </b>
        Alpha - Ariston - Biasi - Baxi - Chaffoteaux - Forroli - Gledhill - Glowworm - Halstead - Heatline - Main - Ideal - Potterton - Ravenheat - Range - Remeha - Sime - Vaillant - Vokera - Viessmann - Worcester ... and many more.
      </div>
    </div>
  </>
}