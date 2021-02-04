import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Context } from '../../../context/AuthContext';

import { IoMdArrowBack } from "react-icons/io";

import ReactGA from 'react-ga';

export default function Pensamento() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Feira bem viver - Pensamento</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">

                        <Link href='/feira-bem-viver/pensamento/pensamento-video'>
                            <a>
                                <polygon className="polygon" points="440.5,554.5 407.5,555.5 407.5,540.5 408.5,519.5 409.5,499.5 410.5,479.5 421.5,258.5 505.5,251.5 
                                606.5,243.5 693.5,235.5 793.5,226.5 882.5,218.5 972.5,211.5 1004.5,208.5 1004.5,232.5 1004.5,260.5 1004.5,531.5 885.5,535.5 
                                760.5,540.5 623.5,547.5 524.5,551.5 485.5,552.5"/>
                            </a>
                        </Link>

                        <a href="https://www.instagram.com/grupoeditorialpensamento/?hl=pt-br" target="_blank">
                            <polygon id="instagram_1_" className="polygon" points="1029.53,434.15 1020.6,438.49 1015.74,446.4 1015.74,454.57 1017.53,462.49 
                                1022.64,468.62 1031.57,470.15 1042.3,467.6 1049.19,460.45 1052.26,448.7 1046.89,438.49 1036.17,432.87 "/>
                        </a>
                        <a href="https://www.facebook.com/grupoeditorialpensamento" target="_blank">
                            <polygon id="facebook_1_" className="polygon" points="1029.53,486.74 1020.09,490.83 1015.74,499.26 1014.21,505.89 1015.74,513.81 
                                1024.68,519.43 1032.85,520.96 1042.3,518.66 1048.43,510.49 1049.7,501.55 1046.89,492.87 1039.74,486.74 "/>
                        </a>
                        <a href="https://twitter.com/grupopensamento" target="_blank">
                            <polygon id="twitter_1_" className="polygon" points="1243.74,428.53 1235.83,434.91 1232,443.09 1232,450.74 1233.79,457.13 1239.4,461.98 
                                1249.11,464.02 1257.28,461.98 1262.89,455.85 1265.7,448.19 1265.7,441.55 1262.38,434.91 1258.3,430.57 1254.21,428.53 "/>
                        </a>
                        <a href="https://www.youtube.com/user/EditoraPensamento" target="_blank">
                            <polygon id="youtube_1_" className="polygon" points="1414.81,458.66 1405.11,466.06 1401.02,473.72 1401.02,485.98 1406.38,494.66 
                                1414.81,499.51 1424,499.51 1433.19,493.13 1438.3,483.68 1438.3,472.7 1431.91,464.02 1424,458.66 "/>
                        </a>


                        <a href="http://www.grupopensamento.com.br" target="_blank">
                            <polygon className="polygon" points="764.5,812.5 908.5,813.5 1000.5,812.5 1126.5,813.5 1130.5,811.5 1134.5,807.5 1137.5,802.5 
                                1137.5,785.5 1135.5,663.5 1132.5,655.5 1127.5,652.5 1123.5,651.5 944.5,650.5 768.5,647.5 763.5,648.5 761.5,649.5 758.5,651.5 
                                756.5,654.5 755.5,656.5 754.5,658.5 754.5,661.5 754.5,704.5 752.5,798.5 753.5,803.5 754.5,806.5 757.5,810.5 760.5,811.5 "/>
                        </a>

                        <a href="http://arquivos.grupopensamento.com.br/doc/Folheto_luminarium.pdf" target="_blank">
                            <polygon className="polygon" points="1358.5,945.5 1263.5,945.5 1258.5,942.5 1254.5,938.5 1252.5,934.5 1251.5,932.5 1249.5,869.5 
                                1246.5,694.5 1243.5,609.5 1247.5,603.5 1251.5,599.5 1255.5,597.5 1260.5,597.5 1392.5,598.5 1395.5,599.5 1399.5,601.5 
                                1402.5,604.5 1406.5,610.5 1407.5,616.5 1407.5,625.5 1412.5,763.5 1416.5,899.5 1417.5,929.5 1417.5,933.5 1416.5,937.5 
                                1410.5,943.5 1406.5,944.5 1402.5,945.5 "/>
                        </a>
                    </svg>

                    <img src="/images/_01.png" className="img-background" />

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