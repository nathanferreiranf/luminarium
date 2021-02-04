import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';

import AuthServer from './api/auth';
import { Context } from "../context/AuthContext";

export default function Login() {
    const router = useRouter();
    const { setUser, authenticated, setAuthenticated } = useContext(Context);

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termos, setTermos] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validatorMessage = (input) => {
        let data = {
            invalid: false,
            message: ''
        }

        if (errors.hasOwnProperty(input)) {
            data.invalid = true;
            data.message = errors[input][0];
        }

        return data;
    }

    const handleLogin = (event) => {
        event.preventDefault();

        setLoading(true);

        AuthServer.login({
            id_evento: process.env.APP_ID_EVENTO,
            email: email,
            password: password
        }).then(({ data }) => {
            localStorage.setItem('user', JSON.stringify(data.user));

            setUser(data.user);
            setAuthenticated(true);
            router.push('/');
        }).catch(({ response }) => {
            setError(false);
            setErrorMessage('');
            setErrors({});

            if(response == undefined || response.status == 400 || response.status == 500){
                setError(true);
                setErrorMessage("Houve um problema ao fazer o login, tente novamente em alguns segundos!");

                return false;
            }

            if(!response.data.hasOwnProperty('errors')){
                setError(true);
                setErrorMessage(response.data.message);
            }else{
                setErrors(response.data.errors);
            }
        }).finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                    <title>{process.env.APP_NAME} | Login</title>
            </Head>
            {
                <div className="auth-page" style={{backgroundImage: "url('/images/bg_auth.jpg')"}}>
                    <div className="card card-auth">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label htmlFor="email">LOGIN:</label>
                                    <input 
                                    type="email" 
                                    className={`form-control shadow-sm ${validatorMessage('email').invalid ? 'is-invalid': ''}`} 
                                    value={email} 
                                    aria-describedby="emailFeedback"
                                    onChange={e => setEmail(e.target.value)} />
                                    {validatorMessage('email').invalid ? <div id="emailFeedback" className="invalid-feedback">{validatorMessage('email').message}</div> : ''}
                                </div>
                                <div className="form-group">
                                    <label>SENHA:</label>
                                    
                                    <input 
                                    type="password" 
                                    className={`form-control shadow-sm ${validatorMessage('password').invalid ? 'is-invalid': ''}`} 
                                    value={password} 
                                    aria-describedby="passwordFeedback"
                                    onChange={e => setPassword(e.target.value)} />
                                    {validatorMessage('password').invalid ? <div id="passwordFeedback" className="invalid-feedback">{validatorMessage('password').message}</div> : ''}
                                </div>
                                <div className="form-group">
                                    <div className="form-check d-flex align-items-center">
                                        <input className="form-check-input" type="checkbox" value="true" id="checkTermos" onChange={e => setTermos(!termos)} />
                                        <label className="form-check-label ml-2" htmlFor="checkTermos" style={{fontSize: 12}}>Ao entrar na Plataforma Virtual do Congresso Luminarium tenho conhecimento de que terei acesso a um diversificado material gravado e “ao vivo”. Estou ciente que todos os conteúdos estão protegidos pela Lei dos Direitos Autorais e que é proibido gravar, distribuir e comercializar qualquer conteúdo.</label>
                                    </div>
                                </div>
                                {error && 
                                <div className="alert alert-danger text-center" role="alert">
                                    {errorMessage}
                                </div>}

                                <div className="form-row">
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-entrar d-flex align-items-center justify-content-center mx-auto" disabled={loading || !termos}>
                                            {
                                                loading && <div className="spinner-border spinner-border-sm mr-2" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            }
                                            {loading ? <span>Entrando</span> : <span>Entrar</span>}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}