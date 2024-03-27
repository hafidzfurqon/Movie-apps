import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailMovie from '../pages/DetailMovie';
import MovieDisplay from '../pages/MovieDisplay';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MovieDisplay />} />
      <Route path="/movie/:id" element={<DetailMovie />} />
    </Routes>
  );
};

export default AppRoutes;
