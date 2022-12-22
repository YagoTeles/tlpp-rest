import React, { useContext } from 'react';
import { Route, useNavigate} from 'react-router-dom';
import StoreContext from '../Store/Context';

const RoutesPrivate = ({ component: Component, ...rest}:any) => {
  //@ts-ignore
  const { token } = useContext(StoreContext);
  const navigate = useNavigate()
  return (
    <Route
      {...rest}
      render={() => token
        ? <Component {...rest} />
        : navigate('/login')
      }
    />
  )
}

export default RoutesPrivate;