import React, {useContext, useEffect} from 'react';
import Head from 'next/head';
import {Context} from '../context/AuthContext';
import { IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';
import ReactGA from 'react-ga';

export default function AtendimentosVivencias() {
    const {authenticated, checkAuthenticated} = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Atendimentos e Vivências</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1060" preserveAspectRatio="none">
                        <a href="https://us02web.zoom.us/j/83737719442" target="_blank">
                            <polygon className="polygon" points="859.49,907.28 845.19,913.15 834.72,925.15 830.38,937.4 830.38,948.89 834.72,960.89 844.94,971.36 
                            859.49,977.23 1114.81,976.72 1125.53,972.89 1136.51,963.7 1142.13,954.26 1143.66,942.26 1143.66,933.06 1135.49,920.3 
                            1120.43,909.06 1111.49,907.28 "/>
                        </a>
                    </svg>

                    <img src="/images/atendimento_vivencias.jpg" className="img-background" />

                    <div className="navgation" style={{ top: 10 }}>
                        <Link href="/">
                            <a className="btn btn-light shadow-sm"><IoMdArrowBack size={20} /></a>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}