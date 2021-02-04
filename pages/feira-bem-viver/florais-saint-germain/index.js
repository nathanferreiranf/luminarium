import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Context } from '../../../context/AuthContext';

import { IoMdArrowBack } from "react-icons/io";

import ReactGA from 'react-ga';

export default function FloraisSaintGermain() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Feira bem viver - Florais Saint Germain</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">
                        <Link href="/feira-bem-viver/florais-saint-germain/desperte-sua-essencia-video">
                            <a>
                                <polygon className="polygon" points="440,115 416,122.15 400.17,133.38 388.43,152.79 369.53,428.02 376.17,449.98 385.87,466.83 
                                    399.66,478.06 422.13,487.26 985.87,524.53 985.87,190.57 "/>
                            </a>
                        </Link>

                        <a href="http://fsg.com.br/" target="_blank">
                            <polygon className="polygon" points="987.91,191.6 987.91,525.55 1561.36,565.38 1547.06,268.19 "/>
                        </a>

                        <Link href="/feira-bem-viver/florais-saint-germain/como-selecionar-sua-forrmula-video">
                            <a>
                                <polygon className="polygon" points="559.49,601.64 547.23,944.79 548.6,951.43 556.43,958.23 561.53,959.6 713.36,959.6 722.55,956.87 
                                    728,950.06 730.38,944.28 737.19,601.64 733.79,594.32 724.6,588.87 574.81,588.87 565.62,590.91 561.53,596.36 "/>
                            </a>
                        </Link>

                        <Link href="/feira-bem-viver/florais-saint-germain/formula-compostas-prontas-video">
                            <a>
                                <polygon className="polygon" points="812.43,661.38 809.7,807.43 811.06,814.23 821.28,819 1197.11,819 1202.55,815.94 1206.98,809.81 
                                    1205.28,662.74 1199.49,653.89 1191.66,650.49 824,650.49 816.17,654.57 "/>
                            </a>
                        </Link>
                    </svg>

                    <img src="/images/_02.png" className="img-background" />

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