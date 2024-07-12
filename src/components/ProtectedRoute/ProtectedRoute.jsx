import React,  { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Auth  from '../Auth/Auth';

function ProtectedRoute({ path, ...rest }) {
  const auth = Auth();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      navigate('/login');
    }
  }, []);

  return (
      <Routes>
        <Route path={path} {...rest} />
      </Routes>
  );
}

export default ProtectedRoute;