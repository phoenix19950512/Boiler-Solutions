import { FC } from "react";

export const Header: FC = () => {
  const navLinks = [
    { label: 'Boilers', link: '/boilers' },
    { label: 'Plumbing', link: '/boilers' },
    { label: 'Gas Fires', link: '/boilers' },
    { label: 'Gas Cookers & Ovens', link: '/boilers' },
    { label: 'Landlords', link: '/boilers' },
    { label: 'Central Heating', link: '/boilers' },
    { label: 'Power Flushing', link: '/boilers' },
  ]
  return (
    <div className="flex w-100 py-2 pl-16 pr-8 h-fit font-bold">
      <div className="flex h-fit w-fit">
        <img className="w-auto h-20" src="/media/images/logo.png" alt="Logo" width='auto' height={100} />
      </div>
      <div className="flex ml-10">
        {navLinks.map((item, index) => (
          <div className="flex mx-2 w-fit self-center" key={`navItem${index}`}>
            <a href={item.link}>{item.label}</a>
          </div>
        ))}
      </div>
      <div className="flex mr-0 ml-auto self-center">
        Call us today<br />
        01162345897
      </div>
    </div>
  )
}