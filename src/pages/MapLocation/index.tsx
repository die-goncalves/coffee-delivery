import { Info } from 'phosphor-react'
import {
  MapLocationContainer,
  InfoPosition,
  InputPosition,
  GridContainer,
  Presentation,
  RightContent,
  TutorialContainer
} from './styles'
import { Map } from './components/Map'
import { useDelivery } from '../../hooks/useDelivery'

export function MapLocation() {
  const { deliveryState, confirmedDeliveryData } = useDelivery()
  const { tempDelivery: delivery } = deliveryState

  return (
    <MapLocationContainer>
      <Presentation>
        <h1>Onde você está?</h1>
      </Presentation>
      <GridContainer>
        <Map />
        <RightContent>
          <TutorialContainer>
            <Info weight="fill" />

            <div>
              <p>Clique e segure no mapa para se mover.</p>
              <p>
                A área roxa com o ícone centralizado é o nosso alcance de
                entrega.
              </p>
              <p>
                Ao selecionar uma posição válida as informações serão mostradas
                abaixo.
              </p>
            </div>
          </TutorialContainer>
          <InfoPosition>
            <div>
              <InputPosition>
                <p>Longitude</p>
                <span
                  className={
                    delivery && delivery.geographicCoordinates?.lng
                      ? 'hasAttribute'
                      : ''
                  }
                >
                  {delivery && delivery.geographicCoordinates?.lng
                    ? delivery.geographicCoordinates?.lng
                    : '-40.07324212874738'}
                </span>
              </InputPosition>
              <InputPosition>
                <p>Latitude</p>
                <span
                  className={
                    delivery && delivery.geographicCoordinates?.lat
                      ? 'hasAttribute'
                      : ''
                  }
                >
                  {delivery && delivery.geographicCoordinates?.lat
                    ? delivery.geographicCoordinates?.lat
                    : '-18.905945989544463'}
                </span>
              </InputPosition>
            </div>
            <InputPosition>
              <p>Rua</p>
              <span className={delivery && delivery.street && 'hasAttribute'}>
                {delivery && delivery.street
                  ? delivery.street
                  : 'Avenida Nove De Agosto'}
              </span>
            </InputPosition>
            <div>
              <InputPosition>
                <p>CEP</p>
                <span
                  className={delivery && delivery.postalCode && 'hasAttribute'}
                >
                  {delivery && delivery.postalCode
                    ? delivery.postalCode
                    : '29950-000'}
                </span>
              </InputPosition>
              <InputPosition>
                <p>Cidade</p>
                <span className={delivery && delivery.city && 'hasAttribute'}>
                  {delivery && delivery.city ? delivery.city : 'Jaguaré'}
                </span>
              </InputPosition>
              <InputPosition>
                <p>Estado</p>
                <span className={delivery && delivery.state && 'hasAttribute'}>
                  {delivery && delivery.state ? delivery.state : 'ES'}
                </span>
              </InputPosition>
            </div>
          </InfoPosition>
          <button onClick={confirmedDeliveryData}>Salvar posição</button>
        </RightContent>
      </GridContainer>
    </MapLocationContainer>
  )
}
