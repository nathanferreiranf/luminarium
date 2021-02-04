import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Context } from '../../../context/AuthContext';

import { IoMdArrowBack } from "react-icons/io";

import ReactGA from 'react-ga';

export default function Well4AllHealthtech() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Feira bem viver - Well4All Healthtech</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">

                        <a href="https://www.youtube.com/channel/UCIncJa7qUsWx4aTTM438bNA" target="_blank">
                            <polygon className="polygon" points="440,115 416,122.15 400.17,133.38 388.43,152.79 369.53,428.02 376.17,449.98 385.87,466.83 
                                399.66,478.06 422.13,487.26 985.87,524.53 985.87,190.57 "/>
                        </a>

                        <a href="https://www.instagram.com/well4all_healthtech/" target="_blank">
                            <polygon id="instagram_1_" className="polygon" points="1185.87,459.85 1174.3,471.43 1169.87,486.06 1169.87,506.49 1185.87,519.43 
                                1209.02,519.43 1227.06,512.28 1236.6,500.36 1238.3,489.64 1234.89,477.89 1216.85,461.89 1195.74,456.79 "/>
                        </a>
                        <a href="https://www.linkedin.com/company/well4all-healthtech/" target="_blank">
                            <polygon id="linkedin_1_" className="polygon" points="1260.43,468.02 1241.7,478.23 1240,486.74 1240,501.04 1246.13,516.02 
                                1266.55,524.87 1290.04,524.87 1303.66,517.72 1303.66,504.11 1299.57,485.04 1296.51,470.4 1285.28,459.51 1267.23,464.96 "/>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5521972621170" target="_blank">
                            <polygon id="whatsapp_1_" className="polygon" points="1323.06,467.34 1305.36,474.83 1305.36,495.26 1314.21,524.87 1330.89,527.94 
                                1343.15,524.87 1356.09,527.94 1369.7,517.72 1365.62,501.38 1369.7,486.74 1354.38,469.04 "/>
                        </a>
                        <a href="https://www.facebook.com/bemestarcorporativo/" target="_blank">
                            <polygon id="facebook_1_" className="polygon" points="1389.79,474.15 1375.49,492.19 1372.77,505.47 1381.28,520.79 1393.19,535.09 
                                1418.04,536.79 1431.32,527.94 1436.77,514.66 1436.77,500.02 1424.85,481.98 1409.87,471.43 "/>
                        </a>
                        

                        <a href="https://hotm.art/bemestar_carreira" target="_blank">
                            <polygon className="polygon" points="559.49,601.64 547.23,944.79 548.6,951.43 556.43,958.23 561.53,959.6 713.36,959.6 722.55,956.87 
                                    728,950.06 730.38,944.28 737.19,601.64 733.79,594.32 724.6,588.87 574.81,588.87 565.62,590.91 561.53,596.36 "/>
                        </a>

                        <a href="http://well4all.com.br/" target="_blank">
                            <polygon className="polygon" points="812.43,661.38 809.7,807.43 811.06,814.23 821.28,819 1197.11,819 1202.55,815.94 1206.98,809.81 
                                    1205.28,662.74 1199.49,653.89 1191.66,650.49 824,650.49 816.17,654.57 "/>
                        </a>
                    </svg>

                    <img src="/images/_10.png" className="img-background" />

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