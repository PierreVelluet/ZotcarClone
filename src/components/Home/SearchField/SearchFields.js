import React, { useState} from 'react';
import classes from './SearchField.module.css';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
        backgroundColor: '#32b298',
        color: 'white',
        borderRadius: '10px',
        textTransform: 'none',
        fontWeight: '800',
        height: '55px',
    
        "&:hover": {
            backgroundColor: '#32b358'
        }
    },
    input: {
        marginTop: '10px',
        marginRight: '10px',
    }
    }));

const SearchField = () => {

    const materialClass = useStyles();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [localisation, setLocalisation] = useState('');

    const handleStartDateChange = (date) => {
        setStartDate(date);
      };
    const handleEndDateChange = (date) => {
        setEndDate(date);
    };
    const handleLocalisationChange = (event) => {
        setLocalisation(event.target.value)
    }
    const deleteSearch = () => {
        setStartDate(new Date)
        setEndDate(new Date)
        setLocalisation('')
    }
    return (
        <>
        <div className={classes.SearchFieldContainer}>
            <div className={classes.InputContainer}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TextField
                    id="outlined-basic"
                    className={materialClass.input}
                    label="Lieu de prise du véhicule"
                    variant="outlined"
                    value={localisation}
                    onChange={handleLocalisationChange}
                />
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date de début"
                    value={startDate}
                    onChange={handleStartDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date de fin"
                    value={endDate}
                    onChange={handleEndDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <Button variant="contained" className={materialClass.root}>Rechercher</Button>
                </MuiPickersUtilsProvider>
            </div>
        </div>
        <div className={classes.DeleteSearch} onClick={deleteSearch}>
                Effacer la recherche
        </div>
        </>
    );
};

export default SearchField;