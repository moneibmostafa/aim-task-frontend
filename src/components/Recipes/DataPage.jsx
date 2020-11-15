import { Form } from "semantic-ui-react";

const DataPage = ({ title, creatorName, servings, description, handleSubmit, handleChange, errors }) => {
    let options = [];
    for (let i = 1; i <= 10; i++) {
        options.push({ key: i, text: '' + i, value: i });
    }
    
    return(
        <Form size='large' onSubmit={handleSubmit}>
            <Form.Input required
                label='Recipe Title'
                textAlign='left'
                name='title'
                size='small'
                icon='food'
                iconPosition='left'
                placeholder='Recipe Title'
                value={title}
                onChange={handleChange}
                error={errors && errors.title}
            />
            <Form.Input required
                label='Creator Name'
                textAlign='left'
                name='creatorName'
                size='small'
                icon='user'
                iconPosition='left'
                value={creatorName}
                placeholder='Name'
                onChange={handleChange}
                error={errors && errors.creatorName}
            />
            <Form.Dropdown required
                selection
                label='Number of Servings'
                textAlign='left'
                name='servings'
                size='small'
                value={servings}
                onChange={handleChange}
                options={options}
                error={errors && errors.servings}
            />
            <Form.TextArea required
                label='Description'
                textAlign='left'
                name='description'
                placeholder='Description ...'
                value={description}
                onChange={handleChange}
                error={errors && errors.description} 
            >
            </Form.TextArea>
        </Form>
    );
}

export default DataPage;
