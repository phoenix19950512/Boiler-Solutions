import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiPhone } from "react-icons/hi";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

export const Header: FC = () => {
  const [anchorEl, setAnchorEl] = useState<(null | HTMLElement)[]>([]);
  const open = anchorEl.map(anchor => !!anchor);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    const arr = [...anchorEl];
    arr[index] = event.currentTarget;
    setAnchorEl(arr);
  };
  const handleClose = () => {
    setAnchorEl(anchorEl.map(() => null));
  };
  const navLinks: {
    title: string;
    items: { label: string; link: string }[]
  }[] = [
      {
        title: 'Boilers', items: [
          { label: 'Repairs', link: '/boiler/repair' },
          { label: 'Services', link: '/boiler/service' },
          { label: 'Installation', link: '/boiler/install' },
        ]
      },
      { title: 'Plumbing', items: [
        { label: 'Tap Repaire & Replacements', link: '/plumbing/repair-replace' },
        { label: 'Mains Water Stopcock', link: '/plumbing/mains-water-stopcock' },
        { label: 'Toilet Repairs', link: '/plumbing/toilet-repairs' },
        { label: 'Birst Pipe Repairs', link: '/plumbing/birst-pipe-repair' },
      ] },
      { title: 'Gas Fires', items: [
        { label: 'Repairs', link: '/gas-fire/repair' },
        { label: 'Services', link: '/gas-fire/service' },
      ] },
      { title: 'Gas Cookers & Ovens', items: [
        { label: 'Cooker & Oven Repairs', link: '/gas-cooker-oven/cooker-oven-repair' },
        { label: 'Cooker & Oven Installations', link: '/gas-cooker-oven/cooker-oven-install' },
      ] },
      { title: 'Landlords', items: [
        { label: 'Certification Services', link: '/landlords/certification-service' },
      ] },
      { title: 'Central Heating', items: [
        { label: 'Radiator Repair & Replacement', link: '/central-heating/repair-replace' },
        { label: 'Repair', link: '/central-heating/repair' },
      ] },
      { title: 'Power Flushing', items: [
        { label: 'Power Flushing', link: '/power-flushing' },
      ] },
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
      <div className="hidden lg:ml-10 lg:flex items-center">
        {navLinks.map((navLink, index) => (
          <span key={`navItem${index}`}>
            <Button
              id={`basic-button${index}`}
              aria-controls={open[index] ? `basic-menu${index}` : undefined}
              aria-haspopup="true"
              aria-expanded={open[index] ? 'true' : undefined}
              onClick={e => handleClick(e, index)}
              color="inherit"
            >
              {navLink.title}
            </Button>
            <Menu
              id={`basic-menu${index}`}
              anchorEl={anchorEl ? anchorEl[index] : null}
              open={open[index] ?? false}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': `basic-button${index}`,
              }}
            >
              {navLink.items.map((item, ind) => (
                <MenuItem key={`menuitem${ind}`} onClick={handleClose}>
                  <Link color="black" to={item.link}>{item.label}</Link>
                </MenuItem>
              ))}
            </Menu>
          </span>
        ))}
      </div>
      <div id='navBar' className="lg:hidden fixed hidden z-50 select-none left-0 top-[4.5rem] bottom-0 w-80 bg-white px-0 py-3">
        <Box sx={{ height: '100%', width: '100%' }}>
          <SimpleTreeView>
            {navLinks.map((navLink, index) => (
              <TreeItem key={`box${index}`} className="text-left" sx={{ padding: '5px 10px', borderTop: index ? 'gray 1px solid' : 'none' }} itemId={`navLinkTitle${index}`} label={navLink.title}>
                {navLink.items.map((item, index2) => (
                  <TreeItem itemId={`item${index2}`} label={item.label} onClick={() => navigate(item.link)} />
                ))}
              </TreeItem>
            ))}
          </SimpleTreeView>
        </Box>
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