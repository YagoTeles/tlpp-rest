import {Route,BrowserRouter,Routes,Navigate} from "react-router-dom";
import PedidosDeCompras from "../Pages/PedidosDeCompras";
import LateralBar from "../components/LateralBar"
function RouteApp() {
    return ( 
        <BrowserRouter>               
            <Routes>
                <Route path="/pedidos-de-compras" element = {<LateralBar><PedidosDeCompras/></LateralBar> }/>   
            </Routes>       
        </BrowserRouter> 
     );
}

export default RouteApp;