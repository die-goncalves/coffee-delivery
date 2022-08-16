import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  CheckoutContainer,
  DeliveryAddress,
  InputsDeliveryAddress,
  InputsPaymentMethod,
  PaymentMethod,
  CoffeesInCart,
  TotalPrice
} from './styles'
import { CoffeeSelected } from '../../components/CoffeeSelected'

export function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <h1>Complete seu pedido</h1>
            <DeliveryAddress>
              <header>
                <MapPinLine />
                <div>
                  <p>Endereço de Entrega</p>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </header>

              <InputsDeliveryAddress>
                <input type="text" placeholder="CEP" {...register('cep', {})} />
                <input type="text" placeholder="Rua" {...register('rua', {})} />
                <div>
                  <input
                    type="number"
                    placeholder="Numero"
                    {...register('numero', {})}
                  />
                  <div>
                    <input
                      type="text"
                      placeholder="Complemento"
                      {...register('complemento', {})}
                    />
                    <span>Opcional</span>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Bairro"
                    {...register('bairro', {})}
                  />
                  <input
                    type="text"
                    placeholder="Cidade"
                    {...register('cidade', {})}
                  />
                  <input type="text" placeholder="UF" {...register('uf', {})} />
                </div>
              </InputsDeliveryAddress>
            </DeliveryAddress>
            <br />
            <PaymentMethod>
              <header>
                <CurrencyDollar />
                <div>
                  <p>Pagamento</p>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </header>

              <InputsPaymentMethod>
                <input
                  id="creditoId"
                  type="radio"
                  value="credito"
                  {...register('metodo')}
                />
                <label htmlFor="creditoId">
                  <CreditCard />
                  <span>Cartão de crédito</span>
                </label>

                <input
                  id="debitoId"
                  type="radio"
                  value="debito"
                  {...register('metodo')}
                />
                <label htmlFor="debitoId">
                  <Bank />
                  <span>Cartão de débito</span>
                </label>

                <input
                  id="dinheiroId"
                  type="radio"
                  value="dinheiro"
                  {...register('metodo')}
                />
                <label htmlFor="dinheiroId">
                  <Money />
                  <span>Dinheiro</span>
                </label>
              </InputsPaymentMethod>
            </PaymentMethod>
          </div>
        </div>
        <div>
          <h1>Cafés selecionados</h1>
          <CoffeesInCart>
            <CoffeeSelected />
            <CoffeeSelected />
            <TotalPrice>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,70</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>R$ 29,70</strong>
              </div>
            </TotalPrice>
            <input type="submit" value="Confirmar pedido" />
          </CoffeesInCart>
        </div>
      </form>
    </CheckoutContainer>
  )
}
