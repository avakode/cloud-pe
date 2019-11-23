import styled from 'styled-components';

export const CompanyWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 50px;
  border: 1px solid #eee;
  box-shadow: -10px 10px 5px 0px rgba(0,0,0,0.08);
`;
export const RelatedPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px 50px;
  align-items: flex-start;
`;
export const PostWrapper = styled.a`
  margin: 0 10px;
  width: calc(20% - 20px);
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #eee;
  box-shadow: -5px 5px 5px 0px rgba(0,0,0,0.05);
  color: #000;
  background-color: #fff;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 30px;
  text-align: center;
`;

export const DetailPage = styled.div`
  width: 100%;
`;
