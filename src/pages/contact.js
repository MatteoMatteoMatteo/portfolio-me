import React from "react"
import Headline from "../components/Headline"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import "./contact.css"
import ContentLayout from "../components/ContentLayout"

export default function contact() {
  return (
    <Layout>
      <Navbar></Navbar>
      <Headline headline={"Me"}>
        <ContentLayout>
          <div className="contactHolder">
            <h3 style={{ fontSize: "1.4rem" }}>
              After my studies in Innsbruck at the Medienkolleg and the MCI, I'm
              currently finishing my Master's Degree in Interactive Media at the
              University of Applied Sciences Upper Austria.
            </h3>
            <h3 style={{ fontSize: "1.4rem" }}>
              Other than that I like to work on little projects that I share
              here. <br></br>If you have any question or just want to chat, hit
              me up!
            </h3>
            <h3 style={{ fontSize: "1.4rem" }}>m.prock@outlook.com</h3>
          </div>
        </ContentLayout>
      </Headline>
    </Layout>
  )
}
