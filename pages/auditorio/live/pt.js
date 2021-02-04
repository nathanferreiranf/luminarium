import React, {useContext, useState, useEffect} from 'react';
import Head from 'next/head';
import {Context} from '../../../context/AuthContext';
import { IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';
import ReactGA from 'react-ga';

export default function Live() {
    const {authenticated, checkAuthenticated} = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Auditório - Live PT</title>
            </Head>
            {
                authenticated && <div id="page-video">
                    <div className="video">
                        <iframe src="https://vimeo.com/event/409593/embed/60f882c052" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    </div>
                    <div className="chat">
                        <iframe src="https://app.sli.do/event/1eilmgdn?lang=pt_br" height="100%" width="100%" frameBorder="0"></iframe>
                    </div>
                    <div className="navgation" style={{top: 100}}>
                        <Link href="/auditorio">
                            <a className="btn btn-light shadow-sm"><IoMdArrowBack size={20} /></a>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}