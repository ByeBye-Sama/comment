import React from "react";
import StyleMain from "./main.style";
import { ContainerVertical } from "../../assets/style/layout";


function Main(props) {
  const { children } = props;
  return (
    <StyleMain>
      <ContainerVertical>
        {children}
      </ContainerVertical>
    </StyleMain>
  )
}

export {
  Main
}
