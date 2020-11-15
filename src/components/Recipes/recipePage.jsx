import { Form } from "semantic-ui-react";

const RecipePage = ({ recipeSteps, handleSubmit, handleChange }) => {
    return(
        <Form size='large' onSubmit={handleSubmit}>
            <Form.TextArea required
                label='Recipe Steps'
                textAlign='left'
                // disabled={!this.state.noSubmission}
                name='recipeSteps'
                placeholder='Steps ...'
                value={recipeSteps}
                onChange={handleChange}
                // error={errors && errors.message} 
            />
        </Form>
    );
}

export default RecipePage;
