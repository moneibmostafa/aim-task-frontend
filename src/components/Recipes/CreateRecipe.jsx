import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Header, Button, Segment, Divider, Grid } from "semantic-ui-react";
import { recipesActions, validatorActions } from "../../actions";
import { recipesConstants } from "../../constants";
import DataPage from "./DataPage";
import NutritionPage from "./NutritionPage";
import IngerdientsPage from "./IngredientsPage";
import RecipePage from "./recipePage";

class CreateRecipe extends Component {
    schema = {
        required: ["title", "creatorName", "servings", "description", "recipeSteps"],
        properties: {
          title: { title: "Title", type: "string", minLength: 2, maxLength: 30 },
          creatorName: { title: "Creator Name", type: "string", minLength: 5, maxLength: 50 },
          servings: { title: "Servings", type: "number", min: 1 },
          description: { title: "Description", type: "string", minLength: 5, maxLength: 500 },
          recipeSteps: { title: "Recipe", type: "string", minLength: 5, maxLength: 500 },
          ingredient: { title: "Ingredient", type: "string", minLength: 2, maxLength:20 },
        },
      };

    async componentDidMount() {
        await this.props.setStep(recipesConstants.DATA);
    }

    onDrop = async (event) => {
        await this.props.handleChangeFields('file', event.target.files[0], 0);
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
        const arrayEnums = ['calories', 'protein', 'carbohydrates', 'fat', 'sodium'];
        if (arrayEnums.includes(name)) {
            if (isNaN(value)) return;
        }
        else this.props.validateInput(this.schema, name, value);
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
        if (!canSubmit) return;
        const recipeData = new FormData();
        recipeData.append("file", this.props.recipe.file);
        recipeData.append("data", JSON.stringify(this.props.recipe));
        if (!this.props.update) await this.props.submitRecipe(recipeData);
        else await this.props.updateRecipe(recipeData, this.props.recipe._id);
    }

    render() {
        const { step, title, description, servings, creatorName, nutrition, ingredients, recipeSteps, _id } = this.props.recipe;
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
                                        errors={this.props.errors}
                                    />
                                ) : 
                                step === recipesConstants.INGREDIENTS ? (
                                    <IngerdientsPage
                                        ingredients={ingredients}
                                        handleNewIngredient={this.handleNewIngredient}
                                        handleChange={this.handleChange}
                                        errors={this.props.errors}
                                    />
                                ) : 
                                step === recipesConstants.NUTRITION ? (
                                    <NutritionPage 
                                        nutrition={nutrition}
                                        handleChange={this.handleChange}
                                        errors={this.props.errors}
                                    />
                                ) : 
                                step === recipesConstants.STEPS ? (
                                    <RecipePage 
                                        recipeSteps={recipeSteps}
                                        handleChange={this.handleChange}
                                        errors={this.props.errors}
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
                                <div> 
                                    <input type="file" onChange={this.onDrop} /> 
                                </div> 
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>}
            </Container>
        );
    }

}

function mapState(state) {
    const { recipe } = state.recipes;
    const { errors } = state.validation;
    return { recipe, errors };
}
  
const actionCreators = {
    setStep: recipesActions.setStep,
    addNewIngredientEmptyField: recipesActions.addNewIngredientEmptyField,
    handleChangeFields: recipesActions.handleChangeFields,
    submitRecipe: recipesActions.submitRecipe,
    updateRecipe: recipesActions.updateRecipe,
    validateInput: validatorActions.validateInput,
};
  
const connectedCreateRecipe = connect(mapState, actionCreators)(CreateRecipe);
export { connectedCreateRecipe as CreateRecipe };