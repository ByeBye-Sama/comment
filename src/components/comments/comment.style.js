import styled from 'styled-components';
import { ContainerVertical } from '../../assets/style/layout'
import { color } from '../../assets/style/variables';

const CommentSection = styled(ContainerVertical)`
  max-height: 50vh;
  overflow-y:scroll;
  margin: 30px 50px 50px;
`;

const CommentDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const CommentContent = styled.p`
  display: inline-block;
  width: 40vw;
  margin: 10px 20px;
  padding: 15px 20px;
  border: 2px solid ${color.scale2};
  border-left: none;
  border-right: none;
  color: ${color.scale4};
  font-size: 0.9em;
  overflow-wrap: break-word;
`;

const CommentName = styled.p`
  display: inline-block;
  margin: 20px 0 0;
`;

export {
  CommentSection,
  CommentDiv,
  CommentContent,
  CommentName
} 
