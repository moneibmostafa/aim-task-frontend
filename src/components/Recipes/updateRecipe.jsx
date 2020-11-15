import React, { Component } from "react";
import { connect } from "react-redux";
import { recipesActions } from "../../actions";
import { recipesConstants } from "../../constants";
import { CreateRecipe } from "./CreateRecipe";

class updateRecipe extends Component {
    async componentDidMount() {
        await this.props.setStep(recipesConstants.DATA);
        console.log('11111111111111111111111111111', this.props.recipe._id, this.props.match.params.id)
        if (this.props.recipe._id !== this.props.match.params.id) {
            console.log('2222222222222222222222222')
            await this.props.getRecipeData(this.props.match.params.id);
        }    
    }

    render() {
        const recipe = {...this.props.recipe}
        return(
            <React.Fragment>
                <CreateRecipe
                    recipe={recipe}
                    update={true}
                />
            </React.Fragment>
        );
    }

}

function mapState(state) {
    const { recipe, file } = state.recipes;
    return { recipe, file };
}
  
const actionCreators = {
    getRecipeData: recipesActions.getRecipeData,
    setStep: recipesActions.setStep,
};
  
const connectedUpdateRecipe = connect(mapState, actionCreators)(updateRecipe);
export { connectedUpdateRecipe as updateRecipe };