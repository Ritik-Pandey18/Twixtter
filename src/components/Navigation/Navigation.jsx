import React from 'react';
import { navigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';


const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout")
    handleClose()
  }
  return (
    <div className='h-screen sticky top-0 pl-5'>
      <div>
        <div className='py-5'>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.pLGU79rtXDve1Ra0Z_TcEwHaEK&pid=Api&P=0&h=180"
            width="70px"
            alt="twitter's logo"
          />
        </div>
        <div className='space-y-6'>
          {navigationMenu.map((item, index) => (
            <div key={index} className='cursor-pointer flex space-x-3 items-center'
              onClick={() => item.title === "Profile" ? navigate(`/profile/${5}`) : navigate(item.path)}>
              {item.icon}
              <p className='text-xl'>{item.title}</p>
            </div>
          ))}
        </div>
        <div className='py-10'>
          <Button
            sx={{ width: "48%", borderRadius: "29px", py: "6px", bgcolor: '#38bdf8' }}
            variant='contained'
          >
            Post
          </Button>
        </div>

      </div>
      <div className='flex items-center justify-between'>
        <div className='flex flex-row'>
          <Avatar
            alt="username"
            src='https://st3.cricketcountry.com/wp-content/uploads/2016/05/000_AW069.jpg' />
          <div className='flex flex-col ml-2'>
            <span>Ritik Pandey
            </span>
            <span className='opacity-80'>@ritik_1911</span>
          </div>

          <Button
            id="basic-button"
            className='absolute right-0'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleLogout}>

              Logout</MenuItem>
          </Menu>
        
      </div>
    </div>
  );
}

export default Navigation