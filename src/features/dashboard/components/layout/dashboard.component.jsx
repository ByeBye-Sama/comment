import React, { Fragment } from "react";

import {
  Header,
  Main,
  Footer
} from "../../../../components";

import {DashboardContainer} from '../dashboard/dashboard.container'

function DashboardLayout() {
  return (
    <Fragment>
      <Header />
      <Main>
        <DashboardContainer />
      </Main>
      <Footer />
    </Fragment>
  )
}

export {
  DashboardLayout
}
