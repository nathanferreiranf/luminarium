import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import { Context } from "../../../context/AuthContext";
import { IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';
import ReactGA from 'react-ga';

export default function MetodoKovacsikVideo() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Video - Metodo Kovacsik</title>
            </Head>
            {
                authenticated && <div id="page-only-video">
                    <div className="video shadow-sm">
                        <iframe src="https://www.youtube.com/embed/Jqfmriq_SNY" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    </div>
                    <div className="navgation" style={{ top: 100 }}>
                        <Link href="/terapeuticas/rede-do-bem">
                            <a className="btn btn-light shadow-sm"><IoMdArrowBack size={20} /></a>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}