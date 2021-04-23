import React, { useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import { Typography } from '@material-ui/core';




export default function Switches(props) {

  useEffect(() => {
  }, [props.online.isOnline]);

  const handleChange = (event) => {
    if(props.online.isOnline === true){
    props.setOnline({ isOnline: false })
  } else {
    props.setOnline({ isOnline:true })
    } ;
  };

  
  

  return (
    <div>
      <Typography variant="h5">Online Mode</Typography>
      <Typography variant="body2">Is the application connected to the internet?</Typography>
      <Switch
        checked={props.online.isOnline}
        onChange={handleChange}
        value={props.online}
        name="isOnline"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}
