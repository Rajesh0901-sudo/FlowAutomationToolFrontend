import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout';
import AddEnvConfig from './components/AddEnvConfig';
import AddCustomerDetails from './components/AddCustomerDetails';
import RunQuery from './components/RunQuery';
import QueryStatus from './components/QueryStatus';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <AddEnvConfig />
        <AddCustomerDetails />
        <RunQuery />
        <QueryStatus />
      </Layout>
    </Provider>
  );
};

export default App;