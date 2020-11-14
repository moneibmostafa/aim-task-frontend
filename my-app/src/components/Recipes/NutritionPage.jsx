import { Form } from "semantic-ui-react";

const NutritionPage = ({ nutrition, handleSubmit, handleChange }) => {
    return(
        <Form size='large' onSubmit={handleSubmit}>
            <Form.Input required
                label='Calories'
                textAlign='left'
                name='calories'
                size='small'
                // icon='food'
                // iconPosition='left'
                placeholder='Calories'
                value={nutrition.calories}
                onChange={handleChange}
                // error={errors && errors.name}
            />
            <Form.Input
                label='Protein'
                textAlign='left'
                // disabled={!this.state.noSubmission}
                name='protein'
                size='small'
                // icon='user'
                // iconPosition='left'
                value={nutrition.protein}
                placeholder='Protein'
                onChange={handleChange}
                // error={errors && errors.email}
            />
            <Form.Input
                label='Fat'
                textAlign='left'
                // disabled={!this.state.noSubmission}
                name='fat'
                size='small'
                // icon='user'
                // iconPosition='left'
                value={nutrition.fat}
                placeholder='Fat'
                onChange={handleChange}
                // error={errors && errors.email}
            />
            <Form.Input
                label='Carbohydrates'
                textAlign='left'
                // disabled={!this.state.noSubmission}
                name='carbohydrates'
                size='small'
                // icon='user'
                // iconPosition='left'
                value={nutrition.carbohydrates}
                placeholder='Carbohydrates'
                onChange={handleChange}
                // error={errors && errors.email}
            />
            <Form.Input
                label='Sodium'
                textAlign='left'
                // disabled={!this.state.noSubmission}
                name='sodium'
                size='small'
                // icon='user'
                // iconPosition='left'
                value={nutrition.sodium}
                placeholder='Sodium'
                onChange={handleChange}
                // error={errors && errors.email}
            />
        </Form>
    );
}

export default NutritionPage;
