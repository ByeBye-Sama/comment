import styled from 'styled-components';
import { color } from '../../assets/style/variables'

const Button = styled.button`
  background: ${props => props.primary ? color.scale2 : color.scale0};
  color: ${props => props.primary ? color.scale0 : color.scale2};
  font-size: 1.2em;
  font-family: 'Montserrat', sans-serif;
  margin: 10px;
  padding: 7px 50px;
  border: 2px solid ${color.scale2};
  border-radius: 25px;
  transition: all 0.5s ease;
  :hover,
  :active,
  :focus{
    background: ${props => props.primary ? color.scale0 : color.scale2};
    color: ${props => props.primary ? color.scale2 : color.scale0};
  }
`;

export {
  Button
}
