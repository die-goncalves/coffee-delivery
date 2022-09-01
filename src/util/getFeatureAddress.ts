import { DeliveryType, ResponseGeocoderType } from '../hooks/useDelivery'

type AddressInformation = {
  addressInformation: DeliveryType
}

function getFeatureAddress(
  data: ResponseGeocoderType,
  duration: number
): AddressInformation {
  const addressInformation: DeliveryType = {
    geographicCoordinates: undefined,
    city: '',
    postalCode: '',
    state: '',
    street: '',
    duration: 0
  }
  addressInformation.geographicCoordinates = {
    lng: data.query[0],
    lat: data.query[1]
  }
  addressInformation.duration = duration

  switch (data.features[0].id.split('.')[0]) {
    case 'address':
      addressInformation.street = data.features[0].text
      break
    case 'place':
      addressInformation.city = data.features[0].text
      break
    case 'region':
      addressInformation.state =
        data.features[0].properties.short_code?.replace('BR-', '') ?? ''
      break
    case 'postcode':
      addressInformation.postalCode = data.features[0].text + '-000'
      break
    default:
      break
  }

  data.features[0].context.forEach(item => {
    switch (item.id.split('.')[0]) {
      case 'address':
        addressInformation.street = item.text
        break
      case 'place':
        addressInformation.city = item.text
        break
      case 'region':
        addressInformation.state = item.short_code?.replace('BR-', '') ?? ''
        break
      case 'postcode':
        addressInformation.postalCode = item.text + '-000'
        break
      default:
        break
    }
  })

  return { addressInformation }
}

export { getFeatureAddress }
