import React, {createContext, useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';
import AuthServer from '../pages/api/auth';

ReactGA.initialize('UA-180945370-1');

const Context = createContext();

function AuthProvider({children}){
    const router = useRouter();
    const [user, setUser] = useState({
        name: 'nicolas'
    });
    const [authenticated, setAuthenticated] = useState(false);
    const [token, setToken] = useState(null);

    const checkDuplicatedSessions = () => {
        const interval = setInterval(() => {
            const userSession = JSON.parse(localStorage.getItem('user'));
            const urls = ['/registrar-infoview', '/login', '/resetar-senha'];

            if(userSession && !urls.includes(router.pathname)){
                AuthServer.checkSession(userSession.id).then(({data}) => {
                    if(data.ultimo_acesso != userSession.ultimo_acesso){
                        setAuthenticated(false);
                        setUser(null);
                        localStorage.removeItem('user');
                        router.push('/login');
                    }
                }).catch(error => {
                    console.log(error);
                }).finally(() => {
        
                });
            }
        }, 30000);

        return () => clearInterval(interval);
    }

    const checkAuthenticated = () => {
        const userSession = JSON.parse(localStorage.getItem('user'));
        
        if(userSession){
            setAuthenticated(true);
            setUser(userSession);

            /*if(router.route != '/' && router.route != '/validar-email'){
                if(userSession.email_verified_at == null || userSession.email_verified_at == ''){
                    router.push('/verificar-email');
                }
            }*/
            
            if(router.route == '/login' || router.route == '/register'){
                router.push('/');
            }
        }else{
            const urls = ['/registrar-infoview', '/login', '/resetar-senha'];

            setAuthenticated(false);
            setUser(null);
            
            if(!urls.includes(router.pathname)) router.push('/login');
        }
    }

    useEffect(() => {
        checkAuthenticated();
        //checkDuplicatedSessions();
    }, []);

    return (
        <Context.Provider value={{
            user,
            setUser,
            authenticated,
            setAuthenticated,
            token,
            checkAuthenticated
        }}>
            {children}
        </Context.Provider>
    );
}

export {Context, AuthProvider};