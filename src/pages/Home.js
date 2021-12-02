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
        <Grid item xs={4} sx={{ textAlign: 'center', margin: '2em' }}>
          <CharacterContainer isEnemy={false} />
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'center', margin: '2em' }}>
          <CharacterContainer isEnemy={true} />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
