import React from 'react';
import classes from './RentCar.module.css'
import carsProfile from '../../data/carsProfile'
import CarCard from './CarCard/CardCard';

const RentCar = () => {
    return (
        <div className={classes.RentCar}>
            <h2>Louez la voiture que vous voulez !</h2>
            <p>Zotcar est une plateforme de <span className={classes.Description}>location de voiture entre particuliers à La Réunion</span>. Profitez d’un prix de location jusqu’à 30% moins cher qu’un professionnel ! </p>
            <p>Les avantages de louer une voiture sur Zotcar : </p>
            <ul>
                <li><span className={classes.Checked}><i class="fas fa-check-circle"></i></span>Paiement sécurisé </li>
                <li><span className={classes.Checked}><i class="fas fa-check-circle"></i></span>Relation privilégié avec les Réunionnais </li>
                <li><span className={classes.Checked}><i class="fas fa-check-circle"></i></span>Lieu de prise en charge personnalisé </li>
            </ul>
            <div className={classes.CarCardList}>
                {carsProfile.slice(0,3).map((element, index) => {
                    return <CarCard
                                image={element.image}
                                price={element.price}
                                carName={element.carName}
                                location={element.location}
                                star={element.star}
                                avatar={element.photo}
                                name={element.name}
                                key={index}
                            />
                })}
            </div>
        </div>
    )
}

export default RentCar;