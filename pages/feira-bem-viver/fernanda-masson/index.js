import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Context } from '../../../context/AuthContext';

import { IoMdArrowBack } from "react-icons/io";

import ReactGA from 'react-ga';

export default function FernandaMasson() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Feira bem viver - Fernanda Masson</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">
                        <Link href="/feira-bem-viver/fernanda-masson/video">
                            <a>
                                <polygon className="polygon" points="440,115 416,122.15 400.17,133.38 388.43,152.79 369.53,428.02 376.17,449.98 385.87,466.83 
                                        399.66,478.06 422.13,487.26 985.87,524.53 985.87,190.57 "/>
                            </a>
                        </Link>

                        <a href="https://api.whatsapp.com/send?phone=555521988867831" target="_blank">
                            <polygon className="polygon" points="1230.81,464.28 1221.96,474.15 1217.05,493.77 1217.25,507.49 1220.25,518.87 1236.6,518.87 
                                1257.02,518.87 1267.96,507.85 1273.02,495.22 1273.02,480.62 1262.46,468.62 1246.81,461.89 "/>
                        </a>
                        <a href="https://www.instagram.com/fernandamasson_fm/?igshid=6abnlnif2tzg" target="_blank">
                            <polygon className="polygon" points="1301.62,475.51 1297.05,484.7 1297.05,510.23 1299.33,520.43 1337.36,524.53 1344.51,520.43 
                                1344.51,483.68 1338.04,475.51 1320.78,473.13 "/>
                        </a>

                        <a href="https://instagram.com/fernandamasson_fm?igshid=6abnlnif2tzg" target="_blank">
                            <polygon className="polygon" points="559.49,601.64 547.23,944.79 548.6,951.43 556.43,958.23 561.53,959.6 713.36,959.6 722.55,956.87 
                                728,950.06 730.38,944.28 737.19,601.64 733.79,594.32 724.6,588.87 574.81,588.87 565.62,590.91 561.53,596.36 "/>
                        </a>

                        <a href="https://instagram.com/fernandamasson_fm?igshid=6abnlnif2tzg" target="_blank">
                            <polygon className="polygon" points="812.43,661.38 809.7,807.43 811.06,814.23 821.28,819 1197.11,819 1202.55,815.94 1206.98,809.81 
                                1205.28,662.74 1199.49,653.89 1191.66,650.49 824,650.49 816.17,654.57 "/>
                        </a>
                    </svg>

                    <img src="/images/_08.png" className="img-background" />

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