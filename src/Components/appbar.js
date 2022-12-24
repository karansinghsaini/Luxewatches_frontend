import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {GetUserProfile} from '../redux/actions/useraction';
import { decodeToken } from "react-jwt";
import {useSelector, useDispatch} from 'react-redux';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

// const pages = ['Home', 'Network', 'Products'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  var isLoggedIn = localStorage.isloggedin;
  // decoding the token to get logged in user data
  const decodedToken = decodeToken(localStorage.token);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const user_data = useSelector( (state) => state.userReducer.current_user);

  React.useEffect( () => {
    if(decodedToken){
      dispatch(GetUserProfile(decodedToken.id));
    }
},[]);

const handleLogout = (e) => {
    localStorage.clear('jwtToken');
    localStorage.clear('isloggedin');
    window.location.href = '/login';
}

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickOpen = (e) => {
    setOpen(true);
  };

  return (
    <>
    <AppBar position="static" style={{backgroundColor:'#224581'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            <MenuItem >
                 <Link style={{color: '#152b51'}} href='/home' underline="none">Home</Link>
            </MenuItem>
            <MenuItem>
                  { (isLoggedIn && user_data.is_admin) && <Link style={{color: '#152b51'}} href='/network' underline="none">Network</Link>}
            </MenuItem>
            <MenuItem>
                 { (isLoggedIn && (user_data.is_admin || user_data.is_vendor) ) && <Link style={{color: '#152b51'}} href='/products' underline="none">Products</Link>}
            </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <Button sx={{ my: 2, color: 'white', display: 'block' }} href='/home'>Home</Button>
            { (isLoggedIn && user_data.is_admin) && <Button sx={{ my: 2, color: 'white', display: 'block' }} href='/network'>Network</Button>}
            { (isLoggedIn && (user_data.is_admin || user_data.is_vendor) ) && <Button sx={{ my: 2, color: 'white', display: 'block' }} href='/products'>Products</Button>}
          </Box>

          { !isLoggedIn && <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }  }}>
          <Button sx={{ my: 2, color: 'white', display: 'block' }} href='/login'>Login</Button>
          <Button sx={{ my: 2, color: 'white', display: 'block' }} href='/register'>Sign Up</Button>
          </Box> }

          { isLoggedIn &&  <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem>
                  <Link style={{color: '#152b51'}} underline="none" href='/profile'>Profile</Link>
              </MenuItem>
              {/* <MenuItem>
                  <Link style={{color: '#152b51'}} underline="none" href='/address'>Your Addresses</Link>
              </MenuItem>
              <MenuItem>
                  <Link style={{color: '#152b51'}} underline="none" href='/your_cart'>Your Cart</Link>
              </MenuItem>
              <MenuItem>
                  <Link style={{color: '#152b51'}} underline="none" href='/change_password'>Change Password</Link>
              </MenuItem> */}
              <MenuItem>
                  <Typography style={{color: '#152b51'}} underline="none" onClick={e => handleClickOpen(e)}>Log Out</Typography>
              </MenuItem>
            </Menu>
          </Box> }
        </Toolbar>
      </Container>
    </AppBar>
    <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure you want to logout?"}</DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={e => handleLogout(e)}>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default ResponsiveAppBar;
