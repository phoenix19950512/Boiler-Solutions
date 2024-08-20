import { FC, useEffect, useState } from "react";
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { CalendarComponent } from "../components/calendar";

export const BookPage: FC = () => {
  const [postcode, setPostcode] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isEndPage, setIsEndPage] = useState<boolean>(false);
  const [isValidPostcode, setIsValidPostcode] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [firstOption, setFirstOption] = useState<string>('gas-boiler');
  const [plumbingOption, setPlumbingOption] = useState<string>('sink-tap-replace');
  const [mainsWaterStopcock, setMainsWaterStopcock] = useState<string>('replace');
  const [bookedTime, setBookedTime] = useState<{ date: Date, time: number }>();

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
      setIsValidPostcode(true);
    } else if (validPostcodes.A.B.findIndex(code => code === postcode) >= 0) {
      setIsValidPostcode(true);
    } else if (validPostcodes.A.C.findIndex(code => code === postcode) >= 0) {
      setIsValidPostcode(true);
    } else if (validPostcodes.A.D.findIndex(code => code === postcode) >= 0) {
      setIsValidPostcode(true);
    } else if (validPostcodes.A.E.findIndex(code => code === postcode) >= 0) {
      setIsValidPostcode(true);
    } else if (validPostcodes.B.A.findIndex(code => code === postcode) >= 0) {
      setIsValidPostcode(true);
    } else if (validPostcodes.B.B.findIndex(code => code === postcode) >= 0) {
      setIsValidPostcode(true);
    } else if (validPostcodes.B.C.findIndex(code => code === postcode) >= 0) {
      setIsValidPostcode(true);
    } else if (validPostcodes.B.D.findIndex(code => code === postcode) >= 0) {
      setIsValidPostcode(true);
    } else {
      setIsValidPostcode(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postcode]);

  return (
    <>
      <div className="text-xl mx-auto my-5 min-w-[480px] shadow-lg px-5 py-3 bg-cyan-50 rounded-lg max-w-full justify-center">
        {currentPage === 1 && <>
          <TextField label="Please enter your postcode to see if we cover your area." type="text" variant="standard" value={postcode} onChange={e => setPostcode(e.target.value.toUpperCase())} className="w-full" />
          {!!postcode && isValidPostcode && <div className="w-full text-base text-green-600">Good news! We cover your area!</div>}
          {!!postcode && !isValidPostcode && <div className="w-full text-base text-red-600 font-bold">Sorry! Currently we don&apos;t cover your area!</div>}
        </>}
        {currentPage === 2 && <>
          <FormControl>
            <FormLabel>Please select your option.</FormLabel>
            <RadioGroup
              value={firstOption}
              onChange={e => setFirstOption(e.target.value)}
            >
              <FormControlLabel value="gas-boiler" control={<Radio />} label="Gas Boiler" />
              <FormControlLabel value="central-heating" control={<Radio />} label="Central Heating" />
              <FormControlLabel value="plumbing" control={<Radio />} label="Plumbing" />
              <FormControlLabel value="gas-fires" control={<Radio />} label="Gas Fires" />
              <FormControlLabel value="cookers-oven" control={<Radio />} label="Gas Cookers & Oven" />
              <FormControlLabel value="landlords" control={<Radio />} label="Landlords Gas Certificates" />
              <FormControlLabel value="power-flush" control={<Radio />} label="Power Flush" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </>}
        {currentPage === 3 && firstOption === 'plumbing' && <>
          <FormControl>
            <FormLabel>Please select your option.</FormLabel>
            <RadioGroup
              value={plumbingOption}
              onChange={e => setPlumbingOption(e.target.value)}
            >
              <FormControlLabel value="sink-tap-replace" control={<Radio />} label="Kitchen Sink tap Replacement" />
              <FormControlLabel value="basin-tap-replace" control={<Radio />} label="Basin Tap Replacement" />
              <FormControlLabel value="bath-tap-replace" control={<Radio />} label="Bath tap needs replacement bath panel must to be removable" />
              <FormControlLabel value="sink-tap-repair" control={<Radio />} label="Sink tap,Basin tap or Bath dripping tap needs a repair" />
              <FormControlLabel value="shower-install" control={<Radio />} label="Shower, Washing Machine, etc. Needs installing" />
              <FormControlLabel value="burst-pipe" control={<Radio />} label="Burst Pipe repair" />
              <FormControlLabel value="mains-water-stopcock" control={<Radio />} label="Mains water Stopcock" />
              <FormControlLabel value="toilet-problem" control={<Radio />} label="I have a problem with my toilet" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </>}
        {currentPage === 4 && plumbingOption === 'mains-water-stopcock' && <>
          <div className="flex w-full">
            <div className="flex">
              <FormControl>
                <FormLabel>Please select your option.</FormLabel>
                <RadioGroup
                  value={mainsWaterStopcock}
                  onChange={e => setMainsWaterStopcock(e.target.value)}
                >
                  <FormControlLabel value="replace" control={<Radio />} label="Stopcock needs to be replaced" />
                  <FormControlLabel value="repair" control={<Radio />} label="Stopcock needs to be repaired" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="flex">
              <img src="/media/images/mains-water-stopcock.png" alt="Mains Stop Cock" width={130} height={200} />
              <div className="ml-4 flex flex-col text-base max-w-80">
                <div>The most important valve in your home is the Mains Water Stopcock!</div>
                <div>This stopcock is always under high pressure and is the main water stop tap inside your home.</div>
              </div>
            </div>
          </div>
        </>}
        {currentPage === 5 && <>
          <div><span className="text-red-400">Q001</span> Your fixed price quote is £150</div>
          <div><span className="text-red-400">Q002</span> Daily deal discount applied £25</div>
          <div><span className="text-red-400">Q003</span> Total to pay £125</div>
          {mainsWaterStopcock === 'replace' && <div><span className="text-red-400">Q011</span></div>}
        </>}
        {currentPage === 6 && <>
          <CalendarComponent setBookedTime={setBookedTime} />
        </>}
        <div className="flex w-full max-w-96 my-4 mx-auto">
          <div className="flex flex-grow">
            {currentPage > 1 && <Button variant="contained" onClick={() => setCurrentPage(currentPage - 1)} disabled={!postcode || !isValidPostcode}>Back</Button>}
          </div>
          <div className="flex flex-grow justify-end">
            {!isEndPage && <Button variant="contained" onClick={() => setCurrentPage(currentPage + 1)} disabled={!postcode || !isValidPostcode || (currentPage === 6 && !bookedTime)}>Next</Button>}
          </div>
        </div>
      </div>
    </>
  )
}