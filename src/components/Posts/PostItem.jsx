import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function PostItem({ post }) {

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          { post.title }
        </Typography>
        <br />
        <Typography variant="body2">
          { post.body }
        </Typography>
      </CardContent>
      <CardActions>
        <Link className='readmore' to={`/author-details/${post.userId}`}>
          <Button className='card__btn' size="small">Learn More</Button>
        </Link>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }} className='list__item'>
      <Card  variant="outlined" sx={{ height: 250 }}>{card}</Card>
    </Box>
  )
}
