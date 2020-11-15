import React, { Component } from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { routeConstants } from '../../constants';
import { RecipesPage, CreateRecipe, updateRecipe } from '../Recipes';
import { RecipePage } from '../RecipePage';
import { history } from '../../history';

export class AppContainer extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {});
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
              path={routeConstants.RECIPE_CREATE}
              component={CreateRecipe}
            />
            <Route
              exact
              path={routeConstants.RECIPE_UPDATE}
              component={updateRecipe}
            />
            <Route
              exact
              path={routeConstants.RECIPE_VIEW}
              component={RecipePage}
            />

            {/* <Redirect from='*' to={routeConstants.RECIPES} /> */}
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
};

const connectedApp = connect(mapState, actionCreators)(AppContainer);
export { connectedApp as App };
