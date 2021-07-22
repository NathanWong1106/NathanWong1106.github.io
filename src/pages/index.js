import * as React from "react"
import "../styles/global.css"
import "../styles/index.css"
import Navbar from "../components/Navbar"
import AnimateInViewSection from "../components/AnimateInViewSection"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Footer from "../components/Footer"

//TODO: Animate background? Floating Bubbles of random size?
const IndexPage = () => {
  const data = useStaticQuery(graphql
    `query MyQuery {
      allMdx(sort: {order: ASC, fields: frontmatter___order}) {
        nodes {
          frontmatter {
            title
          }
          id
          body
        }
      }
    }`
  );

  return (
    <main>
      <Navbar data={data}/>
      <div className="flex flex-col overflow-hidden justify-center content-center min-h-screen bg-darkNavy cursor-default">
        <section id="Intro" className="flex flex-col min-h-screen justify-center content-center text-center">
          <div className="text-5xl font-extrabold slide-in-from-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-green-400 to-blue-500">
              Hey, I'm Nathan
            </span>
          </div> 
          <div className="mt-5 text-xl text-turquoise slide-in-from-right">
            <span>
              How does one simply write about themselves?
            </span>
          </div>
        </section>

        {
          data.allMdx.nodes.map(node => (
            <section key={node.id} id={node.frontmatter.title} className="flex flex-col min-h-screen justify-center content-center mx-5 md:mx-36 xl:mx-56">
              <MDXRenderer>
                {node.body}
              </MDXRenderer>
            </section>
          ))
        }
      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage
