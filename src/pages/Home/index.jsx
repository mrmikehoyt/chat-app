import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function Home() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Header
            </Typography>
            <Typography variant="h5" component="h2">
              Testing
            </Typography>
            <Typography color="textSecondary">
              Example 2
            </Typography>
            <Typography variant="body2" component="p">
              paragraph
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}

export default Home;
