import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect, useContext } from 'react';
import { Button } from '@mui/material';



const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Produto',
    headerName: 'Produto',
    width: 150,
  },
  {
    field: 'Descricao',
    headerName: 'Descrição',
    width: 250,
  },
  {
    field: 'Quantidade',
    headerName: 'Quantidade',
    type: 'number',
    width: 110,
  },
  {
    field: 'Preco',
    headerName: 'Preço',
    type: 'number',
    width: 110,
  },
  {
    field: 'Valor',
    headerName: 'Valor Total',
    type: 'number',
    width: 110,
  },
];



function PedidosDeCompras() {
  const [rows, setRows] = useState([]);
  
  const Teste = async () => {
    try {
        const body = {};
      
        const response = await fetch('http://localhost:8282/rest/compras/pedidos-de-compras',
        {
            method: "POST",
            headers: { "Content-Type": "application/json", 'Authorization': "Basic " + window.btoa('Yago' + ':' + "123") },
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
    <Box sx={{ height: 400, width: '100%' }}>     
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
     );
}

export default PedidosDeCompras;