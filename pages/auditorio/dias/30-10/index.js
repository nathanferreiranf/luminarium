import React, { useContext, useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Head from 'next/head';
import { Context } from '../../../../context/AuthContext';
import { IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';
import ReactGA from 'react-ga';

export default function Auditorio() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Auditório 30/10</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">
                        <Link href="/auditorio/dias/30-10/dr-carlos-orozco">
                            <a> 
                                <path className="polygon" d="M943,359.5H564c-12.43,0-22.5-10.07-22.5-22.5v0c0-12.43,10.07-22.5,22.5-22.5h379
	                                c12.43,0,22.5,10.07,22.5,22.5v0C965.5,349.43,955.43,359.5,943,359.5z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/30-10/dr-antonio-ricardo-nahas">
                            <a>
                            <path className="polygon" d="M943.07,417.57h-379c-12.43,0-22.5-10.07-22.5-22.5v0c0-12.43,10.07-22.5,22.5-22.5h379
	                        c12.43,0,22.5,10.07,22.5,22.5v0C965.57,407.5,955.5,417.57,943.07,417.57z"/> 
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/30-10/dra-andrea-augusta-castro">
                            <a>
                            <path className="polygon" d="M944.07,475.57h-379c-12.43,0-22.5-10.07-22.5-22.5v0c0-12.43,10.07-22.5,22.5-22.5h379
	                            c12.43,0,22.5,10.07,22.5,22.5v0C966.57,465.5,956.5,475.57,944.07,475.57z"/> 
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/30-10/dr-augusto-braga">
                            <a>
                            <path className="polygon" d="M943.07,534.57h-379c-12.43,0-22.5-10.07-22.5-22.5v0c0-12.43,10.07-22.5,22.5-22.5h379
	                            c12.43,0,22.5,10.07,22.5,22.5v0C965.57,524.5,955.5,534.57,943.07,534.57z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/30-10/dra-carolina-nocetti">
                            <a>
                            <path className="polygon" d="M943.07,593.57h-379c-12.43,0-22.5-10.07-22.5-22.5v0c0-12.43,10.07-22.5,22.5-22.5h379
	                            c12.43,0,22.5,10.07,22.5,22.5v0C965.57,583.5,955.5,593.57,943.07,593.57z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/30-10/dr-marcos-mundim">
                            <a>
                            <path className="polygon" d="M944.07,653.86h-379c-12.43,0-22.5-10.07-22.5-22.5v0c0-12.43,10.07-22.5,22.5-22.5h379
	                            c12.43,0,22.5,10.07,22.5,22.5v0C966.57,643.78,956.5,653.86,944.07,653.86z"/>
                            </a>
                        </Link>

                        {/* Second column */}
                        <Link href="/auditorio/dias/30-10/dr-matheus-macedo">
                            <a>
                            <path className="polygon" d="M1405.64,360.43h-379c-12.43,0-22.5-10.07-22.5-22.5v0c0-12.43,10.07-22.5,22.5-22.5h379
	                            c12.43,0,22.5,10.07,22.5,22.5v0C1428.14,350.35,1418.07,360.43,1405.64,360.43z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/30-10/dra-eleanor-luzes">
                            <a>
                            <path className="polygon" d="M1405.07,418.29h-379c-12.43,0-22.5-10.07-22.5-22.5v0c0-12.43,10.07-22.5,22.5-22.5h379
	                            c12.43,0,22.5,10.07,22.5,22.5v0C1427.57,408.21,1417.5,418.29,1405.07,418.29z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/30-10/list-dra-31-10">
                            <a>
                            <path className="polygon" d="M1402.21,531.5h-373.43c-13.96,0-25.29-11.32-25.29-25.29v-49.43c0-13.96,11.32-25.29,25.29-25.29h373.43
	                            c13.96,0,25.29,11.32,25.29,25.29v49.43C1427.5,520.18,1416.18,531.5,1402.21,531.5z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/30-10/dr-alexandre-leonel">
                            <a>
                            <path className="polygon" d="M1407.21,594.64h-379c-12.43,0-22.5-10.07-22.5-22.5v0c0-12.43,10.07-22.5,22.5-22.5h379
	                            c12.43,0,22.5,10.07,22.5,22.5v0C1429.71,584.57,1419.64,594.64,1407.21,594.64z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/30-10/monica-oliveira">
                            <a>
                            <path className="polygon" d="M1406.21,653.64h-379c-12.43,0-22.5-10.07-22.5-22.5v0c0-12.43,10.07-22.5,22.5-22.5h379
	                            c12.43,0,22.5,10.07,22.5,22.5v0C1428.71,643.57,1418.64,653.64,1406.21,653.64z"/>
                            </a>
                        </Link>

                        <Link href="/programacao">
                            <a>
                                <polygon id="programacao_1_" className="polygon" points="42.96,188.51 0,614.38 0,666.72 3.89,666.72 13.09,669.53 25.85,673.87 
                                    29.43,678.21 26.87,683.06 26.87,689.96 25.6,695.32 31.21,699.91 27.64,704 25.85,716 10.02,717.53 5.17,720.85 26.36,720.85 
                                    38.36,714.47 48.83,720.85 74.62,720.85 71.3,712.43 74.62,698.64 101.94,686.13 119.04,685.62 123.64,672.09 135.64,664.68 
                                    151.47,666.21 157.85,674.64 154.79,686.89 153,693.79 158.87,699.91 158.87,694.3 163.21,685.87 204.32,191.57 "/>
                            </a>
                        </Link>

                        <a href="https://www.sympla.com.br/o-despertar-de-uma-nova-consciencia__776718?token=a48b998c26ecbf6d38658ea7b9ba9736" target="_blank">
                            <polygon id="ingressos_1_" className="polygon" points="1807.3,194.47 1845.09,685.02 1849.17,692.34 1851.04,698.98 1848.49,711.57 
                                1853.6,706.13 1860.23,702.21 1867.55,695.23 1886.79,690.98 1905.17,693.36 1918.45,702.55 1922.87,711.57 1927.81,718.04 
                                1956.06,718.04 1956.06,713.28 1951.64,714.64 1946.36,706.81 1945.17,698.64 1948.06,682.98 1955.21,675.66 1965.77,674.3 
                                1976.49,674.47 1984.83,677.36 1990.28,681.45 1948.4,198.21 "/>
                        </a>
                    </svg>

                    <div className="navgation" style={{ top: 10 }}>
                        <Link href="/auditorio">
                            <a className="btn btn-light shadow-sm"><IoMdArrowBack size={20} /></a>
                        </Link>
                    </div>

                    <img src="/images/auditorios/30-10/auditorio.jpg" className="img-background" />
                </div>
            }
        </>
    )
}