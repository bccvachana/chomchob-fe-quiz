import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from 'components';
import { routes } from 'routes';
import 'styles/global.scss';
import { map } from 'lodash/fp';

const App: FC = () => (
  <>
    <Navbar />
    <Router>
      <Switch>
        {map(({
          path,
          PageComponent,
        }) => (
          <Route
            path={path}
            exact
            key={path}
          >
            {PageComponent && <PageComponent />}
          </Route>
        ), routes)}
      </Switch>
    </Router>
  </>
);

export default App;
