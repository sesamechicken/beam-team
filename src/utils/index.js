import React from 'react';
import { CircularProgress } from '@material-ui/core';
import ps4 from '../static/icons/ps4.png';
import xbox from '../static/icons/xbox.png';
import nintendo from '../static/icons/nintendo.png';
import pc from '../static/icons/pc.png';
import twitch from '../static/icons/twitch.png';

export const getPlatformIcon = (platform) => {
  switch (platform){
    case 'ps4':
      return ps4;
    case 'ps5':
      return ps4;
    case 'xbox':
      return xbox;
    case 'nintendo':
      return nintendo;
    case 'pc': 
      return pc;
    case 'twitch':
      return twitch;
    default:
      return 'dont know'
  }
}

export const PieChart = ({size, value}) => {
  return (
    <>
    <CircularProgress
    size={`${size}%`}
    value={100}
    thickness={22}
    variant="determinate"
    color="secondary"
  />
    <CircularProgress
      size={`${size}%`}
      value={value}
      thickness={22}
      variant="determinate"
      color="primary"
      style={{marginLeft: '-160px'}}
    />
    
  </>
  )
}