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
                <title>{process.env.APP_NAME} | Auditório 27/10</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">
                        <Link href="/auditorio/dias/27-10/izabella-camargo">
                            <a>
                                <path className="polygon" d="M965,354.5H582c-12.43,0-22.5-10.07-22.5-22.5v0c0-12.43,10.07-22.5,22.5-22.5h383
	                            c12.43,0,22.5,10.07,22.5,22.5v0C987.5,344.43,977.43,354.5,965,354.5z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/27-10/regina-restelli">
                            <a>
                                <path className="polygon" d="M966,412.43H584c-12.15,0-22-9.85-22-22v0c0-12.15,9.85-22,22-22h382c12.15,0,22,9.85,22,22v0
	                                C988,402.58,978.15,412.43,966,412.43z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/27-10/flavia-fernandes">
                            <a>
                                <path className="polygon" d="M964.5,472.5h-380c-12.15,0-22-9.85-22-22v0c0-12.15,9.85-22,22-22h380c12.15,0,22,9.85,22,22v0
	                            C986.5,462.65,976.65,472.5,964.5,472.5z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/27-10/sandra-rebello">
                            <a>
                                <path className="polygon" d="M966,530.43H584c-12.15,0-22-9.85-22-22v0c0-12.15,9.85-22,22-22h382c12.15,0,22,9.85,22,22v0
	                            C988,520.58,978.15,530.43,966,530.43z"/>
                            </a>
                        </Link>

                        <Link href="/auditorio/dias/27-10/natalie-favaron">
                            <a>
                                <path className="polygon" d="M963.71,589.07h-382c-12.15,0-22-9.85-22-22v0c0-12.15,9.85-22,22-22h382c12.15,0,22,9.85,22,22v0
	                            C985.71,579.22,975.86,589.07,963.71,589.07z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/27-10/ernani-fornari">
                            <a>
                                <path className="polygon" d="M964.71,646.07h-382c-12.15,0-22-9.85-22-22v0c0-12.15,9.85-22,22-22h382c12.15,0,22,9.85,22,22v0
	                            C986.71,636.22,976.86,646.07,964.71,646.07z"/>
                            </a>
                        </Link>

                        {/* Second column */}
                        <Link href="/auditorio/dias/27-10/dra-daniela-benzecry">
                            <a>
                                <path className="polygon" d="M1433.71,355.07h-382c-12.15,0-22-9.85-22-22v0c0-12.15,9.85-22,22-22h382c12.15,0,22,9.85,22,22v0
	                            C1455.71,345.22,1445.86,355.07,1433.71,355.07z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/27-10/yael-cayenne">
                            <a>
                                <path className="polygon" d="M1432.5,416.5h-379c-13.25,0-24-10.75-24-24v0c0-13.25,10.75-24,24-24h379c13.25,0,24,10.75,24,24v0
	                            C1456.5,405.75,1445.75,416.5,1432.5,416.5z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/27-10/roberto-crema">
                            <a>
                                <path className="polygon" d="M1432.5,476.5h-379c-13.25,0-24-10.75-24-24v0c0-13.25,10.75-24,24-24h379c13.25,0,24,10.75,24,24v0
	                            C1456.5,465.75,1445.75,476.5,1432.5,476.5z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/27-10/lucia-helena-galvao">
                            <a>
                                <path className="polygon" d="M1432.64,534.71h-379c-13.25,0-24-10.75-24-24v0c0-13.25,10.75-24,24-24h379c13.25,0,24,10.75,24,24v0
	                            C1456.64,523.97,1445.9,534.71,1432.64,534.71z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/27-10/nilton-bonder">
                            <a>
                                <path className="polygon" d="M1431.64,595.71h-377.03c-13.25,0-24-10.75-24-24v-0.21c0-13.25,10.75-24,24-24h377.03c13.25,0,24,10.75,24,24
	                            v0.21C1455.64,584.97,1444.9,595.71,1431.64,595.71z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/27-10/carolina-senna">
                            <a>
                                <path className="polygon" d="M1431.5,651.5h-378c-13.25,0-24-10.75-24-24l0,0c0-13.25,10.75-24,24-24h378c13.25,0,24,10.75,24,24l0,0
	                        C1455.5,640.75,1444.75,651.5,1431.5,651.5z"/>
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

                    <img src="/images/auditorios/27-10/auditorio.jpg" className="img-background" />
                </div>
            }
        </>
    )
}