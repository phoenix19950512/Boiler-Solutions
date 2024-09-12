import { FC } from 'react';
import { NoSymbolIcon } from '@heroicons/react/24/solid';
import { PaperType } from '../../models/paper';
import { LandingPage } from '../../common/Loader/Main/landingpage';
import { WeTakeProvide } from '../../common/Loader/Main/we-take-pride';
import { OfferLinksComp } from '../../common/Loader/Main/offer-links';
import { WhyChooseUsComp } from '../../common/Loader/Main/why-choose-us';
import { EnquireToday } from '../../common/Loader/Main/enquire-today';
import { HowItWorksComp } from '../../common/Loader/Main/how-it-works';
import { PapersComponent } from '../../common/Loader/Main/papers';
import { ImageSlider } from '../../common/Image Slider';

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
      <LandingPage title={<>Tap Repair &amp;<br />Replacements</>} subtitle={['Whatever the problem with your Plumbing, Gas, or Boiler', 'We can help']} />
      <WeTakeProvide />
      <div className="flex w-full min-h-60">
        <ImageSlider />
      </div>
      <div className="flex flex-col px-10 md:px-20">
        <div className='text-4xl font-bold text-center text-green-950 font-serif italic mt-10 mb-4 leading-loose' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          Got a Faulty Tap?<br />
          No problem, AF Boiler Solutions cover it all.
        </div>
        <div className="flex flex-col text-lg font-bold italic font-serif mb-3 text-center">
          &quot;Your Tap Repairs & Replacement Services<br />
          Solution to Perfect Plumbing!&quot;
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
      </div>
      <div className="flex text-base indent-4 flex-col py-5 px-10 leading-8 lg:px-20">
        <p className="text-2xl font-bold my-3 text-center font-serif underline">
          AF Boiler Solutions: Professional Plumbing Services
        </p>
        <p>
          Are you in need of reliable and top-notch plumbing solutions?
        </p>
        <p>
          Look no further!
          AF Boiler Solutions is your go-to destination for all your plumbing needs.
          With years of experience and a team of skilled professionals, we take pride in offering the highest quality plumbing services available.
        </p>
        <p>
          Whether it's a leaky tap, a broken toilet, or a complete plumbing overhaul, our experts have the expertise and knowledge to handle it all.
          We understand that plumbing issues can be a source of stress and inconvenience, which is why we are dedicated to providing fast and efficient service.
        </p>
        <p>
          We can supply and fit all different types of taps including: Kitchen, Basin taps, Bath, Shower mixers, Outdoor taps, or we are happy to fit your own.
        </p>
      </div>
      <HowItWorksComp />
      <OfferLinksComp />
      <WhyChooseUsComp />
      <div className="flex flex-col px-10 lg:px-20">
        <div className="text-2xl text-center font-bold my-5 text-cyan-700">
          Common Tap Problems we Fix
        </div>
        <div className="flex mb-10 justify-center">
          <div className="flex flex-col mr-20">
            <div className='text-nowrap my-0.5'><NoSymbolIcon color='error' /> Dripping tap</div>
            <div className='text-nowrap my-0.5'><NoSymbolIcon color='error' /> Leaking tap</div>
            <div className='text-nowrap my-0.5'><NoSymbolIcon color='error' /> Stiff tap</div>
            <div className='text-nowrap my-0.5'><NoSymbolIcon color='error' /> Loose/Wobbly tap</div>
            <div className='text-nowrap my-0.5'><NoSymbolIcon color='error' /> Broken tap</div>
          </div>
          <div className="flex flex-col">
            <div className='text-nowrap my-0.5'><NoSymbolIcon color='error' /> Rusted tap</div>
            <div className='text-nowrap my-0.5'><NoSymbolIcon color='error' /> Tap won&apos;t turn off</div>
            <div className='text-nowrap my-0.5'><NoSymbolIcon color='error' /> Tap won&apos;t turn on</div>
            <div className='text-nowrap my-0.5'><NoSymbolIcon color='error' /> Tap continuously running</div>
            <div className='text-nowrap my-0.5'><NoSymbolIcon color='error' /> Noisy/Loud tap</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-10 py-8 select-none lg:px-20">
        <div className="text-2xl font-bold mb-5 text-cyan-800 text-center">
          Types of taps we install:
        </div>
        <PapersComponent papers={papers} />
      </div>
      <EnquireToday />
    </>
  )
}