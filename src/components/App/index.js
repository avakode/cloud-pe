import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopCompanies from '../TopCompanies';
import CompanyDetail from '../CompanyDetail';
import Companies from '../Companies';
import Header from '../Header';

import { Container } from './style';

const App = () => (
  <Router>
    <Header />
    <Container>
      <Switch>
        <Route path="/companies/:ticker" component={CompanyDetail} />
        <Route path="/companies" component={Companies} />
        <Route path="/" component={TopCompanies} />
      </Switch>
    </Container>
  </Router>
);

export default App;
