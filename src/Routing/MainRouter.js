import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostsList from '../components/Posts/PostsList';
import AuthorDetails from '../components/Posts/AuthorDetails';
import HomePage from '../components/HomePage';
import TaskList from '../components/Tasks/TasksList'

const MainRouter = () => {
  return (
    <Routes> 
      <Route path='/' element={<HomePage />} />
      <Route path='/posts' element={<PostsList />} />
      <Route path='/author-details/:userId' element={<AuthorDetails />} />

      <Route path='/tasks' element={<TaskList />} />
    </Routes>
  );
};

export default MainRouter;