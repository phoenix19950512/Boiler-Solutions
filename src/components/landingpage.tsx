import { ArrowForward } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { FC, ReactNode, useEffect, useState } from "react";
import { ImageSlider } from "./image-slider";

export const LandingPage: FC<{ title: ReactNode; subtitle: ReactNode[] }> = ({ title, subtitle }) => {
  const [postcode, setPostcode] = useState<string>('');
  const [locationNum, setLocationNum] = useState<[string, string]>();

  const validPostcodes = {
    A: {
      A: ['CV13', 'LE1', 'LE10', 'LE11', 'LE12', 'LE14', 'LE16', 'LE17', 'LE18', 'LE19', 'LE2', 'LE21', 'LE3', 'LE4', 'LE41', 'LE5', 'LE55', 'LE6', 'LE67', 'LE7', 'LE8', 'LE87', 'LE9', 'LE95'],
      B: ['CV10', 'CV11', 'CV12', 'CV23', 'CV7', 'CV9', 'DE12', 'LE13', 'LE15', 'LE65', 'LE94', 'NG12', 'NN6'],
      C: ['CV2', 'CV21', 'CV22', 'CV3', 'CV5', 'CV6', 'DE7', 'DE72', 'DE73', 'DE74', 'NG11', 'NN14'],
      D: ['B46', 'B76', 'B77', 'B78', 'B79', 'CV1', 'CV32', 'CV33', 'CV4', 'CV47', 'CV8', 'DE1', 'DE11', 'DE13', 'DE14', 'DE15', 'DE2', 'DE21', 'DE22', 'DE23', 'DE24', 'DE3', 'DE6', 'DE65', 'DE99',
        'LE95', 'NG1', 'NG10', 'NG11', 'NG12', 'NG13', 'NG14', 'NG2', 'NG20', 'NG3', 'NG32', 'NG33', 'NG4', 'NG5', 'NG7', 'NG8', 'NG80', 'NG9', 'NG90', 'NN11', 'NN14', 'NN15', 'NN16', 'NN17', 'NN18', 'NN2', 'NN3', 'NN6', 'NN7', 'PE8', 'PE9', 'WS13'],
      E: ['B23', 'B24', 'B25', 'B26', 'B33', 'B34', 'B35', 'B36', 'B37', 'B4', 'B40', 'B42', 'B6', 'B72', 'B73', 'B74', 'B75', 'B8', 'B9', 'B91', 'B92', 'B93', 'B94', 'CV31', 'CV34', 'CV35', 'DE5', 'DE56', 'DE75', 'NG1', 'NG10',
        'NG13', 'NG14', 'NG15', 'NG16', 'NG17', 'NG2', 'NG20', 'NG23', 'NG25', 'NG3', 'NG31', 'NG32', 'NG33', 'NG4', 'NG5', 'NG6', 'NG7', 'NG8', 'NG80', 'NG9', 'NG90', 'NN1', 'NN11', 'NN15', 'NN16', 'NN17', 'NN18', 'NN2',
        'NN29', 'NN3', 'NN4', 'NN5', 'NN7', 'NN8', 'NN9', 'NN99', 'PE10', 'PE8', 'PE9', 'WS13', 'WS14', 'WS7'],
    },
    B: {
      A: ['BD1', 'BD11', 'BD12', 'BD19', 'BD4', 'HD5', 'HD6', 'LS1', 'LS10', 'LS11', 'LS12', 'LS25', 'LS27', 'LS28', 'LS88', 'LS98', 'WF1', 'WF12', 'WF13', 'WF14', 'WF15', 'WF16', 'WF17', 'WF2', 'WF3', 'WF4', 'WF5'],
      B: ['BD10', 'BD13', 'BD14', 'BD15', 'BD16', 'BD17', 'BD18', 'BD2', 'BD3', 'BD5', 'BD6', 'BD7', 'BD8', 'BD9', 'BD97', 'BD98', 'BD99', 'HD1', 'HD2', 'HD3', 'HD4', 'HD7', 'HD8', 'HD9', 'HX1', 'HX2', 'HX3', 'HX4',
        'HX5', 'HX6', 'LS13', 'LS14', 'LS15', 'LS16', 'LS17', 'LS18', 'LS19', 'LS2', 'LS26', 'LS3', 'LS4', 'LS5', 'LS6', 'LS7', 'LS8', 'LS9', 'LS99', 'S75', 'WF10', 'WF6', 'WF7', 'WF90'],
      C: ['BD20', 'BD21', 'BD22', 'HD5', 'HD6', 'HG3', 'HX7', 'LS20', 'LS21', 'LS22', 'LS23', 'LS24', 'S30', 'S35', 'S36', 'S70', 'S71', 'S72', 'S73', 'WF11', 'WF8', 'WF9', 'WF90'],
      D: ['BD19', 'BD23', 'DN14', 'DN5', 'DN6', 'HG1', 'HG2', 'HG5', 'LS29', 'OL14', 'OL15', 'OL16', 'OL3', 'S1', 'S6', 'S61', 'S62', 'S63', 'S64', 'S74', 'S75', 'S95', 'S97', 'SK13', 'SK14', 'YO23', 'YO5', 'YO8']
    }
  }

  useEffect(() => {
    if (validPostcodes.A.A.findIndex(code => code === postcode) >= 0) {
      setLocationNum(['A', 'A']);
    } else if (validPostcodes.A.B.findIndex(code => code === postcode) >= 0) {
      setLocationNum(['A', 'B']);
    } else if (validPostcodes.A.C.findIndex(code => code === postcode) >= 0) {
      setLocationNum(['A', 'C']);
    } else if (validPostcodes.A.D.findIndex(code => code === postcode) >= 0) {
      setLocationNum(['A', 'D']);
    } else if (validPostcodes.A.E.findIndex(code => code === postcode) >= 0) {
      setLocationNum(['A', 'E']);
    } else if (validPostcodes.B.A.findIndex(code => code === postcode) >= 0) {
      setLocationNum(['B', 'A']);
    } else if (validPostcodes.B.B.findIndex(code => code === postcode) >= 0) {
      setLocationNum(['B', 'B']);
    } else if (validPostcodes.B.C.findIndex(code => code === postcode) >= 0) {
      setLocationNum(['B', 'C']);
    } else if (validPostcodes.B.D.findIndex(code => code === postcode) >= 0) {
      setLocationNum(['B', 'D']);
    } else {
      setLocationNum(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postcode]);

  return (
    <div className="flex flex-col md:flex-row md:px-0">
      <div className="flex md:w-1/2 mx-10 md:px-0 pt-10 flex-col">
        <div className='text-4xl font-bold text-center text-green-950 font-serif italic mt-10 mb-4' style={{ textShadow: '0 3px 6px rgba(74, 222, 128, 0.75)' }}>
          {title}
        </div>
        <div className="flex flex-col justify-end mx-auto pt-5 pb-10 px-5 max-w-xl">
          <div className="mb-2 font-bold text-lg text-rose-600">{subtitle[0]}</div>
          <div className="mb-8 font-bold text-lg text-rose-600">{subtitle[1]}</div>
          <div className="mb-5 font-bold text-lg underline">Get instant price and book a visit online now</div>
          <div className="w-full relative">
            <TextField label="Enter your postcode to begin" type="text" variant="outlined" className="w-full" value={postcode} onChange={e => setPostcode(e.target.value.toUpperCase())} />
            <IconButton className="top-1 right-1 bottom-1" disabled={!locationNum} href={`/book/${postcode ?? ''}`} sx={{
              backgroundColor: '#9333ea',
              transition: '.3s',
              borderRadius: '6px',
              position: 'absolute',
              paddingLeft: '12px',
              paddingRight: '12px',
              color: 'white',
              '&:hover': {
                backgroundColor: '#a855f7'
              }
            }}>
              <ArrowForward color="inherit" />
            </IconButton>
          </div>
          {!!postcode && !!locationNum && <div className="w-full text-base font-bold text-green-600">Good news! We cover your area!</div>}
          {!!postcode && !locationNum && <div className="w-full text-base text-red-600 font-bold">Sorry! Currently we don&apos;t cover your area!</div>}
        </div>
      </div>
      <div className="flex w-full md:w-1/2 min-h-60">
        <ImageSlider />
      </div>
    </div>
  )
}