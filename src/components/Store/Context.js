import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  setToken: (x:any) => {},
});

export default StoreContext;