import React from "react"
import "./Headline.css"

export default function Headline({ children, headline }) {
  return (
    <main className="mainContainer">
      <div className="topHeadline">
        <h1>{headline}</h1>
        <div className="backHeadline"></div>
      </div>
      {children}
    </main>
  )
}
