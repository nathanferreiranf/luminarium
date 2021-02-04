import React, {useContext, useState, useEffect} from 'react';
import Head from 'next/head';
import {Context} from '../context/AuthContext';
import Link from 'next/link';
import { IoMdArrowBack } from "react-icons/io";
import ReactGA from 'react-ga';

export default function Palestrantes() {
    const {authenticated, checkAuthenticated} = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Programação</title>
            </Head>
            {
                authenticated && <div className="page">
                    <img src="/images/programacao/27.jpg" className="img-background" />
                    <img src="/images/programacao/28.jpg" className="img-background" />
                    <img src="/images/programacao/29.jpg" className="img-background" />
                    <img src="/images/programacao/30.jpg" className="img-background" />
                    <img src="/images/programacao/31.jpg" className="img-background" />
                    <img src="/images/programacao/01.jpg" className="img-background" />

                    <div className="navgation" style={{ top: 10 }}>
                        <Link href="/">
                            <a className="btn btn-light shadow-sm"><IoMdArrowBack size={20} /></a>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}