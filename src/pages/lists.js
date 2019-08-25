import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import List from "../components/List"


const App = () => (
  <Layout>
    <Router>
      <List path="/lists/:id" />
    </Router>
  </Layout>
)

export default App
