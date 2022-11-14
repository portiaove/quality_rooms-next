const STRAPI_BASE_URL = 'http://localhost:1337'

export const strapiImageUrl = url => {
  return `${STRAPI_BASE_URL}${url}`
}

const request = async endpoint => {
  const response = await fetch(`${STRAPI_BASE_URL}/api${endpoint}`)

  if (response.ok) {
    return response.json()
  } else {
    throw response.status
  }
}

export const fetchHeader = async () => {
  return request('/header')
}

export const fetchLogos = async () => {
  return request('/logo?populate=*')
}

export const fetchAcciones = async () => {
  return request('/acciones?populate=*')
}
