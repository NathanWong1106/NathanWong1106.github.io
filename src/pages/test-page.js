import * as React from "react"
import "../styles/global.css"
import Navbar from "../components/Navbar"

const IndexPage = () => {
  return (
    <main>
      <Navbar/>
      <section className="mt-24 container md:mx-10"> {/* Top margin to compensate for fixed header */}
        <div>
          Lorem Ipsum and another page
        </div>
      </section>  
    </main>
  )
}

export default IndexPage
