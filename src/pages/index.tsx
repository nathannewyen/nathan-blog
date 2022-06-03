import * as React from "react"
import Layout  from "../components/layout"

const pageStyles = {
  backgroundColor: "#1F2028",
  color: "#fff",
  padding: 96,
  fontFamily: "Matter",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout />
    </main>
  )
}

export default IndexPage
