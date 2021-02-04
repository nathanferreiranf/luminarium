import Client from './client';

const Auth = {
    login: (params) => Client.post('/login', params),
    register: (params) => Client.post('/register', params),
    checkSession: (id_user) => Client.get('/verify-login/'+id_user)
};
export default Auth;