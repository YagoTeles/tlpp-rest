import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { ColorModeContext } from '../../contexts/ColorModeContext'
import Paper from '@mui/material/Paper';
import {matchPath, useLocation, useNavigate } from 'react-router-dom';
import image from "../../images/mask-banner-single_fbf36e99.png"

const drawerWidth = 250;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Login({ children }) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box sx={{ display: 'flex'}} style={{ backgroundImage:`url(${image})`,backgroundRepeat:'repeat-y',backgroundSize:"100%" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            LOGIN
          </Typography>

          <IconButton
                  onClick={colorMode.toggleColorMode}
                  color='inherit'
                  size='large'
                  sx={{position:'absolute',right:"2vw"}}
                >
                {theme.palette.mode === 'dark' ? (<WbSunnyOutlinedIcon />):(<DarkModeOutlinedIcon />)}
            </IconButton>   
        </Toolbar>
     
      </AppBar>
     
      <Box component="main" sx={{ flexGrow: 1,display:"flex",justifyContent:"center",alignItems:'center',height:"100vh"}}>
        <DrawerHeader />    
           {children}
      </Box>
    </Box>
  );
}