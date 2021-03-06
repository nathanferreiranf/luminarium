import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Context } from '../../../context/AuthContext';

import { IoMdArrowBack } from "react-icons/io";

import ReactGA from 'react-ga';

export default function Dental() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Feira bem viver - 021 Dental</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">

                        <Link href='/feira-bem-viver/021-dental/dental-video'>
                            <a>
                                <polygon className="polygon" points="440.5,554.5 407.5,555.5 407.5,540.5 408.5,519.5 409.5,499.5 410.5,479.5 421.5,258.5 505.5,251.5 
                            606.5,243.5 693.5,235.5 793.5,226.5 882.5,218.5 972.5,211.5 1004.5,208.5 1004.5,232.5 1004.5,260.5 1004.5,531.5 885.5,535.5 
                            760.5,540.5 623.5,547.5 524.5,551.5 485.5,552.5"/>
                            </a>
                        </Link>

                        <a href="https://www.instagram.com/021dental_clinica/" target="_blank">
                            <path id="instagram_1_" className="polygon" d="M1147.91,428.36l-7.49,4.43l-6.47,6.81l-4.09,9.7l-0.85,6.64l1.02,10.21l5.28,9.02l6.81,5.96
                                l6.64,2.72h6.64c0,0,7.15-1.36,7.83-1.36c0.68,0,8.34-4.43,8.34-4.43l5.62-6.47l4.6-11.4v-10.21l-2.89-10.55l-8-8.17l-9.7-4.09
                                l-8.51-0.85L1147.91,428.36z"/>
                        </a>
                        <a href="https://www.facebook.com/Clinica021Dental/" target="_blank">
                            <polygon id="facebook_1_" className="polygon" points="1215.32,421.21 1202.89,429.89 1196.43,438.91 1195.23,449.98 1196.43,461.55 
                                1205.28,472.28 1215.32,478.4 1224.51,478.4 1234.04,475.51 1243.74,467.34 1249.36,452.7 1249.36,443 1244.26,431.09 
                                1234.72,422.91 1228.77,421.21 "/>
                        </a>
                        <a href="https://twitter.com/021Dental" target="_blank">
                            <polygon id="twitter_1_" className="polygon" points="1283.06,416.96 1275.06,421.21 1267.4,427.68 1262.47,438.57 1261.28,446.06 
                                1263.66,460.19 1272.17,470.4 1285.11,475.85 1294.98,474.83 1304.85,469.55 1312.34,461.38 1316.6,452.36 1316.6,439.43 
                                1313.36,430.74 1306.38,422.06 1296,416.96 "/>
                        </a>
                        <a href="https://www.linkedin.com/company/021dental/" target="_blank">
                            <polygon id="linkedin_1_" className="polygon" points="1350.13,414.74 1341.45,418.66 1333.11,426.32 1328.85,435.17 1327.66,443.68 
                                1327.66,452.7 1336,465.98 1348.94,472.96 1361.02,472.96 1370.72,468.02 1379.23,459.85 1384,448.45 1384,439.43 1381.28,429.89 
                                1373.45,420.02 1364.09,414.74 "/>
                        </a>
                        <a href="https://www.youtube.com/channel/UC7IxUB_VLqHbj82h1-m-M1A" target="_blank">
                            <polygon id="youtube_1_" className="polygon" points="1417.87,410.83 1406.47,416.96 1399.49,425.64 1394.89,435.85 1396.43,446.4 
                                1400.51,457.3 1411.4,467.17 1422.47,469.38 1437.62,466.15 1447.83,455.94 1453.28,441.47 1451.91,428.87 1441.87,415.94 
                                1429.11,410.83 "/>
                        </a>

                        <a href="https://021dental.com.br/" target="_blank">
                            <polygon className="polygon" points="764.5,812.5 908.5,813.5 1000.5,812.5 1126.5,813.5 1130.5,811.5 1134.5,807.5 1137.5,802.5 
                                1137.5,785.5 1135.5,663.5 1132.5,655.5 1127.5,652.5 1123.5,651.5 944.5,650.5 768.5,647.5 763.5,648.5 761.5,649.5 758.5,651.5 
                                756.5,654.5 755.5,656.5 754.5,658.5 754.5,661.5 754.5,704.5 752.5,798.5 753.5,803.5 754.5,806.5 757.5,810.5 760.5,811.5 "/>
                        </a>

                        {/* Banner espaço 4 - Segundo link */}
                        <a href="https://www.instagram.com/021dental_clinica/" target="_blank">
                            <polygon id="instagraam_1_" className="polygon" points="1267.23,767.6 1258.3,772.45 1255.74,777.81 1255.74,787 1260.02,792.43 
                                1268.45,794.91 1277.77,790.19 1280.83,784.7 1281.15,777.74 1277.38,770.53 1269.72,767.91 "/>
                        </a>
                        <a href="https://www.facebook.com/Clinica021Dental/" target="_blank">
                            <polygon id="facebook_1_" className="polygon" points="1295.38,767.21 1286.19,776.15 1286.19,782.79 1295.38,793.26 1302.34,793.26 
                                1311.85,784.13 1311.85,776.15 1303.11,766.45 "/>
                        </a>
                        <a href="https://twitter.com/021Dental" target="_blank">
                            <polygon id="twitter_1_" className="polygon" points="1316.51,774.94 1316.51,784.57 1325.77,793.26 1334.77,793.26 1343.06,784.38 
                                1342.81,774.94 1333.81,766.45 1325.38,766.45 "/>
                        </a>
                        <a href="https://www.linkedin.com/company/021dental/" target="_blank">
                            <polygon id="linkedin_1_" className="polygon" points="1354.94,767.66 1346.13,777.23 1345.87,783.11 1354.94,792.94 1363.68,792.94 
                                1372.04,784.83 1372.04,776.09 1363.68,767.34 "/>
                        </a>
                        <a href="https://www.youtube.com/channel/UC7IxUB_VLqHbj82h1-m-M1A" target="_blank">
                            <polygon id="youtube_1_" className="polygon" points="1386.6,767.6 1376.89,775.13 1376.89,784.57 1385.45,792.94 1393.49,793.26 
                            1402.43,784.96 1402.43,777.17 1393.11,767.34 "/>
                        </a>
                        <a href="https://021dental.com.br/" target="_blank">
                            <polygon id="site_1_" className="polygon" points="1263.15,819.17 1263.15,863.09 1404.34,865.38 1402.3,819.17 "/>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=552122638960&text=Oi" target="_blank">
                            <polygon id="whatsapp_1_" className="polygon" points="1265.96,884.28 1265.96,928.7 1402.3,928.7 1401.28,884.28 "/>
                        </a>
                    </svg>

                    <img src="/images/_11.png" className="img-background" />

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