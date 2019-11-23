import React, { Component } from 'react';
import { Form } from './style';
import { Input } from '../style';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  timer = undefined;

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });

    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      this.props.searchCompanies(this.state.value);
    }, 1000);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }

    this.props.searchCompanies(this.state.value);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input type="text" name="search" placeholder="Search..." value={this.state.value} onChange={this.handleChange} />
      </Form>
    );
  }
}