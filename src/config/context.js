import { createContext } from 'react';


export const AuthContext = createContext({
  sendCode: async () => {},
  verifyCode: async () => {},
});
