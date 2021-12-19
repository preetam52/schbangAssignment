import React from 'react'
import styles from './style.module.css'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Grid } from '@mui/material';
import foodItemImg from '../../public/assets/foodItem2.png'
import Image from 'next/image';


export default function FoodGrid() {
    return (
        <div>
            <div>
                <h3 className={styles.heading}>Explore our Foods</h3>
                <p className={styles.subHeading}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br /> sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
            </div>
            <Box sx={{ flexGrow: 1, margin: '2.5em 0' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                    {Array.from(Array(6)).map((item, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card sx={{ maxWidth: 280 }}>
                                <Image
                                    component="img"
                                    height={250}
                                    src={foodItemImg}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <div style={{ display: 'flex' }}>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }} gutterBottom variant="h6" component="div" color='red'>
                                            $10.50
                                        </Typography>
                                    </div>
                                    <Typography variant="body2" color="grey">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>


        </div>
    )
}
