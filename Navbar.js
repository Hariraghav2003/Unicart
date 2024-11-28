import React from 'react'
import { FaBars } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import './Navbar.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { FaCircleUser } from "react-icons/fa6";
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import { AiFillProduct } from "react-icons/ai";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BsInfoSquareFill } from "react-icons/bs";
import { IoIosHome } from "react-icons/io";
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar() {
 function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color:"white"}}
      >
      <FaCircleUser style={{fontSize:"30px"}} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Sign-in</MenuItem>
        <MenuItem onClick={handleClose}>Sign-up</MenuItem>

      </Menu>
    </div>
  );
}



 function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const links = ['/', '/about','/product'];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      
  <List>
      {['Home', 'About us', 'Products'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton component={Link} to={links[index]}>
            <ListItemIcon>
              {index % 3 === 0 ? (
            <IoIosHome style={{fontSize:"25px"}} />
              ) : index % 3 === 1 ? (
                <BsInfoSquareFill style={{fontSize:"20px"}} />
              ) : (
               <AiFillProduct style={{fontSize:"25px"}}/> 
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
      <Divider />

    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} style={{color:"white",fontSize:"20px"}}><FaBars /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#6EC207"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <div className="drawer">
            <TemporaryDrawer ></TemporaryDrawer>
            </div>
          
       
          </IconButton>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          UniCart
          
          </Typography>
          <Typography
                      variant="p"
                      noWrap
                      component="div"
                      sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          <div style={{marginRight:"750px"}}>
           <Link to= "/" style={{color:"white"}}> Home </Link> &nbsp; &nbsp;
           <Link to= "/" style={{color:"white"}}> About us </Link>   &nbsp; &nbsp;
           <Link to= "/product" style={{color:"white"}}> Products </Link> 
          </div>
          </Typography>


          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> &nbsp;
          <BasicMenu></BasicMenu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
