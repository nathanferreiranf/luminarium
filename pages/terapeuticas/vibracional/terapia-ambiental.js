import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import { Context } from "../../../context/AuthContext";
import { IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';
import ReactGA from 'react-ga';

export default function TerapiaAmbientalVideo() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Video - Terapia Ambiental</title>
            </Head>
            {
                authenticated && <div id="page-only-video">
                    <div className="video shadow-sm">
                        <iframe src="https://www.youtube.com/embed/PRAFrydhaV8" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    </div>
                    <div className="navgation" style={{ top: 100 }}>
                        <Link href="/terapeuticas/vibracional">
                            <a className="btn btn-light shadow-sm"><IoMdArrowBack size={20} /></a>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}