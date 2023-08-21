import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/postSlice'
import PostItem from './PostItem';
//import Pagination from './Pagination'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
//import { Card } from '@mui/material'
import Navbar from './Navbar'

const PostsList = () => {
  const { posts } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, []);

  console.log(posts);

  return (
    <>
    <Navbar />
      {posts.length ? (
        <div className='list'>
          {posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
    </>
  )
};


export default PostsList
