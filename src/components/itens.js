import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
export const itens = [
    {
        label: 'Pedidos de Compra',
        key: 'pedidos-de-compra',
        id:0,
        route: '/pedidos-de-compra', 
        icon: <ShoppingCartIcon/>,
    },
    {
        label: 'Solicitação de Compras',
        key: 'solicitacao-de-compra',
        id:1,
        route: '/solicitacao-de-compras',
        icon: <AddShoppingCartIcon/>,   
    },
    {
        label: 'Aprovação de Documentos',
        key: 'aprovacao-de-documentos',
        id:2,
        route: '/aprovacao-de-documentos', 
        icon: <ArticleIcon/>,  
    },

]
export const itensFat = [
    {
        label: 'Pedidos de Venda',
        key: 'pedidos-de-venda',
        id:0,
        route: '/404', 
        icon: <StorefrontIcon/>,
    },
    {
        label: 'Documentos de Saída',
        key: 'documentos-de-saida',
        id:1,
        route: '/404',
        icon: <AssignmentIcon/>,   
    },
]
export const itensFin = [
    {
        label: 'Contas a Receber',
        key: 'contas-a-receber',
        id:0,
        route: '/404', 
        icon: <MoneyOffIcon/>,
    },
    {
        label: 'Contas a pagar',
        key: 'contas-a-pagar',
        id:1,
        route: '/404',
        icon: <AttachMoneyIcon/>,   
    },
]