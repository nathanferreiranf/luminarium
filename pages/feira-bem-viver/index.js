import React, {useContext, useState, useEffect} from 'react';
import Head from 'next/head';
import {Context} from '../../context/AuthContext';
import Link from 'next/link';
import { IoMdArrowBack } from "react-icons/io";
import ReactGA from 'react-ga';

export default function FeiraBemViver() {
    const {authenticated, checkAuthenticated} = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Feira bem viver</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1060" preserveAspectRatio="none">
                        <Link href="/feira-bem-viver/stands">
                            <a>
                                <polygon className="polygon" points="935.64,408.79 924.74,412.87 918.62,421.38 915.55,431.94 915.55,441.13 920.32,449.3 927.47,455.09 
                                    938.7,460.53 1068.4,460.53 1078.96,457.47 1085.77,449.98 1089.51,441.47 1089.51,431.6 1087.13,422.74 1081.34,415.94 
                                    1072.49,408.79 "/>
                            </a>
                        </Link>
                    </svg>
                    <img src="/images/entrada_feira.jpg" className="img-background" />

                    <div className="navgation">
                        <Link href="/">
                            <a className="btn btn-light shadow-sm"><IoMdArrowBack /></a>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}