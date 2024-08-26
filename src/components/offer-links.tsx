import { Home } from "@mui/icons-material";
import { FC } from "react";
import '../assets/styles.scss';

export const OfferLinksComp: FC = () => {
  return <div>
    <div className="text-4xl font-bold mt-10 mb-8 text-center italic font-serif text-purple-950" style={{ textShadow: '0 4px 6px rgba(147, 12, 189, 0.75)' }}>We offer range of services</div>
    <div className="flex text-lg font-bold mb-6 mx-auto w-fit max-w-full px-3 text-white overflow-auto" style={{ scrollbarWidth: 'thin' }}>
      <div className="offer-link border-[#00AE93] bg-[#00AE93] hover:text-[#00AE93]">
        <div className="flex uppercase mx-auto text-center text-xl mt-4">home</div>
        <div className="offer-icon mt-4">
          <Home fontSize="inherit" />
        </div>
        <div className="offer-main">
          Read more...
        </div>
      </div>
      <div className="offer-link border-red-600 bg-red-600 hover:text-red-600">
        <div className="flex uppercase mx-auto text-center text-xl mt-4">boilers</div>
        <div className="offer-icon mt-2">
          <img src="/media/images/boiler.webp" className="w-[4.5rem] h-[4.5rem]" alt="Boilers" width={100} height={100} />
        </div>
        <div className="offer-main">
          Read more...
        </div>
      </div>
      <div className="offer-link border-orange-500 bg-orange-500 hover:text-orange-500">
        <div className="flex uppercase mx-auto text-center text-xl mt-4">central heating</div>
        <div className="offer-icon">
          <img src="/media/images/central-heating.webp" className="w-[4.5rem] h-[4.5rem]" alt="Central Heating" width={100} height={100} />
        </div>
        <div className="offer-main">
          Read more...
        </div>
      </div>
      <div className="offer-link border-neutral-500 bg-neutral-500 hover:text-neutral-500">
        <div className="flex uppercase mx-auto text-center text-xl mt-4">radiators</div>
        <div className="offer-icon mt-4">
          <img src="/media/images/radiator.webp" className="w-[4.5rem] h-[4.5rem]" alt="Radiators" width={100} height={100} />
        </div>
        <div className="offer-main">
          Read more...
        </div>
      </div>
      <div className="offer-link border-[#211e43] bg-[#211e43] hover:text-[#211e43]">
        <div className="flex uppercase mx-auto text-center text-xl mt-4">plumbing</div>
        <div className="offer-icon mt-4">
          <img src="/media/images/plumbing.webp" className="w-[4.5rem] h-[4.5rem]" alt="Plumbing" width={100} height={100} />
        </div>
        <div className="offer-main">
          Read more...
        </div>
      </div>
      <div className="offer-link border-[#7f96a3] bg-[#7f96a3] hover:text-[#7f96a3]">
        <div className="flex uppercase mx-auto text-center text-xl mt-4">gas fires</div>
        <div className="offer-icon mt-4">
          <img src="/media/images/gas-fire.webp" className="w-[4.5rem] h-[4.5rem]" alt="Gas Fires" width={100} height={100} />
        </div>
        <div className="offer-main">
          Read more...
        </div>
      </div>
    </div>
  </div>
}