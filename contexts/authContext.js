import { createContext } from 'react';


const authContext = createContext({ 'username': null, 'email': null, 'isLogged': false });

export default authContext;


