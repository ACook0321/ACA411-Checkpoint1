import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function VolumeSlider({volume, setVolume}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5">Master Volume</Typography>
      <Typography variant="body2">Overrides all other sound settings of this application.</Typography>
      <Slider
        onChange={(e, value) => setVolume(value)}
        value={volume}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
    </div>
  );
}

