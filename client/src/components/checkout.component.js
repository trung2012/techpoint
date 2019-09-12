import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal, selectCartShipping } from '../redux/cart/cart.selectors';
import CheckoutItem from './checkout-item.component';
import CustomButton from './custom-button.component';
import StripeButton from './stripe-button.component';

import './checkout.styles.scss';

const CheckOut = ({ cartItems, cartTotal, cartShipping, history }) => {
  return (
    <div className='checkout-page'>
      <h1 className='checkout-title'>Shopping cart</h1>
      {
        cartTotal === 0 ?
          <>
            <h3 className='checkout-subtitle'>Your shopping cart is empty. Continue shopping!</h3>
            <CustomButton buttonType='go-to-home' text='Continue Shopping' onClick={() => history.push('/')} />
          </>
          :
          <div className='checkout-details'>

            <div className='checkout-main-section'>
              <div className='checkout-header'>
                <div className='header-section'>
                  <span>Product</span>
                </div>
                <div className='header-section'>
                  <span>Description</span>
                </div>
                <div className='header-section'>
                  <span>Quantity</span>
                </div>
                <div className='header-section'>
                  <span>Price</span>
                </div>
                <div className='header-section'>
                  <span>Remove</span>
                </div>
              </div>

              <div className='item-list'>
                {
                  cartItems.map(item => {
                    return <CheckoutItem key={item._id} item={item} />
                  })
                }
              </div>
            </div>

            <div className='checkout-totals'>
              <div className='checkout-subtotal'>
                Subtotal: ${cartTotal === 0 ? 0 : cartTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              <div className='checkout-subtotal'>
                Shipping: ${cartShipping}
              </div>
              <div className='checkout-total'>
                Total: ${(cartTotal + cartShipping).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              <div className='checkout-button'>
                <StripeButton price={(cartTotal + cartShipping)} />
              </div>
            </div>
            <div className='test-warning'>
              *Please use the following test credit card for payments*
              <br />
              4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
          </div>
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
  cartShipping: selectCartShipping
})

export default connect(mapStateToProps)(CheckOut);