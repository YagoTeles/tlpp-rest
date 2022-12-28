import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid,GridToolbar, GridToolbarContainer,GridToolbarDensitySelector,GridToolbarFilterButton} from '@mui/x-data-grid';
import { useState,useEffect, useContext } from 'react';
import StoreContext from '../components/Store/Context';
import {localizedTextsMap} from '../components/DataTable/TranslateTabs'


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Documento',
    headerName: 'Documento',
    minWidth: 250,
  },
  {
    field: 'Tipo',
    headerName: 'Tipo',
    minWidth: 100,
  },
  {
    field: 'Aprovador',
    headerName: 'Aprovador',

    minWidth: 250,
  },
  {
    field: 'Status',
    headerName: 'Status',
    
    minWidth: 250,
  },
  {
    field: 'Total',
    headerName: 'Valor Total',
    
    minWidth: 130,
  },
];



function AprovacaoDeDocumentos() {
  const [rows, setRows] = useState([]);
  const { token }= useContext(StoreContext);
  const [pageTableSize, setPageTableSize] = useState(5)
  const [height, setHeight] = useState(0);
  const [selectdItems,setSelectedItems] = useState([]);
  const [filterButtonEl,setFilterButtonEl] = useState(null);

  const CustomToolbar = React.useCallback(() => {
    return (
      <div className='topoTabela' >
        <div ref={setFilterButtonEl}></div>
      <GridToolbarContainer >

      <GridToolbarDensitySelector/>
      <GridToolbarFilterButton />

      </GridToolbarContainer> 
      </div>
    );
    // eslint-disable-next-line
  },[selectdItems]);
 
  const Teste = async () => {
    try {
        const body = {};
      
        const response = await fetch('http://localhost:8282/rest/compras/aprovacao-de-documentos',
        {
            method: "POST",
            headers: { "Content-Type": "application/json", 'Authorization': "Bearer " + token},
            body: JSON.stringify(body),
  
        }
        );
    
        let resJSON = await response.json();
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
        rows={rows}
        onSelectionModelChange={selected => setSelectedItems(selected)}
        componentsProps={{
            panel: {
              anchorEl: filterButtonEl
            }
          }}
        localeText={localizedTextsMap}
        columns={columns}
        autoPageSize
        rowsPerPageOptions={[pageTableSize]}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: CustomToolbar }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
     );
}

export default AprovacaoDeDocumentos;