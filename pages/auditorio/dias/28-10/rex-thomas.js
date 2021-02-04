import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Context } from "../../../../context/AuthContext";
import { IoMdArrowBack } from "react-icons/io";

import ReactGA from 'react-ga';

export default function RexThomasVideo() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Video - Rex Thomas</title>
            </Head>
            {
                authenticated && <div id="page-only-video">
                    <div className="video shadow-sm">
                        {/* TODO: GET TO LINK */}
                        {/* <iframe src="" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe> */}
                    </div>
                    <div className="navgation" style={{ top: 100 }}>
                        <Link href="/auditorio/dias/28-10/">
                            <a className="btn btn-light shadow-sm"><IoMdArrowBack size={20} /></a>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}