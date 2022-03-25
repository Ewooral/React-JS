import React from 'react';
import { AppBar, Typography, Grow, Grid, Container } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Memory from './images/memories.svg';
import useStyles from './styles';
import "./App.css";

const App = () => {
  const classes = useStyles();
  return (
    <main>
        <header className="Header">
          <h4>Memory Bloomberg</h4>
          {/* <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center" color="inherit">Social Media App</Typography> */}
          <img className={classes.image} src= {Memory} alt="Memory" height="50" width="50" />
          {/* </AppBar> */}
        </header>

          <Grow in>
            <Container>
              <Grid container justify= "space-between" alignItems="stretch"  spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts />
                </Grid> 
                <Grid item xs={12} sm={4}>
                  <Form />
                </Grid> 
              
              </Grid>
            </Container>
          </Grow>
    </main>
   
  )
}

export default App