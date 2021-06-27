import React from 'react';
import {CircularProgress} from '@material-ui/core';
import './Loading.css'

export default function CircularUnderLoad() {
  return (
    <div className = 'Loading'>
      <div>Cargando</div>
      <br/>
      <CircularProgress disableShrink />
    </div>
    );
}
