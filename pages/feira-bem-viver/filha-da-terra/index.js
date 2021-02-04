import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Context } from '../../../context/AuthContext';

import { IoMdArrowBack } from "react-icons/io";

import ReactGA from 'react-ga';

export default function FilhaDaTerra() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Feira bem viver - Filha da terra</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">

                        <a href="https://www.filhadaterra.com" target="_blank">
                        <polygon className="polygon" points="440,115 416,122.15 400.17,133.38 388.43,152.79 369.53,428.02 376.17,449.98 385.87,466.83 
	                        399.66,478.06 422.13,487.26 985.87,524.53 985.87,190.57 "/>
                        </a>

                        <a href="https://www.instagram.com/filhadaterra.aroma/" target="_blank">
                            <polygon className="polygon" points="1184.51,453.04 1176.68,460.53 1173.96,477.21 1176,490.49 1184.51,501.72 1199.49,507.51 
                                1216.51,504.45 1226.38,490.83 1228.77,473.81 1225.36,463.6 1214.47,453.04 1204.26,447.6 1191.66,447.6 "/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCMTsCsexJY7MNQMgooLIMRg?view_as=subscriber" target="_blank">
                            <polygon className="polygon" points="1255.66,445.89 1253.28,517.72 1409.19,531 1411.57,457.47 "/>
                        </a>

                        <a href="https://www.filhadaterra.com" target="_blank">
                            <polygon className="polygon" points="559.49,601.64 547.23,944.79 548.6,951.43 556.43,958.23 561.53,959.6 713.36,959.6 722.55,956.87 
                                728,950.06 730.38,944.28 737.19,601.64 733.79,594.32 724.6,588.87 574.81,588.87 565.62,590.91 561.53,596.36 "/>
                        </a>

                        <a href="https://www.filhadaterra.com" target="_blank">
                            <polygon className="polygon" points="812.43,661.38 809.7,807.43 811.06,814.23 821.28,819 1197.11,819 1202.55,815.94 1206.98,809.81 
                                1205.28,662.74 1199.49,653.89 1191.66,650.49 824,650.49 816.17,654.57 "/>
                        </a>
                    </svg>

                    <img src="/images/_12.png" className="img-background" />

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