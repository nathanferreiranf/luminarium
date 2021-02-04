import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Context } from '../../../context/AuthContext';

import { IoMdArrowBack } from "react-icons/io";

import ReactGA from 'react-ga';

export default function Personare() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Feira bem viver - Personare</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">
                        <a href="https://www.personare.com.br" target="_blank">
                            <polygon className="polygon" points="440,115 416,122.15 400.17,133.38 388.43,152.79 369.53,428.02 376.17,449.98 385.87,466.83 
                                399.66,478.06 422.13,487.26 985.87,524.53 985.87,190.57 "/>
                        </a>

                        <a href="https://www.facebook.com/PersonareOficial" target="_blank">
                            <polygon className="polygon" points="1152.34,443.34 1140.6,449.47 1134.47,465.81 1138.04,478.57 1147.23,491.85 1160,499.51 
                                1170.21,499.51 1183.49,496.45 1195.23,484.19 1195.23,468.87 1191.66,456.11 1178.89,446.4 1164.85,443.34 "/>
                        </a>
                        <a href="https://twitter.com/personare" target="_blank">
                            <polygon className="polygon" points="1236.6,449.21 1226.13,455.09 1220,460.96 1216.94,467.85 1216.94,479.6 1218.72,487.51 
                                1223.32,494.66 1231.74,502.32 1240.68,505.89 1249.87,506.91 1260.6,505.13 1269.02,499.51 1273.62,493.38 1276.17,485.72 
                                1276.17,477.04 1272.6,467.09 1266.47,459.17 1257.79,453.04 1249.62,450.49 "/>
                        </a>
                        <a href="https://www.instagram.com/personareoficial/" target="_blank">
                            <polygon className="polygon" points="1308.6,460.19 1301.7,466.06 1296.6,474.49 1296.6,484.45 1296.6,492.11 1302.6,501.81 1311.91,509.72 
                                1322.13,513.04 1329.28,514.57 1339.74,511.77 1348.94,504.87 1353.28,497.98 1354.81,486.23 1351.74,476.28 1346.64,469.64 
                                1338.21,463 1328.77,458.4 1317.79,457.13 "/>
                        </a>
                        <a href="https://www.youtube.com/user/PersonareVideos" target="_blank">
                            <polygon className="polygon" points="1382.38,470.15 1375.49,478.06 1372.17,488.53 1373.96,501.04 1380.09,510.49 1387.49,516.62 
                                1396.94,520.96 1405.87,520.96 1412.51,520.96 1421.45,516.11 1427.32,509.47 1430.64,501.04 1430.64,488.53 1425.28,481.89 
                                1418.89,473.47 1411.23,467.34 1397.7,465.81 1388.26,467.6 "/>
                        </a>


                        <a href="https://www.personare.com.br/astrologia/horoscopo" target="_blank">
                            <polygon className="polygon" points="559.49,601.64 547.23,944.79 548.6,951.43 556.43,958.23 561.53,959.6 713.36,959.6 722.55,956.87 
                                728,950.06 730.38,944.28 737.19,601.64 733.79,594.32 724.6,588.87 574.81,588.87 565.62,590.91 561.53,596.36 "/>
                        </a>

                        <a href="https://www.personare.com.br/astrologia/mapa-astral" target="_blank">
                            <polygon className="polygon" points="812.43,661.38 809.7,807.43 811.06,814.23 821.28,819 1197.11,819 1202.55,815.94 1206.98,809.81 
                                1205.28,662.74 1199.49,653.89 1191.66,650.49 824,650.49 816.17,654.57 "/>
                        </a>
                    </svg>

                    <img src="/images/_06.png" className="img-background" />

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