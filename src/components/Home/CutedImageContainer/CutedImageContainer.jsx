import React from 'react';
import classes from './CutedImageContainer.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      backgroundColor: '#32b298',
      padding: '0px 10px 0px 10px',
      fontSize: '14px',
      color: 'white',
      marginTop: '40px',
      height: '50px',
      width: '15rem',
      borderRadius: '5px',
      textTransform: 'none',
      fontWeight: '600',
      "&:hover": {
          backgroundColor: '#32b358'
      }
    },
  }));


const CutedImageContainer = () => {


    const materialClass = useStyles();

    return (
        <div className={classes.CutedImageContainer}>
            <img src='https://www.telegraph.co.uk/content/dam/news/2018/04/12/TELEMMGLPICT000160220598_trans_NvBQzQNjv4BqI4FDLpOsESL6FP9guevslSrCzV_9zeFctFON6xzTPQI.jpeg' alt ='' className={classes.CutedImage} />
            <div className={classes.Text}>
                    <h5>Louer votre voiture<br /> avec <span className={classes.Logo}><i className="fas fa-car"></i></span><span>Zotcar</span></h5>
                    <div className={classes.Paragraph}>
                        <p>Votre voiture peut vous rapporter <span className={classes.ColoredText}>jusqu’à 200€ par semaine !</span></p>
                        <p>Toutes les locations sont assurées tous risques</p>
                        <Button variant="contained" className={materialClass.root}><div className={classes.CarLogo}></div>Louer ma voiture</Button>
                    </div>
                    
            </div>

        </div>
    )
}

export default CutedImageContainer;