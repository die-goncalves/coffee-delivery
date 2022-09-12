import { useState, useRef, useEffect } from 'react'
import { MapContainer, PinContainer } from './styles'
import mapboxgl, { GeoJSONSource } from 'mapbox-gl'
import { FeatureCollection, Point } from 'geojson'
import { useTheme } from 'styled-components'
import { getPositionFeatures } from '../../../../util/getPositionFeatures'
import { getRouteDuration } from '../../../../util/getRouteDuration'
import {
  GeographicCoordinatesType,
  useDelivery
} from '../../../../hooks/useDelivery'
import { api } from '../../../../services/apiClient'

import 'mapbox-gl/dist/mapbox-gl.css'

export function Map() {
  const { name } = useTheme()
  const { initialDeliveryData } = useDelivery()
  const [myGeographicCoordinates, setMyGeographicCoordinates] =
    useState<GeographicCoordinatesType>()
  const refPosition = useRef<GeographicCoordinatesType>()
  const [geojson, setGeojson] = useState<FeatureCollection<Point>>()

  function handleSetPosition() {
    const buttonElement = document.getElementById('button-active')
    if (buttonElement) {
      buttonElement.classList.add('active')
    }

    setMyGeographicCoordinates(refPosition.current)
  }

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get('stores')
      setGeojson(data)
    })()
  }, [])

  useEffect(() => {
    if (!geojson) return

    const map = new mapboxgl.Map({
      accessToken: import.meta.env.VITE_MAPBOX_KEY,
      container: 'map-container',
      style: `mapbox://styles/mapbox/${
        name === 'dark-theme' ? 'dark-v10' : 'streets-v11'
      }`,
      center: [-40.3198470983514, -19.033099810256743],
      zoom: 8.9
    })

    async function getIso() {
      if (!geojson) return
      // Área até onde vai a entrega do café (isochrone API)
      const urlBase = 'https://api.mapbox.com/isochrone/v1/mapbox/'
      const lon = geojson.features[0].geometry.coordinates[0]
      const lat = geojson.features[0].geometry.coordinates[1]
      const profile = 'driving'
      const minutes = 30

      const query = await fetch(
        `${urlBase}${profile}/${lon},${lat}?contours_minutes=${minutes}&polygons=true&access_token=${
          import.meta.env.VITE_MAPBOX_KEY
        }`,
        { method: 'GET' }
      )
      const data = await query.json()

      const source: GeoJSONSource = map.getSource('iso') as GeoJSONSource
      source.setData(data)
    }

    map.on('move', e => {
      const pinElement = document.getElementById('pin-location')
      const popupElement = document.getElementById('popup-pin-location')
      const buttonElement = document.getElementById('button-active')

      if (pinElement && popupElement && buttonElement) {
        pinElement.classList.remove('placed')
        popupElement.classList.remove('placed')
        buttonElement.classList.remove('active')
      }
    })

    map.on('moveend', e => {
      const pinElement = document.getElementById('pin-location')
      const popupElement = document.getElementById('popup-pin-location')
      if (
        pinElement &&
        pinElement.classList.contains('inside') &&
        popupElement
      ) {
        pinElement.classList.add('placed')
        popupElement.classList.add('placed')
        refPosition.current = map.getCenter()
      }
    })

    map.on('load', () => {
      map.addSource('stores', {
        type: 'geojson',
        data: geojson
      })
      map.addSource('iso', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      })
      geojson.features.forEach((item: any) => {
        const elImg = document.createElement('img')
        elImg.src = '/pin-coffee.svg'
        elImg.alt = 'Copo de café'
        elImg.width = 50
        elImg.height = 50

        new mapboxgl.Marker({
          element: elImg,
          anchor: 'bottom',
          offset: [0, -5.114]
        })
          .setLngLat(item.geometry.coordinates)
          .addTo(map)
      })

      map.addLayer(
        {
          id: 'isoLayer',
          type: 'fill',
          source: 'iso',
          layout: {},
          paint: {
            'fill-color': '#8047F8',
            'fill-opacity': 0.1
          }
        },
        'poi-label'
      )
      map.addLayer({
        id: 'isoBorders',
        type: 'line',
        source: 'iso',
        layout: {},
        paint: {
          'line-color': '#8047F8',
          'line-width': 1
        }
      })

      map.on('move', e => {
        const mapElement = document.getElementById('map-container')
        let point
        if (mapElement)
          point = new mapboxgl.Point(
            mapElement.offsetWidth / 2,
            mapElement.offsetHeight / 2
          )

        const features = map.queryRenderedFeatures(point, {
          layers: ['isoLayer']
        })

        if (features.length) {
          const pinElement = document.getElementById('pin-location')
          if (pinElement) pinElement.classList.add('inside')
        } else {
          const pinElement = document.getElementById('pin-location')
          if (pinElement) pinElement.classList.remove('inside')
        }
      })

      getIso()
    })

    map.addControl(new mapboxgl.NavigationControl())
    map.addControl(new mapboxgl.ScaleControl({ unit: 'metric' }))
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: false
      })
    )

    map.resize()
    return () => map.remove()
  }, [name, geojson])

  useEffect(() => {
    async function features() {
      if (!geojson || !myGeographicCoordinates) return
      // Informações sobre a posição do cliente (geocoder API)
      const data = await getPositionFeatures(myGeographicCoordinates)

      // Duração da rota entre o estabelecimento e o cliente (directions API)
      const startRoute = {
        lng: geojson.features[0].geometry.coordinates[0],
        lat: geojson.features[0].geometry.coordinates[1]
      }
      const duration = await getRouteDuration(
        startRoute,
        myGeographicCoordinates
      )

      initialDeliveryData(data, duration)
    }
    features()
  }, [myGeographicCoordinates, geojson])

  return (
    <MapContainer>
      <PinContainer>
        <div id="popup-pin-location">
          <span>Esta é a sua localização?</span>&nbsp;
          <button onClick={handleSetPosition} id="button-active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="#5e437f"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M54.5,201.5c-9.2-9.2-3.1-28.5-7.8-39.8S24,140.5,24,128s17.8-22,22.7-33.7-1.4-30.6,7.8-39.8S83,51.4,94.3,46.7,115.5,24,128,24s22,17.8,33.7,22.7,30.6-1.4,39.8,7.8,3.1,28.5,7.8,39.8S232,115.5,232,128s-17.8,22-22.7,33.7,1.4,30.6-7.8,39.8-28.5,3.1-39.8,7.8S140.5,232,128,232s-22-17.8-33.7-22.7S63.7,210.7,54.5,201.5Z"
                fill="none"
                stroke="#5e437f"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
              <polyline
                points="172 104 113.3 160 84 132"
                fill="none"
                stroke="#5e437f"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
            </svg>
          </button>
        </div>
        <span id="pin-location">
          <svg
            width="25"
            height="37.5"
            viewBox="0 0 25 37.5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#e2c4ff"
              d="m 23.75,31.5 a 11.249999,6.0000002 0 0 1 -11.25,6 11.249999,6.0000002 0 0 1 -11.25,-6 11.249999,6.0000002 0 0 1 11.25,-6 11.249999,6.0000002 0 0 1 11.25,6 z"
            />
            <g>
              <path
                fill="#8047F8"
                d="M 12.499931,0 C 5.5963967,3.3907854e-7 -3.5407055e-7,6.0639165 0,13.544212 2.8325622e-7,19.564331 3.4942892,23.149153 8.9995443,28.507 c 2.8614447,2.784827 3.0584417,2.993616 3.4883537,2.993 0.406548,-5.83e-4 0.663646,-0.169082 3.722304,-2.993 C 22.070317,23.096625 25,19.554873 25,13.544212 25.000001,6.0639163 19.403465,0 12.499931,0 Z m 0.08478,6.7455575 c 3.324311,10e-8 6.019197,2.8113083 6.019197,6.2792325 0,3.467924 -2.694886,6.279232 -6.019197,6.279232 -3.3243109,0 -6.0191974,-2.811308 -6.0191975,-6.279232 -2e-7,-3.4679244 2.6948865,-6.2792327 6.0191975,-6.2792325 z"
              />
              <path
                fill="#8047F8"
                d="m 12.511273,9.037939 a 3.8947747,4.0630326 0 0 0 -3.8947751,4.063033 3.8947747,4.0630326 0 0 0 3.8947751,4.063032 3.8947747,4.0630326 0 0 0 3.894774,-4.063032 3.8947747,4.0630326 0 0 0 -3.894774,-4.063033 z m 0.03555,1.612228 a 2.3014578,2.4008829 0 0 1 2.301457,2.400882 2.3014578,2.4008829 0 0 1 -2.301457,2.400883 2.3014578,2.4008829 0 0 1 -2.301458,-2.400883 2.3014578,2.4008829 0 0 1 2.301458,-2.400882 z"
              />
            </g>
          </svg>
        </span>
      </PinContainer>

      <div id="map-container" />
    </MapContainer>
  )
}
