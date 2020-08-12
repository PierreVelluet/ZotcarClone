import React from 'react';
import classes from './Card.module.css'

const Card = (props) => {
    return (
        <div className={classes.Card}>
            <img src={props.logo} alt='' className={classes.Logo} />
            <p className={classes.CardTitle}>{props.cardTitle}</p>
            <p className={classes.CardDescription}>{props.cardDescription1}</p>
            <p className={classes.CardDescription}>{props.cardDescription2}</p>
        </div>
    )
}

export default Card;