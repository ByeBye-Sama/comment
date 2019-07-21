import styled from 'styled-components';
import {color} from '../../assets/style/variables'

const Textarea = styled.textarea`
  background: ${props => props.primary ? color.scale2: color.scale0};
  color: ${props => props.primary ? color.scale0 : color.scale2};
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  margin: 20px 40px;
  border: 2px solid ${color.scale2};
  border-radius: 25px;
  resize: none; 
  overflow: hidden;
`;

export{
  Textarea
}
