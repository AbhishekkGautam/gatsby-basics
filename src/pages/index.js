import React from "react"
import Layout from "../components/Layout"
import { Button } from "../components/Button"

const index = () => {
  return (
    <Layout>
      <h1 style={{ color: "red", textTransform: "uppercase" }}>Hello World!</h1>
      <Button>Click Me</Button>
    </Layout>
  )
}

export default index
