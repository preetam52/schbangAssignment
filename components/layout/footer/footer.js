import Image from 'next/image'
import React from 'react'
import styles from './Footer.module.css'
import { Paper, IconButton, InputBase } from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { routes, socials } from './config';
export default function Footer() {
    return (
        <div>
            <footer className={styles.footer}>
                <span className={styles.heading}>Get notified <br /> about new amazing products</span>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, borderRadius: 10 }}
                >

                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Email"
                        inputProps={{ 'aria-label': 'Email' }}
                    />

                    <IconButton  sx={{ p: '10px' }} aria-label="directions">
                        <ArrowCircleRightIcon style={{color: '#FE043C'}}/>
                    </IconButton>
                </Paper>
                
                <div className={styles.routes}>
                    {routes.map((route, idx) => <span className={styles.route} key={idx}>{route.label}</span>)}
                </div>

                <div>
                {socials.map((social, idx) => <span className={styles.route} key={idx}>{social.icon}</span>)}
                </div>

                <span className={styles.description}>© 2019 Charge.wp</span>
            </footer>
        </div>
    )
}
