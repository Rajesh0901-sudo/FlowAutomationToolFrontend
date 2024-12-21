import React from 'react';
import AddEnvConfig from './AddEnvConfig';
import AddCustomerDetails from './AddCustomerDetails';
import RunQuery from './RunQuery';

const App = () => {
  return (
    <div>
      <h1>Flow Automation Tool</h1>
      <AddEnvConfig />
      <AddCustomerDetails />
      <RunQuery />
    </div>
  );
};

export default App;