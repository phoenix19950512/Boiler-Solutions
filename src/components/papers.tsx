import { Box, Paper } from "@mui/material";
import { FC } from "react";

import { PaperType } from "../models/paper";

export const PapersComponent: FC<{ papers: PaperType[] }> = ({ papers }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: 'fit-content',
        margin: 'auto',
        '& > :not(style)': {
          m: 1,
          width: 275,
        },
      }}
    >
      {papers.map((paper, index) => (
        <Paper className="text-center px-6 py-2" key={`paper${index}`}>
          {paper.icon}
          <p className="text-lg font-bold my-2">{paper.title}</p>
          <p className="mb-2">{paper.description}</p>
        </Paper>
      ))}
    </Box>
  )
}