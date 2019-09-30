import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100 // Stripe wants the price in cents
  const publishableKey = 'pk_test_NfZKonMxPTdVX8vxFNUcyRpf00uXFC0iiI'

  // Successful message that gets triggered when the payment succeeds
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Sarty Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
