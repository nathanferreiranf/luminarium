import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Context } from "../../../../context/AuthContext";
import { IoMdArrowBack } from "react-icons/io";

import ReactGA from 'react-ga';

export default function AlexandreCuminoVideo() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Video - Alexandre Cumino</title>
            </Head>
            {
                authenticated && <div id="page-only-video">
                    <div className="video shadow-sm">
                        <iframe src="https://player.vimeo.com/video/479168465" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    </div>
                    <div className="navgation" style={{ top: 100 }}>
                        <Link href="/auditorio/dias/29-10/">
                            <a className="btn btn-light shadow-sm"><IoMdArrowBack size={20} /></a>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}