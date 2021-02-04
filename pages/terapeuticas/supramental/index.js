import React, {useContext, useState, useEffect} from 'react';
import Head from 'next/head';
import {Context} from '../../../context/AuthContext';
import Link from 'next/link';
import ReactGA from 'react-ga';

export default function supramental() {
    const {authenticated, checkAuthenticated} = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Supramental</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1090" preserveAspectRatio="none">
                        <Link href="/terapeuticas/supramental/hipnoterapia">
                            <a>
                                <polygon id="btn_x5F_1_1_" className="polygon" points="627.13,754.26 618.7,766.51 618.7,797.91 622.91,807.87 948.06,807.87 
                                    955.38,803.36 958.45,796.21 958.45,761.83 955.38,754.26 947.89,749.91 631.64,749.91 "/>
                            </a>
                        </Link>
                        <Link href="/terapeuticas/supramental/musica-terapeutica">
                            <a>
                                <polygon id="btn_x5F_3_1_" className="polygon" points="631.64,815.62 623.13,820.72 618.7,827.53 618.7,863.28 622.11,870.09 
                                    628.91,874.17 946.87,874.17 953.34,870.77 958.45,863.28 958.45,825.49 954.7,819.02 948.23,815.62 "/>
                            </a>
                        </Link>
                        <Link href="/terapeuticas/supramental/meditatividade">
                            <a>
                                <polygon id="btn_x5F_2_1_" className="polygon" points="1026.19,749.91 1020.4,752.98 1017,760.13 1017,796.89 1021.6,804.38 
                                    1027.89,807.87 1346.19,807.87 1352.66,803.7 1356.74,795.53 1356.74,761.15 1349.6,753.32 1343.13,749.91 "/>
                            </a>
                        </Link>
                        <Link href="/terapeuticas/supramental/ser-consciencia">
                            <a>
                                <polygon id="btn_x5F_4_1_" className="polygon" points="1026.53,815.62 1020.74,818 1017,824.81 1017,862.26 1020.4,869.06 1026.53,875.53 
                                    1347.55,875.53 1354.02,869.74 1356.74,863.28 1356.74,826.51 1350.96,818.68 1343.81,815.62 "/>
                            </a>
                        </Link>
                        <Link href="/terapeuticas/hall">
                            <a>
                                <polygon id="voltar_1_" className="polygon" points="974.62,973.57 945.77,976.64 917.17,989.91 905.43,1001.66 901.09,1011.87 
                                    902.62,1022.85 909.77,1032.04 923.81,1042.26 937.85,1049.15 958.45,1053.74 977.43,1055.53 995.3,1055.53 1010.62,1052.72 
                                    1029.51,1047.36 1044.32,1039.19 1055.3,1029.23 1060.4,1019.28 1060.4,1011.36 1056.32,1000.89 1049.43,992.21 1040.23,986.6 
                                    1030.79,981.49 1019.3,977.4 1007.55,975.36 992.23,973.57 "/>
                            </a>
                        </Link>
                    </svg>

                    <img src="/images/supramental.jpg" className="img-background" />
                </div>
            }
        </>
    )
}   