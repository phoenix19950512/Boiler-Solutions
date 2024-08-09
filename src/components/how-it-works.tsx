import { FC } from "react";
import { PaperType } from "../models/paper";
import { Build, QuestionAnswer, Schedule } from "@mui/icons-material";
import { PapersComponent } from "./papers";

export const HowItWorksComp: FC = () => {
  const papers: PaperType[] = [
    {
      title: 'STEP 1:',
      icon: <QuestionAnswer sx={{ fontSize: 120 }} />,
      description: 'Answer a few questions regarding your boiler',
    },
    {
      title: 'STEP 2:',
      icon: <Schedule sx={{ fontSize: 120 }} />,
      description: 'Schedule your repair visit'
    },
    {
      title: 'STEP 3:',
      icon: <Build sx={{ fontSize: 120 }} />,
      description: 'An engineer will visit to diagnose and repair the isuue'
    }
  ];
  return <>
    <div className="text-2xl font-bold mt-10 mb-3">How it works</div>
    <div className="ml-2">
      <p className="mb-3">
        We are fully qualified and Gas Safe Registered with an Excellent First-Time Fix Rate, so you can rely on us to get your boiler issues resolved in no time.
      </p>
      <div className="mb-3">
        <PapersComponent papers={papers} />
      </div>
    </div>
  </>
}