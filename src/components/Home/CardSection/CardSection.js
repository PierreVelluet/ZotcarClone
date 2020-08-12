import React from 'react';
import classes from './CardSection.module.css';
import Card from './Card';
import CarLogo from '../../../image/cardLogos/carLogo.png'
import AirportLogo from '../../../image/cardLogos/airportLogo.png'
import AccidentLogo from '../../../image/cardLogos/accidentLogo.png'

const CardSection = () => {
    return (
        <>
            <div className={classes.CardSection}>
                <Card
                    logo={CarLogo}
                    cardTitle='Assistance + Assurance'
                    cardDescription1='Assistance disponible'
                    cardDescription2='24h/24 et 7j/7'
                />
                <div className={classes.CardTop}>
                <Card
                    logo={AirportLogo}
                    cardTitle="Livraison à l'aéroport"
                    cardDescription1='Récupérez votre voiture dès votre arrivée'
                    cardDescription2=''
                />
                </div>
                <Card
                    logo={AccidentLogo}
                    cardTitle='Véhicule de remplacement'
                    cardDescription1='Un véhicule sera mis à votre disposition en cas d’accident'
                    cardDescription2=''
                />
            </div>
            <div className={classes.CardSectionText}>
                <a href='/howItWorcks'  ><span className={classes.HowItWorcks}>Comment ça marche |&nbsp;</span></a>
                <a href='/condition'>Conditions d'assurance</a>
            </div>
        </>
    )
}

export default CardSection;