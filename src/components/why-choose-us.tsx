import { FC } from "react";
import { PaperType } from "../models/paper";
import { AttachMoney, Check, Schedule, ThumbUp, WorkspacePremium } from "@mui/icons-material";
import { PapersComponent } from "./papers";

export const WhyChooseUsComp: FC = () => {
  const papers: PaperType[] = [
    {
      title: 'No Hidden Fees',
      icon: <ThumbUp sx={{ fontSize: 120 }} />,
      description: 'We keep everything transparent. A competitive price is provided to you upfront before the work starts.',
    },
    {
      title: 'Fast',
      icon: <Schedule sx={{ fontSize: 120 }} />,
      description: 'Get the services you need on your schedule! We will get to you on time and in most instances. We can even offer same day appointments.'
    },
    {
      title: 'Cost Effective Solution',
      icon: <AttachMoney sx={{ fontSize: 120 }} />,
      description: 'Our services are known to be cost-effective and reliable!'
    },
    {
      title: 'After Care',
      icon: <Check sx={{ fontSize: 120 }} />,
      description: 'Our customer support team are available to assist you with any aftercare questions you may have. We also offer yearly maintenance.'
    },
    {
      title: 'Guarantee',
      description: '12-month guarantee on all repairs',
      icon: <WorkspacePremium sx={{ fontSize: 120 }} />
    }
  ];
  return <>
    <div className="text-3xl text-center font-bold my-10">Why Choose us</div>
    <div className="mb-3">
      <PapersComponent papers={papers} />
    </div>
  </>
}