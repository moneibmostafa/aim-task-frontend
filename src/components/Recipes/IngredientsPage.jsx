import { Form, Divider, Grid, Button } from "semantic-ui-react";
import Ingredient from "./Ingredient";

const IngredientsPage = ({ ingredients, handleSubmit, handleChange, handleNewIngredient }) => {
    return(
        <Form size='large' onSubmit={handleSubmit}>
            <Divider />
            {ingredients && ingredients.length !== 0 ? 
            (<Grid columns={3}>
                {ingredients.map((ingredient, index) => {
                    return <Ingredient
                        key={index}
                        index={index}
                        ingredient={ingredient}
                        handleChange={handleChange}
                    />
                })}
            </Grid>
            ) : (
                null
            )}
            <Divider />
            <Button
                onClick={handleNewIngredient} 
                size='mini' 
                icon='plus' 
                circular
            /> 
        </Form>
    );
}

export default IngredientsPage;
