/* eslint-disable @next/next/no-img-element */
import { strapiImageUrl } from '../../services'
import ReactMarkdown from 'react-markdown'
import styles from './Card.module.css'

export default function Card({ accion }) {
  const { title, image, content } = accion
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardImgContainer}>
          <img
            src={strapiImageUrl(image.data.attributes.url)}
            alt={image.data.attributes.name}
          ></img>
        </div>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
