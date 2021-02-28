import { FC } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { Footer, Navbar } from 'components';
import { routes } from 'routes';
import 'styles/global.scss';
import { map } from 'lodash/fp';

const App: FC = () => (
  <>
    <Router>
      <Navbar />
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
        <Route path="*">
          <Redirect to="/product" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </>
);

export default App;
