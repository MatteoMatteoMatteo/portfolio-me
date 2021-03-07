import React from "react"
import Starter from "../components/Starter"
import Headline from "../components/Headline"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import ContentLayout from "../components/ContentLayout"

export default function Home() {
  return (
    <Layout>
      <Navbar></Navbar>
      <ContentLayout>
        <Headline headline={"Hello There"}>
          <Starter></Starter>
        </Headline>
      </ContentLayout>
    </Layout>
  )
}
