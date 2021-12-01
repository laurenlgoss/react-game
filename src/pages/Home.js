import React from 'react';

import { Grid } from '@mui/material';

import CharacterContainer from '../components/CharacterContainer';

function Home() {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ height: '100vh' }}
      >
        <Grid item xs={4} sx={{ textAlign: 'center' }}>
          <CharacterContainer />
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'center' }}>
          <CharacterContainer />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
