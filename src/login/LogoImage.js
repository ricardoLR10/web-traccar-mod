import React from 'react';
import { makeStyles } from '@mui/styles';
import logo from '../resources/images/logocbscompleto.jpg';
// import { ReactComponent as Logo } from '../resources/images/logo.svg';

const useStyles = makeStyles(() => ({
  image: {
    alignSelf: 'center',
    maxWidth: '300px',
    maxHeight: '180px',
    width: 'auto',
    height: 'auto',
  },
}));

const LogoImage = ({ color }) => {
  const classes = useStyles();

  return (<img src={logo} className={classes.image} style={{ color }} alt="Logo" />);
  // return (<Logo className={classes.image} style={{ color }} />);
};

export default LogoImage;
