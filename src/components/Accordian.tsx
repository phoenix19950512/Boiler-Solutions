import React, { useState, useRef } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { AccordianItemType } from '../models/accordian';

interface AccordionItemProps {
  id: number;
  title: React.ReactNode;
  description: React.ReactNode;
  isOpen: boolean;
  onClick: (id: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, description, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-4 flex justify-between items-center focus:outline-none"
        onClick={() => onClick(id)}
      >
        <span className="font-medium text-lg">{title}</span>
        <span className="text-xl">
          {isOpen ? <ChevronUpIcon className='w-3' /> : <ChevronDownIcon className='w-3' />}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out`}
      >
        <div className="px-4 pb-4">
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion: React.FC<{ items: AccordianItemType[] }> = ({ items }) => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="mx-auto bg-white rounded-md shadow-md overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={index}
          title={item.title}
          description={item.description}
          isOpen={openItemId === index}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Accordion;
