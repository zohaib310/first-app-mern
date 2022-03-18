import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

const AppContent = ({ routes }) => {
  return (
    <Fragment>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Fragment>
  );
};

export default AppContent;
