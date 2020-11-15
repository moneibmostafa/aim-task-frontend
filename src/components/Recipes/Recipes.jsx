import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card, Container, Image, Header, Label, Button } from "semantic-ui-react";
import { recipesActions } from "../../actions";
import { routeConstants } from "../../constants";
import { Link } from "react-router-dom";

class RecipesPage extends Component {
  async componentDidMount() {
    await this.props.getAllRecipes();
  }

  handleDeleteRecipe = async (recipeId) => {
    await this.props.deleteRecipe(recipeId);
  };

  renderImage = recipeImage => {
    return (
      <div key={recipeImage}>
        <Image
          centered
          src={`${process.env.REACT_APP_BACKEND_URL}/${recipeImage}`}
          rounded
          wrapped
          fluid
        />
      </div>
    );
  };

   render() {
    const { recipes } = this.props;

    return (
      <Container fluid style={{ padding: "2em 10em" }}>
      {recipes.length !== 0 ? (
        <Label ribbon color="teal" size="huge">All Recipes</Label>
      ) : (
        <Header as='h2'> No Recipes Issued </Header>        
      )}
      <Button as={Link} to={routeConstants.RECIPE_CREATE} floated="right">
        Create Recipe
      </Button>
      <br />
      <br />
        <Card.Group centered itemsPerRow={2} stackable>
          {recipes && recipes.length !== 0 && 
          recipes.map((recipe) => (
            <Card key={recipe._id}>
                {this.renderImage(recipe.image)}
              <Card.Content>
                <Fragment>
                  <Card.Header><Link to={`/${recipe._id}`}>{recipe.title}</Link></Card.Header>
                  <Card.Meta>
                    <strong>Created By : </strong>
                    {recipe.creatorName ? recipe.creatorName : 'Anonymous'}
                  </Card.Meta>
                  <Card.Meta>
                    <strong>Issue Date : </strong>
                    {recipe.createdAt}
                  </Card.Meta>
                  <Card.Meta>
                    <strong>Views : </strong>
                    {recipe.views}
                  </Card.Meta>
                  <Card.Description>
                    <strong>Description: </strong>
                    {recipe.description}
                  </Card.Description>
                </Fragment>
              </Card.Content>
              <Card.Content>
                <Button onClick={() => this.handleDeleteRecipe(recipe._id)} basic color='red'>Delete</Button>
              </Card.Content>
            </Card>)
          )}
        </Card.Group>
      </Container>
    );
  }
}

function mapState(state) {
  const { recipes } = state.recipes;
  return { recipes };
}

const actionCreators = {
    getAllRecipes: recipesActions.getAllRecipes,
    deleteRecipe: recipesActions.deleteRecipe,
};
const connectedRecipesPage = connect(mapState, actionCreators)(RecipesPage);
export { connectedRecipesPage as RecipesPage };
