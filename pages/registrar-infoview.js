import React, { useState, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ReCAPTCHA from "react-google-recaptcha";

import AuthServer from './api/auth';
import { Context } from "../context/AuthContext";

export default function Login() {
    const router = useRouter();
    const { setUser, authenticated, setAuthenticated } = useContext(Context);

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [googleCaptcha, setGoogleCaptcha] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
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

    const handleRegister = (event) => {
        event.preventDefault();

        setLoading(true);

        AuthServer.register({
            id_evento: process.env.APP_ID_EVENTO,
            name: name,
            sobrenome: sobrenome,
            email: email,
            telefone: telefone,
            password: password,
            password_confirmation: password_confirmation,
            google_recaptcha: googleCaptcha
        }).then(({ data }) => {
            setSuccess(true);
            setSuccessMessage('Inscrito cadastrado com sucesso.');
        }).catch(({ response }) => {
            setSuccess(false);
            setSuccessMessage('');
            
            setErrors(response.data);
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <>
            <Head>
                    <title>{process.env.APP_NAME} | Registro</title>
            </Head>
            {
                <div className="auth-page" style={{backgroundImage: "url('/images/bg_auth.jpg')"}}>
                    <div className="card card-auth" style={{width: 800}}>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">Nome:</label>
                                            <input type="text" className={`form-control ${validatorMessage('name').invalid ? 'is-invalid' : ''}`} value={name} id="name" aria-describedby="nameFeedback" onChange={e => setName(e.target.value)} />
                                            {validatorMessage('name').invalid ? <div id="nameFeedback" className="invalid-feedback">{validatorMessage('name').message}</div> : ''}
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="sobrenome">Sobrenome:</label>
                                            <input type="text" className={`form-control ${validatorMessage('sobrenome').invalid ? 'is-invalid' : ''}`} value={sobrenome} id="sobrenome" aria-describedby="sobrenomeFeedback" onChange={e => setSobrenome(e.target.value)} />
                                            {validatorMessage('sobrenome').invalid ? <div id="sobrenomeFeedback" className="invalid-feedback">{validatorMessage('sobrenome').message}</div> : ''}
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">E-mail:</label>
                                            <input 
                                            type="email" 
                                            className={`form-control ${validatorMessage('email').invalid ? 'is-invalid': ''}`} 
                                            value={email} 
                                            aria-describedby="emailFeedback"
                                            onChange={e => setEmail(e.target.value)} />
                                            {validatorMessage('email').invalid ? <div id="emailFeedback" className="invalid-feedback">{validatorMessage('email').message}</div> : ''}
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="telefone">Telefone:</label>
                                            <input 
                                            type="text" 
                                            className={`form-control ${validatorMessage('telefone').invalid ? 'is-invalid': ''}`} 
                                            value={telefone} 
                                            aria-describedby="telefoneFeedback"
                                            onChange={e => setTelefone(e.target.value)} />
                                            {validatorMessage('telefone').invalid ? <div id="telefoneFeedback" className="invalid-feedback">{validatorMessage('telefone').message}</div> : ''}
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label>Senha:</label>
                                            
                                            <input 
                                            type="password" 
                                            className={`form-control ${validatorMessage('password').invalid ? 'is-invalid': ''}`} 
                                            value={password} 
                                            aria-describedby="passwordFeedback"
                                            onChange={e => setPassword(e.target.value)} />
                                            {validatorMessage('password').invalid ? <div id="passwordFeedback" className="invalid-feedback">{validatorMessage('password').message}</div> : ''}
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label>Confimar Senha:</label>
                                            
                                            <input 
                                            type="password" 
                                            className={`form-control ${validatorMessage('password_confirmation').invalid ? 'is-invalid': ''}`} 
                                            value={password_confirmation} 
                                            aria-describedby="passwordConfirmFeedback"
                                            onChange={e => setPasswordConfirmation(e.target.value)} />
                                            {validatorMessage('password_confirmation').invalid ? <div id="passwordConfirmFeedback" className="invalid-feedback">{validatorMessage('password_confirmation').message}</div> : ''}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="d-flex flex-column align-items-center justify-content-center mb-2">
                                    <ReCAPTCHA sitekey={process.env.APP_RECAPTCHA_GOOGLE} onChange={value => setGoogleCaptcha(value)} onExpired={() => setGoogleCaptcha('')} />
                                    {validatorMessage('google_recaptcha').invalid ? <div class="alert alert-danger mt-2" role="alert">{validatorMessage('google_recaptcha').message}</div> : ''}
                                </div>

                                {error && 
                                <div className="alert alert-danger text-center" role="alert">
                                    {errorMessage}
                                </div>}

                                {success && 
                                <div className="alert alert-success text-center" role="alert">
                                    {successMessage}
                                </div>}

                                <div className="form-row">
                                    <div className="col-12 d-flex justify-content-end">
                                        <button type="submit" className="btn btn-success btn-block" disabled={loading}>
                                            {loading
                                                ? <div className="spinner-border spinner-border-sm mr-2" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                                : ''}
                                            {loading 
                                            ? <span>Registrando</span> 
                                            : <span>Registrar</span>}
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