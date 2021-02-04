import React, { useContext, useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Head from 'next/head';
import { Context } from '../../context/AuthContext';
import { IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';
import ReactGA from 'react-ga';

export default function Auditorio() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Auditório</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">
                        <Link href="/auditorio/dias/27-10">
                            <a>
                                <path className="polygon" d="M614.43,591.93h-86c-17.95,0-32.5-14.55-32.5-32.5v0c0-17.95,14.55-32.5,32.5-32.5h86
	                                c17.95,0,32.5,14.55,32.5,32.5v0C646.93,577.38,632.38,591.93,614.43,591.93z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/28-10">
                            <a>
                                <path className="polygon" d="M784.57,592.21h-86c-17.95,0-32.5-14.55-32.5-32.5v0c0-17.95,14.55-32.5,32.5-32.5h86
	                            c17.95,0,32.5,14.55,32.5,32.5v0C817.07,577.66,802.52,592.21,784.57,592.21z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/29-10">
                            <a>
                                <path className="polygon" d="M954,591.5h-86c-17.95,0-32.5-14.55-32.5-32.5v0c0-17.95,14.55-32.5,32.5-32.5h86c17.95,0,32.5,14.55,32.5,32.5
	                            v0C986.5,576.95,971.95,591.5,954,591.5z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/30-10">
                            <a>
                                <path className="polygon" d="M1122,591.5h-84c-17.95,0-32.5-14.55-32.5-32.5v0c0-17.95,14.55-32.5,32.5-32.5h84
	                            c17.95,0,32.5,14.55,32.5,32.5v0C1154.5,576.95,1139.95,591.5,1122,591.5z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/31-10">
                            <a>
                                <path className="polygon" d="M1292.86,591.79h-84c-17.95,0-32.5-14.55-32.5-32.5v0c0-17.95,14.55-32.5,32.5-32.5h84
	                            c17.95,0,32.5,14.55,32.5,32.5v0C1325.36,577.23,1310.81,591.79,1292.86,591.79z"/>
                            </a>
                        </Link>
                        <Link href="/auditorio/dias/01-11">
                            <a>
                                <path className="polygon" d="M1462.43,591.5h-84c-17.95,0-32.5-14.55-32.5-32.5v0c0-17.95,14.55-32.5,32.5-32.5h84
	                            c17.95,0,32.5,14.55,32.5,32.5v0C1494.93,576.95,1480.38,591.5,1462.43,591.5z"/>
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
                        <Link href="/">
                            <a className="btn btn-light shadow-sm"><IoMdArrowBack size={20} /></a>
                        </Link>
                    </div>

                    <img src="/images/auditorio.jpg" className="img-background" />
                </div>
            }
        </>
    )
}