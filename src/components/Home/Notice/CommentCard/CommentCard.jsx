import React from 'react';
import classes from './CommentCard.module.css';

const CommentCard = (props) => {
    return (
        <div className={classes.CommentCard}>
            <div className={classes.CommentContainer}>
                <p>«{props.comment}»</p>
            </div>
            
            <div className={classes.PortraitAndRatingContainer}>
                <div className={classes.PortraitContainer}>
                    <img src={props.portrait} alt='portrait' className={classes.Portrait}/>
                </div>
                <div className={classes.RatingAndNameContainer}>
                    <div className={classes.Rating}>
                        <p>{props.stars} / 5</p>
                        <i class="fas fa-star"></i>
                    </div>
                    <span className={classes.Name}>{props.name}</span>
                    <p>A louer une {props.rentedCar}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentCard;