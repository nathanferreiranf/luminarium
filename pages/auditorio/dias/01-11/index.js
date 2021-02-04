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
                <title>{process.env.APP_NAME} | Auditório 01/11</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">
                        <Link href="/auditorio/dias/01-11/vinicius-santana">
                            <a>
                                <path className="polygon" d="M951.5,355.5h-376c-12.7,0-23-10.3-23-23v0c0-12.7,10.3-23,23-23h376c12.7,0,23,10.3,23,23v0
	                            C974.5,345.2,964.2,355.5,951.5,355.5z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/01-11/dr-francisco-di-biase">
                            <a>
                                <path className="polygon" d="M951.71,414.71h-376c-12.7,0-23-10.3-23-23v0c0-12.7,10.3-23,23-23h376c12.7,0,23,10.3,23,23v0
	                            C974.71,404.42,964.42,414.71,951.71,414.71z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/01-11/sophie-hellinger">
                            <a>
                                <path className="polygon" d="M952.71,472.71h-376c-12.7,0-23-10.3-23-23v0c0-12.7,10.3-23,23-23h376c12.7,0,23,10.3,23,23v0
	                            C975.71,462.42,965.42,472.71,952.71,472.71z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/01-11/regina-santos">
                            <a>
                                <path className="polygon" d="M952.71,530.86h-376c-12.7,0-23-10.3-23-23v0c0-12.7,10.3-23,23-23h376c12.7,0,23,10.3,23,23v0
	                        C975.71,520.56,965.42,530.86,952.71,530.86z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/01-11/ken-o-donnell">
                            <a>
                                <path className="polygon" d="M952.71,590.86h-376c-12.7,0-23-10.3-23-23v0c0-12.7,10.3-23,23-23h376c12.7,0,23,10.3,23,23v0
	                        C975.71,580.56,965.42,590.86,952.71,590.86z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/01-11/dr-jose-carlos-coelho">
                            <a>
                                <path className="polygon" d="M952.71,649.07h-376c-12.7,0-23-10.3-23-23v0c0-12.7,10.3-23,23-23h376c12.7,0,23,10.3,23,23v0
	                            C975.71,638.77,965.42,649.07,952.71,649.07z"/>
                            </a>
                        </Link>

                        {/* Second column */}
                        <Link href="/auditorio/dias/01-11/dra-cristina-rohr">
                            <a>
                            <path className="polygon" d="M1379.86,311.21h40.71c12.7,0,23,10.3,23,23v0c0,12.7-10.3,23-23,23h-376c-12.7,0-23-10.3-23-23v0
	                        c0-12.7,10.3-23,23-23H1379.86"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/01-11/dr-carlos-ocke">
                            <a>
                            <path className="polygon" d="M1379.43,370h40.71c12.7,0,23,10.3,23,23v0c0,12.7-10.3,23-23,23h-376c-12.7,0-23-10.3-23-23v0
	                            c0-12.7,10.3-23,23-23H1379.43"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/01-11/dr-wecisley-r-do-espirito-santo">
                            <a>
                            <path className="polygon" d="M1380.29,429.29H1421c12.7,0,23,10.3,23,23v0c0,12.7-10.3,23-23,23h-376c-12.7,0-23-10.3-23-23v0
	                        c0-12.7,10.3-23,23-23H1380.29"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/01-11/henrique-vieira">
                            <a>
                            <path className="polygon" d="M1379.71,487.86h40.71c12.7,0,23,10.3,23,23v0c0,12.7-10.3,23-23,23h-376c-12.7,0-23-10.3-23-23v0
	                            c0-12.7,10.3-23,23-23H1379.71"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/01-11/rossandro-klinjey">
                            <a>
                            <path className="polygon" d="M1379.29,546.79H1420c12.7,0,23,10.3,23,23v0c0,12.7-10.3,23-23,23h-376c-12.7,0-23-10.3-23-23v0
	                        c0-12.7,10.3-23,23-23H1379.29"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/01-11/manifesto">
                            <a>
                            <path className="polygon" d="M1379.29,604.79H1420c12.7,0,23,10.3,23,23v0c0,12.7-10.3,23-23,23h-376c-12.7,0-23-10.3-23-23v0
	                            c0-12.7,10.3-23,23-23H1379.29"/>
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

                    <img src="/images/auditorios/01-11/auditorio.jpg" className="img-background" />
                </div>
            }
        </>
    )
}