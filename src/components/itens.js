import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArticleIcon from '@mui/icons-material/Article';
export const itens = [
    {
        label: 'Pedidos de Compra',
        key: 'pedidos-de-compra',
        id:0,
        route: '/pedidos-de-compra', 
        icon: <ShoppingCartIcon/>,
    },
    {
        label: 'Solicitação de compras',
        key: 'perfil',
        id:1,
        route: '/solicitacao-de-compras',
        icon: <AddShoppingCartIcon/>,   
    },
    {
        label: 'Documentos de Entrada',
        key: 'perfil',
        id:2,
        route: '/documentos-de-entrada', 
        icon: <ArticleIcon/>,  
    },

]