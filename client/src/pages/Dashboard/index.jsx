import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  makeStyles,
} from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const useStyles = makeStyles({
  container: {
    margin: '20px auto',
  },
  root: {
    height: 400,
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '90%',
    margin: '10px 0',
  },
  button: {
    width: '100%',
    height: '100%',
    margin: '10px 0',
    fontSize: '2.4rem',
  },
  cardContent: {
    height: '100%',
  },
});

function Home({
  username,
}) {
  const classes = useStyles();
  return (
    <>
      <Header title="Dashboard" />
      <Container maxWidth="md" className={classes.container}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            {`Welcome back ${username}!`}
          </Typography>
          <Card className={classes.root}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5">Where would you like to go?</Typography>
              <div className={classes.buttonContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/message"
                  className={classes.button}
                >
                  Global Chat
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/notes"
                  className={classes.button}
                >
                  Note
                </Button>
              </div>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  username: state.auth?.user?.name,
});

// Compose Redux functions with component functions
export default compose(connect(mapStateToProps)(Home));
