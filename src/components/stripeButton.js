import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // price in cents
  const publishableKey = 'pk_test_NfZKonMxPTdVX8vxFNUcyRpf00uXFC0iiI';

  // We don't process any payment
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      panelLabel="Pay Now"
      name="Sarty Inc."
      billingAddress
      shippingAddress
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      currency="EUR"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

StripeCheckoutButton.propTypes = {
  price: PropTypes.number.isRequired,
};

export default StripeCheckoutButton;
