import React, {useContext, useState, useEffect} from 'react';
import { Modal, Button } from 'react-bootstrap';
import Head from 'next/head';
import {Context} from '../context/AuthContext';
import Link from 'next/link';
import ReactGA from 'react-ga';
import AuthServer from './api/auth';

export default function Home() {
    const {authenticated, checkAuthenticated} = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME}</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">
                        <Link href="/auditorio">
                            <a>
                                <rect id="auditorio_1_" x="946.19" y="446.55" className="polygon" width="153.19" height="109.96"/>
                            </a>
                        </Link>
                        <Link href="/o-despertar-de-uma-nova-consciencia">
                            <a>
                                <polygon id="banner_x5F_principal_1_" className="polygon" points="908.06,24.77 910.11,391.74 1142.28,391.74 1146.02,24.77 "/>
                            </a>
                        </Link>
                        <Link href="/idealizar-faz-bem">
                            <a>
                                <polygon id="banner_x5F_esquerda_1_" className="polygon" points="648.66,0 654.11,220.51 788.23,220.51 781.09,0 "/>
                            </a>
                        </Link>
                        <Link href="/idealizar-faz-bem">
                            <a>
                                <polygon id="banner_x5F_direita_1_" className="polygon" points="1270.96,0 1264.83,218.47 1397.6,220.51 1403.72,0 "/>
                            </a>
                        </Link>
                        <Link href="/atendimentos-e-vivencias">
                            <a>
                                <polygon id="atendimentos_x5F_e_x5F_vivencias_1_" className="polygon" points="635.38,383.91 632.66,293.36 806.62,291.66 809.68,383.91 "/>
                            </a>
                        </Link>
                        <Link href="/palestrantes">
                            <a>
                                <polygon id="palestrantes_1_" className="polygon" points="1242.7,292.68 1241,384.94 1415.98,384.94 1418.7,292.68 "/>
                            </a>
                        </Link>
                        <Link href="/terapeuticas">
                            <a>
                                <polygon id="terapeuticas_1_" className="polygon" points="645.6,451.32 821.94,451.32 821.94,545.62 647.98,545.62 "/>
                            </a>
                        </Link>
                        <Link href="/feira-bem-viver">
                            <a>
                                <polygon id="feira_x5F_bem_x5F_viver_1_" className="polygon" points="1230.79,451.66 1228.4,545.62 1403.38,545.62 1405.77,451.66 "/>
                            </a>
                        </Link>
                        <Link href="/video-giti-bond">
                            <a>
                                <polygon id="veja_x5F_o_x5F_video_1_" className="polygon" points="475.85,648.72 486.83,646.43 495.38,639.53 501.38,630.85 504.45,622.55 
                                503.94,612.09 501.51,604.68 495.77,595.74 484.79,588.34 472.02,585.15 458.36,587.32 447.38,595.62 441,606.85 439.98,617.7 
                                442.91,629.7 450.7,639.91 458.74,645.15 468.57,648.72 "/>
                            </a>
                        </Link>
                        <a href="https://loja.serconsciencia.com.br/alem-das-crencas-um-convite-para-o-despertar-prem-giti-bond" target="_blank">
                            <polygon id="comprar_x5F_direita_1_" className="polygon" points="470.62,761.96 562.19,767.06 569.17,764.51 574.11,757.7 574.11,745.96 
                            569.68,738.64 562.02,733.53 469.6,728.94 462.45,732.85 458.7,739.83 458.7,750.21 461.94,756 466.02,759.4 "/>
                        </a>
                        <a href="https://www.amazon.com.br/dp/B08LNS6Y2S" target="_blank">
                            <polygon id="comprar_x5F_esquerda_1_" className="polygon" points="114.45,771.66 108.83,778.81 107.3,785.19 107.3,791.83 110.87,798.47 
                            116.49,802.04 211.21,785.19 217.85,781.36 222.7,772.94 222.7,762.98 217.34,754.81 209.43,753.28 119.55,769.36 "/>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5521981435539" target="_blank">
                            <polygon id="fale_x5F_conosco_1_" className="polygon" points="1530.19,657.53 1522.02,662.64 1519.21,668 1519.21,699.66 1524.7,706.81 
                            1532.74,710.38 1725.26,710.38 1733.68,705.02 1735.98,698.64 1737.26,668.51 1726.79,657.53 "/>
                        </a>
                        <Link href="/programacao">
                            <a>
                                <polygon id="programacao_1_" className="polygon" points="1826.53,823.4 1902.11,836 1919.47,607.57 1796.23,594.3 1785.68,772.34 
                                1843.89,780.85 1829.26,792.43 "/>
                            </a>
                        </Link>
                        <a href="https://www.congressoluminarium.com.br/" target="_blank">
                            <polygon id="banner_x5F_ingressos_x5F_direita_1_" className="polygon" points="1725.77,0 1708.91,322.81 1864.66,325.36 1891.72,0 "/>
                        </a>
                        <a href="https://www.congressoluminarium.com.br/" target="_blank">
                            <polygon id="banner_x5F_ingressos_x5F_esquerda_1_" className="polygon" points="116.23,0 142.28,322.3 296.49,320.26 282.19,0 "/>
                        </a>
                    </svg>

                    <img src="/images/saguao.jpg" className="img-background" />
                </div>
            }
        </>
    )
}