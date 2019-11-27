import React, { Component } from 'react';

import { API_BASE, API_KEY, NEWS_FETCH_SIZE, COMPANY_DETAIL_FIELDS } from '../../constants';

import Spinner from "../Spinner";
import Comments from '../Comments';

import { Button, ItemTitle, ItemText, ItemTextBold } from '../style';
import {
  DetailPage,
  CompanyWrapper,
  RelatedPosts,
  PostWrapper,
  Title } from './style';

export default class CompanyDetail extends Component {

  state = {
    descriptionFull: false,
    news: []
  };

  componentDidMount() {
    const ticker = this.props.match.params.ticker;

    fetch(`${API_BASE}/companies/${ticker}?${API_KEY}`)
      .then(res => res.json())
      .then(result => {
        this.setState(prevState => {
          Object.keys(COMPANY_DETAIL_FIELDS).map(key => {
            prevState[key] = result[COMPANY_DETAIL_FIELDS[key].apiKey];
          });
          return prevState;
        })
      })

    fetch(`${API_BASE}/companies/${ticker}/news?${NEWS_FETCH_SIZE}&${API_KEY}`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          news: result.news
        });
      })
  }

  toggleDescription = () => {
    this.setState(prevState => {
      prevState.descriptionFull = !prevState.descriptionFull;
      return prevState;
    });
  }

  render() {
    const companyDetails = data => {
      return Object.keys(COMPANY_DETAIL_FIELDS).map(key => {
        if (!(key === 'shortDescription' || key === 'longDescription')) {
          return (
            <ItemText key={key}>
              <ItemTextBold>{COMPANY_DETAIL_FIELDS[key].label}: </ItemTextBold>{`${data[key]}`}
            </ItemText>
          )
        }
      });
    }

    const companyDescription = descriptionFull => {
      return descriptionFull ? (
        <ItemText>
          <ItemTextBold>Long Description: </ItemTextBold>{this.state.longDescription}
        </ItemText>
      ) : (
        <ItemText>
          <ItemTextBold>Short Description: </ItemTextBold>{this.state.shortDescription}
        </ItemText>
      )
    }

    return (
      <DetailPage>
        <Title>About Company</Title>
        <CompanyWrapper>
          {!this.state.legalName ? <Spinner /> : (
            <>
              {companyDetails(this.state)}
              {companyDescription(this.state.descriptionFull)}
              <Button onClick={this.toggleDescription}>Show {this.state.descriptionFull ? 'Short' : 'Full'} Description</Button>
            </>
          )}
        </CompanyWrapper>
        <Title>Comments</Title>
        <Comments ticker={this.props.match.params.ticker} />
        <Title>Recent News</Title>
        <RelatedPosts>
          {
            this.state.news.length === 0 ? <Spinner/> : (
              this.state.news.map(news => (
                <PostWrapper key={news.id} href={news.url} target="_blank">
                  <ItemTitle>{news.title}</ItemTitle>
                  <ItemText>{news.publication_date.split("T")[0]}</ItemText>
                  <ItemText>{news.summary.length < 250 ? news.summary : `${news.summary.substr(0, 253)}...`}</ItemText>
                </PostWrapper>
              ))
            )
          }
        </RelatedPosts>
      </DetailPage>
    );
  }
}
