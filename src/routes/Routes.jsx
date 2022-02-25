import React from 'react'
import {
  HashRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import { Main } from '../components/Main'
import { Blog } from '../pages/Blog'
import { Inicio } from '../pages/Inicio'
import { Nosotros } from '../pages/Nosotros'

function Routes() {
  return (
    <Router>
      <Main>
        <Switch>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/SION" element={<Inicio />} />
          <Route exact path="/inicio" element={<Inicio />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/:title" element={<Blog />} />
        </Switch>
      </Main>
    </Router>
  )
}

export {Routes}
