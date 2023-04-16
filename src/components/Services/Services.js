import React from 'react'
import { GiShakingHands, GiMoneyStack, GiMagnifyingGlass, GiShoppingCart } from "react-icons/gi";

import classes from './Services.module.css'

const Services = () => {
  return (
    <div id='servicios'>
        <h1 className={classes.servicesTitle}>NUESTROS SERVICIOS</h1>
        <div className={classes.servicesCardsContainer}>
            <div className={classes.servicesCard}>
                <div className={classes.iconWrapper}>
                    <GiShoppingCart className={classes.servicesIcon}/>
                </div>
                <h3 className={classes.serviceTitle}>Lorem</h3>
                <p className={classes.serviceText}>Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend vehicula auctor </p>
            </div>
            <div className={classes.servicesCard}>
                <div className={classes.iconWrapper}>
                    <GiShakingHands className={classes.servicesIcon}/>
                </div>
                 <h3 className={classes.serviceTitle}>Lorem</h3>
                <p className={classes.serviceText}>Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend vehicula auctor. </p>
            </div>
            <div className={classes.servicesCard}>
                <div className={classes.iconWrapper}>
                    <GiMagnifyingGlass className={classes.servicesIcon}/>
                </div>
                 <h3 className={classes.serviceTitle}>Lorem</h3>
                <p className={classes.serviceText}>Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend vehicula auctor </p>
            </div>
            <div className={classes.servicesCard}>
                <div className={classes.iconWrapper}>
                    <GiMoneyStack className={classes.servicesIcon}/>
                </div>
                 <h3 className={classes.serviceTitle}>Lorem</h3>
                <p className={classes.serviceText}>Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend vehicula auctor </p>
            </div>
        </div>
    </div>
  )
}

export default Services