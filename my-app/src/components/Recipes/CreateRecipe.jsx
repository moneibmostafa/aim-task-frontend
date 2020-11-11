import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Image, Header, Button, Segment, Divider, Grid, Icon } from "semantic-ui-react";
import { recipesActions } from "../../actions/recipes.actions";
import { recipesConstants } from "../../constants";
import DataPage from "./DataPage";

class CreateRecipe extends Component {
    componentDidMount() {
        this.props.setStep(recipesConstants.DATA);
    }

    render() {
        const { step, title, description, servings, creatorName } = this.props.recipe;
        console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwww', step)
        return(
            <Container fluid>
                <Segment textAlign="center" style={{ padding: "3em 3em" }} vertical>
                    <Header as="h1" color="teal" textAlign="center">
                        Create New Recipe
                    </Header>
                </Segment>
                <Segment>
                    <Grid columns={2} stackable>
                        <Divider vertical></Divider>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                {step === recipesConstants.DATA ? (
                                    <DataPage 
                                        title={title}
                                        creatorName={creatorName}
                                        description={description}
                                        servings={servings}
                                    />
                                // ) : 
                                // step === recipesConstants.INGREDIENTS ? (
                                //     <IngerdientsPage />
                                // ) : 
                                // step === recipesConstants.NUTRITION ? (
                                //     <NutritionFactsPage/>
                                // ) : 
                                // step === recipesConstants.STEPS ? (
                                //     <StepsPage />
                                ) : 'Please Refresh Page!'}
                            </Grid.Column>

                            <Grid.Column>
                            <Header icon>
                                <Icon name='world' />
                                Add New Country
                            </Header>
                            <Button primary>Create</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Container>
        );
    }

}

function mapState(state) {
    const { recipe } = state.recipes;
    // const { valid, errorsNumber, errors: validationErrors } = state.validation;
    return { recipe };
}
  
const actionCreators = {
    setStep: recipesActions.setStep,
    // add: postActions.add,
    // stepIncrement: postActions.stepIncrement,
    // stepDecrement: postActions.stepDecrement,
    // resetPostDetails: postActions.resetPostDetails,
    // editWholePost: postActions.editWholePost,
    // takePostOnline: postActions.takePostOnline,
    // editPostDone: postActions.editPostDone,
    // // validateInput: validatorActions.validateInput,
};
  
const connectedCreateRecipe = connect(mapState, actionCreators)(CreateRecipe);
export { connectedCreateRecipe as CreateRecipe };