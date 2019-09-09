import React from 'react';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';
import CustomButton from './custom-button.component';

import './stripe-button.styles.scss'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_QanDgFI6H3tZ5GNjkqBois7i00izJwzf5n';

  const onToken = token => {
    axios({
      url: 'api/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then((response) => {
      alert('Payment Successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please make sure to use the provided test credit card information')
    })
  };

  return (
    <StripeCheckout classname='checkout-button'
      label='Pay Now'
      name='TechPoint Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}>
      <CustomButton buttonType='go-to-home' text='Check out' />
    </StripeCheckout>
  )
}

export default StripeButton;