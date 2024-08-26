import { FC, ReactNode, useState } from "react";
import { Header } from "./header";
import './../App.css';
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import { Footer } from "./footer";

const darkTheme = createTheme({ palette: { mode: 'light' } });

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
        <div ref-name='body' onScroll={checkIsTop} className="flex flex-grow flex-col w-100 p-0 text-start overflow-auto scroll-smooth from-cyan-200 via-cyan-200 to-white bg-gradient-to-b" style={{ scrollbarWidth: 'thin' }}>
          <div className="flex flex-col flex-grow justify-center">{children}</div>
          <Footer />
        </div>
        <div className={`bottom-3 right-6 ${isTop ? 'hidden' : 'fixed'}`}>
          <Button onClick={move2Top} variant="contained" sx={{ borderRadius: '100%', padding: '6px', minWidth: 'auto' }}><ArrowUpward /></Button>
        </div>
      </div>
    </ThemeProvider>
  )
}