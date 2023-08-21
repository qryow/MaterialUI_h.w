import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthors } from '../../store/postSlice';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar'

const AuthorDetails = () => {
  const { authors } = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getAuthors());
  }, []);

  const user = authors ? authors.find(user => user.id.toString() === userId) : null;

  if (!user) {
    return null;
  }

  const bull = <span style={{ display: 'inline-block', margin: '0 2px', transform: 'scale(0.8)' }}>•</span>;

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          { user.name }
        </Typography>
        <Typography variant="body2">
          { user.username }
        </Typography>
        <Typography variant="body2">
          { user.email }
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <>
    <Navbar />
      <div className='wrapper'>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </div>
    </>
  );
};

export default AuthorDetails;
