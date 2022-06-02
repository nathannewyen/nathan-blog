import * as React from "react"
import Header from '../components/header'

const pageStyles = {
  backgroundColor: "#1F2028",
  color: "#fff",
  padding: 96,
  fontFamily: "Matter",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Header />
    </main>
  )
}

export default IndexPage
