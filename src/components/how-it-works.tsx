import { FC } from "react";
import { PaperType } from "../models/paper";
import { Build, QuestionAnswer, Schedule } from "@mui/icons-material";
import { PapersComponent } from "./papers";

export const HowItWorksComp: FC = () => {
  const papers: PaperType[] = [
    {
      title: 'STEP 1:',
      icon: <QuestionAnswer className="text-cyan-600" sx={{ fontSize: 120 }} />,
      description: 'Answer a few questions regarding your boiler',
    },
    {
      title: 'STEP 2:',
      icon: <Schedule className="text-cyan-600" sx={{ fontSize: 120 }} />,
      description: 'Schedule your repair visit'
    },
    {
      title: 'STEP 3:',
      icon: <Build className="text-cyan-600" sx={{ fontSize: 120 }} />,
      description: 'An engineer will visit to diagnose and repair the isuue'
    }
  ];
  return <div className="flex flex-col px-10">
    <div className="text-3xl font-bold mt-10 mb-3 text-center italic font-serif">How it works</div>
    <div className="ml-2">
      <p className="mb-3 w-fit mx-auto">
        We are fully qualified and Gas Safe Registered with an Excellent First-Time Fix Rate, so you can rely on us to get your boiler issues resolved in no time.
      </p>
      <div className="mb-5">
        <PapersComponent papers={papers} />
      </div>
    </div>
  </div>
}