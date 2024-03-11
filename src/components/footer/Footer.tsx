import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href='#'>
          <FaFacebookSquare />
        </a>
        <a href='#'>
          <FaInstagram />
        </a>
        <a href='#'>
          <FaTwitter />
        </a>
        <a href='#'>
          <FaLinkedin />
        </a>
      </div>
      <p className={styles.copyright}>
        Copyright &#169;2020 All rights reserved
      </p>
    </footer>
  )
}
export default Footer
