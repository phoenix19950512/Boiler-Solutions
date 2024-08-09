import { FC } from "react";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <div className="flex flex-col bg-[#121212] text-gray-400 pt-5 px-5 md:pl-20 md:pr-10 pb-8">
      <div className="flex flex-col pb-10 md:flex-row">
        <div className="flex flex-col md:w-1/2">
          <div className="flex font-bold text-2xl text-white">Quick Links</div>
          <div className="flex text-sm pt-3 flex-col sm:flex-row">
            <div className="flex md:w-1/2 flex-col mr-10">
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Home</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Sitemap</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">About Us</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Areas We Service</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">24/7 Emergency Plumbing</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Strata Plumber Services</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Commercial Plumber Services</Link>
            </div>
            <div className="flex md:w-1/2 flex-col">
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Plubing Services</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Blog</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">FAQ</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-100 md:w-1/2">
          <div className="flex font-bold text-2xl text-white">Plumbing Services</div>
          <div className="flex text-sm pt-3 flex-col sm:flex-row">
            <div className="flex md:w-1/2 flex-col mr-10">
              <Link to='/' className="my-1 hover:underline text-rose-500 hover:text-rose-400">Blocked Drains</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Sitemap</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">About Us</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Areas We Service</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">24/7 Emergency Plumbing</Link>
            </div>
            <div className="flex md:w-1/2 flex-col">
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Gas fitting & Repairs</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Hot Water Services</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Toilet Repair & Installs</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Water Leak Detection</Link>
              <Link to='/' className="my-1 hover:underline hover:text-blue-400">Rainwater Tanks Services</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex text-7xl text-white">
          WILCO
        </div>
        <div className="flex mr-0 ml-5 flex-grow items-center">
          <div className="flex flex-grow">Copyright 2024</div>
          <div className="flex flex-grow font-extrabold text-yellow-500">/</div>
          <div className="flex flex-grow">Wilco Home Services</div>
          <div className="flex flex-grow font-extrabold text-yellow-500">/</div>
          <div className="flex flex-grow">ABN 72 629 328 801</div>
          <div className="flex flex-grow font-extrabold text-yellow-500">/</div>
          <div className="flex flex-grow">Lic No. 395469C</div>
        </div>
      </div>
    </div>
  )
}