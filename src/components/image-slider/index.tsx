import { FC, useEffect, useState } from "react";
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './style.scss';

export const ImageSlider: FC = () => {
  const slideArr = [
    "/media/images/slides/1.jpg",
    "/media/images/slides/2.jpg",
    "/media/images/slides/3.jpg",
    "/media/images/slides/4.jpg",
  ];

  const [x, setX] = useState(0);

  // const leftBtn = () => {
  //   const x = parseInt(firstSlide?.style.marginLeft ?? '0%');
  //   x === 0 ? setX(-100 * (slideArr.length - 1)) : setX(x + 100);
  // };
  // const rightBtn = () => {
  //   const x = parseInt(firstSlide?.style.marginLeft ?? '0%');
  //   x === -100 * (slideArr.length - 1) ? setX(0) : setX(x - 100);
  // };

  useEffect(() => {
    setTimeout(() => {
      if (x === -100 * (slideArr.length - 1)) setX(0);
      else setX(x - 100);
    }, 3000);
  }, [slideArr.length, x]);

  return <>
    <div className="relative w-full h-full box-border m-0 p-0 flex items-center overflow-hidden shadow-2xl">
      <div id="firstSlide" className={`min-w-full h-full content-center duration-1000 overflow-hidden bg-cover bg-center bg-[url(/public/media/images/slides/1.jpg)]`} style={{ marginLeft: `${x}%` }} />
      <div className={`min-w-full h-full content-center duration-1000 overflow-hidden bg-cover bg-center bg-[url(/public/media/images/slides/2.jpg)]`} />
      <div className={`min-w-full h-full content-center duration-1000 overflow-hidden bg-cover bg-center bg-[url(/public/media/images/slides/3.jpg)]`} />
      <div className={`min-w-full h-full content-center duration-1000 overflow-hidden bg-cover bg-center bg-[url(/public/media/images/slides/4.jpg)]`} />
      {/* <button className="control-button left-0" onClick={leftBtn}>
        <KeyboardArrowLeftIcon className="text-[2vw] text-black" />
      </button>
      <button className="control-button right-0" onClick={rightBtn}>
        <KeyboardArrowRightIcon className="text-[2vw] text-black" />
      </button> */}
    </div>
  </>
}