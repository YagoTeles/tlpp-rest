import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  setToken: (x) => {},
});

export default StoreContext;