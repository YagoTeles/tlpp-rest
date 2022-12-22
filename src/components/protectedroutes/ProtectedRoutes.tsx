import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../contexts/UserAuthContext";

import StoreContext from '../Store/Context';
import { useContext } from "react";

const ProtectedRoute = ({ children }:any) => {
  
  const {token} = useContext(StoreContext);
  
   //@ts-ignore
  if (token === null | undefined) {
    return <Navigate to="/login" />;
  }
  else return children
  
  
};

export default ProtectedRoute;