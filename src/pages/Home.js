import React from 'react';

import { Grid } from '@mui/material';

import Character from '../components/Character';
import HealthBar from '../components/HealthBar';

function Home() {
  return (
    <>
      <Grid container alignItems="end" sx={{ height: '50vh' }}>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <HealthBar />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <HealthBar />
        </Grid>
      </Grid>
      <Grid container alignItems="start" sx={{ height: '50vh' }}>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Character />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Character />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
