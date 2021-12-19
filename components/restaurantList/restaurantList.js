import React from 'react';
import Image from 'next/image';
import { data } from './config';
import { Card, CardContent, Typography, Grid, CardActions, Button } from '@mui/material'
import img from '../../public/assets/img.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import styles from './styles.module.css'

export default function RestaurantList() {
    return (
        <div style={{ display: 'flex', margin:'2em 0' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>

                {data.map((e, i) =>
                    <Grid item xs={2} sm={4} md={4} key={i}>

                        <Card style={{ background: `url(${e.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} sx={{ maxWidth: 280 }}>
                            {/* <Image
                                component="img"
                                height={250}
                                src={img}
                                alt="green iguana"
                            /> */}
                            <div style={{ height: 100 }}>

                            </div>
                            <CardContent style={{ backgroundColor: '#fe043ca3', padding: '10px 18px' }}>
                                <Typography color="white" gutterBottom variant="h6" component="div">
                                    {e.title}
                                </Typography>

                                <Typography variant="body2" color="white" style={{ fontSize: '12px', }}>
                                    {e.description}
                                </Typography>

                                <CardActions className={styles.cardFooter} style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                    <div style={{ color: 'white', fontSize: 'small', display: 'flex', alignItems: 'center' }}><PinDropIcon />{e.location}</div>
                                    <Button style={{ backgroundColor: 'white', padding: 6, fontSize: 8 }} size="small">Book now <ArrowForwardIcon style={{ fontSize: 15 }} /></Button>
                                </CardActions>
                            </CardContent>

                        </Card>
                    </Grid>
                )}
                <Grid display='flex' alignItems='center' justifyContent='center' item xs={8} sm={4} md={4}>
                    <ArrowCircleRightIcon style={{color: '#FE043C'}}/>
                    <Button style={{color: '#FE043C'}}>See more</Button>
                </Grid>
            </Grid>
        </div>
    )
}
