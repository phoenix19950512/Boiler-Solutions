import { FC } from "react";

import { FreeAskQuestionType } from "../models/free-ask-question";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { HiChevronDown } from "react-icons/hi";

export const FreeAskQuestions: FC<{ questions: FreeAskQuestionType[] }> = ({ questions }) => {
  return (
    <>
      {questions.map((question, index) => (
        <Accordion key={`question${index}`}>
          <AccordionSummary
            expandIcon={<HiChevronDown className="text-white" />}
            aria-controls="panel1-content"
            className="font-bold"
            id="panel1-header"
          >
            {question.title}
          </AccordionSummary>
          <AccordionDetails>
            {question.description}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  )
}