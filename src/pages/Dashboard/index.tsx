import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { OrderDialog } from '../../components/OrderDialog'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/apiClient'
import { formatPrice } from '../../util/format'
import { DashboardContainer, OrderCard, OrderCardContainer } from './styles'

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

export type OrderType = {
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

export function Dashboard() {
  const { authState } = useAuth()
  const [orders, setOrders] = useState<OrderType[]>([])
  const cookies = Cookies.get()

  function formattedDate(date: string) {
    return format(new Date(date), "dd 'de' MMMM 'de' yyyy, HH:mm:ss", {
      locale: ptBr
    })
  }

  useEffect(() => {
    const loadOrders = async () => {
      const { data } = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${cookies['@coffee-delivery-v1.0.0:token']}`
        }
      })

      const ordersFormatted = data.orders.map((order: OrderType) => {
        return {
          ...order,
          payment: {
            ...order.payment,
            price: order.payment.price / 100
          },
          orderCoffee: order.orderCoffee.map(item => {
            return {
              ...item,
              coffee: {
                ...item.coffee,
                price: item.coffee.price / 100
              }
            }
          })
        }
      })

      setOrders(ordersFormatted)
    }
    loadOrders()
  }, [])

  if (!authState.isAuthenticated) {
    return null
  }

  return (
    <DashboardContainer>
      <div className="group-order">
        {orders.map(order => (
          <OrderCardContainer key={order.id}>
            <OrderCard>
              <div>
                <strong>Identificação do pedido</strong>
                <span>{order.id}</span>
              </div>
              <div>
                <strong>Pedido realizado em</strong>
                <span>{formattedDate(order.createdAt)}</span>
              </div>
              <div>
                <strong>Preço total</strong>
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
              <div>
                <strong>Entregue em</strong>
                <span>
                  {order.point.features.street}, {order.point.features.number}
                </span>
              </div>

              <OrderDialog order={order} />
            </OrderCard>
          </OrderCardContainer>
        ))}
      </div>
    </DashboardContainer>
  )
}
