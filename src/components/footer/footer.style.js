import styled from 'styled-components';
import {color} from '../../assets/style/variables'

const StyleFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  height: 10vh;
  background: ${color.scale2};
  color: ${color.scale0};
  border-top: 3px solid ${color.scale0};
`;

export default StyleFooter;
