import React from 'react';
import Footer from './footer/footer'
import Navbar from './navbar/navbar';
import styles from './Layout.module.css'

export default function Layout({children}) {
    return (
        <div className={styles.layoutBody}>
            <Navbar/>
            <main className={styles.main}>{children}</main>
            <Footer/>
        </div>
    )
}
