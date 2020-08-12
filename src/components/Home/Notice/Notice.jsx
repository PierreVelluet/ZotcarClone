import React from 'react';
import classes from './Notice.module.css'
import comments from '../../data/comments'
import CommentCard from './CommentCard/CommentCard';

const Notice = () => {
    console.log(comments)

    const getAverageStar = () => {
        const allStars = comments.map(element => element.stars)
        const sum = allStars.reduce((a, b) => a + b, 0);
        return (sum / allStars.length)
    }
    
    return (
        <div className={classes.Notice}>
            <h2>Des particuliers qui se font confiance</h2>
            <p>Zotcar accorde une grande importance à la satisfaction des propriétaires et des locataires de voiture ! C’est pourquoi nous mettons tout en oeuvre pour que chaque location vous apporte une <span className={classes.ColoredText}>expérience authentique</span>.</p>
            <div className={classes.StarRating}>
                <div className={classes.StarIcon}>
                    <i className="fas fa-star"></i>
                </div>
                <p>{getAverageStar()}/5</p>
                <a>Plus de 5 000 avis</a>
            </div>
            <div className={classes.CommentsList}>
                {comments.slice(0, 3).map(element => {
                    return <CommentCard
                                comment={element.comment}
                                portrait={element.portrait}
                                stars={element.stars}
                                name={element.name}
                                rentedCar={element.rentedCar}
                            />
                })}
            </div>
            
            

        </div>
    )
}

export default Notice;