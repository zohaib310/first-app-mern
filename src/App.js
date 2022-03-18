import React, { Fragment } from 'react';
import { AppContent } from './views';
import routes from './routes';

function App() {
  return (
    <Fragment>
      <AppContent routes={routes} />
    </Fragment>
  );
}

export default App;
