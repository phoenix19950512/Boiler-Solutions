import { FC } from 'react';
import { WhyChooseUsComp } from '../../components/why-choose-us';
import { HowItWorksComp } from '../../components/how-it-works';
import { OfferLinksComp } from '../../components/offer-links';
import { EnquireToday } from '../../components/enquire-today';
import { DoDisturb } from '@mui/icons-material';
import { PapersComponent } from '../../components/papers';
import { PaperType } from '../../models/paper';

export const PlumbingRepairReplace: FC = () => {
  const papers: PaperType[] = [
    {
      title: 'Kitchen Mixer',
      icon: <img src="/media/images/kitchen-mixer.png" alt="Kitchen Mixer" className='w-52 h-52 m-auto' width={200} height={200} />,
      description: null
    },
    {
      title: 'Bath Mixer Tap',
      icon: <img src="/media/images/bath-mixer-tap.png" alt="Bath Mixer Tap" className='w-52 h-52 m-auto' width={200} height={200} />,
      description: null
    },
    {
      title: 'Basin Mixer Tap',
      icon: <img src="/media/images/basin-mixer-tap.png" alt="Basin Mixer Tap" className='w-52 h-52 m-auto' width={200} height={200} />,
      description: null
    },
    {
      title: 'Internal Brass',
      icon: <img src="/media/images/internal-brass.png" alt="Internal Brass" className='w-52 h-52 m-auto' width={200} height={200} />,
      description: null
    },
    {
      title: 'Internal MDPE',
      icon: <img src="/media/images/internal-MDPE.png" alt="Internal MDPE" className='w-52 h-52 m-auto' width={200} height={200} />,
      description: null
    },
    {
      title: 'Outdoor Cold Taps',
      icon: <img src="/media/images/outdoor-cold-taps.png" alt="Outdoor Cold Taps" className='w-52 h-52 m-auto' width={200} height={200} />,
      description: null
    },
    {
      title: 'Outdoor Hot Taps',
      icon: <img src="/media/images/outdoor-hot-taps.png" alt="Outdoor Hot Taps" className='w-52 h-52 m-auto' width={200} height={200} />,
      description: null
    },
    {
      title: 'Instant Boiling Water Taps',
      icon: <img src="/media/images/instant-boiling-water-taps.png" alt="Instant Boiling Water Taps" className='w-52 h-52 m-auto' width={200} height={200} />,
      description: null
    },
    {
      title: 'Single Tpas',
      icon: <img src="/media/images/single-taps.png" alt="Single Tpas" className='w-52 h-52 m-auto' width={200} height={200} />,
      description: null
    }
  ];
  return (
    <>
      <div className='w-full text-4xl my-10 text-center font-bold leading-loose'>
        Got a Faulty Tap?<br />
        No problem, AF Boiler Solutions cover it all.
      </div>
      <div className="flex text-xl font-bold mb-3 items-center">
        <div className="flex flex-1 flex-col text-end -ml-64 pr-6">Your</div>
        <div className="flex flex-1 flex-col">
          <p>Tap Repairs & Replacement Services</p>
          <p>Solution to Perfect Plumbing!</p>
        </div>
      </div>
      <p className="text-lg mb-3">
        Are you tired of dealing with faulty taps:-
      </p>
      <ul className="mb-3 list-disc ml-8">
        <li>Dripping</li>
        <li>Noisey</li>
        <li>Stiff</li>
        <li>Low water pressure problems</li>
      </ul>
      <p className="text-base mb-3">
        Look no further <u>AF</u> Boiler Solutions are here to provide top-notch tap repairs, replacements services that will keep your water flowing smoothly and your taps in pristine condition.
      </p>
      <p className="text-base mb-3">
        Our experts have the skills and knowledge to handle it all.
      </p>
      <p className="text-2xl font-bold my-3 text-center">
        AF Boiler Solutions: Professional Plumbing Services
      </p>
      <p className="text-base mb-3 leading-8">
        Are you in need of reliable and top-notch plumbing solutions?<br />
        Look no further!
        AF Boiler Solutions is your go-to destination for all your plumbing needs.
        With years of experience and a team of skilled professionals, we take pride in offering the highest quality plumbing services available.<br />
        Whether it's a leaky tap, a broken toilet, or a complete plumbing overhaul, our experts have the expertise and knowledge to handle it all.
        We understand that plumbing issues can be a source of stress and inconvenience, which is why we are dedicated to providing fast and efficient service.<br />
        We can supply and fit all different types of taps including: Kitchen, Basin taps, Bath, Shower mixers, Outdoor taps, or we are happy to fit your own.
      </p>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <div className="text-lg font-bold my-5 text-cyan-500">
        Common Tap Problems we Fix
      </div>
      <div className="flex mb-10">
        <div className="flex flex-col mr-20">
          <div className='text-nowrap my-0.5'><DoDisturb color='error' /> Dripping tap</div>
          <div className='text-nowrap my-0.5'><DoDisturb color='error' /> Leaking tap</div>
          <div className='text-nowrap my-0.5'><DoDisturb color='error' /> Stiff tap</div>
          <div className='text-nowrap my-0.5'><DoDisturb color='error' /> Loose/wobbly tap</div>
          <div className='text-nowrap my-0.5'><DoDisturb color='error' /> Broken tap</div>
        </div>
        <div className="flex flex-col">
          <div className='text-nowrap my-0.5'><DoDisturb color='error' /> Rusted tap</div>
          <div className='text-nowrap my-0.5'><DoDisturb color='error' /> Tap won&apos;t turn off</div>
          <div className='text-nowrap my-0.5'><DoDisturb color='error' /> Tap won&apos;t turn on</div>
          <div className='text-nowrap my-0.5'><DoDisturb color='error' /> Tap continuously running</div>
          <div className='text-nowrap my-0.5'><DoDisturb color='error' /> Noisy/Loud tap</div>
        </div>
      </div>
      <div className="text-2xl font-bold mb-5 text-cyan-500 text-center">
        Types of taps we install:
      </div>
      <PapersComponent papers={papers} />
      <EnquireToday />
    </>
  )
}