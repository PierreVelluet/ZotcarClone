import React from 'react';
import classes from './Accordions.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    margin: '0 auto',
    marginBottom: '70px',
    '& .MuiPaper-elevation1': {
      boxShadow: '1px 1px 1px 1px #32b298'
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  drop: {
    
  },
}));

const Accordions = () => {

    const materialClasses = useStyles();

    return (
      <>
        <div className={materialClasses.root}>
          <div className={classes.Accordion}>
            <Accordion>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
              <Typography className={materialClasses.heading}><strong>Comment se déroule une location ?</strong></Typography>
              </AccordionSummary>
              <AccordionDetails className={materialClasses.drop}>
              <Typography>
              <div className={classes.Parapgraphs}>
                <p className={classes.FirstParagraph}>Pour effectuer une demande de location, vous devez renseigner votre lieu de prise en charge ainsi que vos dates et heures de location. Certains véhicules disposent de la réservation instantanée, ce qui vous permet de réserver immédiatement une voiture dès réception du paiement.</p>

                <p>Vous avez également la possibilité de vous faire livrer votre voiture de location directement à l’aéroport. La mention « Livraison Aéroport » sera indiquée sur la fiche du véhicule.</p>

                <p>Lorsque vous effectuez une demande de location auprès d’un propriétaire, ce dernier a 48h pour accepter ou refuser votre demande.
                Si le propriétaire accepte, vous aurez à votre tour 48h pour payer la location. Au delà de cette limite, la location sera expirée. Vous devrez donc refaire une demande de location. Nous vous conseillons d’effectuer plusieurs demandes de location pour garantir vos chances d’obtenir une voiture de location aux dates souhaitées.</p>

                <p>Zotcar gère également des voitures pour les propriétaires. La mention « Agence Zotcar » est indiquée sur la fiche du véhicule. Les véhicules gérés par Zotcar sont à récupérer dans nos locaux. Si vous avez pris l’option “Navette aéroport”, une navette viendra vous chercher à l’aéroport et vous ramènera directement dans nos locaux afin de faire l’état des lieux. </p>
              </div>
                
              </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={classes.Accordion}>
            <Accordion>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
              <Typography className={materialClasses.heading}><strong>Quelles sont les conditions pour louer une voiture ?</strong></Typography>
              </AccordionSummary>
              <AccordionDetails className={materialClasses.drop}>
              <Typography>
              <div className={classes.Parapgraphs}>
                <p className={classes.FirstParagraph}>Pour louer une voiture sur Zotcar, il faut avoir 21 ans au minimum et 2 ans de permis.<br/>Ces conditions sont exigées par notre assureur partenaire Maïf pour que la location soit assurée tous risques. </p>

              </div>
                
              </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={classes.Accordion}>
            <Accordion>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
              <Typography className={materialClasses.heading}><strong>Comment fonctionne la franchise ?</strong></Typography>
              </AccordionSummary>
              <AccordionDetails className={materialClasses.drop}>
              <Typography>
              <div className={classes.Parapgraphs}>
                <p className={classes.FirstParagraph}>En cas d’accident pendant votre location, le montant maximal qui pourra être débité est de 800€.<br/>Ce montant peut être réduit en optant pour l’option « Rachat partiel de franchise »  </p>

              </div>
                
              </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={classes.Accordion}>
            <Accordion>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
              <Typography className={materialClasses.heading}><strong>Peut-on ajouter un conducteur supplémentaire ?</strong></Typography>
              </AccordionSummary>
              <AccordionDetails className={materialClasses.drop}>
              <Typography>
              <div className={classes.Parapgraphs}>
                <p className={classes.FirstParagraph}>En cas d’accident pendant votre location, le montant maximal qui pourra être débité est de 800€.<br/>Ce montant peut être réduit en optant pour l’option « Rachat partiel de franchise »  </p>

              </div>
                
              </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          
          <p>Vous aver d'autres questions ? consulter <span className={classes.FAQ}><a href='/FAQ'>notre FAQ</a></span></p>
        </div>
      </>
    )
}

export default Accordions