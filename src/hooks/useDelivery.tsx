import { createContext, ReactNode, useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFeatureAddress } from '../util/getFeatureAddress'

export type ResponseGeocoderType = {
  query: number[]
  features: {
    id: string
    place_type: string[]
    text: string
    center: number[]
    properties: {
      short_code?: string
    }
    context: {
      id: string
      short_code?: string
      text: string
    }[]
  }[]
}

export type GeographicCoordinatesType = {
  lat: number
  lng: number
}

export type DeliveryType = {
  geographicCoordinates: GeographicCoordinatesType | undefined
  postalCode: string
  street: string
  city: string
  state: string
  duration: number
}

type DeliveryState = {
  currentDelivery: DeliveryType | undefined
  tempDelivery: DeliveryType | undefined
}

enum ActionTypes {
  TEMP_DELIVERY = 'TEMP_DELIVERY',
  CURRENT_DELIVERY = 'CURRENT_DELIVERY'
}

type DeliveryContextType = {
  deliveryState: DeliveryState
  confirmedDeliveryData: () => void
  initialDeliveryData: (data: ResponseGeocoderType, duration: number) => void
}
const DeliveryContext = createContext({} as DeliveryContextType)

type DeliveryProviderProps = {
  children: ReactNode
}
export function DeliveryProvider({ children }: DeliveryProviderProps) {
  const navigate = useNavigate()
  const [deliveryState, dispatch] = useReducer(
    (state: DeliveryState, action: any) => {
      switch (action.type) {
        case ActionTypes.TEMP_DELIVERY: {
          return { ...state, tempDelivery: action.payload.addressInformation }
        }
        case ActionTypes.CURRENT_DELIVERY:
          return { ...state, currentDelivery: state.tempDelivery }
        default:
          return state
      }
    },
    { currentDelivery: undefined, tempDelivery: undefined }
  )

  function initialDeliveryData(data: ResponseGeocoderType, duration: number) {
    const { addressInformation } = getFeatureAddress(data, duration)
    dispatch({
      type: 'TEMP_DELIVERY',
      payload: {
        addressInformation
      }
    })
  }

  function confirmedDeliveryData() {
    dispatch({
      type: 'CURRENT_DELIVERY'
    })
    navigate(-1)
  }

  return (
    <DeliveryContext.Provider
      value={{
        deliveryState,
        confirmedDeliveryData,
        initialDeliveryData
      }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}

export function useDelivery() {
  return useContext(DeliveryContext)
}
