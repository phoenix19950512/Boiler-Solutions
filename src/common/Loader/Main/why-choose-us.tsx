import { FC } from "react";
import { BanknotesIcon, CheckIcon, ClockIcon, HandThumbUpIcon, TrophyIcon } from "@heroicons/react/24/solid";
import { PapersComponent } from "./papers";
import { PaperType } from "../../../models/paper";

export const WhyChooseUsComp: FC = () => {
  const papers: PaperType[] = [
    {
      title: 'No Hidden Fees',
      icon: <HandThumbUpIcon className="text-emerald-600 w-28 mx-auto mt-6 mb-3" />,
      description: 'We keep everything transparent. A competitive price is provided to you upfront before the work starts.',
    },
    {
      title: 'Fast',
      icon: <ClockIcon className="text-emerald-600 w-28 mx-auto mt-6 mb-3" />,
      description: 'Get the services you need on your schedule! We will get to you on time and in most instances. We can even offer same day appointments.'
    },
    {
      title: 'Cost Effective Solution',
      icon: <BanknotesIcon className="text-emerald-600 w-28 mx-auto mt-6 mb-3" />,
      description: 'Our services are known to be cost-effective and reliable!'
    },
    {
      title: 'After Care',
      icon: <CheckIcon className="text-emerald-600 w-28 mx-auto mt-6 mb-3" />,
      description: 'Our customer support team are available to assist you with any aftercare questions you may have. We also offer yearly maintenance.'
    },
    {
      title: 'Guarantee',
      description: '12-month guarantee on all repairs',
      icon: <TrophyIcon className="text-emerald-600 w-28 mx-auto mt-6 mb-3" />
    }
  ];
  return <div className="flex flex-col px-10">
    <div className="text-3xl text-center font-bold my-10">Why Choose us</div>
    <div className="mb-3">
      <PapersComponent papers={papers} />
    </div>
  </div>
}