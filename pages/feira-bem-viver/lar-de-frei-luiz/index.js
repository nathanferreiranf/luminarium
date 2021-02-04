import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Context } from '../../../context/AuthContext';

import { IoMdArrowBack } from "react-icons/io";

import ReactGA from 'react-ga';

export default function LarDeFreiLuiz() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Feira bem viver - Lar de Frei Luiz</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">

                        <Link href='/feira-bem-viver/lar-de-frei-luiz/frei-luiz-video'>
                            <a>
                                <polygon className="polygon" points="440.5,554.5 407.5,555.5 407.5,540.5 408.5,519.5 409.5,499.5 410.5,479.5 421.5,258.5 505.5,251.5 
                            606.5,243.5 693.5,235.5 793.5,226.5 882.5,218.5 972.5,211.5 1004.5,208.5 1004.5,232.5 1004.5,260.5 1004.5,531.5 885.5,535.5 
                            760.5,540.5 623.5,547.5 524.5,551.5 485.5,552.5"/>
                            </a>
                        </Link>

                        <a href="https://www.facebook.com/editorafreiluiz/" target="_blank">
                            <polygon className="polygon" points="1462.3,457.38 1463.83,493.13 1466.89,495.68 1501.36,494.4 1504.68,490.83 1502.89,455.34 
                                1499.83,451.77 1466.38,453.04 "/>
                        </a>
                        <a href="https://www.instagram.com/editora_freiluiz/" target="_blank">
                            <polygon className="polygon" points="1519.66,453.55 1520.51,489.13 1523.74,493.04 1558.81,491.51 1562.38,488.45 1561.53,453.55 
                                1557.79,448.45 1523.23,450.15 "/>
                        </a>

                        <a href="https://www.livrarialardefreiluiz.com.br" target="_blank">
                            <polygon className="polygon" points="764.5,812.5 908.5,813.5 1000.5,812.5 1126.5,813.5 1130.5,811.5 1134.5,807.5 1137.5,802.5 
                                1137.5,785.5 1135.5,663.5 1132.5,655.5 1127.5,652.5 1123.5,651.5 944.5,650.5 768.5,647.5 763.5,648.5 761.5,649.5 758.5,651.5 
                                756.5,654.5 755.5,656.5 754.5,658.5 754.5,661.5 754.5,704.5 752.5,798.5 753.5,803.5 754.5,806.5 757.5,810.5 760.5,811.5 "/>
                        </a>

                        <a href="https://www.lardefreiluiz.org.br" target="_blank">
                            <polygon className="polygon" points="1358.5,945.5 1263.5,945.5 1258.5,942.5 1254.5,938.5 1252.5,934.5 1251.5,932.5 1249.5,869.5 
                                1246.5,694.5 1243.5,609.5 1247.5,603.5 1251.5,599.5 1255.5,597.5 1260.5,597.5 1392.5,598.5 1395.5,599.5 1399.5,601.5 
                                1402.5,604.5 1406.5,610.5 1407.5,616.5 1407.5,625.5 1412.5,763.5 1416.5,899.5 1417.5,929.5 1417.5,933.5 1416.5,937.5 
                                1410.5,943.5 1406.5,944.5 1402.5,945.5 "/>
                        </a>
                    </svg>

                    <img src="/images/_05.png" className="img-background" />

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