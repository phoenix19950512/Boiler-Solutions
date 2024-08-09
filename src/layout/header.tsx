import { FC } from "react";
import Button from "@mui/material/Button";
import { HiPhone } from "react-icons/hi";

export const Header: FC = () => {
  const navLinks = [
    { label: 'Boilers', link: '/boilers' },
    { label: 'Plumbing', link: '/plubing' },
    { label: 'Gas Fires', link: '/gas-fires' },
    { label: 'Gas Cookers & Ovens', link: '/gas-cookers-ovens' },
    { label: 'Landlords', link: '/landlords' },
    { label: 'Central Heating', link: '/central-heating' },
    { label: 'Power Flushing', link: '/power-flushing' },
  ];

  const handleToggleNav = () => {
    const navBar = document.querySelector('#navBar') as HTMLElement;
    navBar.classList.toggle('hidden');
    navBar.classList.toggle('block');
  }

  return (
    <div className="flex w-full py-2 px-8 lg:pl-16 h-fit font-bold">
      <div className="flex h-fit w-fit">
        <a href="/">
          <img className="w-auto h-14 lg:h-20 max-w-none" src="/media/images/logo.png" alt="Logo" width='auto' height={100} />
        </a>
      </div>
      <div className="flex ml-10 w-fit lg:hidden self-center cursor-pointer flex-col" onClick={handleToggleNav}>
        <div className="flex w-8 h-1 bg-black"></div>
        <div className="flex w-8 h-1 my-[0.4rem] bg-black"></div>
        <div className="flex w-8 h-1 bg-black"></div>
      </div>
      <div className="hidden lg:ml-10 lg:flex">
        {navLinks.map((item, index) => (
          <div className="flex mx-2 w-fit self-center hover:underline hover:text-blue-400" key={`navItem${index}`}>
            <a href={item.link}>{item.label}</a>
          </div>
        ))}
      </div>
      <div id='navBar' className="lg:hidden fixed hidden z-50 select-none left-0 top-[4.5rem] bottom-0 w-80 bg-white px-0 py-3">
        {navLinks.map((item, index) => (
          <div className="flex self-center pl-5 p-3 hover:bg-gray-200 duration-300 cursor-pointer" key={`navItem${index}`} onClick={handleToggleNav}>
            <a href={item.link}>{item.label}</a>
          </div>
        ))}
      </div>
      <div className="flex mr-0 ml-auto self-center">
        <a href="tel:+441316699993"><Button variant="contained" color="secondary" className="flex-col">
          <div>Call us today</div>
          <div className="flex"><HiPhone className="mt-1 mr-1" /><span>01316699993</span></div>
        </Button></a>
      </div>
    </div>
  )
}