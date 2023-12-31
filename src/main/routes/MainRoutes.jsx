import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AssignmentSolver from '../../microServices/AssignmentSolver/AssignmentSolver.jsx';
import Home from '../components/Home.jsx';


function MainRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path="/assignment-solver" element={<AssignmentSolver />} />
    </Routes>
  );
}

export default MainRoutes;
