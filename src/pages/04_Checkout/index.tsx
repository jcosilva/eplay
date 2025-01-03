import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Navigate } from 'react-router-dom'
import { usePurchaseMutation } from '../../services/api'
import InputMask from 'react-input-mask'

import Card from '../../components/X4_Card'
import Button from '../../components/X1_Button'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

import * as S from './styles'
import { getTotalPrice, parseToBrl } from '../../utils'
import { clear } from '../../store/reducers/cart'

type Installment = {
  quantity: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [installments, setInstallments] = useState<Installment[]>([])
  const dispatch = useDispatch()

  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      //Dados de Cobrança
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-Mail inválido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-Mail inválido')
        .required('O campo é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os E-Mails são diferentes')
        .required('O campo é obrigatório'),

      //Dados do Cartão de Crédito
      cardOwner: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
      cpfCardOwner: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
      cardDisplayName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
      cardNumber: Yup.string()
        .min(16, 'O campo precisa ter 16 caracteres')
        .max(16, 'O campo precisa ter 16 caracteres')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
      expiresMonth: Yup.string()
        .min(
          2,
          'O campo precisa ter 2 caracteres onde Janeiro = 01, Fevereiro = 02, etc'
        )
        .max(
          2,
          'O campo precisa ter 2 caracteres onde Janeiro = 01, Fevereiro = 02, etc'
        )
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
      expiresYear: Yup.string()
        .min(4, 'O campo precisa ter 4 caracteres')
        .max(4, 'O campo precisa ter 4 caracteres')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
      cardCode: Yup.string()
        .min(3, 'O campo precisa ter 3 caracteres')
        .max(3, 'O campo precisa ter 3 caracteres')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
      installments: Yup.number()
        .min(1, 'O nome precisa ter pelo menos 1 caracteres')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: values.installments,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            },
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.prices.current as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installment[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i + 1,
          amount: totalPrice / i,
          formattedAmount: parseToBrl(totalPrice / i)
        })
      }
      return installmentsArray
    }
    if (totalPrice > 0) {
      setInstallments(calculateInstallments())
    }
  }, [totalPrice])

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess && data ? (
        <Card title="Muito Obrigado!">
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              sunt eaque deleniti, non aut exercitationem consequatur, unde
              distinctio dignissimos porro nemo perferendis et repellendus
              ratione obcaecati, assumenda laudantium. Nisi, ut. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Dolorem quibusdam
              veniam neque omnis ea nobis explicabo eveniet consequatur animi
              quod tempora quaerat reprehenderit quae accusantium iure earum,
              deleniti quidem nemo?
            </p>
            <p className="margin-top">
              Número do pedido: <b>{data.orderId}</b>
            </p>
            <p className="margin-top">
              Forma de Pagamento:{' '}
              <b>{payWithCard ? 'Cartão de Crédito' : 'Boleto Bancário'}</b>.
            </p>
            <p className="margin-top">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              sunt eaque deleniti, non aut exercitationem consequatur, unde
              distinctio dignissimos porro nemo perferendis et repellendus
              ratione obcaecati, assumenda laudantium. Nisi, ut. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Dolorem quibusdam
              veniam neque omnis ea nobis explicabo eveniet consequatur animi
              quod tempora quaerat reprehenderit quae accusantium iure earum,
              deleniti quidem nemo?
            </p>
            <p className="margin-top">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              sunt eaque deleniti, non aut exercitationem consequatur, unde
              distinctio dignissimos porro nemo perferendis et repellendus
              ratione obcaecati, assumenda laudantium. Nisi, ut. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Dolorem quibusdam
              veniam neque omnis ea nobis explicabo eveniet consequatur animi
              quod tempora quaerat reprehenderit quae accusantium iure earum,
              deleniti quidem nemo?
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de Cobrança">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Nome Completo</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-Mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('email') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <InputMask
                    id="cpf"
                    type="text"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cpf') ? 'error' : ''}
                    mask="999.999.999-99"
                  />
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Dados de Entrega - Conteúdo Digital
              </h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">E-Mail</label>
                  <input
                    id="deliveryEmail"
                    type="email"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('deliveryEmail') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o E-Mail
                  </label>
                  <input
                    id="confirmDeliveryEmail"
                    type="email"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('confirmDeliveryEmail') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <S.TabButton
                isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
                type="button"
              >
                <img src={boleto} alt="Boleto" />
                Boleto Bancário
              </S.TabButton>
              <S.TabButton
                isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
                type="button"
              >
                <img src={cartao} alt="Cartão de Crédito" />
                Cartão de Crédito
              </S.TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          type="text"
                          id="cardOwner"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardOwner') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfCardOwner">
                          CPF do titular do cartão
                        </label>
                        <InputMask
                          type="text"
                          id="cpfCardOwner"
                          name="cpfCardOwner"
                          value={form.values.cpfCardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cpfCardOwner') ? 'error' : ''
                          }
                          mask="999.999.999-99"
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardDisplayName">Nome no cartão</label>
                        <input
                          type="text"
                          id="cardDisplayName"
                          name="cardDisplayName"
                          value={form.values.cardDisplayName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardDisplayName') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Numero no cartão</label>
                        <InputMask
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                          mask="9999 9999 9999 9999"
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresMonth">Mês do vencimento</label>
                        <InputMask
                          type="text"
                          id="expiresMonth"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <InputMask
                          type="text"
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                          mask="999"
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          id="installement"
                          name="installments"
                          value={form.values.installments}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('installments') ? 'error' : ''
                          }
                        >
                          {installments.map((installment) => (
                            <option
                              value={installment.quantity}
                              key={installment.quantity}
                            >
                              {installment.quantity}x de{' '}
                              {installment.formattedAmount}
                            </option>
                          ))}
                        </select>
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt est fugit enim corrupti voluptate odio sequi culpa
                    tempore nulla laborum, quae in perferendis ipsam nemo
                    dignissimos vitae magnam eaque dolores. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Voluptatibus
                    similique modi molestias assumenda eligendi ipsa ad sequi
                    maiores maxime, consequuntur quisquam omnis accusamus
                    perspiciatis numquam ea, libero quis quibusdam! Inventore.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            type="submit"
            title="Clique aqui para finalizar a compra"
            disabled={isLoading}
          >
            {isLoading ? 'Finalizando Compra...' : 'Finalizar Compra'}
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
