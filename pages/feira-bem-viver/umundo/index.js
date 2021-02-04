import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Context } from '../../../context/AuthContext';

import { IoMdArrowBack } from "react-icons/io";

import ReactGA from 'react-ga';

export default function UMundo() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Feira bem viver - UMundo</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">

                        <Link href='/feira-bem-viver/umundo/umundo-video'>
                            <a>
                                <polygon className="polygon" points="440.5,554.5 407.5,555.5 407.5,540.5 408.5,519.5 409.5,499.5 410.5,479.5 421.5,258.5 505.5,251.5 
                            606.5,243.5 693.5,235.5 793.5,226.5 882.5,218.5 972.5,211.5 1004.5,208.5 1004.5,232.5 1004.5,260.5 1004.5,531.5 885.5,535.5 
                            760.5,540.5 623.5,547.5 524.5,551.5 485.5,552.5"/>
                            </a>
                        </Link>

                        {/* No momento o link não está funcionando */}
                        <a href="https://umundotattoo.lojavirtualnuvem.com.br/" target="_blank">
                            <polygon className="polygon" points="1358.5,945.5 1263.5,945.5 1258.5,942.5 1254.5,938.5 1252.5,934.5 1251.5,932.5 1249.5,869.5 
                                1246.5,694.5 1243.5,609.5 1247.5,603.5 1251.5,599.5 1255.5,597.5 1260.5,597.5 1392.5,598.5 1395.5,599.5 1399.5,601.5 
                                1402.5,604.5 1406.5,610.5 1407.5,616.5 1407.5,625.5 1412.5,763.5 1416.5,899.5 1417.5,929.5 1417.5,933.5 1416.5,937.5 
                                1410.5,943.5 1406.5,944.5 1402.5,945.5 "/>
                        </a>

                        <a href="https://www.instagram.com/umundotattoo" target="_blank">
                            <polygon className="polygon" points="1233.79,454.83 1229.96,457.64 1227.71,462 1227.71,474.49 1228.43,482.16 1229.45,494.66 
                                1231.74,498.36 1235.83,501.17 1248.59,501.61 1259.07,501.23 1269.4,500.15 1273.23,497.7 1275.53,494.91 1276.6,480.75 
                                1276.25,470.92 1275.15,459.04 1272.6,454.83 1267.23,452.91 1251.15,452.91 "/>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5521994309744" target="_blank">
                            <polygon className="polygon" points="1317.01,448.5 1308.85,451.82 1301.57,457.77 1297.62,465.17 1296.69,474.63 1297.74,479.72 
                                1300.68,485.34 1297.52,497.7 1310.38,493.89 1314.72,495.68 1319.32,496.91 1326.09,496.67 1333.87,494.15 1340.89,488.91 
                                1346.26,481 1347.75,471.18 1344.85,460.57 1337.7,452.91 1328.26,448.5 "/>
                        </a>
                    </svg>

                    <img src="/images/_14.png" className="img-background" />

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