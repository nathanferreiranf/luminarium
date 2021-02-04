import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Context } from '../../../context/AuthContext';

import { IoMdArrowBack } from "react-icons/io";

import ReactGA from 'react-ga';

export default function Coerencia() {
    const { authenticated, checkAuthenticated } = useContext(Context);
    const urlMain = '/feira-bem-viver/coerencia';

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Feira bem viver - Coerência</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">
                        <Link href={`${urlMain}/apresentacao-video`}>
                            <a>
                                <polygon className="polygon" points="440,115 416,122.15 400.17,133.38 388.43,152.79 369.53,428.02 376.17,449.98 385.87,466.83 
                                    399.66,478.06 422.13,487.26 985.87,524.53 985.87,190.57 "/>
                            </a>
                        </Link>

                        <a href="https://www.instagram.com/chavecoerencia/" target="_blank">
                            <polygon className="polygon" points="1199.83,426.49 1197.79,434.66 1197.79,453.55 1201.87,459.68 1223.32,461.72 1230.98,456.11 
                                1230.98,434.15 1226.89,428.53 "/>
                        </a>
                        <a href="https://www.facebook.com/coerencia.oficial" target="_blank">
                            <polygon className="polygon" points="1342.3,440.28 1335.15,444.11 1332.85,449.72 1332.85,456.11 1335.15,461.72 1339.74,467.6 
                                1345.62,470.91 1355.57,470.91 1360.43,466.57 1364,460.45 1364,453.55 1360.17,446.66 1354.3,441.3 1348.43,440.28 "/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCoYx4ABUMT3bW8Gqy7xaVoQ" target="_blank">
                            <polygon className="polygon" points="1253.96,437.72 1253.96,457.13 1313.19,461.72 1315.74,444.11 "/>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=55351938012018" target="_blank">
                            <polygon className="polygon" points="1267.26,461.72 1266.21,489.14 1293.24,489.14 1294.52,462.94 "/>
                        </a>

                        
                        

                        <Link href={`${urlMain}/a-importancia-vital-de-sentir-video`}>
                            <a>
                                <polygon className="polygon" points="559.49,601.64 547.23,944.79 548.6,951.43 556.43,958.23 561.53,959.6 713.36,959.6 722.55,956.87 
                                    728,950.06 730.38,944.28 737.19,601.64 733.79,594.32 724.6,588.87 574.81,588.87 565.62,590.91 561.53,596.36 "/>
                            </a>
                        </Link>

                        <Link href={`${urlMain}/reestruturacao-molecular-da-agua-video`}>
                            <a>
                                <polygon className="polygon" points="812.43,661.38 809.7,807.43 811.06,814.23 821.28,819 1197.11,819 1202.55,815.94 1206.98,809.81 
                                    1205.28,662.74 1199.49,653.89 1191.66,650.49 824,650.49 816.17,654.57 "/>
                            </a>
                        </Link>
                    </svg>

                    <img src="/images/_04.png" className="img-background" />

                    <div className="navgation">
                        <Link href="/feira-bem-viver/stands">
                            <a className="btn btn-light shadow-sm"><IoMdArrowBack /></a>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}