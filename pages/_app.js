import Header from '../components/Header';
import React, { useEffect, useContext } from 'react';
import '../styles/styles.scss';
import {AuthProvider} from '../context/AuthContext';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <AuthProvider>
            {
                router.route != '/login' && <Header />
            }
            <Component {...pageProps} />
        </AuthProvider>
    )
}

export default MyApp
