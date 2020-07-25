import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  outerWrapper: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '100%',
  },
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    clipPath: 'polygon(100% 50%, 100% 83.4%, 100% 85.7%, 100% 87.2%, 100% 88.3%, 100% 89.2%, 100% 89.9%, 100% 90.5%, 100% 91.1%, 99.9% 91.5%, 99.9% 92%, 99.9% 92.4%, 99.9% 92.7%, 99.9% 93.1%, 99.8% 93.4%, 99.8% 93.7%, 99.8% 94%, 99.8% 94.2%, 99.7% 94.5%, 99.7% 94.7%, 99.7% 94.9%, 99.7% 95.1%, 99.6% 95.3%, 99.6% 95.5%, 99.5% 95.7%, 99.5% 95.9%, 99.5% 96%, 99.4% 96.2%, 99.4% 96.4%, 99.3% 96.5%, 99.3% 96.7%, 99.2% 96.8%, 99.2% 96.9%, 99.1% 97.1%, 99.1% 97.2%, 99% 97.3%, 99% 97.4%, 98.9% 97.5%, 98.8% 97.6%, 98.8% 97.7%, 98.7% 97.8%, 98.6% 97.9%, 98.5% 98%, 98.5% 98.1%, 98.4% 98.2%, 98.3% 98.3%, 98.2% 98.4%, 98.1% 98.5%, 98% 98.5%, 97.9% 98.6%, 97.8% 98.7%, 97.7% 98.8%, 97.6% 98.8%, 97.5% 98.9%, 97.4% 99%, 97.3% 99%, 97.2% 99.1%, 97.1% 99.1%, 96.9% 99.2%, 96.8% 99.2%, 96.7% 99.3%, 96.5% 99.3%, 96.4% 99.4%, 96.2% 99.4%, 96% 99.5%, 95.9% 99.5%, 95.7% 99.5%, 95.5% 99.6%, 95.3% 99.6%, 95.1% 99.7%, 94.9% 99.7%, 94.7% 99.7%, 94.5% 99.7%, 94.2% 99.8%, 94% 99.8%, 93.7% 99.8%, 93.4% 99.8%, 93.1% 99.9%, 92.7% 99.9%, 92.4% 99.9%, 92% 99.9%, 91.5% 99.9%, 91.1% 100%, 90.5% 100%, 89.9% 100%, 89.2% 100%, 88.3% 100%, 87.2% 100%, 85.7% 100%, 83.4% 100%, 51.2% 100%, 16.6% 100%, 14.3% 100%, 12.8% 100%, 11.7% 100%, 10.8% 100%, 10.1% 100%, 9.5% 100%, 8.9% 100%, 8.5% 99.9%, 8% 99.9%, 7.6% 99.9%, 7.3% 99.9%, 6.9% 99.9%, 6.6% 99.8%, 6.3% 99.8%, 6% 99.8%, 5.8% 99.8%, 5.5% 99.7%, 5.3% 99.7%, 5.1% 99.7%, 4.9% 99.7%, 4.7% 99.6%, 4.5% 99.6%, 4.3% 99.5%, 4.1% 99.5%, 4% 99.5%, 3.8% 99.4%, 3.6% 99.4%, 3.5% 99.3%, 3.3% 99.3%, 3.2% 99.2%, 3.1% 99.2%, 2.9% 99.1%, 2.8% 99.1%, 2.7% 99%, 2.6% 99%, 2.5% 98.9%, 2.4% 98.8%, 2.3% 98.8%, 2.2% 98.7%, 2.1% 98.6%, 2% 98.5%, 1.9% 98.5%, 1.8% 98.4%, 1.7% 98.3%, 1.6% 98.2%, 1.5% 98.1%, 1.5% 98%, 1.4% 97.9%, 1.3% 97.8%, 1.2% 97.7%, 1.2% 97.6%, 1.1% 97.5%, 1% 97.4%, 1% 97.3%, 0.9% 97.2%, 0.9% 97.1%, 0.8% 96.9%, 0.8% 96.8%, 0.7% 96.7%, 0.7% 96.5%, 0.6% 96.4%, 0.6% 96.2%, 0.5% 96%, 0.5% 95.9%, 0.5% 95.7%, 0.4% 95.5%, 0.4% 95.3%, 0.3% 95.1%, 0.3% 94.9%, 0.3% 94.7%, 0.3% 94.5%, 0.2% 94.2%, 0.2% 94%, 0.2% 93.7%, 0.2% 93.4%, 0.1% 93.1%, 0.1% 92.7%, 0.1% 92.4%, 0.1% 92%, 0.1% 91.5%, 0% 91.1%, 0% 90.5%, 0% 89.9%, 0% 89.2%, 0% 88.3%, 0% 87.2%, 0% 85.7%, 0% 83.4%, 0% 51.3%, 0% 16.6%, 0% 14.3%, 0% 12.8%, 0% 11.7%, 0% 10.8%, 0% 10.1%, 0% 9.5%, 0% 8.9%, 0.1% 8.5%, 0.1% 8%, 0.1% 7.6%, 0.1% 7.3%, 0.1% 6.9%, 0.2% 6.6%, 0.2% 6.3%, 0.2% 6%, 0.2% 5.8%, 0.3% 5.5%, 0.3% 5.3%, 0.3% 5.1%, 0.3% 4.9%, 0.4% 4.7%, 0.4% 4.5%, 0.5% 4.3%, 0.5% 4.1%, 0.5% 4%, 0.6% 3.8%, 0.6% 3.6%, 0.7% 3.5%, 0.7% 3.3%, 0.8% 3.2%, 0.8% 3.1%, 0.9% 2.9%, 0.9% 2.8%, 1% 2.7%, 1% 2.6%, 1.1% 2.5%, 1.2% 2.4%, 1.2% 2.3%, 1.3% 2.2%, 1.4% 2.1%, 1.5% 2%, 1.5% 1.9%, 1.6% 1.8%, 1.7% 1.7%, 1.8% 1.6%, 1.9% 1.5%, 2% 1.5%, 2.1% 1.4%, 2.2% 1.3%, 2.3% 1.2%, 2.4% 1.2%, 2.5% 1.1%, 2.6% 1%, 2.7% 1%, 2.8% 0.9%, 2.9% 0.9%, 3.1% 0.8%, 3.2% 0.8%, 3.3% 0.7%, 3.5% 0.7%, 3.6% 0.6%, 3.8% 0.6%, 4% 0.5%, 4.1% 0.5%, 4.3% 0.5%, 4.5% 0.4%, 4.7% 0.4%, 4.9% 0.3%, 5.1% 0.3%, 5.3% 0.3%, 5.5% 0.3%, 5.8% 0.2%, 6% 0.2%, 6.3% 0.2%, 6.6% 0.2%, 6.9% 0.1%, 7.3% 0.1%, 7.6% 0.1%, 8% 0.1%, 8.5% 0.1%, 8.9% 0%, 9.5% 0%, 10.1% 0%, 10.8% 0%, 11.7% 0%, 12.8% 0%, 14.3% 0%, 16.6% 0%, 51.3% 0%, 83.4% 0%, 85.7% 0%, 87.2% 0%, 88.3% 0%, 89.2% 0%, 89.9% 0%, 90.5% 0%, 91.1% 0%, 91.5% 0.1%, 92% 0.1%, 92.4% 0.1%, 92.7% 0.1%, 93.1% 0.1%, 93.4% 0.2%, 93.7% 0.2%, 94% 0.2%, 94.2% 0.2%, 94.5% 0.3%, 94.7% 0.3%, 94.9% 0.3%, 95.1% 0.3%, 95.3% 0.4%, 95.5% 0.4%, 95.7% 0.5%, 95.9% 0.5%, 96% 0.5%, 96.2% 0.6%, 96.4% 0.6%, 96.5% 0.7%, 96.7% 0.7%, 96.8% 0.8%, 96.9% 0.8%, 97.1% 0.9%, 97.2% 0.9%, 97.3% 1%, 97.4% 1%, 97.5% 1.1%, 97.6% 1.2%, 97.7% 1.2%, 97.8% 1.3%, 97.9% 1.4%, 98% 1.5%, 98.1% 1.5%, 98.2% 1.6%, 98.3% 1.7%, 98.4% 1.8%, 98.5% 1.9%, 98.5% 2%, 98.6% 2.1%, 98.7% 2.2%, 98.8% 2.3%, 98.8% 2.4%, 98.9% 2.5%, 99% 2.6%, 99% 2.7%, 99.1% 2.8%, 99.1% 2.9%, 99.2% 3.1%, 99.2% 3.2%, 99.3% 3.3%, 99.3% 3.5%, 99.4% 3.6%, 99.4% 3.8%, 99.5% 4%, 99.5% 4.1%, 99.5% 4.3%, 99.6% 4.5%, 99.6% 4.7%, 99.7% 4.9%, 99.7% 5.1%, 99.7% 5.3%, 99.7% 5.5%, 99.8% 5.8%, 99.8% 6%, 99.8% 6.3%, 99.8% 6.6%, 99.9% 6.9%, 99.9% 7.3%, 99.9% 7.6%, 99.9% 8%, 99.9% 8.5%, 100% 8.9%, 100% 9.5%, 100% 10.1%, 100% 10.8%, 100% 11.7%, 100% 12.8%, 100% 14.3%, 100% 16.6%, 100% 0)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function NoteCard(props) {
  const { title, message } = props;
  const classes = useStyles();

  return (
    <div className={classes.outerWrapper}>
      <Card className={classes.root} elevation={4}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            { title || 'title' }
          </Typography>
          <Typography variant="h5" component="h2">
            { message || 'message'}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default NoteCard;