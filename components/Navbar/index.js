/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import styles from './Navbar.module.css'
import { strapiImageUrl } from '../../services'
import { MAIL_TO_INFO } from '../../constants'

export default function Navbar({ logo }) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const toggleModal = () => setIsOpenModal(val => !val)

  const logoImg = logo.data.attributes

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <img src={strapiImageUrl(logoImg.url)} alt={logoImg.caption}></img>
        <nav>
          <ul>
            <li>
              <a href='#sobre-nosotros'>Sobre Nosotros</a>
            </li>
            <li>
              <a href='#productos'>Productos</a>
            </li>
            <li>
              <a href={MAIL_TO_INFO}>Contáctanos</a>
            </li>
          </ul>
        </nav>
        <div
          className={`${styles.hamburgerIcon} ${isOpenModal ? styles.open : ''}`}
          onClick={toggleModal}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
          <ul className={styles.mobileMenu}>
            <li>
              <a href='#sobre-nosotros'>Sobre Nosotros</a>
            </li>
            <li>
              <a href='#productos'>Productos</a>
            </li>
            <li>
              <a href={MAIL_TO_INFO}>Contáctanos</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
