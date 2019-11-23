import React, { Component } from 'react';
import Spinner from "../Spinner";
import Company from '../Company';
import { API_BASE, API_KEY, COMPANIES_FETCH_SIZE, COMPANY_FIELDS } from '../../constants';

const getPeriod = (days = 10) => {
  const currentData = new Date(Date.now() - days * 24 * 3600 * 1000);
  return `${currentData.getFullYear()}-${(currentData.getMonth() + 1)}-${currentData.getDate()}`;
}

export default class TopCompanies extends Component {
  state = {
    companies: {}
  };

  componentDidMount() {
    fetch(`${API_BASE}/companies?page_size=${COMPANIES_FETCH_SIZE}&${API_KEY}`)
      .then(res => res.json())
      .then(({ companies }) => {
        const transformedCompanies = {};
        companies.forEach(({ name, ticker }) => transformedCompanies[ticker] = {name})
        this.setState({ companies: transformedCompanies });
        return companies;
      })
      .then(companies => {
        companies.forEach(({ ticker }) => {
          fetch(`${API_BASE}/securities/${ticker}/prices?start_date=${getPeriod()}&${API_KEY}`)
          .then(res => res.json())
          .then(({ stock_prices }) => {
            this.setState(prevState => {
              Object.keys(COMPANY_FIELDS).forEach(key => {
                prevState.companies[ticker][key] = stock_prices && stock_prices.length ? stock_prices[0][key] : 'no data'
              });
              return prevState;
            })
          })
        })
      })
  }

  render() {
    const { companies } = this.state;

    return (
      !Object.keys(companies).length ? <Spinner/> : (
        Object.keys(companies).map((data) => (
          <Company
            key={data}
            ticker={data}
            data={companies[data]} />
        ))
      )
    );
  }
}
