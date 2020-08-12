import React from 'react';
import classes from './CarCard.module.css';


const CarCard = (props) => {
    return (
        <div className={classes.CarCard}>
            <img src={props.image} alt='' className={classes.Image}/>
            <p className={classes.PriceP}><span className={classes.Price}>{props.price} €</span> / jour</p>
            <p>{props.carName} - {props.location}</p>
            <div className={classes.StarRating}>{[...Array(props.star)].map((element, index) => <span className={classes.Star}><i class="fas fa-star"></i></span>)}</div>
            <div className={classes.AvatarAndNameContainer}>
                <img src={props.avatar} alt='' className={classes.Avatar} />
                <p><span className={classes.Name}>{props.name}</span></p>
            </div>
        </div>
    )
}

export default CarCard;