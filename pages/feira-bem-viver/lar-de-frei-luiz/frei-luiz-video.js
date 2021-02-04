import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Context } from "../../../context/AuthContext";

import { IoMdArrowBack } from "react-icons/io";

import ReactGA from 'react-ga';

export default function LarDeFreiLuizVideo() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Video - Editora Lar de Frei Luiz - Divulgação</title>
            </Head>
            {
                authenticated && <div id="page-only-video">
                    <div className="video shadow-sm">
                        <iframe src="https://www.youtube.com/embed/5NuMKsr0sKg" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    </div>
                    <div className="navgation" style={{ top: 100 }}>
                        <Link href="/feira-bem-viver/lar-de-frei-luiz">
                            <a className="btn btn-light shadow-sm"><IoMdArrowBack size={20} /></a>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}