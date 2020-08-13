import React, {useState} from 'react';
import classes from './Home.module.css';
import CarImage from '../../image/car.png'
import InsuranceImage from '../../image/assurance.png'
import SearchField from './SearchField/SearchFields';
import CardSection from './CardSection/CardSection';
import Notice from './Notice/Notice';
import RentCar from './RentCar/RentCar';
import CutedImageContainer from './CutedImageContainer/CutedImageContainer';
import SmartphoneSection from './SmartphoneSection/SmartphoneSection';
import Accordions from './Accordions/Accordions'
import HowToRent from './HowToRentSection/HowToRent';




const Home = () => {

    
    
    return (
        <div>
            <div className={classes.CarImage}>
                <img className={classes.Car} src={CarImage} alt='' />
            </div>
            <div className={classes.Title}>
                <h2>Louer une voiture <span className={classes.Location}>à La Réunion</span></h2>
                <h5>Location de voiture entre particuliers et professionnels</h5>
            </div>
            <SearchField />
            <div className={classes.InsuranceText}>
                Nos locations sont assurées tous risques par la Maif
                <img className={classes.Insurance} src={InsuranceImage} alt='' />
            </div>
            <CardSection />
            <Notice />
            <RentCar />
            <CutedImageContainer />
            <SmartphoneSection />
            <Accordions />
            <HowToRent />
        </div>
    )
}

export default Home;