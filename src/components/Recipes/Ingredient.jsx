import { Form, Grid } from "semantic-ui-react";

const options = [
    { key: 'Cup', text: 'Cup', value: 'Cup' },
    { key: 'Tablespoon', text: 'Tablespoon', value: 'Tablespoon' },
    { key: 'Teaspoon', text: 'Teaspoon', value: 'Teaspoon' },
    { key: 'Scale', text: 'Scale', value: 'Scale' },
]

const scaleOptions = () => {
    console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
    let options = [];
    for (let i = 1; i <= 1000; i++) {
        options.push({ key: i, text: `${i}`, value: i });
    }
    console.log(options);
    return options;
}

const Ingredient = ({ingredient, handleChange, index, errors}) => {
    let scOptions = [];
    for (let i = 1; i <= 100; i++) {
        scOptions.push({ key: i, text: `${i}`, value: i });
    }
    return (
        <Grid.Row>
            <Form.Group widths={3}>
                <Form.Input
                    label='Ingredient'
                    name='ingredient'
                    index={index}
                    size='small'
                    type='string'
                    icon='food'
                    placeholder='Ingredient'
                    value={ingredient.ingredient}
                    onChange={handleChange}
                    error={errors && errors.ingredient}
                />                
                <Form.Dropdown
                    width={1}
                    selection
                    label='Type'
                    name='type'
                    index={index}
                    size='tiny'
                    type='string'
                    placeholder='Type ...'
                    value={ingredient.type}
                    onChange={handleChange}
                    options={options}
                />                
                <Form.Dropdown
                    width={1}
                    selection
                    label=''
                    name='size'
                    index={index}
                    size='tiny'
                    type='number'
                    value={ingredient.size}
                    onChange={handleChange}
                    options={scOptions}
                />
            </Form.Group>
        </Grid.Row>
    )
}

export default Ingredient;