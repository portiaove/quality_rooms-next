/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

import { fetchHeader, fetchAcciones, fetchLogos, strapiImageUrl } from '../services'
import { MAIL_TO_INFO } from '../constants'
import Navbar from '../components/NavBar'
import Card from '../components/Card'

export default function Home({ header, acciones, logos }) {
  return (
    <div>
      <Head>
        <title>Quality Rooms - Gestión de Inmuebles</title>
        <meta name='description' content='Quality Rooms - Gestión de Inmuebles' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Navbar logo={logos.estrechasin}></Navbar>
      <div className='container header-container'>
        <h1>{header?.title}</h1>
        <img
          src={strapiImageUrl(logos.normalcon.data.attributes.url)}
          alt={logos.normalcon.data.attributes.caption}
        ></img>
        <a className='btn contactBtn' href={MAIL_TO_INFO}>
          Contáctanos
        </a>
      </div>
      <div className='container containerMain' id='sobre-nosotros'>
        <ReactMarkdown className='mainParagraph'>{header?.subtitle}</ReactMarkdown>
      </div>
      <div className='container containerAcciones' id='productos'>
        {acciones.map(accion => (
          <Card key={accion.id} accion={accion.attributes} />
        ))}
      </div>
      <div className='footer'>
        <a className='btn contactBtn' href={MAIL_TO_INFO}>
          Contáctanos
        </a>

        <img
          src={strapiImageUrl(logos.circularsin.data.attributes.url)}
          alt={logos.circularcon.data.attributes.caption}
        ></img>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const headerData = await fetchHeader()
  const accionesData = await fetchAcciones()
  const logos = await fetchLogos()
  const { circularcon, circularsin, estrechacon, estrechasin, normalcon, normalsin } =
    logos.data.attributes

  return {
    props: {
      header: headerData.data.attributes,
      acciones: accionesData.data,
      logos: { circularcon, circularsin, estrechacon, estrechasin, normalcon, normalsin },
    },
  }
}
