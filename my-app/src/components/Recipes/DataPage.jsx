import { Form } from "semantic-ui-react";

const DataPage = ({ title, creatorName, servings, description, handleSubmit, handleChange }) => {
    let options = [];
    for (let i = 1; i <= 10; i++) {
        options.push({ key: i, text: '' + i, value: i });
    }
    
    return(
        <Form size='large' onSubmit={handleSubmit}>
            <Form.Input required
                label='Recipe Title'
                textAlign='left'
                // disabled={!this.state.noSubmission}
                name='title'
                size='small'
                icon='food'
                iconPosition='left'
                placeholder='Recipe Title'
                value={title}
                onChange={handleChange}
                // error={errors && errors.name}
            />
            <Form.Input required
                label='Creator Name'
                textAlign='left'
                // disabled={!this.state.noSubmission}
                name='creatorName'
                size='small'
                icon='user'
                iconPosition='left'
                value={creatorName}
                placeholder='Name'
                onChange={handleChange}
                // error={errors && errors.email}
            />
            <Form.Dropdown required
                selection
                label='Number of Servings'
                textAlign='left'
                // disabled={!this.state.noSubmission}
                name='servings'
                size='small'
                value={servings}
                onChange={handleChange}
                options={options}
                // error={errors && errors.country}
            />
            <Form.TextArea required
                label='Description'
                textAlign='left'
                // disabled={!this.state.noSubmission}
                name='description'
                placeholder='Description ...'
                value={description}
                onChange={handleChange}
                // error={errors && errors.message} 
            >
            </Form.TextArea>
        </Form>
    );
}

export default DataPage;
