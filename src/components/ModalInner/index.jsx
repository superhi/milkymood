import React, {useState} from 'react'
import {Container, SuccessContainer, H3, H4} from './styles'
import {P} from '../../styles'
import Form from '../Form'
import {ReactComponent as Happy} from './happy_face.svg'

const Input = ({handleSuccess, cartTickets, setCartTickets}) => {
  return (
    <Container>
      <H3>Purchase tickets</H3>
      <P>Tickets for our first ever world tour are now on sale. Get 'em before they sell out!</P>
      <Form
        handleSuccess={handleSuccess}
        setCartTickets={setCartTickets}
        cartTickets={cartTickets}
      />
    </Container>
  )
}

const Success = ({cartTickets}) => (
  <SuccessContainer>
    <Happy />
    <H4>Congratulations!</H4>
    <P>
      You just added {cartTickets} ticket{cartTickets > 1 && 's'} to your cart.
    </P>
  </SuccessContainer>
)

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [cartTickets, setCartTickets] = useState(1)

  const handleSuccess = () => {
    setShowSuccess(true)
  }

  return showSuccess ? (
    <Success cartTickets={cartTickets} />
  ) : (
    <Input
      handleSuccess={handleSuccess}
      setCartTickets={setCartTickets}
      cartTickets={cartTickets}
    />
  )
}

export default ModalInner
