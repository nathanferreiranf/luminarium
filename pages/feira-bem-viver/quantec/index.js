import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Context } from '../../../context/AuthContext';

import { IoMdArrowBack } from "react-icons/io";

import ReactGA from 'react-ga';

export default function Quantec() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Feira bem viver - Quantec</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">

                        <Link href='/feira-bem-viver/quantec/quantec-video'>
                            <a>
                                <polygon className="polygon" points="440.5,554.5 407.5,555.5 407.5,540.5 408.5,519.5 409.5,499.5 410.5,479.5 421.5,258.5 505.5,251.5 
                                606.5,243.5 693.5,235.5 793.5,226.5 882.5,218.5 972.5,211.5 1004.5,208.5 1004.5,232.5 1004.5,260.5 1004.5,531.5 885.5,535.5 
                                760.5,540.5 623.5,547.5 524.5,551.5 485.5,552.5"/>
                            </a>
                        </Link>

                        <a href="https://www.instagram.com/dra.ingridteixeira/" target="_blank">
                            <rect id="instagram_1_" x="1050.72" y="677.04" className="polygon" width="41.19" height="36.77"/>
                        </a>
                        <a href="mailto:contatodraingridteixeira@gmail.com" target="_blank">
                            <rect id="email_1_" x="1068.98" y="721.51" className="polygon" width="44.81" height="31.53"/>
                        </a>
                        <a href="http://www.draingridteixeira.com.br" target="_blank">
                            <rect id="site_1_" x="1096.43" y="677.04" className="polygon" width="34.72" height="35.79"/>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5521980970880" target="_blank">
                            <rect id="whatsapp_1_" x="1068.98" y="763.89" className="polygon" width="43.4" height="38.55"/>
                        </a>

                        <a href="mailto:contatodraingridteixeira@gmail.com" target="_blank">
                            <polygon className="polygon" points="1280.51,883.51 1280.51,917.72 1334.64,917.72 1332.6,883.51 "/>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5521980970880" target="_blank">
                            <polygon className="polygon" points="1343.32,883.51 1343.32,921.81 1389.28,921.81 1389.28,877.38 1343.32,877.38 "/>
                        </a>
                    </svg>

                    <img src="/images/_13.png" className="img-background" />

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