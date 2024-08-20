import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { FC, useEffect, useState } from "react";

interface BookType {
  date: string;
  time: number;
  user: number;
}

export const CalendarComponent: FC<{setBookedTime: React.Dispatch<React.SetStateAction<{ date: Date; time: number } | undefined>>}> = ({ setBookedTime }) => {
  const today = new Date();
  const monthStrings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [monthDays, setMonthDays] = useState<number[]>([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
  const [year, setYear] = useState<number>(today.getFullYear());
  const [month, setMonth] = useState<number>(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [selectedTime, setSelectedTime] = useState<number[]>([0, 0]);
  const [bookedTimes, setBookedTimes] = useState<BookType[]>([]);

  useEffect(() => {
    setBookedTimes([
      { date: '2024-08-19', time: 9, user: 1 },
      { date: '2024-08-19', time: 13, user: 1 },
      { date: '2024-08-19', time: 15, user: 1 },
      { date: '2024-08-21', time: 9, user: 1 },
      { date: '2024-08-21', time: 10, user: 1 },
      { date: '2024-08-21', time: 11, user: 1 },
      { date: '2024-08-21', time: 15, user: 1 },
    ]);
  }, []);
  useEffect(() => {
    if (year % 400) {
      setMonthDays([31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    } else if (year % 100) {
      setMonthDays([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    } else if (year % 4) {
      setMonthDays([31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    } else {
      setMonthDays([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    }
  }, [year]);
  useEffect(() => {
    setSelectedTime([0, 0]);
  }, [selectedDate]);
  useEffect(() => {
    if (selectedTime.join(',') === '0,0') setBookedTime(undefined);
    else setBookedTime({ date: selectedDate, time: selectedTime[0] });
  }, [selectedDate, selectedTime, setBookedTime]);

  const decreateMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }
  const increateMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }
  const selectDate = (date: number = 1) => {
    setSelectedDate(new Date(year, month, date));
  }
  const checkDisableState = (hour: number) => {
    if (selectedDate.toDateString() === today.toDateString() && today.getHours() >= hour) return true;
    if (bookedTimes.filter(time => selectedDate.toDateString() === new Date(time.date).toDateString()).length >= 4) return true;
    if (bookedTimes.find(time => selectedDate.toDateString() === new Date(time.date).toDateString() && time.time === hour)) return true;
    return false;
  }

  return (
    <div className="flex">
      <div className="flex flex-col w-fit mx-auto">
        <div className="flex">
          <div className="flex items-center">
            {monthStrings[month]} {year}
          </div>
          <div className="flex mr-0 ml-auto">
            <button className="w-9 py-2 rounded-full leading-none duration-150 hover:bg-gray-300" onClick={decreateMonth}>
              <ArrowBackIos className="-mr-2" fontSize="small" />
            </button>
            <button className="w-9 py-2 rounded-full leading-none duration-150 hover:bg-gray-300" onClick={increateMonth}>
              <ArrowForwardIos fontSize="small" />
            </button>
          </div>
        </div>
        <div className="flex font-bold justify-center border-b mb-2">
          <span className="flex w-9 justify-center">S</span>
          <span className="flex w-9 justify-center">M</span>
          <span className="flex w-9 justify-center">T</span>
          <span className="flex w-9 justify-center">W</span>
          <span className="flex w-9 justify-center">T</span>
          <span className="flex w-9 justify-center">F</span>
          <span className="flex w-9 justify-center">S</span>
        </div>
        <div className="grid grid-cols-7 select-none">
          {(() => {
            const calendar = new Date(year, month, 1);
            let resCalendar = <>{Array(calendar.getDay()).fill(0).map((_, index) => (
              <span key={`nullFill${index}`} className="w-9 h-9"></span>
            ))}</>;
            for (let i = 1; i <= monthDays[month]; i++) {
              const count = bookedTimes.filter(book => book.date === new Date(year, month, i).toLocaleDateString('af')).length;
              resCalendar = <>
                {resCalendar}
                <span className="w-9 h-9">
                  <button
                    className={`
                    w-full py-2 rounded-full leading-none duration-150
                    ${(() => {
                      let res = 'hover:bg-gray-800';
                      if (count === 1) res = 'text-white bg-green-600 hover:bg-green-700';
                      else if (count === 2) res = 'text-white bg-cyan-600 hover:bg-cyan-700';
                      else if (count === 3) res = 'text-white bg-yellow-600 hover:bg-yellow-700';
                      else if (count === 4) res = 'text-white bg-red-600 hover:bg-red-700';
                      else res = '';
                      return res;
                    })()}
                    ${new Date(year, month, i + 1).getTime() > today.getTime()
                        && new Date(year, month, i - 27).getTime() < today.getTime() ?
                        'cursor-pointer' : 'cursor-not-allowed text-gray-500'
                      }
                    ${year === selectedDate.getFullYear() && selectedDate.getMonth() === month && selectedDate.getDate() === i ?
                        'border border-cyan-500' : ''
                      }
                  `}
                    disabled={new Date(year, month, i + 1).getTime() <= today.getTime()
                      || new Date(year, month, i - 27).getTime() >= today.getTime()}
                    onClick={() => selectDate(i)}
                  >
                    {i}
                  </button>
                </span>
              </>
            }
            return resCalendar;
          })()}
        </div>
      </div>
      <div className="flex flex-col mx-10"></div>
      <div className="flex">
        <FormControl>
          <FormLabel>Please select the time.</FormLabel>
          <RadioGroup
            value={selectedTime?.join(',')}
            onChange={e => setSelectedTime(e.target.value.split(',').map(num => parseInt(num)))}
          >
            <FormControlLabel disabled={checkDisableState(9)} value="9,12" control={<Radio />} label="09:00am - 12:00am" />
            <FormControlLabel disabled={checkDisableState(10)} value="10,13" control={<Radio />} label="10:00am - 01:00pm" />
            <FormControlLabel disabled={checkDisableState(11)} value="11,14" control={<Radio />} label="11:00am - 02:00pm " />
            <FormControlLabel disabled={checkDisableState(12)} value="12,15" control={<Radio />} label="12:00pm - 03:00pm" />
            <FormControlLabel disabled={checkDisableState(13)} value="13,16" control={<Radio />} label="01:00pm - 04:00pm" />
            <FormControlLabel disabled={checkDisableState(14)} value="14,17" control={<Radio />} label="02:00pm - 05:00pm" />
            <FormControlLabel disabled={checkDisableState(15)} value="15,18" control={<Radio />} label="03:00pm - 06:00pm" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  )
}