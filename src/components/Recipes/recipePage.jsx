import { Form } from "semantic-ui-react";

const RecipePage = ({ recipeSteps, handleSubmit, handleChange, errors }) => {
    return(
        <Form size='large' onSubmit={handleSubmit}>
            <Form.TextArea required
                label='Recipe Steps'
                textAlign='left'
                name='recipeSteps'
                placeholder='Steps ...'
                value={recipeSteps}
                onChange={handleChange}
                error={errors && errors.message} 
            />
        </Form>
    );
}

export default RecipePage;
