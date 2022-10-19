import {
  Coffee,
  CoffeeGroup,
  ContentContainer,
  DeliveryLocation,
  OrderDialogContainer,
  Payment,
  SectionOrder,
  Header,
  TitleContainer,
  TriggerButton
} from './styles'
import { useState } from 'react'
import { X } from 'phosphor-react'
import { DialogOverlay } from '../OrderDialog/DialogOverlay'
import { DialogPortal } from './DialogPortal'
import { Dialog } from './Dialog'
import { DialogContent } from './DialogContent'
import { formatPrice } from '../../util/format'

type CustomerType = {
  id: string
  email: string
}

type CoffeeType = {
  id: string
  price: number
  name: string
  image: string
  description: string
}

type FeaturesType = {
  city: string
  complement: string
  neighborhood: string
  number: number
  postalCode: string
  state: string
  street: string
}

type OrderType = {
  id: string
  createdAt: string
  customer: CustomerType
  orderCoffee: {
    coffee: CoffeeType
    quantity: number
  }[]
  point: {
    lat: number
    lng: number
    features: FeaturesType
  }
  payment: {
    price: number
    method: string
  }
}

type DialogProps = {
  order: OrderType
}
export function OrderDialog({ order }: DialogProps) {
  const [showDialog, setShowDialog] = useState(false)
  function handleShowDialog() {
    setShowDialog(true)
  }
  function handleHideDialog() {
    setShowDialog(false)
  }

  const totalPriceItens = order.orderCoffee.reduce((acc, currentValue) => {
    return acc + currentValue.quantity * currentValue.coffee.price
  }, 0)

  const paymentMethod = () => {
    if (order.payment.method === 'money') return 'Dinheiro'
    if (order.payment.method === 'credit') return 'Cartão de crédito'
    if (order.payment.method === 'debit') return 'Cartão de débito'
  }

  return (
    <OrderDialogContainer>
      <TriggerButton onClick={handleShowDialog} type="button">
        ver detalhes
      </TriggerButton>

      {showDialog && (
        <DialogPortal>
          <Dialog showDialog={showDialog} handleHideDialog={handleHideDialog}>
            <DialogOverlay onCloseDialog={handleHideDialog} />

            <DialogContent>
              <SectionOrder>
                <Header>
                  <h2>Detalhes do pedido</h2>
                  <button onClick={handleHideDialog}>
                    <X weight="bold" />
                  </button>
                </Header>
                <ContentContainer>
                  <TitleContainer>
                    <h2>Produtos pedidos</h2>
                    <CoffeeGroup>
                      {order.orderCoffee.map(item => (
                        <Coffee key={item.coffee.id}>
                          <img src={item.coffee.image} alt={item.coffee.name} />
                          <div>
                            <div>
                              <p>{item.coffee.name}</p>
                              <span>{item.coffee.description}</span>
                            </div>
                            <p>
                              Preço unitário:{' '}
                              <span>
                                {formatPrice({
                                  options: {
                                    style: 'currency',
                                    currency: 'BRL'
                                  },
                                  number: item.coffee.price
                                })}
                              </span>
                            </p>
                            <p>
                              Quantidade pedida: <span>{item.quantity}</span>
                            </p>
                          </div>
                        </Coffee>
                      ))}
                    </CoffeeGroup>
                  </TitleContainer>

                  <TitleContainer>
                    <h2>Pagamento total</h2>

                    <Payment>
                      <div>
                        <p>Forma de pagamento</p>
                        <span>{paymentMethod()}</span>
                      </div>
                      <div>
                        <p>Preço total dos cafés</p>
                        <span>
                          {formatPrice({
                            options: {
                              style: 'currency',
                              currency: 'BRL'
                            },
                            number: totalPriceItens
                          })}
                        </span>
                      </div>
                      <div>
                        <p>Preço para entrega</p>
                        <span>RS 3,70</span>
                      </div>
                      <div>
                        <p>Preço com entrega</p>
                        <span>
                          {formatPrice({
                            options: {
                              style: 'currency',
                              currency: 'BRL'
                            },
                            number: order.payment.price
                          })}
                        </span>
                      </div>
                    </Payment>
                  </TitleContainer>

                  <TitleContainer>
                    <h2>Localização de entrega</h2>

                    <DeliveryLocation>
                      <div>
                        <p>Coordenadas geográficas</p>
                        <div>
                          <div>
                            <p>Latitude</p>
                            <span>{order.point.lat}</span>
                          </div>
                          <div>
                            <p>Longitude</p>
                            <span>{order.point.lng}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p>Características da localização</p>
                        <div>
                          <div>
                            <p>Complemento</p>
                            <span>{order.point.features.complement}</span>
                          </div>
                          <div>
                            <p>Número</p>
                            <span>{order.point.features.number}</span>
                          </div>
                          <div>
                            <p>Rua</p>
                            <span>{order.point.features.street}</span>
                          </div>
                          <div>
                            <p>Bairro</p>
                            <span>{order.point.features.neighborhood}</span>
                          </div>
                          <div>
                            <p>Cidade</p>
                            <span>{order.point.features.city}</span>
                          </div>
                          <div>
                            <p>CEP</p>
                            <span>{order.point.features.postalCode}</span>
                          </div>
                          <div>
                            <p>Estado</p>
                            <span>{order.point.features.state}</span>
                          </div>
                        </div>
                      </div>
                    </DeliveryLocation>
                  </TitleContainer>
                </ContentContainer>
              </SectionOrder>
            </DialogContent>
          </Dialog>
        </DialogPortal>
      )}
    </OrderDialogContainer>
  )
}
