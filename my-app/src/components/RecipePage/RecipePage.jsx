import React, { Component } from "react";
import { connect } from "react-redux";
import { Label, Card, Segment, Image, Grid, List, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { recipesActions } from "../../actions";
import { routeConstants } from "../../constants";
// import { backendUrl } from "../../config";
// import Slider from "react-slick";
// import { isEmpty } from "lodash";

class RecipePage extends Component {

  async componentDidMount() {
    await this.props.getRecipeData(this.props.match.params.id);
  }

  handleReplyFieldChange = (e, {value}) => {
    if (this.state.reply === '' && value === ' ') return;
    this.setState({ reply: value });
  }

  handleSubmitReply = async (e) => {
    e.preventDefault();
    if (this.props.ticketData.isResolved === true) return;
    if (this.state.reply === '') return;
    await this.props.submitReply(this.state.reply, this.props.ticketData._id);
    this.setState({ reply: '' });
  };

  handleDeleteRecipe = async () => {
    await this.props.deleteRecipe(this.props.recipe._id);
  };

//   renderImages = ticket => {
//     const settings = {
//       dots: false,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       infinite: true,
//       speed: 1000,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       adaptiveHeight: false
//     };
//     return (
//       <Slider {...settings}>
//         {ticket.images.map(image => {
//           return (
//             <div key={image}>
//               <Image
//                 centered
//                 src={`${backendUrl}/${image}`}
//                 rounded
//                 wrapped
//                 fluid
//               />
//             </div>
//           );
//         })}
//       </Slider>
//     );
//   };

  render() {
    const { recipe } = this.props;
    
    return (
      <Segment>
        <Grid style={{ marginLeft: '10px' }}>
          <Grid.Row style={{ marginButtom: '40px' }}>
            <Button icon labelPosition='left'>
              <Icon name='left arrow' />
              <Link to={`/`}>Return to Recipes</Link>
            </Button>
          </Grid.Row>
          <Grid.Row>
            <Label color="teal" size="huge">Recipe: #{recipe && recipe._id}</Label>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              {/* <Grid.Row>
                <Link to={""}>{ticket && this.renderImages(ticket)}</Link>
              </Grid.Row> */}
            </Grid.Column>
            <Grid.Column width={8}>
              <Card fluid>
                <Card.Content>
                  <Card.Header>{recipe && recipe.title}</Card.Header>
                  <Card.Meta>
                    <strong>Created By : </strong>
                    {recipe && recipe.creatorName}
                  </Card.Meta>
                  <Card.Meta>
                    <strong>Issue Date : </strong>
                    {recipe && recipe.createdAt}
                  </Card.Meta>
                  <Card.Meta>
                    <strong>Views : </strong>
                    {recipe && recipe.views}
                  </Card.Meta>
                  <Card.Description>
                    <strong>Description:</strong>{" "}
                    {recipe && recipe.description}
                  </Card.Description>
                  <br />
                  <Card.Description style={{ marginBottom: '20px' }}>
                    <strong>Ingredients : </strong>
                    <List bulleted>
                        {recipe && recipe.ingredients && recipe.ingredients.length !== 0 && 
                        recipe.ingredients.map((ingredient, index) => {
                            return ( 
                                <List.Item key={index}> 
                                    {`${ingredient.size} ${ingredient.type} ${ingredient.ingredient}`}
                                </List.Item>
                            )
                        })}
                    </List>                  
                  </Card.Description>
                  <Card.Description>
                    <strong>Nutrition Facts:</strong>{" "}
                    {recipe && recipe.nutrition && (
                        <List bulleted>
                            <List.Item> Calories : {recipe.nutrition.calories !== 0 ? recipe.nutrition.calories: 'NaN'}</List.Item> 
                            <List.Item> Protein : {recipe.nutrition.protein !== 0 ? recipe.nutrition.protein: 'NaN'}</List.Item> 
                            <List.Item> Carbohydrates : {recipe.nutrition.carbohydrates !== 0 ? recipe.nutrition.carbohydrates: 'NaN'}</List.Item> 
                            <List.Item> Fat : {recipe.nutrition.fat !== 0 ? recipe.nutrition.fat: 'NaN'}</List.Item> 
                            <List.Item> Sodium : {recipe.nutrition.sodium !== 0 ? recipe.nutrition.sodium: 'NaN'}</List.Item> 
                        </List>
                    )}
                  </Card.Description>
                  <br />
                  <Card.Description>
                    <strong>Recipe:</strong>{" "}
                    {recipe && recipe.recipeSteps}
                  </Card.Description>
                </Card.Content>
              </Card>
              <React.Fragment>
                <Button 
                  color='blue' 
                  floated='left' 
                  as={Link} 
                  to={`update/${recipe._id}`}
                >Update</Button>
                <Button onClick={this.handleDeleteRecipe} color='red' floated='right'>Delete</Button>
              </React.Fragment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

function mapState(state) {
  const { recipe } = state.recipes;
  return { recipe };
}

const actionCreators = {
    getRecipeData: recipesActions.getRecipeData,
    deleteRecipe: recipesActions.deleteRecipe,
};

const connectedRecipePage = connect(mapState, actionCreators)(RecipePage);
export { connectedRecipePage as RecipePage };
