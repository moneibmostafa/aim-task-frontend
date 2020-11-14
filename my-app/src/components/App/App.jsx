import React, { Component } from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { withCookies } from 'react-cookie';
// import { alertActions, validatorActions } from '../../actions';
// import { PrivateRoute, PublicRoute } from '../../routes';
import { routeConstants } from '../../constants';
import { RecipesPage, CreateRecipe } from '../Recipes';
import { RecipePage } from '../RecipePage';

import {createBrowserHistory} from 'history';
export const history = createBrowserHistory();


export class AppContainer extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      // this.props.clearAlerts();
      // this.props.clearValidation();
    });
  }

  render() {
    return (
      <div id='page-wrapper' className='gray-bg'>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path={routeConstants.RECIPES}
              component={RecipesPage}
            />
            <Route
              exact
              path={routeConstants.RECIPE_VIEW}
              component={RecipePage}
            />
            <Route
              exact
              path={routeConstants.RECIPE_CREATE}
              component={CreateRecipe}
            />

            <Redirect from='*' to={routeConstants.RECIPES} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  return state;
}

const actionCreators = {
  // clearAlerts: alertActions.clear,
  // clearValidation: validatorActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(AppContainer);
// const appWithCookies = withCookies(connectedApp);
// export { appWithCookies as App };
export { connectedApp as App };
