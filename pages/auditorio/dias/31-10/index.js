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
                <title>{process.env.APP_NAME} | Auditório 31/10</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">
                        <Link href="/auditorio/dias/31-10/dr-carlos-veiga">
                            <a>
                                <path className="polygon" d="M942,384.5H566c-12.98,0-23.5-10.52-23.5-23.5v0c0-12.98,10.52-23.5,23.5-23.5h376
	                            c12.98,0,23.5,10.52,23.5,23.5v0C965.5,373.98,954.98,384.5,942,384.5z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/31-10/dr-leonardo-machado">
                            <a>
                            <path className="polygon" d="M943.29,442.79h-376c-12.98,0-23.5-10.52-23.5-23.5v0c0-12.98,10.52-23.5,23.5-23.5h376
	                            c12.98,0,23.5,10.52,23.5,23.5v0C966.79,432.26,956.26,442.79,943.29,442.79z"/>                                
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/31-10/andre-trigueiro">
                            <a>
                            <path className="polygon" d="M942.29,499.79h-376c-12.98,0-23.5-10.52-23.5-23.5v0c0-12.98,10.52-23.5,23.5-23.5h376
	                            c12.98,0,23.5,10.52,23.5,23.5v0C965.79,489.26,955.26,499.79,942.29,499.79z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/31-10/tatiana-auler">
                            <a>
                            <path className="polygon" d="M942.29,559.79h-376c-12.98,0-23.5-10.52-23.5-23.5v0c0-12.98,10.52-23.5,23.5-23.5h376
	                            c12.98,0,23.5,10.52,23.5,23.5v0C965.79,549.26,955.26,559.79,942.29,559.79z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/31-10/dr-antonio-de-ribeiro">
                            <a>
                            <path className="polygon" d="M943.29,620.07h-376c-12.98,0-23.5-10.52-23.5-23.5v0c0-12.98,10.52-23.5,23.5-23.5h376
	                            c12.98,0,23.5,10.52,23.5,23.5v0C966.79,609.55,956.26,620.07,943.29,620.07z"/>
                            </a>
                        </Link>

                        {/* Second column */}
                        <Link href="/auditorio/dias/31-10/dr-jose-felipe-junior">
                            <a>
                            <path className="polygon" d="M1405.29,384.07h-376c-12.98,0-23.5-10.52-23.5-23.5v0c0-12.98,10.52-23.5,23.5-23.5h376
	                        c12.98,0,23.5,10.52,23.5,23.5v0C1428.79,373.55,1418.26,384.07,1405.29,384.07z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/31-10/dr-antonio-jimenez">
                            <a>
                            <path className="polygon" d="M1403.86,441.57h-376c-12.98,0-23.5-10.52-23.5-23.5v0c0-12.98,10.52-23.5,23.5-23.5h376
	                            c12.98,0,23.5,10.52,23.5,23.5v0C1427.36,431.05,1416.84,441.57,1403.86,441.57z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/31-10/rachel-epstein">
                            <a>
                            <path className="polygon" d="M1404.86,500.57h-376c-12.98,0-23.5-10.52-23.5-23.5v0c0-12.98,10.52-23.5,23.5-23.5h376
	                            c12.98,0,23.5,10.52,23.5,23.5v0C1428.36,490.05,1417.84,500.57,1404.86,500.57z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/31-10/dr-paulo-cesar-fructuoso">
                            <a>
                            <path className="polygon" d="M1405.43,561.07h-376c-12.98,0-23.5-10.52-23.5-23.5v0c0-12.98,10.52-23.5,23.5-23.5h376
	                            c12.98,0,23.5,10.52,23.5,23.5v0C1428.93,550.55,1418.41,561.07,1405.43,561.07z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/31-10/dr-rollin-mccraty">
                            <a>
                            <path className="polygon" d="M1404.29,620.64h-376c-12.98,0-23.5-10.52-23.5-23.5v0c0-12.98,10.52-23.5,23.5-23.5h376
	                            c12.98,0,23.5,10.52,23.5,23.5v0C1427.79,610.12,1417.26,620.64,1404.29,620.64z"/>
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
                                1976.49,674.47 1984.83,677.36 1990.28,681.45 1948.4,198.21"/>
                        </a>
                    </svg>

                    <div className="navgation" style={{ top: 10 }}>
                        <Link href="/auditorio">
                            <a className="btn btn-light shadow-sm"><IoMdArrowBack size={20} /></a>
                        </Link>
                    </div>

                    <img src="/images/auditorios/31-10/auditorio.jpg" className="img-background" />
                </div>
            }
        </>
    )
}