import React from 'react';
import classes from './HowToRent.module.css';

const HowToRent = () => {
    return (
        <div className={classes.HowToRent}>
            <h2>Comment louer une voiture à La Réunion</h2>
            <p>Vous souhaitez <span className={classes.ColoredText}>louer une voiture à La Réunion ?</span> Nous vous proposons un large choix de voitures de location pour tout type de budget. Zotcar vous permet de louer une <span className={classes.ColoredText}>voiture pas cher à La Réunion</span>.</p>
            <p>Louer une voiture avec Zotcar, c’est favoriser l’autopartage à l’île de La Réunion ! Moins anonyme que la location traditionnelle, louer une voiture à un particulier à La Réunion vous offre aussi la possibilité de faire une belle rencontre.</p>
            <p>Faire une demande de <span className={classes.ColoredText}>location de voiture avec Zotcar</span> est simple ! Vous pouvez louer une voiture directement avec son propriétaire ou louer une voiture gérée par Zotcar. Indiquez votre lieu de prise en charge, les dates de début et de fin de location souhaitées et choisissez votre voiture de location préférée. Les véhicules sont assurées tous risques par notre partenaire MAIF.</p>
            <p>Sur notre site, vous avez le choix entre louer une citadine, un SUV, une voiture plus spacieuse pour promener toute la famille. Pour ceux qui souhaitent se faire plaisir, vous pouvez louer une voiture sportive pour une belle escapade autour de l’île ! Avec Zotcar, vous avez la possibilité de louer une voiture dans n’importe quelle ville de La Réunion.</p>
            <p>Il est possible de <span className={classes.ColoredText}>réserver une voiture de location</span> grâce à la mention Réservation Instantanée. Lorsque la demande de réservation est effectuée, vous avez 48H pour payer votre location. Le paiement de votre location de voiture se fait directement sur notre site depuis un espace sécurisé.</p>
        </div>
    )
}

export default HowToRent;