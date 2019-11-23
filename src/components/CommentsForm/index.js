import React, { Component } from 'react';
import { Button, SpaceBetween, Input } from '../style';
import { Form, Label, Textarea, FormTitle } from './style';

export default class CommentsForm extends Component {
  state = {
    name: '',
    text: '',
  };

  clearForm = () => {
    this.setState({
      name: '',
      text: '',
    })
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.name.length > 0 && this.state.text.length > 0) {
      this.props.addComment(this.state.name, this.state.text);

      this.clearForm();
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormTitle>Leave Comment</FormTitle>
        <Label>
          Name:
          <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </Label>
        <Label>
          Comment:
          <Textarea value={this.state.text} name="text" onChange={this.handleChange} />
        </Label>
        <SpaceBetween>
          <Button bgColor="#dc3545" hoverColor="#c82333" onClick={this.clearForm}>Clear</Button>
          <Button type="submit">Send</Button>
        </SpaceBetween>
      </Form>
    );
  }
}