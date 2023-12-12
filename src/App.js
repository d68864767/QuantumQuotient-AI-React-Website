import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuantumAlgorithmShowcasePage from './pages/QuantumAlgorithmShowcasePage';
import MachineLearningPage from './pages/MachineLearningPage';
import EducationalResourcesPage from './pages/EducationalResourcesPage';
import NewsAndUpdatesPage from './pages/NewsAndUpdatesPage';
import UserProfilesPage from './pages/UserProfilesPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quantum-algorithms" component={QuantumAlgorithmShowcasePage} />
        <Route path="/machine-learning" component={MachineLearningPage} />
        <Route path="/educational-resources" component={EducationalResourcesPage} />
        <Route path="/news-and-updates" component={NewsAndUpdatesPage} />
        <Route path="/user-profiles" component={UserProfilesPage} />
      </Switch>
    </Router>
  );
};

export default App;
