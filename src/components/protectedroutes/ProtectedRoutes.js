import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import StoreContext from '../Store/Context';
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const {token} = useContext(StoreContext);
  const { setToken } = useContext(StoreContext);
  const [teste,setTeste] = useState()
  const verificar = async () => {
    try {
        const body = {};
      
        const response = await fetch("http://localhost:8282/rest/login/verifica-login",
        {
            method: "POST",
            headers: { "Content-Type": "application/json", 'Authorization': "Bearer " + token},
            body: JSON.stringify(body),
  
        }
        );
    
        let resJSON = await response.json();
       // console.log(resJSON.codelogin)
      return resJSON
        
    } catch (err) {
        console.error(err.message);
    }
  }
  
  if (token === null | undefined) {
    return <Navigate to="/" />;
  }

  else {
     verificar().then(async (response) => {
      console.log(response.codelogin)
      if (response.codelogin == undefined || response.codelogin == null){
        console.log("recusado")
        setToken(null)
      }   
    })
   return children; 
  }
};

export default ProtectedRoute;