import React, { Component } from 'react';
import CommentsForm from '../CommentsForm';
import { Comment } from './style';
import { ItemTitle, ItemText } from '../style';

export default class Comments extends Component {
  storageComments = JSON.parse(localStorage.getItem('comments'));
  state = {
    comments: (
      this.storageComments !== null &&
      this.storageComments[this.props.ticker] !== undefined
    ) ? this.storageComments[this.props.ticker] : [],
  }


  addComment = (name, text) => {
    this.setState(prevState => {
      prevState.comments.push({ name, text });
      return prevState;
    }, () => {
        const commetns = {
          ...this.storageComments,
          [this.props.ticker]: this.state.comments
      };

      localStorage.setItem('comments', JSON.stringify(commetns));
    });
  }

  render() {
    const getComments = () => {
      return this.state.comments.map((comment, id) => (
        <Comment key={id}>
          <ItemTitle>{comment.name}</ItemTitle>
          <ItemText>{comment.text}</ItemText>
        </Comment>
      ))
    }

    return (
      <div className="comments">
        {!this.state.comments.length > 0 ? (
          <Comment key={0}>
            <ItemTitle>No Comments yet</ItemTitle>
          </Comment>
        ) : (
          getComments()
        )}
        <CommentsForm addComment={this.addComment}/>
      </div>
    );
  }
}