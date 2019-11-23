import React, { Component } from 'react';
import Spinner from "../Spinner";
import Company from '../Company';
import { API_BASE, API_KEY } from '../../constants';
import SearchForm from '../SearchForm';

export default class Companies extends Component {
  state = {
    companies: null,
    searchValue: '',
  };

  getCompanies = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(({ companies }) => {
        const transformedCompanies = {};
        companies.forEach(({ name, ticker }) => transformedCompanies[ticker] = { name })
        this.setState({ companies: transformedCompanies });
        return companies;
      })
  }

  componentDidMount() {
    this.getCompanies(`${API_BASE}/companies?${API_KEY}`)
  }

  searchCompanies = (value) => {
    if (value !== this.state.searchValue) {
      if (value.length !== 0) {
        this.getCompanies(`${API_BASE}/companies/search?query=${value}&${API_KEY}`);
      } else {
        this.getCompanies(`${API_BASE}/companies?${API_KEY}`)
      }

      this.setState(prevState => {
        prevState.searchValue = value;

        return prevState;
      })
    }
  }

  render() {
    const { companies } = this.state;

    return (
      <>
        <SearchForm searchCompanies={this.searchCompanies} />
        {
          companies === null ? <Spinner/> : (
            Object.keys(companies).map((data) => (
              <Company
                key={data}
                ticker={data}
                allCompanies
                data={companies[data]} />
            ))
          )
        }
      </>
    );
  }
}
