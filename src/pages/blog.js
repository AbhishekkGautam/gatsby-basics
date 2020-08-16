import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          expedita alias dolorem laudantium eligendi omnis quam aspernatur qui
          dolore doloremque maxime aliquid ipsam voluptatibus, recusandae
          architecto sunt libero hic minus doloribus repellat praesentium
          distinctio aut. Temporibus deserunt pariatur quod nesciunt porro
          ratione, quaerat aut reiciendis eligendi rerum incidunt impedit, quam
          id mollitia quis deleniti magnam ut consectetur distinctio? Velit
          doloremque nam consectetur debitis eligendi commodi vel perferendis,
          voluptate a alias, eveniet voluptates temporibus illum ea nulla
          distinctio sit! Voluptate molestiae sed quam mollitia eum amet aperiam
          autem. Quidem itaque aut commodi qui, quaerat magni hic neque
          inventore incidunt veniam explicabo.
        </p>
      </div>
    </Layout>
  )
}

export default blog
