import styled from 'styled-components';

const ContainerCenter = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
`;

const ContainerVertical = styled(ContainerCenter)`
  flex-direction: column;
  justify-content: space-between;
`;

export {
  ContainerCenter,
  ContainerVertical
} 
