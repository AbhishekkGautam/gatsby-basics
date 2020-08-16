import React from "react"
import { Link } from "gatsby"
const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li style={{ padding: "2rem" }}>
          <Link to="/" style={{ textDecoration: "none", textAlign: "center" }}>
            Home
          </Link>
        </li>
        <li style={{ padding: "2rem" }}>
          <Link to="/blog" style={{ textDecoration: "none" }}>
            Blog
          </Link>
        </li>
        <li style={{ padding: "2rem" }}>
          <Link to="/products" style={{ textDecoration: "none" }}>
            Products
          </Link>
        </li>
        <li style={{ padding: "2rem" }}>
          <Link to="/examples" style={{ textDecoration: "none" }}>
            Examples
          </Link>
        </li>
        <li style={{ padding: "2rem" }}>
          <Link to="/images" style={{ textDecoration: "none" }}>
            Images
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
