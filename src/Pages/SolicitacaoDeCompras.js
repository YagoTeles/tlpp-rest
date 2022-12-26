import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect, useContext } from 'react';
import { Button } from '@mui/material';
import StoreContext from '../components/Store/Context';



const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Item',
    headerName: 'Item',
    minWidth: 150,
  },
  {
    field: 'Produto',
    headerName: 'Produto',
    minWidth: 250,
  },
  {
    field: 'Descricao',
    headerName: 'Descrição',
    minWidth: 400,
  },
 
];



function SolicitacaoDeCompras() {
  const [rows, setRows] = useState([]);
  const { token }= useContext(StoreContext);
  const [pageTableSize, setPageTableSize] = useState(5)
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newHeight = window.innerHeight;
      setHeight(newHeight);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions) 

  }, []);

  const Teste = async () => {
    try {
        const body = {};
      
        const response = await fetch('http://localhost:8282/rest/compras/solicitacao-de-compras',
        {
            method: "POST",
            headers: { "Content-Type": "application/json", 'Authorization': "Bearer " + token},
            body: JSON.stringify(body),
  
        }
        );
    
        let resJSON = await response.json();
        console.log(resJSON)
        setRows(resJSON)
  
    } catch (err) {
        console.error(err.message);
    }
  }
  useEffect(() => {
    Teste()
  }, []);
  
    return ( 
    <Box sx={{ height: "100%", width: '100%' }}>     
      <DataGrid
        ref={el => {
          // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
          if (!el) return;
          
          console.log(Math.floor(el.getBoundingClientRect().height/64));
          setPageTableSize((Math.floor(el.getBoundingClientRect().height/68)))
        }}
        rows={rows}
        columns={columns}
        pageSize={pageTableSize}
        rowsPerPageOptions={[pageTableSize]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
     );
}

export default SolicitacaoDeCompras;