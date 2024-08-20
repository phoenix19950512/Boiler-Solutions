import { FC } from "react";
import { Link } from "react-router-dom";

export const EnquireToday: FC = () => {
  return <div className="flex flex-col px-10 bg-gray-100">
    <div className="text-3xl font-bold mt-10 mb-8 text-center">Enquire today</div>
    <div className="flex mb-6">
      <div className="flex w-40">
        <img className='m-auto' src="/media/images/gas-safe-registered-logo.webp" alt="Logo" style={{ height: '100px', maxWidth: 'none' }} />
      </div>
      <div className="flex flex-col text-lg">
        <p className="mb-3">
          For a no obligation quote please call us today on <Link className='text-blue-600 hover:underline' to='tel:+441316699993'>0131 669 9993</Link> or complete the form below.
        </p>
        <b>We repair and service every make and model of boiler including </b>
        Alpha - Ariston - Biasi - Baxi - Chaffoteaux - Forroli - Gledhill - Glowworm - Halstead - Heatline - Main - Ideal - Potterton - Ravenheat - Range - Remeha - Sime - Vaillant - Vokera - Viessmann - Worcester ... and many more.
      </div>
    </div>
  </div>
}