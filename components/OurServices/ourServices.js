import Image from 'next/image'
import React from 'react'
import deliveryImg from '../../public/assets/delivery.png'
import plateImg from '../../public/assets/plate.png'
import tableImg from '../../public/assets/table.png'
import styles from './styles.module.css'

export default function OurServices() {
    return (
        <div className={styles.serviceContainer} >
            <div>
                <div className={`${styles.block} ${styles.flexRow}`}>
                    <div className={styles.serviceLogo}>
                        <Image
                            src={tableImg}
                            height={120}
                            width={120}
                        />
                    </div>

                    <div className={styles.serviceText}>
                        <span className={styles.heading}>
                            free home delivery <br/> at your door step
                        </span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                    </div>
                </div>

                <div className={styles.block}>
                    
                    <div className={styles.serviceText}>
                        <span className={styles.heading}>
                            Food for free <br /> 24/7
                        </span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                    </div>

                    <div className={styles.serviceLogo}>
                    <Image
                        src={plateImg}
                        height={120}
                        width={120}
                    />
                    </div>

                </div>

            </div>
            <div className={`${styles.block} ${styles.flexCol}`} style={{background: '#ffeddf'}}>
                <div className={styles.serviceLogo}>
                <Image
                    src={deliveryImg}
                    height={130}
                    width={170}

                />
                </div>
                <div className={styles.serviceText} style={{alignItems: 'center'}}>
                <span className={styles.heading}>
                    free home delivery <br /> at your door step
                </span>
                <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                </div>
                

            </div>
        </div>
    )
}
