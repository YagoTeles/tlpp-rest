import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { ColorModeContext } from '../contexts/ColorModeContext'
import Paper from '@mui/material/Paper';
import { LogoTotvs } from './LogoTotvs';
import {matchPath, useLocation, useNavigate } from 'react-router-dom';
import { itens,itensFat,itensFin } from './itens';
import StoreContext from './Store/Context';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useContext,useEffect } from 'react';


const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};
export default function MiniDrawer({ children }) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [open, setOpen]  = React.useState(true);
  const routeMatch = useRouteMatch(itens.map((item, index) => {return item.route}));
  const currentTab = routeMatch?.pattern?.path;
  const { token } = useContext(StoreContext);
  const { setToken } = useContext(StoreContext);
  const [user, setUser]  = React.useState("");
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const getUser = async () => {
    try {
        const body = {};
      
        const response = await fetch('http://localhost:8282/rest/login/get-user-logged',
        {
            method: "POST",
            headers: { "Content-Type": "application/json", 'Authorization': "Bearer " + token},
            body: JSON.stringify(body),
  
        }
        );
        let resJSON = await response.json();
        setUser(resJSON.Nome)
  
    } catch (err) {
        console.error(err.message);
    }
  }

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOut = () =>{
    setToken(null)
    setAnchorEl(null);
    navigate("/")

  }

  useEffect(() => {
    if(token != null && token != undefined) getUser()
  }, []);

  let title = itens.find(e => e.route === currentTab);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const montaItens = (itens,nome) => {
    return(<>
    {open ? <Typography variant="h6" noWrap component="div" align='center' sx={{ fontWeight: 'bold',paddingTop:1,paddingBottom:1 }}>{nome}</Typography> : <div style={{height:"48px"}}></div>}

          {itens.map((item, index) => (
            <ListItem key={item.label} disablePadding sx={{ display: 'block' }} onClick={() => open && navigate(item.route)}>
              <ListItemButton
                sx={currentTab === item.route ? {minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5,backgroundColor:'action.selected'} : {minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}
                
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 1 : 'auto',
                    justifyContent: 'center',
                  }}
                  
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
    </>)    
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            
            <MenuIcon />
            
          </IconButton>
          <Typography variant="h6" noWrap component="div">
              {title.label}
          </Typography>
          <div style={{position:'absolute',right:"2vw"}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem sx={{minWidth: 120,display:'flex',justifyContent:'center'}}><Typography align='center' fontWeight={'bold'}>{user}</Typography></MenuItem>
                <Divider />
                <MenuItem onClick={() => logOut()}>LogOut</MenuItem>
              </Menu>
            </div>
          <IconButton
                  onClick={colorMode.toggleColorMode}
                  color='inherit'
                  size='large'
                  sx={{position:'absolute',right:"5vw"}}
                >
                {theme.palette.mode === 'dark' ? (<WbSunnyOutlinedIcon />):(<DarkModeOutlinedIcon />)}
          </IconButton>

        </Toolbar>
     
      </AppBar>
      <Drawer variant="permanent" open={open}>
        
        <DrawerHeader>
          <div
          style={{height:"fit-content",width:220,paddingLeft:15}}

          >
            <LogoTotvs
            color={theme.palette.mode === 'dark' ? 'White' : "Black"}
            />
          </div>            
          
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        
        <Divider />
        {montaItens(itens,"Compras")}  
        <Divider />
        {montaItens(itensFat,"Faturamento")}
        <Divider />
        {montaItens(itensFin,"Financeiro")}
        <Divider />
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Paper elevation={3} sx={{width:"95%",height:"80vh"}}>
           {children}
        </Paper>
       
      </Box>
    </Box>
  );
}