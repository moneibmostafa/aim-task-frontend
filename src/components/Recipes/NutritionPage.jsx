import { Form } from "semantic-ui-react";

const NutritionPage = ({ nutrition, handleSubmit, handleChange, errors }) => {
    return(
        <Form size='large' onSubmit={handleSubmit}>
            <Form.Input required
                label='Calories'
                textAlign='left'
                name='calories'
                size='small'
                placeholder='Calories'
                value={nutrition.calories}
                onChange={handleChange}
            />
            <Form.Input
                label='Protein'
                textAlign='left'
                name='protein'
                size='small'
                value={nutrition.protein}
                placeholder='Protein'
                onChange={handleChange}
            />
            <Form.Input
                label='Fat'
                textAlign='left'
                name='fat'
                size='small'
                value={nutrition.fat}
                placeholder='Fat'
                onChange={handleChange}
            />
            <Form.Input
                label='Carbohydrates'
                textAlign='left'
                name='carbohydrates'
                size='small'
                value={nutrition.carbohydrates}
                placeholder='Carbohydrates'
                onChange={handleChange}
            />
            <Form.Input
                label='Sodium'
                textAlign='left'
                name='sodium'
                size='small'
                value={nutrition.sodium}
                placeholder='Sodium'
                onChange={handleChange}
            />
        </Form>
    );
}

export default NutritionPage;
