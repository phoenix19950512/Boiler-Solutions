import { FC } from "react";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <div className="flex flex-col bg-[#121212] pt-5 px-5 md:pl-20 md:pr-10 pb-3">
      <div className="flex flex-col pb-2 md:flex-row w-fit sm:w-full mx-auto">
        <div className="flex flex-col md:w-1/2">
          <div className="flex font-bold text-2xl text-white">Quick Links</div>
          <div className="flex text-sm pt-3 flex-col sm:flex-row">
            <div className="flex md:w-1/2 flex-col mr-10">
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Home</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Sitemap</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">About Us</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Areas We Service</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">24/7 Emergency Plumbing</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Strata Plumber Services</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Commercial Plumber Services</Link>
            </div>
            <div className="flex md:w-1/2 flex-col">
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Plubing Services</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Blog</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">FAQ</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-100 md:w-1/2">
          <div className="flex font-bold text-2xl text-white">Plumbing Services</div>
          <div className="flex text-sm pt-3 flex-col sm:flex-row">
            <div className="flex md:w-1/2 flex-col mr-10">
              <Link to='/' className="my-1 hover:underline text-meta-7 hover:text-meta-1">Blocked Drains</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Sitemap</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">About Us</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Areas We Service</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">24/7 Emergency Plumbing</Link>
            </div>
            <div className="flex md:w-1/2 flex-col">
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Gas fitting & Repairs</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Hot Water Services</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Toilet Repair & Installs</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Water Leak Detection</Link>
              <Link to='/' className="my-1 hover:underline hover:text-meta-5">Rainwater Tanks Services</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex justify-center">
          <Link to={'/'}>
            <img src="/media/images/logo.png" alt="LOGO" className="h-24" style={{ filter: 'invert(1)' }} />
          </Link>
        </div>
        <div className="flex mr-0 sm:ml-10 flex-grow items-center">
          <div className="flex flex-grow">Copyright 2024</div>
          <div className="flex flex-grow mx-2 font-extrabold text-yellow-500">/</div>
          <div className="flex flex-grow">Wilco Home Services</div>
          <div className="flex flex-grow mx-2 font-extrabold text-yellow-500">/</div>
          <div className="flex flex-grow">ABN 72 629 328 801</div>
          <div className="flex flex-grow mx-2 font-extrabold text-yellow-500">/</div>
          <div className="flex flex-grow">Lic No. 395469C</div>
        </div>
      </div>
    </div>
  )
}