import { Form, Container, Image, Header, Button, Segment, Divider, Grid, Icon } from "semantic-ui-react";

const DataPage = ({ title, creatorName, servings, description }) => {
    console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
    // getQuantityDropdownItems() {
    //     let items = [];
    //     for (let i = 1; i <= 10; i++) {
    //         items.push({ key: i, text: '' + i, value: i });
    //     }
    //     return items;
    // }

    return(
        <Container fluid>
            <Segment textAlign="center" style={{ padding: "3em 3em" }} vertical>
                <Header as="h1" color="teal" textAlign="center">
                    Create New Recipe
                </Header>
            </Segment>
            <Segment>
                <Grid columns={2} stackable>
                    <Divider vertical></Divider>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Form size='large' onSubmit={this.handleSubmit}>
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
                                    onChange={this.handleChange}
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
                                    onChange={this.handleChange}
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
                                    onChange={this.handleChange}
                                    options={this.getQuantityDropdownItems}
                                    // error={errors && errors.country}
                                />
                                {/* <Form.Input required
                                    label='Subject'
                                    textAlign='left'
                                    disabled={!this.state.noSubmission}
                                    name='subject'
                                    size='large'
                                    icon='pencil alternate'
                                    iconPosition='left'
                                    placeholder='Subject'
                                    value={this.state.contactus.subject}
                                    onChange={this.handleChange}
                                    error={errors && errors.subject}
                                />*/}
                                <Form.TextArea required
                                    label='Description'
                                    textAlign='left'
                                    // disabled={!this.state.noSubmission}
                                    name='message'
                                    placeholder='Description ...'
                                    value={description}
                                    onChange={this.handleChange}
                                    // error={errors && errors.message} 
                                >
                                </Form.TextArea>
                                {/*{this.state.noSubmission?(<Form.Button fluid color='teal'>Submit</Form.Button>):(<Message success
                                header={`Thank You For Contacting Us!`}
                                content={"Your contact us form has been submitted successfully"}
                                />)} */}
                            </Form>
                        </Grid.Column>

                        <Grid.Column>
                            <Header icon>
                                <Icon name='world' />
                                Add New Country
                            </Header>
                            <Button primary>Create</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    );
}

export default DataPage;
