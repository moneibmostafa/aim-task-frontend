import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card, Container, Image, Header, Label } from "semantic-ui-react";
// import Slider from "react-slick";
// import { backendUrl } from "../../config";
import { recipesActions } from "../../actions";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

class RecipesPage extends Component {
  async componentDidMount() {
    await this.props.getAllRecipes();
  }

//   renderImages = (tickets) => {
//     const settings = {
//       dots: false,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       infinite: true,
//       speed: 1000,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       adaptiveHeight: false,
//     };
//     return (
//       <Slider {...settings}>
//         {tickets.images.map((image) => {
//           return (
//             <div key={image}>
//               <Image src={`${backendUrl}/${image}`} rounded fluid />
//             </div>
//           );
//         })}
//       </Slider>
//     );
//   };

   render() {
    const { recipes } = this.props;

    return (
      <Container fluid style={{ padding: "2em 10em" }}>
      {recipes.length !== 0 ? (
        <Label ribbon color="teal" size="huge">All Recipes</Label>
      ) : (
        <Header as='h2'> No Recipes Issued </Header>        
      )}
      <br />
      <br />
        <Card.Group centered itemsPerRow={2} stackable>
          {recipes  && recipes.length !== 0 && 
          recipes.map((recipe) => (
            <Card key={recipe._id}>
                {/* {this.renderImages(ticket)} */}
              <Card.Content>
                <Fragment>
                  <Card.Header><Link to={`/recipe/${recipe._id}`}>{recipe.title}</Link></Card.Header>
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
};
const connectedRecipesPage = connect(mapState, actionCreators)(RecipesPage);
export { connectedRecipesPage as RecipesPage };
