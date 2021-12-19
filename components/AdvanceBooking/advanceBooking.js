import { Paper, InputBase, IconButton, Button } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'

export default function AdvanceBooking() {

    const data = [
        {label: 'Date', value: new Date().toLocaleDateString()},
        {label: 'Time', value: new Date().toLocaleTimeString()},
        {label: 'Guests', value: '2 People'},
    ]
    return (
        <div className={styles.container}>
            <Paper elevation={0} className={styles.box}>
            <span style={{width: 52, height: 5, backgroundColor: '#FE043C'}}></span>
                <span>Advane Booking</span>
                <Paper
                elevation={1}
                    component="form"
                    sx={{  margin: '1em', display: 'flex', alignItems: 'center' }}
                    className={styles.inp}
                >

                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Email"
                        inputProps={{ 'aria-label': 'Email' }}
                    />

                    <IconButton sx={{ p: '10px' }} aria-label="directions">
                        <Button style={{background: '#FE043C'}} variant="contained">GO</Button>
                    </IconButton>
                </Paper>

                <div className={styles.data}>
                {data.map((e,i) => <div>
                    <div className={styles.label}>{e.label}</div>
                    <div className={styles.value}>{e.value}</div>
                </div>)}
                </div>
                
            </Paper>
        </div>
    )
}
