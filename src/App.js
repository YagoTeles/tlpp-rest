import React from 'react';
import RouteApp from './Routes/RouteApp';
import {ThemeProvider,createTheme,} from '@mui/material/styles';
import { ColorModeContext } from './contexts/ColorModeContext';
import {ptBR} from '@mui/material/locale';
import StoreProvider from './components/Store/Provider';


function App() {
  const modePageR = () => {
    if(localStorage.getItem("pageColorMode")!= null)return localStorage.getItem("pageColorMode"); 
    else return 'light';
  }
  const [mode, setMode] = React.useState(modePageR);
  const colorMode = React.useMemo(() => ({
    toggleColorMode: () => {setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light');},}), []  
  );
  //#f1f3f6
  const theme = React.useMemo( 
    () =>
      createTheme({
        palette: {
          mode: mode,
          secondary:{
            main: mode === 'dark' ?'#282a36':'#fff',
            light: mode === 'dark' ?'#9580ff':'#0897E9',
          },
          background:{
            paper: mode === 'dark' ? '#21222c': '#fff',
            default: mode==='light' ? '#f1f3f6':'#414558',
          }
        },
        
      },ptBR),
    [mode]
  );
  


  localStorage.setItem("pageColorMode", mode);
  return (
    <div className="App">
      
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <StoreProvider>
          
              <RouteApp/>
          
         </StoreProvider>   
        </ThemeProvider>  
      </ColorModeContext.Provider>
      
    </div>
  );
}

export default App;

