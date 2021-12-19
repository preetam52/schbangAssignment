import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import downloadImg from '../../public/assets/downloadAd.png'
import appStore from '../../public/assets/appstore.png';
import playStore from '../../public/assets/playstore.png'
import styles from './styles.module.css'

export default function DownloadApp() {
    return (
        <div className={styles.adContainer}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} display='flex' alignItems='center' justifyContent='center'>

                <Grid item xs={2} sm={4} md={4} display='flex' alignItems='center'>
                    <div className={styles.block}>
                        <div className={styles.section1}>
                            <span >Download app for <br />Exciting Deals </span>
                        </div>
                        <div className={styles.section2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className={styles.stores}>
                            <Image
                            src={playStore}
                            
                            />
                            <Image
                            src={appStore}
                            
                            />
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2} sm={4} md={4}>
                    <Image
                        src={downloadImg}
                        
                    />
                </Grid>
            </Grid>
        </div>
    )
}
