import React from 'react';
import Typography from '@mui/material/Typography';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {'COPYRIGHT ⓒ SUNGKYUNKWAN UNIVERSITY ALL RIGHTS RESERVED. Contact us'}
    </Typography>
  );
}

function Footer() {
  return <Copyright sx={{ mt: 8, mb: 4 }} />;
}

export default Footer;
