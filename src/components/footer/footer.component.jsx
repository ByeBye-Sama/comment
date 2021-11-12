import React from "react";
import StyleFooter from './footer.style'
import {ContainerCenter} from "../../assets/style/layout";

function Footer() {
  return (
    <StyleFooter>
      <ContainerCenter>
        @Copyright {new Date().getFullYear()} | Joaquin Concha
      </ContainerCenter>
    </StyleFooter>
  )
}

export {
  Footer
}
