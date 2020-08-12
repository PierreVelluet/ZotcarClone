import React from 'react';
import classes from './SmartphoneSection.module.css';
import smartphone from '../../../image/smartphone.png'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button1: {
      backgroundColor: 'black',
      padding: '0px 10px 0px 10px',
      fontSize: '14px',
      color: 'white',
      marginTop: '40px',
      marginRight: '35px',
      height: '60px',
      width: '160',
      borderRadius: '8px',
      textTransform: 'none',
      fontWeight: '600',
      "&:hover": {
          backgroundColor: '#32b358'
      }
    },
    button2: {
        backgroundColor: '#32b298',
        padding: '0px 10px 0px 10px',
        fontSize: '14px',
        fontWeight: '400',
        color: 'white',
        marginTop: '40px',
        height: '60px',
        width: '160',
        borderRadius: '8px',
        textTransform: 'none',
        fontWeight: '600',
        "&:hover": {
            backgroundColor: '#32b358'
        }
    },
  }));

const SmartphoneSection = () => {

    const materialClass = useStyles();

    return (
        <div className={classes.SmartphoneSection}>
            <img src={smartphone} alt='Smartphone' className={classes.SmartphoneImage} />
            <div className={classes.Text}>
                <h1>Application Zotcar</h1>
                <p className={classes.ManageLocationText}>Gérer votre location de voiture depuis votre<br/> smartphone</p>
                <p className={classes.Description}><span className={classes.ColoredText}>Louer une voiture à La Réunion</span> directement depuis votre smartphone. L’application est disponible uniquement sur l’App Store et sera bientôt disponible sur Google Play.</p>
                <div className={classes.Button}>
                    <Button variant="contained" className={materialClass.button1}><div className={classes.CarLogo}></div>Télécharger dans<br /> l'app Store</Button>
                    <Button variant="contained" className={materialClass.button2}><div className={classes.CarLogo}></div>En savoir plus</Button>
                </div>
            </div>
        </div>
    )
}

export default SmartphoneSection;