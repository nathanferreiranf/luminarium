import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import { Context } from '../../context/AuthContext';
import Link from 'next/link';
import { IoMdArrowBack } from "react-icons/io";
import ReactGA from 'react-ga';

export default function FeiraBemViverStands() {
    const { authenticated, checkAuthenticated } = useContext(Context);

    useEffect(() => {
        checkAuthenticated();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.APP_NAME} | Feira bem viver - Stands</title>
            </Head>
            {
                authenticated && <div className="page">
                    <svg viewBox="0 0 2000 1062" preserveAspectRatio="none">
                        <Link href="/feira-bem-viver/pensamento">
                            <a>
                                <polygon id="_x31__x5F_pensamento_1_" className="polygon" points="129.26,881.96 102.96,890.38 178.28,961.62 512.49,837.53 483.89,817.11 
                                451.47,751.49 474.7,746.13 484.66,737.45 479.81,658.3 475.21,650.64 393.26,607.23 92.74,688.17 83.04,696.09 80.23,707.83 
                                93.51,788 111.64,803.57 117.51,804.6 "/>
                            </a>
                        </Link>

                        <Link href="/feira-bem-viver/florais-saint-germain">
                            <a>
                                <polygon id="_x32__x5F_florais_1_" className="polygon" points="1848.32,972.6 1927.21,905.19 1897.85,893.7 1902.19,890.38 1912.4,817.11 
                                1931.3,804.85 1936.66,798.72 1950.96,715.49 1946.87,704.77 1939.72,697.87 1642.02,615.15 1635.64,612.85 1552.91,653.45 
                                1547.3,658.3 1538.87,725.96 1537.6,742.81 1545.26,750.72 1555.21,754.81 1572.57,757.87 1539.38,825.02 1511.04,841.87 "/>
                            </a>
                        </Link>

                        <Link href="/feira-bem-viver/do-terra">
                            <a>
                                <polygon id="_x33__x5F_do_x5F_terra_1_" className="polygon" points="245.43,600.34 251.04,643.23 390.19,605.45 399.13,606.21 
                                475.72,648.34 482.87,659.83 555.38,637.62 534.45,625.87 502.79,566.89 525.77,563.83 531.38,560 534.19,551.32 529.6,489.79 
                                519.89,481.62 464.49,459.15 454.53,456.34 230.87,506.89 224.74,510.47 220.15,517.11 227.55,586.55 "/>
                            </a>
                        </Link>
                        <Link href="/feira-bem-viver/coerencia">
                            <a>
                                <polygon id="_x34__x5F_coerencia_1_" className="polygon" points="1543.72,661.87 1482.96,642.98 1504.15,631.74 1536.57,574.04 
                                1513.34,568.68 1504.15,559.74 1511.04,493.36 1520.74,484.94 1582.79,461.7 1814.36,514.3 1821,519.15 1824.32,527.57 
                                1815.13,596.26 1808.74,601.36 1797.51,607.49 1791.38,654.72 1640.49,611.57 1632.06,611.32 1549.34,653.45 "/>
                            </a>
                        </Link>
                        <Link href="/feira-bem-viver/lar-de-frei-luiz">
                            <a>
                                <polygon id="_x35__x5F_lar_x5F_de_x5F_frei_1_" className="polygon" points="370.02,473.45 371.04,466.55 362.62,464 356.49,458.13 
                                351.13,400.43 355.47,393.28 367.21,388.94 541.6,356.26 593.94,373.11 602.36,378.72 606.45,431.57 606.45,438.72 597,444.85 
                                576.06,446.13 604.15,496.43 622.79,504.85 533.94,526.55 530.62,483.15 458.62,455.06 "/>
                            </a>
                        </Link>
                        <Link href="/feira-bem-viver/personare">
                            <a>
                                <polygon id="_x36__x5F_personare_1_" className="polygon" points="1503.13,535.74 1406.62,510.47 1425.26,501.28 1454.87,450.21 
                                1433.43,448.94 1423.21,441.28 1427.3,386.64 1431.38,379.49 1489.6,360.6 1675.98,397.11 1680.57,403.23 1674.7,464.77 
                                1669.09,469.87 1662.7,471.66 1661.94,478.3 1585.09,460.17 1570.28,464.77 1514.11,487.23 1509.77,493.87 "/>
                            </a>
                        </Link>
                        <Link href="/feira-bem-viver/brahma-kumaris">
                            <a>
                                <polygon id="_x37__x5F_brahma_1_" className="polygon" points="502.02,360.85 498.96,317.45 504.32,311.32 651.64,285.53 704.49,299.06 
                                708.57,305.7 710.36,353.45 707.3,357.53 686.62,360.85 686.11,367.49 707.81,405.79 723.38,410.64 608.74,438.47 604.66,378.98 
                                599.81,372.6 541.09,353.96 "/>
                            </a>
                        </Link>
                        <Link href="/feira-bem-viver/fernanda-masson">
                            <a>
                                <polygon id="_x38__x5F_fernanda_1_" className="polygon" points="1421.43,440.77 1314.19,414.72 1331.3,408.09 1354.28,369.53 
                                1354.28,364.68 1334.62,362.89 1327.72,356.26 1330.79,306.47 1336.4,301.36 1389.77,288.85 1537.34,314.38 1541.68,321.02 
                                1539.13,367.49 1491.38,358.55 1486.53,359.57 1430.11,377.19 1426.28,385.62 "/>
                            </a>
                        </Link>
                        <Link href="/feira-bem-viver/insight">
                            <a>
                                <polygon id="_x39__x5F_insight_1_" className="polygon" points="643.72,284.51 643.72,256.43 648.32,250.81 770.36,231.66 818.11,241.87 
                                822.45,248.26 822.45,289.62 815.04,296.26 801.26,296.26 801.77,307.49 820.4,336.6 832.91,341.96 697.85,371.32 688.66,368.26 
                                689.17,362 707.81,359.32 711.89,354.72 709.85,305.19 706.02,298.04 651.38,282.72 "/>
                            </a>
                        </Link>
                        <Link href="/feira-bem-viver/well4All-healthtech">
                            <a>
                                <polygon id="_x31_0_x5F_Well4All_1_" className="polygon" points="1339.98,371.83 1210.79,344.51 1225.34,339.91 1243.47,309.79 
                                1243.98,299.32 1230.19,298.3 1222.02,292.68 1223.81,249.28 1229.68,243.66 1276.91,234.21 1398.96,254.13 1403.81,258.21 
                                1402.53,288.85 1387.72,287.06 1336.15,299.32 1328.74,305.96 1326.45,352.68 1326.96,359.57 1338.19,364.81 1350.19,365.96 
                                1348.91,373.11 "/>
                            </a>
                        </Link>
                        <Link href="/feira-bem-viver/021-dental">
                            <a>
                                <polygon id="_x31_1_x5F_021dental_1_" className="polygon" points="856.91,295.23 856.91,258.21 849.51,255.15 848.23,250.55 847.21,211.49 
                                853.09,205.62 990.96,205.62 996.32,210.47 996.32,255.15 1000,255.4 1000,314.13 841.09,314.13 847.21,297.02 "/>
                            </a>
                        </Link>
                        <Link href="/feira-bem-viver/filha-da-terra">
                            <a>
                                <polygon id="_x31_2_x5F_filha_x5F_da_x5F_terra_1_" className="polygon" points="1048.66,315.15 1048.66,301.62 1048.66,256.17 
                                1052.49,256.17 1052.49,212 1057.6,205.62 1197,206.89 1202.87,213.79 1201.09,254.89 1198.02,258.21 1192.66,259.87 
                                1190.11,295.74 1202.87,300.34 1207.21,316.17 "/>
                            </a>
                        </Link>
                        <Link href="/feira-bem-viver/umundo">
                            <a>
                                <polygon id="_x31_3_x5F_umundo_1_" className="polygon" points="800.49,808.94 778.28,909.02 1210.28,901.62 1173.51,803.32 1156.66,803.32 
                                1150.02,757.87 1171.72,756.6 1179.89,751.74 1182.96,745.62 1186.28,670.55 1156.4,614.89 1151.04,611.57 825.51,614.13 
                                817.85,618.98 800.74,675.4 803.3,750.47 807.13,757.62 815.81,761.45 826.28,762.47 827.81,794.13 825.26,809.7 "/>
                            </a>
                        </Link>
                        <Link href="/feira-bem-viver/quantec">
                            <a>
                                <polygon id="_x31_4_x5F_quantec_1_" className="polygon" points="869.94,503.83 887.04,503.83 888.06,492.6 888.06,472.43 879,472.43 
                                874.28,470.13 872.23,467.06 869.94,418.55 881.17,383.06 883.98,380 891.64,378.72 1096.15,376.17 1099.72,380 1117.34,413.7 
                                1117.34,462.98 1112.74,467.32 1107.89,469.87 1094.87,470.13 1098.19,500.51 1110.45,500.51 1133.17,562.55 856.91,567.4 "/>
                            </a>
                        </Link>
                        
                        <a href="https://www.sympla.com.br/o-despertar-de-uma-nova-consciencia__776718?token=a48b998c26ecbf6d38658ea7b9ba9736" target="_blank">
                            <polygon id="banner_x5F_1_2_" className="polygon" points="121.6,0 176.74,416.26 325.34,416.26 278.62,0 " />
                        </a>
                    
                        <Link href="/feira-bem-viver/idealizar-faz-bem">
                            <a>
                                <polygon id="banner_x5F_2_1_" className="polygon" points="653.17,0 653.17,179.57 762.7,179.57 758.11,0 " />
                            </a>
                        </Link>
                    
                        <Link href="/feira-bem-viver/idealizar-faz-bem">
                            <a>
                                <polygon id="banner_x5F_3_1_" className="polygon" points="1307.3,0 1291.98,179.57 1399.21,179.57 1413,0 " />
                            </a>
                        </Link>
                    
                        <a href="https://www.amazon.com.br/dp/B08LNS6Y2S" target="_blank">
                            <polygon id="banner_x5F_4_1_" className="polygon" points="1743.13,0 1694.87,421.62 1846.53,421.62 1903.98,0 " />
                        </a>
                    </svg>

                    <img src="/images/feira.jpg" className="img-background" />

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