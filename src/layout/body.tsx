import { FC, ReactNode, useState } from "react";
import { Header } from "./header";
import './../App.css';
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export const BodyComponent: FC<{ children: ReactNode }> = ({ children }) => {
  const [isTop, setIsTop] = useState<boolean>(true);
  const bodyRef = document.querySelector('[ref-name="body"]') as HTMLDivElement;
  
  const checkIsTop = () => {
    if (bodyRef && bodyRef.scrollTop) setIsTop(false);
    else setIsTop(true);
  }
  const move2Top = () => {
    if (bodyRef) bodyRef.scrollTop = 0;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Header />
        <div ref-name='body' onScroll={checkIsTop} className="flex flex-grow flex-col w-100 bg-black text-white pl-20 px-10 py-8 text-start overflow-auto scroll-smooth" style={{ scrollbarWidth: 'thin' }}>
          <div className="flex flex-col">{children}</div>
          <div></div>
        </div>
        <div className={`bottom-3 right-6 ${isTop ? 'hidden' : 'fixed'}`}>
          <Button onClick={move2Top} variant="contained" sx={{ borderRadius: '100%', padding: '6px', minWidth: 'auto' }}><ArrowUpward /></Button>
        </div>
      </div>
    </ThemeProvider>
  )
}