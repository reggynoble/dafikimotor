import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import { Link } from "gatsby"

const theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
    },
    mobile: '768px',
}


const Footer = () => {
  return (
      <ThemeProvider theme={theme}>
          <>
      <footer className={styles.footer}>
        <div className={styles.links}>
          {links.map((item, index) => {
            return (
                <Link key={index} to={item.path}>
                  {item.text}
                </Link>
            )
          })}
        </div>
        <div className={styles.icons}>
          {socialIcons.map((item, index) => {
            return (
                <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
            )
          })}
        </div>
        <div className={styles.copyright}>
          copyright &copy; dafiki motors inc {new Date().getFullYear()} all
          rights reserved
        </div>
      </footer>

          </>
  </ThemeProvider>
  )
}

export default Footer
