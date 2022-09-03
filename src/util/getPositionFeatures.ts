import {
  GeographicCoordinatesType,
  ResponseGeocoderType
} from '../hooks/useDelivery'

async function http<T>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): Promise<T> {
  const response = await fetch(input, init)
  return await response.json()
}

async function getPositionFeatures(
  point: GeographicCoordinatesType
): Promise<ResponseGeocoderType> {
  const response = await http<ResponseGeocoderType>(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${point.lng},${
      point.lat
    }.json?limit=1&access_token=${import.meta.env.VITE_MAPBOX_KEY}`,
    { method: 'GET' }
  )
  return response
}

export { getPositionFeatures }
