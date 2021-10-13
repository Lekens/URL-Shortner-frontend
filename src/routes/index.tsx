// Core
import {
  Switch,
  Route,
  RouteComponentProps,
  RouteProps,
  Redirect,
} from 'react-router-dom';

import { PAGES } from 'constants/pages';
import { PageWrapper } from 'features/common/components/PageWrapper';
import { HomeScreen } from 'features/pages/home';
import { DecodeScreen } from 'features/pages/decode';

interface IAppWrapperRouteProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}
function AppWrapper({ component: Component, ...rest }: IAppWrapperRouteProps) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <PageWrapper>
          <Component {...props} />
        </PageWrapper>
      )}
    />
  );
}
function Routes() {
  return (
    <Switch>
      <AppWrapper component={HomeScreen} path={PAGES.HOME.INDEX} />
      <AppWrapper component={DecodeScreen} path={PAGES.HOME.DECODE} />
      <Redirect to={PAGES.HOME.INDEX} />
    </Switch>
  );
}

export default Routes;
