import { FC } from "react";

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { FreeAskQuestionType } from "../../../models/free-ask-question";

export const FreeAskQuestions: FC<{ questions: FreeAskQuestionType[] }> = ({ questions }) => {
  return (
    <div className="shadow-lg">
      {questions.map((question, index) => (
        <Disclosure as="div" className="p-6 border-meta-9 border-t border-b first:border-t-0 last:border-b-0 dark:border-graydark" defaultOpen={true} key={`question${index}`}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-lg/6 font-bold">
              {question.title}
            </span>
            <ChevronDownIcon className="w-4 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5">
            {question.description}
          </DisclosurePanel>
        </Disclosure>
      ))}
    </div>
  )
}