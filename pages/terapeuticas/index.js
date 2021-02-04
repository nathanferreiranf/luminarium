import React, {useContext, useState, useEffect} from 'react';
import Head from 'next/head';
import {Context} from '../../context/AuthContext';
import Link from 'next/link';
import { IoMdArrowBack } from "react-icons/io";
import ReactGA from 'react-ga';

export default function TerapeuticasHall() {
    const {authenticated, checkAuthenticated} = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Terapêuticas</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1060" preserveAspectRatio="none">
                        <Link href="/terapeuticas/hall">
                            <a>
                                <polygon className="polygon" points="934.28,881.72 922.28,887.34 916.15,895.26 913.09,903.68 913.09,912.62 917.43,922.83 923.68,929.47 
                                934.28,934.57 1066.79,934.57 1074.7,930.74 1081.85,925.38 1086.19,917.21 1087.72,908.15 1085.17,898.83 1079.55,890.15 
                                1070.62,884.28 1061.43,881.72 "/>
                            </a>
                        </Link>
                    </svg>
                    <img src="/images/terapeuticas-entrada.jpg" className="img-background" />

                    <div className="navgation">
                        <Link href="/">
                            <a className="btn btn-light shadow-sm"><IoMdArrowBack /></a>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}