import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"
const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference!!!</h4>
          <p>
            Our ACA certified mechanics inspect our cars prior to being delivered to you.
            Our Mechanics have ove 10 years of experience in servicing both foreign and domestic vehicles?
          </p>
          <p>
            Dafiki Motors prides itself in having the best customer service and only offering you what you need,
            nothing less, nothing more!!
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
