import { GeographicCoordinatesType } from '../hooks/useDelivery'

async function getRouteDuration(
  startRoute: GeographicCoordinatesType,
  endRoute: GeographicCoordinatesType
): Promise<number> {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${startRoute.lng}%2C${
      startRoute.lat
    }%3B${endRoute.lng}%2C${
      endRoute.lat
    }?alternatives=false&geometries=geojson&overview=simplified&steps=false&access_token=${
      import.meta.env.VITE_MAPBOX_KEY
    }`,
    { method: 'GET' }
  )
  const responseJSON = await response.json()

  return Math.ceil(responseJSON.routes[0].duration / 60)
}

export { getRouteDuration }
