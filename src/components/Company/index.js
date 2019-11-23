import React from 'react';
import Spinner from "../Spinner";
import { Link } from 'react-router-dom';
import { CompanyWrapper } from './style';
import { ItemTitle, ItemText, ItemTextSpaceBetween, InnerText, ItemTextBold } from '../style';
import { COMPANY_FIELDS } from '../../constants';

function Company(props) {
  const validData = () => {
    return props.data.open && props.data.close && props.data.high;
  }

  return (
    <CompanyWrapper>
      <Link to={`/companies/${props.ticker}`}>
        <ItemTitle>{props.data.name}</ItemTitle>
        {props.allCompanies ? (
          <ItemText>{props.ticker}</ItemText>
        ) : (
          !validData() ? <Spinner/> : (
            Object.keys(COMPANY_FIELDS).map(key => (
              <ItemTextSpaceBetween key={key}>
                {COMPANY_FIELDS[key].label}: <InnerText textColor={COMPANY_FIELDS[key].color}>
                  <ItemTextBold>
                    {props.data.open}
                  </ItemTextBold>
                </InnerText>
              </ItemTextSpaceBetween>
            ))
          )
        )}
      </Link>
    </CompanyWrapper>
  );
}

export default Company;