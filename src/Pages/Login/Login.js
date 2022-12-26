import * as React from 'react';
import BodyLogin from "./BodyLogin"
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import StoreContext from '../../components/Store/Context';
import { useState,useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { LogoTotvs } from "../../components/LogoTotvs";
import { styled, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const { setToken } = useContext(StoreContext);
    const theme = useTheme();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };
    const onSubmit = data => {
      enviar(data)
    }
    const enviar = async (data) => {
        
        try {
          const body = {};
          const response = await fetch("http://localhost:8282/rest/api/oauth2/v1/token?grant_type=password&password="+data.Password+"&username="+data.User,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );
          const resJSON = await response.json();
          console.log(resJSON)
          if (!(resJSON.code === 401)){
            setToken(resJSON.access_token)
            navigate('/pedidos-de-compra')
          }
          else{
            console.log("Usuário errado")
            setOpen(true);
          }

        } catch (err) {
          console.log(err)
          console.error(err.message);
    }
    
  }
    return (  <>
        <BodyLogin>
            <Paper elevation={3} sx={{width:350, height:410,p:4,display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div
                  style={{height:"fit-content",width:240,marginBottom:26}}
                  >
                  <LogoTotvs
                  color={theme.palette.mode === 'dark' ? 'White' : "Black"}
                  />
                </div>  
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                >
                    <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex",flexDirection:"column",gap:"10px",width:"100%"}}>
                        <TextField id="user" label="Usuário" variant="outlined" sx={{width:"100%"}}
                        {...register("User", {required: 'Digite nome do usuario'})} 
                        />
                        <TextField id="Password" label="Senha" variant="outlined"   type={"password"} sx={{width:"100%"}}
                        {...register("Password", {required: 'Digite sua senha'})} 
                        />
                        <Button variant="contained" type="submit" sx={{width:"100%",marginTop:3}}>Login</Button>
                    </form>
                </Grid>
            </Paper>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                Verifique se o usuário e senha estão corretos
              </Alert>
            </Snackbar>
        </BodyLogin>
    </>);
}

export default Login;