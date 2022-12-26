import {Route,BrowserRouter,Routes,Navigate} from "react-router-dom";
import PedidosDeCompras from "../Pages/PedidosDeCompras";
import LateralBar from "../components/LateralBar"
import Login from "../Pages/Login/Login";
import ProtectedRoute from "../components/protectedroutes/ProtectedRoutes";
import SolicitacaoDeCompras from "../Pages/SolicitacaoDeCompras"
function RouteApp() {
    return ( 
        <BrowserRouter>               
            <Routes>
                <Route path="/pedidos-de-compra" element = {<ProtectedRoute><LateralBar><PedidosDeCompras/></LateralBar></ProtectedRoute> }/>
                <Route path="/solicitacao-de-compras" element = {<LateralBar><SolicitacaoDeCompras/></LateralBar> }/>  
                <Route path="/documentos-de-entrada" element = {<LateralBar>Página em Desenvolvimento</LateralBar> }/>  
                <Route path="/" element = {<Login/>}/> 
            </Routes>       
        </BrowserRouter> 
     );
}

export default RouteApp;