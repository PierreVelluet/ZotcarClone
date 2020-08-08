import React from 'react';
import classes from './Navbar.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      backgroundColor: '#32b298',
      padding: '0px 10px 0px 10px',
      fontSize: '0.8rem',
      color: 'white',
      borderRadius: '10px',
      textTransform: 'none',
      fontWeight: '800',
      "&:hover": {
          backgroundColor: '#32b358'
      }
    },
  }));

const Navbar = () => {

    const materialClass = useStyles();

    
    return (
        <>
        <div className={classes.NavbarTop}>
                <div className={classes.LogoContainer}>
                        <div className={classes.Logo}>
                            <a href='/'><i className="fas fa-car"></i></a>
                        </div>
                        <a href='/'><h1>Zotcar</h1></a>
                </div>
                <div className={classes.SectionItems}>
                    <div className={classes.ListItem}>
                        <a href='/Inscription'>Inscription</a>
                        <a href='/Connexion' >Connexion</a>
                        <a href='/Aide'>Aide</a>
                    </div>
                    
                    <Button variant="contained" className={materialClass.root}><div className={classes.CarLogo}><i className="fas fa-car"></i></div>Louer ma voiture</Button>
                </div>
        </div>
        <div className={classes.NavbarBottom}>
            Zotcar change de numéro! Appelez-nous désormais au 01 84 88 08 00
            <div className={classes.PhoneIcon}>
                <i className="fas fa-phone"></i>
            </div>
                
        </div>
        </>
    )
}

export default Navbar;