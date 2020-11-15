import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Image, Header, Button, Segment, Divider, Grid, Icon, Placeholder } from "semantic-ui-react";
import { recipesActions } from "../../actions/recipes.actions";
import { recipesConstants } from "../../constants";
import DataPage from "./DataPage";
import NutritionPage from "./NutritionPage";
import IngerdientsPage from "./IngredientsPage";
import RecipePage from "./recipePage";
import ImageUploader from 'react-images-upload';

class CreateRecipe extends Component {
    async componentDidMount() {
        await this.props.setStep(recipesConstants.DATA);
        // this.onDrop = this.onDrop.bind(this);
    }

    onDrop = async (file) => {
        console.log('ddddddddddddddddddd', file);
        await this.props.handleChangeFields('file', file, 0);
        // await this.props.filesAdded(file);
        // this.setState({
        //     pictures: this.state.pictures.concat(picture),
        // });
    }

    handleNext = async () => {
        if (this.props.recipe.step === recipesConstants.DATA) return await this.props.setStep(recipesConstants.INGREDIENTS);
        if (this.props.recipe.step === recipesConstants.INGREDIENTS) return await this.props.setStep(recipesConstants.NUTRITION);
        if (this.props.recipe.step === recipesConstants.NUTRITION) return await this.props.setStep(recipesConstants.STEPS);
        if (this.props.recipe.step === recipesConstants.STEPS) return;
    }

    handlePrevious = async () => {
        if (this.props.recipe.step === recipesConstants.STEPS) return await this.props.setStep(recipesConstants.NUTRITION);
        if (this.props.recipe.step === recipesConstants.NUTRITION) return await this.props.setStep(recipesConstants.INGREDIENTS);
        if (this.props.recipe.step === recipesConstants.INGREDIENTS) return await this.props.setStep(recipesConstants.DATA);
        if (this.props.recipe.step === recipesConstants.DATA) return;
    }

    handleNewIngredient = async () => {
        await this.props.addNewIngredientEmptyField();
    }

    handleChange = async (e, {name, value, index}) => {
        await this.props.handleChangeFields(name, value, index);
    }

    checkSubmittedFields = () => {
        for (let [key, value] of Object.entries(this.props.recipe)) {
            console.log(`${key}: ${value}`);
            if (value === '') return false;
        }
        return true;
    }

    handleSubmit = async () => {
        const canSubmit = this.checkSubmittedFields();
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', canSubmit);
        if (!this.props.update) await this.props.submitRecipe(this.props.recipe);
        else await this.props.updateRecipe(this.props.recipe);
    }

    render() {
        const { step, title, description, servings, creatorName, nutrition, ingredients, recipeSteps, file, _id } = this.props.recipe;
        const { update } = this.props;
        return(
            <Container fluid>
                <Segment textAlign="center" style={{ padding: "3em 3em" }} vertical>
                    <Header as="h1" color="teal" textAlign="center">
                        {update ? 'Update Recipe' : 'Create New Recipe'}
                    </Header>
                </Segment>
                {((update && _id) || !update) && 
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
                                        handleChange={this.handleChange}
                                    />
                                ) : 
                                step === recipesConstants.INGREDIENTS ? (
                                    <IngerdientsPage
                                        ingredients={ingredients}
                                        handleNewIngredient={this.handleNewIngredient}
                                        handleChange={this.handleChange}
                                    />
                                ) : 
                                step === recipesConstants.NUTRITION ? (
                                    <NutritionPage 
                                        nutrition={nutrition}
                                        handleChange={this.handleChange}
                                    />
                                ) : 
                                step === recipesConstants.STEPS ? (
                                    <RecipePage 
                                        recipeSteps={recipeSteps}
                                        handleChange={this.handleChange}
                                    />
                                ) : 'Please Refresh Page!'}
                                <br />
                                <React.Fragment>
                                    {step === recipesConstants.STEPS ? (
                                        <Button
                                            floated='right'
                                            color='teal'
                                            onClick={this.handleSubmit}
                                        > {update ? 'Update' : 'Submit'}
                                        </Button>
                                    ) : (
                                        <Button
                                            disabled={step === recipesConstants.STEPS}
                                            floated='right'
                                            color='teal'
                                            onClick={this.handleNext}
                                        > Next
                                        </Button>

                                    )}
                                    <Button
                                        disabled={step === recipesConstants.DATA}
                                        floated='left'
                                        color='teal'
                                        onClick={this.handlePrevious}
                                    > Previous
                                    </Button>
                                </React.Fragment>
                            </Grid.Column>

                            <Grid.Column>
                                {/* <Image src={window.URL.createObjectURL(file)} size='small' /> */}
                                <ImageUploader
                                    withIcon={true}
                                    buttonText='Choose images'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    maxFileSize={5242880}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>}
            </Container>
        );
    }

}

function mapState(state) {
    const { recipe, file } = state.recipes;
    // const { valid, errorsNumber, errors: validationErrors } = state.validation;
    return { recipe, file };
}
  
const actionCreators = {
    setStep: recipesActions.setStep,
    addNewIngredientEmptyField: recipesActions.addNewIngredientEmptyField,
    handleChangeFields: recipesActions.handleChangeFields,
    filesAdded: recipesActions.filesAdded,
    fileRemoved: recipesActions.fileRemoved,
    submitRecipe: recipesActions.submitRecipe,
    updateRecipe: recipesActions.updateRecipe,
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