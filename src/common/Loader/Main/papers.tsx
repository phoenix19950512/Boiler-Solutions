import { FC } from "react";
import { PaperType } from "../../../models/paper";
import Card from "../../../components/Card";

export const PapersComponent: FC<{ papers: PaperType[] }> = ({ papers }) => {
  return (
    <div
      className="flex flex-wrap justify-center mx-auto"
      style={{ width: 'fit-content' }}
    >
      {papers.map((paper, index) => (
        <Card key={`paper${index}`} icon={paper.icon} title={paper.title} description={paper.description} />
        // <div
        //   
        //   className="text-center px-6 py-2 cursor-pointer hover:scale-105 transition-transform duration-300 m-2 w-72 shadow-lg bg-white rounded-2xl"
        // >
        //   {paper.icon}
        //   <p className="text-lg font-bold my-2">{paper.title}</p>
        //   <p className="mb-2">{paper.description}</p>
        // </div>
      ))}
    </div>
  );
};
