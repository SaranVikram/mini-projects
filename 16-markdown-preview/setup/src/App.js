import React, { useState } from "react"
import ReactMarkdown from "react-markdown"

function App() {
  const [marksdown, setMarksdown] = useState("## markdown preview")
  return (
    <main>
      <section className="markdown">
        <textarea
          name=""
          value={marksdown}
          onChange={(e) => {
            setMarksdown(e.target.value)
          }}
          id=""
          cols="30"
          rows="10"
          className="input"
        ></textarea>
        <article className="result">
          <ReactMarkdown>{marksdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
