import styled from 'styled-components';
import { Button, Textarea, Form } from "../../../../ui";
import { color } from '../../../../assets/style/variables'

const FormComments = styled(Form)`
  position: fixed;
  bottom: 10vh;
  width: 80vw;
`;

const ButtonSubmit = styled(Button)`
  width:100%;
  margin: 0;
  padding: 15px 0;
  border-radius: 100px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: none;
  font-weight: bold;
  z-index:1;
`;

const TextAreaComments = styled(Textarea)`
  width: calc(100% - 44px);
  margin: 0;
  padding: 15px 20px; 
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const FakeDiv = styled.div`
  border: 2px solid ${color.scale2};
  border-top: none;
  border-bottom: none;
`;


export {
  FormComments,
  ButtonSubmit,
  TextAreaComments,
  FakeDiv
}
