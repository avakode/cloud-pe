import styled from 'styled-components';

export const ItemTitle = styled.h6`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 0;
  color: #000;
`;
export const ItemText = styled.p`
  font-size: 14px;
  line-height: 1.3;
  margin: 0 0 10px;
  color: #000;
`;
export const ItemTextSpaceBetween = styled.p`
  font-size: 14px;
  line-height: 1.3;
  margin: 0 0 10px;
  color: #000;
  display: flex;
  justify-content: space-between;
`;
export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ItemTextBold = styled.b`
  font-weight: 700;
`;
export const InnerText = styled.span`
  color: ${props => props.textColor || 'black'};
`;
export const Button = styled.button`
  margin-top: 10px;
  cursor: pointer;
  outline: none;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  color: #fff;
  background-color: ${props => props.bgColor || '#343a40'};
  border: 1px solid ${props => props.bgColor || '#343a40'};
  text-align: center;
  min-width: 100px;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  :hover {
    background-color: ${props => props.hoverColor || '#23272b'};
    border-color: ${props => props.hoverColor || '#1d2124'};
  }
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  resize: none;
  border-radius: 5px;
  box-shadow: -5px 5px 5px 0px rgba(0,0,0,0.05);
  height: 40px;
  border: 1px solid #eee;
  outline: none;
  padding: 0 15px;
  margin-top: 10px;
  font-size: 14px;
`;
